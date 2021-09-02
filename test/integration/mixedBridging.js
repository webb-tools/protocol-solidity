const TruffleAssert = require('truffle-assertions');
const Ethers = require('ethers');
const helpers = require('../helpers');
const { toBN } = require('web3-utils')
const assert = require('assert');
const BridgeContract = artifacts.require('Bridge');
const Anchor = artifacts.require('./Anchor2.sol');
const Verifier = artifacts.require('./VerifierPoseidonBridge.sol');
const Hasher = artifacts.require('PoseidonT3');
const ERC20MintableContract = artifacts.require("ERC20PresetMinterPauser");
const AnchorHandlerContract = artifacts.require('AnchorHandler');
const ERCHandlerContract = artifacts.require('ERC20Handler')

const fs = require('fs')
const path = require('path');
const { NATIVE_AMOUNT } = process.env
let prefix = 'poseidon-test'
const snarkjs = require('snarkjs');
const BN = require('bn.js');
const F = require('circomlib').babyJub.F;
const Scalar = require('ffjavascript').Scalar;
const MerkleTree = require('../../lib/MerkleTree');


contract('E2E LinkableAnchors - Cross chain withdrawals', async accounts => {
  const relayerThreshold = 1;
  const originChainID = 1;
  const destChainID = 2;
  const relayer1Address = accounts[3];
  const operator = accounts[6];
  const initialTokenMintAmount = BigInt(1e25);
  const tokenDenomination = '1000000000000000000000'; 
  const expectedDepositNonce = 1;
  const merkleTreeHeight = 30;
  const sender = accounts[5];
  const fee = BigInt((new BN(`${NATIVE_AMOUNT}`).shrn(1)).toString()) || BigInt((new BN(`${1e17}`)).toString());
  const refund = BigInt((new BN('0')).toString());
  const recipient = helpers.getRandomRecipient();

  let originMerkleRoot;
  let originBlockHeight = 1;
  let originUpdateNonce;
  let hasher, verifier;
  let OriginERC20MintableInstance;
  let DestinationERC20MintableInstance;
  let originDeposit;
  let tree;
  let createWitness;
  let OriginBridgeInstance;
  let OriginChainAnchorInstance;
  let OriginAnchorHandlerInstance;
  let originDepositData;
  let originDepositDataHash;
  let destinationDepositData;
  let destinationDepositProposalDataHash;
  let fixedDenomResourceID;
  let nonDenomResourceID;
  let initialFixedDenomResourceIDs;
  let initialNonDenomResourceIDs;
  let originInitialContractAddresses;
  let DestBridgeInstance;
  let DestChainAnchorInstance
  let DestAnchorHandlerInstance;

  let destInitialContractAddresses;

  beforeEach(async () => {
    await Promise.all([
      // instantiate bridges on both sides
      BridgeContract.new(originChainID, [relayer1Address], relayerThreshold, 0, 100).then(instance => OriginBridgeInstance = instance),
      BridgeContract.new(destChainID, [relayer1Address], relayerThreshold, 0, 100).then(instance => DestBridgeInstance = instance),
      // create hasher, verifier, and tokens
      Hasher.new().then(instance => hasher = instance),
      Verifier.new().then(instance => verifier = instance),
      ERC20MintableContract.new("token", "TOK").then(instance => OriginERC20MintableInstance = instance),
      ERC20MintableContract.new("token", "TOK").then(instance => DestinationERC20MintableInstance = instance)
    ]);
    // initialize anchors on both chains
    OriginChainAnchorInstance = await Anchor.new(
      verifier.address,
      hasher.address,
      tokenDenomination,
      merkleTreeHeight,
      originChainID,
      OriginERC20MintableInstance.address,
      sender,
      sender,
      sender,
    {from: sender});
    DestChainAnchorInstance = await Anchor.new(
      verifier.address,
      hasher.address,
      tokenDenomination,
      merkleTreeHeight,
      destChainID,
      DestinationERC20MintableInstance.address,
      sender,
      sender,
      sender,
    {from: sender});
    // create resource ID using anchor address for private bridge use
    fixedDenomResourceID = helpers.createResourceID(OriginChainAnchorInstance.address, 0);
    initialFixedDenomResourceIDs = [fixedDenomResourceID];
    originInitialContractAddresses = [DestChainAnchorInstance.address];
    destInitialContractAddresses = [OriginChainAnchorInstance.address];
    // create resourceID using token address for public bridge use
    nonDenomResourceID = helpers.createResourceID(OriginERC20MintableInstance.address, 0);
    initialNonDenomResourceIDs = [fixedDenomResourceID];
    // initialize anchorHanders and ERCHandlers
    await Promise.all([
      AnchorHandlerContract.new(OriginBridgeInstance.address, initialFixedDenomResourceIDs, originInitialContractAddresses)
        .then(instance => OriginAnchorHandlerInstance = instance),
      AnchorHandlerContract.new(DestBridgeInstance.address, initialFixedDenomResourceIDs, destInitialContractAddresses)
        .then(instance => DestAnchorHandlerInstance = instance),
      ERCHandlerContract.new(OriginBridgeInstance.address, initialNonDenomResourceIDs, [OriginERC20MintableInstance.address], [OriginERC20MintableInstance.address])
        .then(instance => OriginERC20HandlerInstance = instance),
      ERCHandlerContract.new(DestBridgeInstance.address, initialNonDenomResourceIDs, [DestinationERC20MintableInstance.address], [DestinationERC20MintableInstance.address])
        .then(instance => DestinationERC20HandlerInstance = instance)
    ]);
    // grant minter role to dest anchor and origin handler
    MINTER_ROLE = ethers.utils.keccak256(ethers.utils.toUtf8Bytes('MINTER_ROLE'));
    await DestinationERC20MintableInstance.grantRole(MINTER_ROLE, DestChainAnchorInstance.address);
    await OriginERC20MintableInstance.grantRole(MINTER_ROLE, OriginERC20HandlerInstance.address);
    // set resources for bridge and grant ERCHandlers minter role
    await Promise.all([
      OriginBridgeInstance.adminSetResource(OriginAnchorHandlerInstance.address, fixedDenomResourceID, OriginChainAnchorInstance.address),
      DestBridgeInstance.adminSetResource(DestAnchorHandlerInstance.address, fixedDenomResourceID, DestChainAnchorInstance.address),
      OriginBridgeInstance.adminSetResource(OriginERC20HandlerInstance.address, nonDenomResourceID, OriginERC20MintableInstance.address),
      DestBridgeInstance.adminSetResource(DestinationERC20HandlerInstance.address, nonDenomResourceID, DestinationERC20MintableInstance.address)
    ]);
     // set bridge and handler permissions for dest anchor
    await Promise.all([
      DestChainAnchorInstance.setHandler(DestAnchorHandlerInstance.address, {from: sender}),
      DestChainAnchorInstance.setBridge(DestBridgeInstance.address, {from: sender})
    ]);

    createWitness = async (data) => {
      const wtns = {type: 'mem'};
      await snarkjs.wtns.calculate(data, path.join(
        'test',
        'fixtures',
        'poseidon_bridge_2.wasm'
      ), wtns);
      return wtns;
    }

    tree = new MerkleTree(merkleTreeHeight, null, prefix)
    zkey_final = fs.readFileSync('test/fixtures/circuit_final.zkey').buffer;
  });

  it('[sanity] bridges configured with threshold and relayers', async () => {
    assert.equal(await OriginBridgeInstance._chainID(), originChainID);
    assert.equal(await OriginBridgeInstance._relayerThreshold(), relayerThreshold)
    assert.equal((await OriginBridgeInstance._totalRelayers()).toString(), '1')
    assert.equal(await DestBridgeInstance._chainID(), destChainID)
    assert.equal(await DestBridgeInstance._relayerThreshold(), relayerThreshold)
    assert.equal((await DestBridgeInstance._totalRelayers()).toString(), '1')
  })

  it('withdrawals on both chains integration', async () => {
    /*
    *  sender deposits on origin chain
    */
    // minting Tokens
    await OriginERC20MintableInstance.mint(sender, initialTokenMintAmount);
    // increasing allowance of anchors
    await OriginERC20MintableInstance.approve(OriginChainAnchorInstance.address, initialTokenMintAmount, { from: sender }),
    // generate deposit commitment targeting withdrawal on destination chain
    originDeposit = helpers.generateDeposit(destChainID);
    // deposit on origin chain and define nonce
    let { logs } = await OriginChainAnchorInstance.deposit(helpers.toFixedHex(originDeposit.commitment), {from: sender});
    originUpdateNonce = logs[0].args.leafIndex;
    originMerkleRoot = await OriginChainAnchorInstance.getLastRoot();
    // create correct update proposal data for the deposit on origin chain
    originDepositData = helpers.createUpdateProposalData(originChainID, originBlockHeight, originMerkleRoot);
    originDepositDataHash = Ethers.utils.keccak256(DestAnchorHandlerInstance.address + originDepositData.substr(2));
    /*
    *  Relayers vote on dest chain
    */
    // deposit on origin chain leads to update proposal on dest chain
    // relayer1 creates the deposit proposal for the deposit
    await TruffleAssert.passes(DestBridgeInstance.voteProposal(
      originChainID,
      originUpdateNonce,
      fixedDenomResourceID,
      originDepositDataHash,
      { from: relayer1Address }
    ));
    // relayer1 will execute the deposit proposal
    await TruffleAssert.passes(DestBridgeInstance.executeProposal(
      originChainID,
      originUpdateNonce,
      originDepositData,
      fixedDenomResourceID,
      { from: relayer1Address }
    ));

    // check initial balances
    let balanceOperatorBefore = await DestinationERC20MintableInstance.balanceOf(operator);
    let balanceReceiverBefore = await DestinationERC20MintableInstance.balanceOf(helpers.toFixedHex(recipient, 20));
    /*
    *  sender generates proof
    */
    const destNeighborRoots = await DestChainAnchorInstance.getLatestNeighborRoots();
    await tree.insert(originDeposit.commitment);

    let { root, path_elements, path_index } = await tree.path(0);
    const destNativeRoot = await DestChainAnchorInstance.getLastRoot();
    let input = {
      // public
      nullifierHash: originDeposit.nullifierHash,
      recipient,
      relayer: operator,
      fee,
      refund,
      chainID: originDeposit.chainID,
      roots: [destNativeRoot, ...destNeighborRoots],
      // private
      nullifier: originDeposit.nullifier,
      secret: originDeposit.secret,
      pathElements: path_elements,
      pathIndices: path_index,
      diffs: [destNativeRoot, ...destNeighborRoots].map(r => {
        return F.sub(
          Scalar.fromString(`${r}`),
          Scalar.fromString(`${destNeighborRoots[0]}`),
        ).toString();
      }),
    };

    let wtns = await createWitness(input);

    let res = await snarkjs.groth16.prove('test/fixtures/circuit_final.zkey', wtns);
    proof = res.proof;
    publicSignals = res.publicSignals;
    let vKey = await snarkjs.zKey.exportVerificationKey('test/fixtures/circuit_final.zkey');
    res = await snarkjs.groth16.verify(vKey, publicSignals, proof);
    assert.strictEqual(res, true);
    let args = [
      helpers.createRootsBytes(input.roots),
      helpers.toFixedHex(input.nullifierHash),
      helpers.toFixedHex(input.recipient, 20),
      helpers.toFixedHex(input.relayer, 20),
      helpers.toFixedHex(input.fee),
      helpers.toFixedHex(input.refund),
    ];

    let proofEncoded = await helpers.generateWithdrawProofCallData(proof, publicSignals);
    /*
    *  sender withdraws on dest chain
    */
    await DestinationERC20MintableInstance.mint(DestChainAnchorInstance.address, initialTokenMintAmount);
    let balanceDestAnchorAfterDeposit = await DestinationERC20MintableInstance.balanceOf(DestChainAnchorInstance.address);
    ({ logs } = await DestChainAnchorInstance.withdraw
      (`0x${proofEncoded}`, ...args, { from: input.relayer, gasPrice: '0' }));
    
    let balanceDestAnchorAfter = await DestinationERC20MintableInstance.balanceOf(DestChainAnchorInstance.address);
    let balanceOperatorAfter = await DestinationERC20MintableInstance.balanceOf(input.relayer);
    let balanceReceiverAfter = await DestinationERC20MintableInstance.balanceOf(helpers.toFixedHex(recipient, 20));
    const feeBN = toBN(fee.toString())
    assert.strictEqual(balanceDestAnchorAfter.toString(), balanceDestAnchorAfterDeposit.sub(toBN(tokenDenomination)).toString());
    assert.strictEqual(balanceOperatorAfter.toString(), balanceOperatorBefore.add(feeBN).toString());
    assert.strictEqual(balanceReceiverAfter.toString(), balanceReceiverBefore.add(toBN(tokenDenomination)).sub(feeBN).toString());

    isSpent = await DestChainAnchorInstance.isSpent(helpers.toFixedHex(input.nullifierHash));
    assert(isSpent);
    /*
    *  sender deposit onto destination chain bridge without fixed denomination
    */
    // minting Tokens for deposit
    await DestinationERC20MintableInstance.mint(sender, tokenDenomination);
    // approval
    await DestinationERC20MintableInstance.approve(DestinationERC20HandlerInstance.address, initialTokenMintAmount, { from: sender });
    // generate deposit commitment
    const depositAmount = 150000;
    destinationDepositData = helpers.createERCDepositData(depositAmount, 20, helpers.toFixedHex(recipient, 20));
    destinationDepositProposalDataHash = Ethers.utils.keccak256(OriginERC20HandlerInstance.address + destinationDepositData.substr(2));
    
    // sender makes initial deposit of tokenDenomination * 2
    TruffleAssert.passes(await DestBridgeInstance.deposit(
      originChainID,
      nonDenomResourceID,
      destinationDepositData,
      { from: sender }
    ));

    // destinationRelayer1 creates the deposit proposal
    TruffleAssert.passes(await OriginBridgeInstance.voteProposal(
      destChainID,
      expectedDepositNonce,
      nonDenomResourceID,
      destinationDepositProposalDataHash,
      { from: relayer1Address }
    ));


    // destinationRelayer1 will execute the deposit proposal
    TruffleAssert.passes(await OriginBridgeInstance.executeProposal(
      destChainID,
      expectedDepositNonce,
      destinationDepositData,
      nonDenomResourceID,
      { from: relayer1Address }
    ));

    // Assert ERC20 balance was transferred from depositerAddress
    let depositerBalance = await DestinationERC20MintableInstance.balanceOf(sender);
    assert.strictEqual(toBN(depositerBalance).toString(), toBN(tokenDenomination).sub(toBN(depositAmount)).toString(), "depositAmount wasn't transferred from depositerAddress");

    // Assert ERC20 balance was transferred to recipientAddress
    let recipientBalance = await OriginERC20MintableInstance.balanceOf(helpers.toFixedHex(recipient, 20));
    assert.strictEqual(recipientBalance.toNumber(), depositAmount, "depositAmount wasn't transferred to recipientAddress");
    /*
    * sender attempts to send another deposit amount to recipientAddress
    */
    // generate new deposit data
    destinationDepositData = helpers.createERCDepositData(depositAmount * 2, 20, helpers.toFixedHex(recipient, 20));
    destinationDepositProposalDataHash = Ethers.utils.keccak256(OriginERC20HandlerInstance.address + destinationDepositData.substr(2));
    //revoke Handler Minting rights such that the bridge should not work
    await OriginERC20MintableInstance.revokeRole(MINTER_ROLE, OriginERC20HandlerInstance.address);
    // sender makes initial deposit of tokenDenomination * 2
    TruffleAssert.passes(await DestBridgeInstance.deposit(
      originChainID,
      nonDenomResourceID,
      destinationDepositData,
      { from: sender }
    ));

    // destinationRelayer1 creates the deposit proposal
    TruffleAssert.passes(await OriginBridgeInstance.voteProposal(
      destChainID,
      expectedDepositNonce,
      nonDenomResourceID,
      destinationDepositProposalDataHash,
      { from: relayer1Address }
    ));

    // destinationRelayer1 should revert as handler does not have minter role
    await TruffleAssert.reverts(OriginBridgeInstance.executeProposal(
      destChainID,
      expectedDepositNonce,
      destinationDepositData,
      nonDenomResourceID,
      { from: relayer1Address }
    ));
    })
})
