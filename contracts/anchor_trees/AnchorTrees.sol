// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;

import "../interfaces/IAnchorTreesV1.sol";
import "../interfaces/IBatchTreeUpdateVerifier.sol";
import "@openzeppelin/contracts/proxy/utils/Initializable.sol";

/// @dev This contract holds a merkle tree of all tornado cash deposit and withdrawal events
contract AnchorTrees is Initializable {
  address public immutable governance;
  //Roots Stuff
  mapping(uint256 => bytes32) public roots;
  uint32 public constant ROOT_HISTORY_SIZE = 30;
  uint32 public currentRootIndex = 0;
  // bytes32 public depositRoot;
  // bytes32 public previousDepositRoot;
  // bytes32 public withdrawalRoot;
  // bytes32 public previousWithdrawalRoot;
  //End Roots Stuff
  address public anchorProxy;
  IBatchTreeUpdateVerifier public treeUpdateVerifier;
  IAnchorTreesV1 public immutable anchorTreesV1;

  uint256 public constant CHUNK_TREE_HEIGHT = 8;
  uint256 public constant CHUNK_SIZE = 2**CHUNK_TREE_HEIGHT;
  uint256 public constant ITEM_SIZE = 32 + 20 + 4;
  uint256 public constant BYTES_SIZE = 32 + 32 + 4 + CHUNK_SIZE * ITEM_SIZE;
  uint256 public constant SNARK_FIELD = 21888242871839275222246405745257275088548364400416034343698204186575808495617;

  mapping(uint256 => bytes32) public deposits;
  uint256 public depositsLength;
  uint256 public lastProcessedDepositLeaf;
  uint256 public immutable depositsV1Length;

  mapping(uint256 => bytes32) public withdrawals;
  uint256 public withdrawalsLength;
  uint256 public lastProcessedWithdrawalLeaf;
  uint256 public immutable withdrawalsV1Length;

  //Start Edge Information
  uint8 public immutable maxEdges;

  struct Edge {
    uint256 chainID;
    bytes32 depositRoot;
    bytes32 withdrawalRoot;
    uint256 latestLeafIndex;
  }

  // maps sourceChainID to the index in the edge list
  mapping(uint256 => uint256) public edgeIndex;
  mapping(uint256 => bool) public edgeExistsForChain;
  Edge[] public edgeList;

  // map to store chainID => (rootIndex => [depositRoot, withdrawalRoot]) to track neighbor histories
  mapping(uint256 => mapping(uint32 => bytes32[2])) public neighborRoots;
  // map to store the current historical [depositRoot, withdrawalRoot] index for a chainID
  mapping(uint256 => uint32[2]) public currentNeighborRootIndex;
  //End Edge Information

  event DepositData(address instance, bytes32 indexed hash, uint256 block, uint256 index);
  event WithdrawalData(address instance, bytes32 indexed hash, uint256 block, uint256 index);
  event VerifierUpdated(address newVerifier);
  event ProxyUpdated(address newProxy);
  event EdgeAddition(uint256 chainID, uint256 latestLeafIndex, bytes32 depositRoot, bytes32 withdrawalRoot);
  event EdgeUpdate(uint256 chainID, uint256 latestLeafIndex, bytes32 depositRoot, bytes32 withdrawalRoot);

  struct TreeLeaf {
    bytes32 hash;
    address instance;
    uint32 block;
  }

  modifier onlyAnchorProxy {
    require(msg.sender == anchorProxy, "Not authorized");
    _;
  }

  modifier onlyGovernance() {
    require(msg.sender == governance, "Only governance can perform this action");
    _;
  }

  struct SearchParams {
    uint256 depositsFrom;
    uint256 depositsStep;
    uint256 withdrawalsFrom;
    uint256 withdrawalsStep;
  }

  constructor(
    address _governance,
    IAnchorTreesV1 _anchorTreesV1,
    SearchParams memory _searchParams,
    uint8 _maxEdges
  ) public {
    governance = _governance;
    anchorTreesV1 = _anchorTreesV1;
    maxEdges = _maxEdges;

    depositsV1Length = findArrayLength(
      _anchorTreesV1,
      "deposits(uint256)",
      _searchParams.depositsFrom,
      _searchParams.depositsStep
    );

    withdrawalsV1Length = findArrayLength(
      _anchorTreesV1,
      "withdrawals(uint256)",
      _searchParams.withdrawalsFrom,
      _searchParams.withdrawalsStep
    );
  }

  function initialize(address _anchorProxy, IBatchTreeUpdateVerifier _treeUpdateVerifier) public initializer onlyGovernance {
    anchorProxy = _anchorProxy;
    treeUpdateVerifier = _treeUpdateVerifier;

    depositRoot = anchorTreesV1.depositRoot();
    uint256 lastDepositLeaf = anchorTreesV1.lastProcessedDepositLeaf();
    require(lastDepositLeaf % CHUNK_SIZE == 0, "Incorrect AnchorTrees state");
    lastProcessedDepositLeaf = lastDepositLeaf;
    depositsLength = depositsV1Length;

    withdrawalRoot = anchorTreesV1.withdrawalRoot();
    uint256 lastWithdrawalLeaf = anchorTreesV1.lastProcessedWithdrawalLeaf();
    require(lastWithdrawalLeaf % CHUNK_SIZE == 0, "Incorrect AnchorTrees state");
    lastProcessedWithdrawalLeaf = lastWithdrawalLeaf;
    withdrawalsLength = withdrawalsV1Length;
  }

  /// @dev Queue a new deposit data to be inserted into a merkle tree
  function registerDeposit(address _instance, bytes32 _commitment) public onlyAnchorProxy {
    uint256 _depositsLength = depositsLength;
    deposits[_depositsLength] = keccak256(abi.encode(_instance, _commitment, blockNumber()));
    emit DepositData(_instance, _commitment, blockNumber(), _depositsLength);
    depositsLength = _depositsLength + 1;
  }

  /// @dev Queue a new withdrawal data to be inserted into a merkle tree
  function registerWithdrawal(address _instance, bytes32 _nullifierHash) public onlyAnchorProxy {
    uint256 _withdrawalsLength = withdrawalsLength;
    withdrawals[_withdrawalsLength] = keccak256(abi.encode(_instance, _nullifierHash, blockNumber()));
    emit WithdrawalData(_instance, _nullifierHash, blockNumber(), _withdrawalsLength);
    withdrawalsLength = _withdrawalsLength + 1;
  }

  /// @dev Insert a full batch of queued deposits into a merkle tree
  /// @param _proof A snark proof that elements were inserted correctly
  /// @param _argsHash A hash of snark inputs
  /// @param _argsHash Current merkle tree root
  /// @param _newRoot Updated merkle tree root
  /// @param _pathIndices Merkle path to inserted batch
  /// @param _events A batch of inserted events (leaves)
  function updateDepositTree(
    bytes calldata _proof,
    bytes32 _argsHash,
    bytes32 _currentRoot,
    bytes32 _newRoot,
    uint32 _pathIndices,
    TreeLeaf[CHUNK_SIZE] calldata _events
  ) public {
    uint256 offset = lastProcessedDepositLeaf;
    require(_currentRoot == depositRoot, "Proposed deposit root is invalid");
    require(_pathIndices == offset >> CHUNK_TREE_HEIGHT, "Incorrect deposit insert index");

    bytes memory data = new bytes(BYTES_SIZE);
    assembly {
      mstore(add(data, 0x44), _pathIndices)
      mstore(add(data, 0x40), _newRoot)
      mstore(add(data, 0x20), _currentRoot)
    }
    for (uint256 i = 0; i < CHUNK_SIZE; i++) {
      (bytes32 hash, address instance, uint32 blockNumber) = (_events[i].hash, _events[i].instance, _events[i].block);
      bytes32 leafHash = keccak256(abi.encode(instance, hash, blockNumber));
      bytes32 deposit = offset + i >= depositsV1Length ? deposits[offset + i] : anchorTreesV1.deposits(offset + i);
      require(leafHash == deposit, "Incorrect deposit");
      assembly {
        let itemOffset := add(data, mul(ITEM_SIZE, i))
        mstore(add(itemOffset, 0x7c), blockNumber)
        mstore(add(itemOffset, 0x78), instance)
        mstore(add(itemOffset, 0x64), hash)
      }
      if (offset + i >= depositsV1Length) {
        delete deposits[offset + i];
      } else {
        emit DepositData(instance, hash, blockNumber, offset + i);
      }
    }

    uint256 argsHash = uint256(sha256(data)) % SNARK_FIELD;
    require(argsHash == uint256(_argsHash), "Invalid args hash");
    require(treeUpdateVerifier.verifyProof(_proof, [argsHash]), "Invalid deposit tree update proof");

    previousDepositRoot = _currentRoot;
    depositRoot = _newRoot;
    lastProcessedDepositLeaf = offset + CHUNK_SIZE;
  }

  /// @dev Insert a full batch of queued withdrawals into a merkle tree
  /// @param _proof A snark proof that elements were inserted correctly
  /// @param _argsHash A hash of snark inputs
  /// @param _argsHash Current merkle tree root
  /// @param _newRoot Updated merkle tree root
  /// @param _pathIndices Merkle path to inserted batch
  /// @param _events A batch of inserted events (leaves)
  function updateWithdrawalTree(
    bytes calldata _proof,
    bytes32 _argsHash,
    bytes32 _currentRoot,
    bytes32 _newRoot,
    uint32 _pathIndices,
    TreeLeaf[CHUNK_SIZE] calldata _events
  ) public {
    uint256 offset = lastProcessedWithdrawalLeaf;
    require(_currentRoot == withdrawalRoot, "Proposed withdrawal root is invalid");
    require(_pathIndices == offset >> CHUNK_TREE_HEIGHT, "Incorrect withdrawal insert index");

    bytes memory data = new bytes(BYTES_SIZE);
    assembly {
      mstore(add(data, 0x44), _pathIndices)
      mstore(add(data, 0x40), _newRoot)
      mstore(add(data, 0x20), _currentRoot)
    }
    for (uint256 i = 0; i < CHUNK_SIZE; i++) {
      (bytes32 hash, address instance, uint32 blockNumber) = (_events[i].hash, _events[i].instance, _events[i].block);
      bytes32 leafHash = keccak256(abi.encode(instance, hash, blockNumber));
      bytes32 withdrawal = offset + i >= withdrawalsV1Length ? withdrawals[offset + i] : anchorTreesV1.withdrawals(offset + i);
      require(leafHash == withdrawal, "Incorrect withdrawal");
      assembly {
        let itemOffset := add(data, mul(ITEM_SIZE, i))
        mstore(add(itemOffset, 0x7c), blockNumber)
        mstore(add(itemOffset, 0x78), instance)
        mstore(add(itemOffset, 0x64), hash)
      }
      if (offset + i >= withdrawalsV1Length) {
        delete withdrawals[offset + i];
      } else {
        emit WithdrawalData(instance, hash, blockNumber, offset + i);
      }
    }

    uint256 argsHash = uint256(sha256(data)) % SNARK_FIELD;
    require(argsHash == uint256(_argsHash), "Invalid args hash");
    require(treeUpdateVerifier.verifyProof(_proof, [argsHash]), "Invalid withdrawal tree update proof");

    previousWithdrawalRoot = _currentRoot;
    withdrawalRoot = _newRoot;
    lastProcessedWithdrawalLeaf = offset + CHUNK_SIZE;
  }

    /**
    @dev Whether the root is present in the root history
  */
  function isKnownRoot(bytes32 _root) public view returns (bool) {
    if (_root == 0) {
      return false;
    }
    uint32 _currentRootIndex = currentRootIndex;
    uint32 i = _currentRootIndex;
    do {
      if (_root == roots[i]) {
        return true;
      }
      if (i == 0) {
        i = ROOT_HISTORY_SIZE;
      }
      i--;
    } while (i != _currentRootIndex);
    return false;
  }

    /** @dev */
  function getLatestNeighborRoots() public view returns (bytes32[] memory roots) {
    roots = new bytes32[](maxEdges);
    for (uint256 i = 0; i < maxEdges; i++) {
      if (edgeList.length >= i + 1) {
        roots[i] = edgeList[i].root;
      } else {
        // merkle tree height for zeros
        roots[i] = 0; //was previously zeros(levels);
      }
    }
  }

  /** @dev */
  function isKnownNeighborDepositRoot(uint256 neighborChainID, bytes32 _depositRoot) public view returns (bool) {
    if (_depositRoot == 0) {
      return false;
    }
    uint32 _currentRootIndex = currentNeighborRootIndex[neighborChainID][0];
    uint32 i = _currentRootIndex;
    do {
      if (_depositRoot == neighborRoots[neighborChainID][i][0]) {
        return true;
      }
      if (i == 0) {
        i = ROOT_HISTORY_SIZE;
      }
      i--;
    } while (i != _currentRootIndex);
    return false;
  }

    /** @dev */
  function isKnownNeighborWithdrawalRoot(uint256 neighborChainID, bytes32 _withdrawalRoot) public view returns (bool) {
    if (_withdrawalRoot == 0) {
      return false;
    }
    uint32 _currentRootIndex = currentNeighborRootIndex[neighborChainID][1];
    uint32 i = _currentRootIndex;
    do {
      if (_withdrawalRoot == neighborRoots[neighborChainID][i][1]) {
        return true;
      }
      if (i == 0) {
        i = ROOT_HISTORY_SIZE;
      }
      i--;
    } while (i != _currentRootIndex);
    return false;
  }

  function validateRoots(bytes32 _depositRoot, bytes32 _withdrawalRoot) public view {
    require(_depositRoot == depositRoot || _depositRoot == previousDepositRoot, "Incorrect deposit tree root");
    require(_withdrawalRoot == withdrawalRoot || _withdrawalRoot == previousWithdrawalRoot, "Incorrect withdrawal tree root");
  }

  /// @dev There is no array length getter for deposit and withdrawal arrays
  /// in the previous contract, so we have to find them length manually.
  /// Used only during deployment
  function findArrayLength(
    IAnchorTreesV1 _anchorTreesV1,
    string memory _type,
    uint256 _from, // most likely array length after the proposal has passed
    uint256 _step // optimal step size to find first match, approximately equals dispersion
  ) internal view virtual returns (uint256) {
    // Find the segment with correct array length
    bool direction = elementExists(_anchorTreesV1, _type, _from);
    do {
      _from = direction ? _from + _step : _from - _step;
    } while (direction == elementExists(_anchorTreesV1, _type, _from));
    uint256 high = direction ? _from : _from + _step;
    uint256 low = direction ? _from - _step : _from;
    uint256 mid = (high + low) / 2;

    // Perform a binary search in this segment
    while (low < mid) {
      if (elementExists(_anchorTreesV1, _type, mid)) {
        low = mid;
      } else {
        high = mid;
      }
      mid = (low + high) / 2;
    }
    return mid + 1;
  }

  function elementExists(
    IAnchorTreesV1 _anchorTreesV1,
    string memory _type,
    uint256 index
  ) public view returns (bool success) {
    // Try to get the element. If it succeeds the array length is higher, it it reverts the length is equal or lower
    (success, ) = address(_anchorTreesV1).staticcall{ gas: 2500 }(abi.encodeWithSignature(_type, index));
  }

  function setAnchorProxyContract(address _anchorProxy) external onlyGovernance {
    anchorProxy = _anchorProxy;
    emit ProxyUpdated(_anchorProxy);
  }

  function setVerifierContract(IBatchTreeUpdateVerifier _treeUpdateVerifier) external onlyGovernance {
    treeUpdateVerifier = _treeUpdateVerifier;
    emit VerifierUpdated(address(_treeUpdateVerifier));
  }

  function blockNumber() public view virtual returns (uint256) {
    return block.number;
  }
}