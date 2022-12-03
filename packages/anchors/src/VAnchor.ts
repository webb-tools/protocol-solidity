import { BigNumber, BigNumberish, ContractTransaction, ethers } from 'ethers';
import {
  VAnchor as VAnchorContract,
  VAnchor__factory,
  ChainalysisVAnchor as ChainalysisVAnchorContract,
  VAnchorEncodeInputs__factory,
  TokenWrapper__factory,
} from '@webb-tools/contracts';
import {
  toHex,
  Keypair,
  toFixedHex,
  Utxo,
  MerkleTree,
  median,
  mean,
  max,
  min,
  randomBN,
  CircomProvingManager,
  ProvingManagerSetupInput,
  MerkleProof,
  UtxoGenInput,
  CircomUtxo,
  FIELD_SIZE,
  LeafIdentifier,
} from '@webb-tools/sdk-core';
import {
  IAnchor,
  IVariableAnchorExtData,
  IVariableAnchorPublicInputs,
} from '@webb-tools/interfaces';
import { hexToU8a, u8aToHex, getChainIdType, ZkComponents, ZERO_BYTES32 } from '@webb-tools/utils';
import { VAnchorBase } from './VAnchorBase';

const zeroAddress = '0x0000000000000000000000000000000000000000';
function checkNativeAddress(tokenAddress: string): boolean {
  if (tokenAddress === zeroAddress || tokenAddress === '0') {
    return true;
  }
  return false;
}

export var gasBenchmark = [];
export var proofTimeBenchmark = [];
// This convenience wrapper class is used in tests -
// It represents a deployed contract throughout its life (e.g. maintains merkle tree state)
// Functionality relevant to anchors in general (proving, verifying) is implemented in static methods
// Functionality relevant to a particular anchor deployment (deposit, withdraw) is implemented in instance methods
export class VAnchor extends VAnchorBase implements IAnchor {
  signer: ethers.Signer;
  contract: VAnchorContract | ChainalysisVAnchorContract;
  tree: MerkleTree;
  // hex string of the connected root
  maxEdges: number;
  latestSyncedBlock: number;
  smallCircuitZkComponents: ZkComponents;
  largeCircuitZkComponents: ZkComponents;

  // The depositHistory stores leafIndex => information to create proposals (new root)
  depositHistory: Record<number, string>;
  token?: string;
  denomination?: string;
  provingManager: CircomProvingManager;

  constructor(
    contract: VAnchorContract | ChainalysisVAnchorContract,
    signer: ethers.Signer,
    treeHeight: number,
    maxEdges: number,
    smallCircuitZkComponents: ZkComponents,
    largeCircuitZkComponents: ZkComponents
  ) {
    super();
    this.signer = signer;
    this.contract = contract;
    this.tree = new MerkleTree(treeHeight);
    this.latestSyncedBlock = 0;
    this.maxEdges = maxEdges;
    this.depositHistory = {};
    this.smallCircuitZkComponents = smallCircuitZkComponents;
    this.largeCircuitZkComponents = largeCircuitZkComponents;
  }

  getAddress(): string {
    return this.contract.address;
  }

  public static async createVAnchor(
    verifier: string,
    levels: BigNumberish,
    hasher: string,
    handler: string,
    token: string,
    maxEdges: number,
    smallCircuitZkComponents: ZkComponents,
    largeCircuitZkComponents: ZkComponents,
    signer: ethers.Signer
  ) {
    const encodeLibraryFactory = new VAnchorEncodeInputs__factory(signer);
    const encodeLibrary = await encodeLibraryFactory.deploy();
    await encodeLibrary.deployed();
    const factory = new VAnchor__factory(
      { ['contracts/libs/VAnchorEncodeInputs.sol:VAnchorEncodeInputs']: encodeLibrary.address },
      signer
    );
    const vAnchor = await factory.deploy(verifier, levels, hasher, handler, token, maxEdges, {});
    await vAnchor.deployed();
    const createdVAnchor = new VAnchor(
      vAnchor,
      signer,
      BigNumber.from(levels).toNumber(),
      maxEdges,
      smallCircuitZkComponents,
      largeCircuitZkComponents
    );
    createdVAnchor.latestSyncedBlock = vAnchor.deployTransaction.blockNumber!;
    createdVAnchor.token = token;
    return createdVAnchor;
  }

  public static async connect(
    // connect via factory method
    // build up tree by querying provider for logs
    address: string,
    smallCircuitZkComponents: ZkComponents,
    largeCircuitZkComponents: ZkComponents,
    signer: ethers.Signer
  ) {
    const anchor = VAnchor__factory.connect(address, signer);
    const maxEdges = await anchor.maxEdges();
    const treeHeight = await anchor.levels();
    const createdAnchor = new VAnchor(
      anchor,
      signer,
      treeHeight,
      maxEdges,
      smallCircuitZkComponents,
      largeCircuitZkComponents
    );
    createdAnchor.token = await anchor.token();
    return createdAnchor;
  }

  public static async generateUTXO(input: UtxoGenInput): Promise<Utxo> {
    return CircomUtxo.generateUtxo(input);
  }


  public static convertToPublicInputsStruct(args: any[]): IVariableAnchorPublicInputs {
    return {
      proof: args[0],
      roots: args[1],
      extensionRoots: '0x00',
      inputNullifiers: args[2],
      outputCommitments: args[3],
      publicAmount: args[4],
      extDataHash: args[5],
    };
  }

  public static convertToExtDataStruct(args: any[]): IVariableAnchorExtData {
    return {
      recipient: args[0],
      extAmount: args[1],
      relayer: args[2],
      fee: args[3],
      refund: args[4],
      token: args[5],
      encryptedOutput1: args[6],
      encryptedOutput2: args[7],
    };
  }

  // Sync the local tree with the tree on chain.
  // Start syncing from the given block number, otherwise zero.
  public async update(blockNumber?: number) {
    // const filter = this.contract.filters.Deposit();
    // const currentBlockNumber = await this.signer.provider!.getBlockNumber();
    // const events = await this.contract.queryFilter(filter, blockNumber || 0);
    // const commitments = events.map((event) => event.args.commitment);
    // this.tree.batch_insert(commitments);
    // this.latestSyncedBlock = currentBlockNumber;
  }

  public async createResourceId(): Promise<string> {
    return toHex(
      this.contract.address + toHex(getChainIdType(await this.signer.getChainId()), 6).substr(2),
      32
    );
  }

  public async setVerifier(verifierAddress: string) {
    const tx = await this.contract.setVerifier(
      verifierAddress,
      BigNumber.from(await this.contract.getProposalNonce()).add(1)
    );
    await tx.wait();
  }

  public async setHandler(handlerAddress: string) {
    const tx = await this.contract.setHandler(
      handlerAddress,
      BigNumber.from(await this.contract.getProposalNonce()).add(1)
    );
    await tx.wait();
  }

  public async setSigner(newSigner: ethers.Signer) {
    const currentChainId = await this.signer.getChainId();
    const newChainId = await newSigner.getChainId();

    if (currentChainId === newChainId) {
      this.signer = newSigner;
      this.contract = this.contract.connect(newSigner);
      return true;
    }
    return false;
  }

  // Proposal data is used to update linkedAnchors via bridge proposals
  // on other chains with this anchor's state
  public async getProposalData(resourceID: string, leafIndex?: number): Promise<string> {
    // If no leaf index passed in, set it to the most recent one.
    if (!leafIndex) {
      leafIndex = this.tree.number_of_elements() - 1;
    }

    const chainID = getChainIdType(await this.signer.getChainId());
    const merkleRoot = this.depositHistory[leafIndex];
    const functionSig = ethers.utils
      .keccak256(ethers.utils.toUtf8Bytes('updateEdge(bytes32,uint32,bytes32)'))
      .slice(0, 10)
      .padEnd(10, '0');

    const srcContract = this.contract.address;
    const srcResourceId =
      '0x' +
      toHex(0, 6).substring(2) +
      toHex(srcContract, 20).substr(2) +
      toHex(chainID, 6).substr(2);
    return (
      '0x' +
      toHex(resourceID, 32).substr(2) +
      functionSig.slice(2) +
      toHex(leafIndex, 4).substr(2) +
      toHex(merkleRoot, 32).substr(2) +
      toHex(srcResourceId, 32).substr(2)
    );
  }

  public async getHandler(): Promise<string> {
    return this.contract.handler();
  }

  public async getHandlerProposalData(newHandler: string): Promise<string> {
    const resourceID = await this.createResourceId();
    const functionSig = ethers.utils
      .keccak256(ethers.utils.toUtf8Bytes('setHandler(address,uint32)'))
      .slice(0, 10)
      .padEnd(10, '0');
    const nonce = Number(await this.contract.getProposalNonce()) + 1;

    return (
      '0x' +
      toHex(resourceID, 32).substr(2) +
      functionSig.slice(2) +
      toHex(nonce, 4).substr(2) +
      toHex(newHandler, 20).substr(2)
    );
  }

  public async getMinWithdrawalLimitProposalData(
    _minimalWithdrawalAmount: string
  ): Promise<string> {
    const resourceID = await this.createResourceId();
    const functionSig = ethers.utils
      .keccak256(ethers.utils.toUtf8Bytes('configureMinimalWithdrawalLimit(uint256,uint32)'))
      .slice(0, 10)
      .padEnd(10, '0');
    const nonce = Number(await this.contract.getProposalNonce()) + 1;
    return (
      '0x' +
      toHex(resourceID, 32).substr(2) +
      functionSig.slice(2) +
      toHex(nonce, 4).substr(2) +
      toFixedHex(_minimalWithdrawalAmount).substr(2)
    );
  }

  public async getMaxDepositLimitProposalData(_maximumDepositAmount: string): Promise<string> {
    const resourceID = await this.createResourceId();
    const functionSig = ethers.utils
      .keccak256(ethers.utils.toUtf8Bytes('configureMaximumDepositLimit(uint256,uint32)'))
      .slice(0, 10)
      .padEnd(10, '0');
    const nonce = Number(await this.contract.getProposalNonce()) + 1;
    return (
      '0x' +
      toHex(resourceID, 32).substr(2) +
      functionSig.slice(2) +
      toHex(nonce, 4).substr(2) +
      toFixedHex(_maximumDepositAmount).substr(2)
    );
  }

  public async populateRootsForProof(): Promise<string[]> {
    const neighborEdges = await this.contract.getLatestNeighborEdges();
    const neighborRootInfos = neighborEdges.map((rootData) => {
      return rootData.root;
    });
    let thisRoot = await this.contract.getLastRoot();
    return [thisRoot, ...neighborRootInfos];
  }

  public async getClassAndContractRoots() {
    return [this.tree.root(), await this.contract.getLastRoot()];
  }

  /**
   *
   * @param input A UTXO object that is inside the tree
   * @returns
   */
  public getMerkleProof(input: Utxo): MerkleProof {
    let inputMerklePathIndices: number[];
    let inputMerklePathElements: BigNumber[];

    if (Number(input.amount) > 0) {
      if (input.index < 0) {
        throw new Error(`Input commitment ${u8aToHex(input.commitment)} was not found`);
      }
      const path = this.tree.path(input.index);
      inputMerklePathIndices = path.pathIndices;
      inputMerklePathElements = path.pathElements;
    } else {
      inputMerklePathIndices = new Array(this.tree.levels).fill(0);
      inputMerklePathElements = new Array(this.tree.levels).fill(0);
    }

    return {
      element: BigNumber.from(u8aToHex(input.commitment)),
      pathElements: inputMerklePathElements,
      pathIndices: inputMerklePathIndices,
      merkleRoot: this.tree.root(),
    };
  }

  public generatePublicInputs(
    proof: any,
    roots: string[],
    inputs: Utxo[],
    outputs: Utxo[],
    publicAmount: BigNumberish,
    extDataHash: string
  ): IVariableAnchorPublicInputs {
    // public inputs to the contract
    const args: IVariableAnchorPublicInputs = {
      proof: `0x${proof}`,
      roots: `0x${roots.map((x) => toFixedHex(x).slice(2)).join('')}`,
      extensionRoots: '0x00',
      inputNullifiers: inputs.map((x) => toFixedHex('0x' + x.nullifier)),
      outputCommitments: [
        toFixedHex(u8aToHex(outputs[0].commitment)),
        toFixedHex(u8aToHex(outputs[1].commitment)),
      ],
      publicAmount: toFixedHex(publicAmount),
      extDataHash: toFixedHex(extDataHash),
    };

    return args;
  }

  /**
   * Given a list of leaves and a latest synced block, update internal tree state
   * The function will create a new tree, and check on chain root before updating its member variable
   * If the passed leaves match on chain data,
   *   update this instance and return true
   * else
   *   return false
   */
  public async setWithLeaves(leaves: string[], syncedBlock?: number): Promise<Boolean> {
    let newTree = new MerkleTree(this.tree.levels, leaves);
    let root = toFixedHex(newTree.root());
    let validTree = await this.contract.isKnownRoot(root);

    if (validTree) {
      let index = 0;
      for (const leaf of newTree.elements()) {
        this.depositHistory[index] = toFixedHex(this.tree.root());
        index++;
      }
      if (!syncedBlock) {
        syncedBlock = await this.signer.provider.getBlockNumber();
      }
      this.tree = newTree;
      this.latestSyncedBlock = syncedBlock;
      return true;
    } else {
      return false;
    }
  }

  public async getGasBenchmark() {
    const gasValues = gasBenchmark.map(Number);
    const meanGas = mean(gasValues);
    const medianGas = median(gasValues);
    const maxGas = max(gasValues);
    const minGas = min(gasValues);
    return {
      gasValues,
      meanGas,
      medianGas,
      maxGas,
      minGas,
    };
    // return gasBenchmark;
  }
  public async getProofTimeBenchmark() {
    const meanTime = mean(proofTimeBenchmark);
    const medianTime = median(proofTimeBenchmark);
    const maxTime = max(proofTimeBenchmark);
    const minTime = min(proofTimeBenchmark);
    return {
      proofTimeBenchmark,
      meanTime,
      medianTime,
      maxTime,
      minTime,
    };
  }

  /**
   *
   * @param input A UTXO object that is inside the tree
   * @returns an object with two fields, publicInput
   */
  public async setupTransaction(
    inputs: Utxo[],
    outputs: [Utxo, Utxo],
    extAmount: BigNumberish,
    fee: BigNumberish,
    refund: BigNumberish,
    recipient: string,
    relayer: string,
    wrapUnwrapToken: string,
    leavesMap: Record<string, Uint8Array[]>
  ) {
    // first, check if the merkle root is known on chain - if not, then update
    const chainId = getChainIdType(await this.signer.getChainId());
    const roots = await this.populateRootsForProof();

    // calculate the sum of input notes (for calculating the public amount)
    let sumInputUtxosAmount: BigNumberish = 0;

    // Pass the identifier for leaves alongside the proof input
    let leafIds: LeafIdentifier[] = [];

    for (const inputUtxo of inputs) {
      sumInputUtxosAmount = BigNumber.from(sumInputUtxosAmount).add(inputUtxo.amount);
      leafIds.push({
        index: inputUtxo.index,
        typedChainId: Number(inputUtxo.originChainId),
      });
    }

    const encryptedCommitments: [Uint8Array, Uint8Array] = [
      hexToU8a(outputs[0].encrypt()),
      hexToU8a(outputs[1].encrypt()),
    ];

    const proofInput: ProvingManagerSetupInput<'vanchor'> = {
      inputUtxos: inputs,
      leavesMap,
      leafIds,
      roots: roots.map((root) => hexToU8a(root)),
      chainId: chainId.toString(),
      output: outputs,
      encryptedCommitments,
      publicAmount: BigNumber.from(extAmount).sub(fee).add(FIELD_SIZE).mod(FIELD_SIZE).toString(),
      provingKey:
        inputs.length > 2 ? this.largeCircuitZkComponents.zkey : this.smallCircuitZkComponents.zkey,
      relayer: hexToU8a(relayer),
      recipient: hexToU8a(recipient),
      extAmount: toFixedHex(BigNumber.from(extAmount)),
      fee: BigNumber.from(fee).toString(),
      refund: BigNumber.from(refund).toString(),
      token: hexToU8a(wrapUnwrapToken),
    };

    inputs.length > 2
      ? (this.provingManager = new CircomProvingManager(
        this.largeCircuitZkComponents.wasm,
        this.tree.levels,
        null
      ))
      : (this.provingManager = new CircomProvingManager(
        this.smallCircuitZkComponents.wasm,
        this.tree.levels,
        null
      ));

    const proof = await this.provingManager.prove('vanchor', proofInput);

    const publicInputs: IVariableAnchorPublicInputs = this.generatePublicInputs(
      proof.proof,
      roots,
      inputs,
      outputs,
      proofInput.publicAmount,
      u8aToHex(proof.extDataHash)
    );

    const extData: IVariableAnchorExtData = {
      recipient: toFixedHex(proofInput.recipient, 20),
      extAmount: toFixedHex(proofInput.extAmount),
      relayer: toFixedHex(proofInput.relayer, 20),
      fee: toFixedHex(proofInput.fee),
      refund: toFixedHex(proofInput.refund),
      token: toFixedHex(proofInput.token, 20),
      encryptedOutput1: u8aToHex(proofInput.encryptedCommitments[0]),
      encryptedOutput2: u8aToHex(proofInput.encryptedCommitments[1]),
    };

    return {
      extData,
      publicInputs,
    };
  }
  // public async padUtxos(utxos: Utxo[], maxUtxos: number): Promise<Utxo[]> {
  //   const evmId = await this.signer.getChainId();
  //   const chainId = getChainIdType(evmId);
  //   const randomKeypair = new Keypair();
  //
  //   while (utxos.length !== 2 && utxos.length < maxUtxos) {
  //     utxos.push(
  //       await CircomUtxo.generateUtxo({
  //         curve: 'Bn254',
  //         backend: 'Circom',
  //         chainId: chainId.toString(),
  //         originChainId: chainId.toString(),
  //         amount: '0',
  //         blinding: hexToU8a(randomBN(31).toHexString()),
  //         keypair: randomKeypair,
  //       })
  //     );
  //   }
  //   return utxos;
  // }

  // Maintain tree state after insertions
  public async updateTree(outputs: Utxo[]): Promise<void> {
    outputs.forEach((x) => {
      this.tree.insert(u8aToHex(x.commitment));
      let numOfElements = this.tree.number_of_elements();
      this.depositHistory[numOfElements - 1] = toFixedHex(this.tree.root().toString());
    });
  }

  public async transact(
    inputs: Utxo[],
    outputs: Utxo[],
    fee: BigNumberish,
    refund: BigNumberish,
    recipient: string,
    relayer: string,
    wrapUnwrapToken: string,
    leavesMap: Record<string, Uint8Array[]>
  ): Promise<ethers.ContractReceipt> {
    return await this._transact(inputs, outputs, fee, refund, recipient, relayer, wrapUnwrapToken, leavesMap, this.contract.transact, undefined, undefined)
  }

  public async registerAndTransact(
    owner: string,
    keyData: string,
    inputs: Utxo[],
    outputs: Utxo[],
    fee: BigNumberish,
    refund: BigNumberish,
    recipient: string,
    relayer: string,
    wrapUnwrapToken: string,
    leavesMap: Record<string, Uint8Array[]>
  ): Promise<ethers.ContractReceipt> {
    return await this._transact(inputs, outputs, fee, refund, recipient, relayer, wrapUnwrapToken, leavesMap, this.contract.registerAndTransact, keyData, owner)
  }
  public async _transact(
    inputs: Utxo[],
    outputs: Utxo[],
    fee: BigNumberish,
    refund: BigNumberish,
    recipient: string,
    relayer: string,
    wrapUnwrapToken: string,
    leavesMap: Record<string, Uint8Array[]>,
    contractCall: any,
    keyData?: string,
    owner?: string,
  ): Promise<ethers.ContractReceipt> {
    // Default UTXO chain ID will match with the configured signer's chain ID

    inputs = await this.padUtxos(inputs, 16, this.signer);

    outputs = await this.padUtxos(outputs, 2, this.signer);

    let extAmount = await this.getExtAmount(inputs, outputs, fee);

    if (wrapUnwrapToken.length === 0) {

      wrapUnwrapToken = this.token;
    }

    const { extData, publicInputs } = await this.setupTransaction(
      inputs,
      [outputs[0], outputs[1]],
      extAmount,
      fee,
      refund,
      recipient,
      relayer,
      wrapUnwrapToken,
      leavesMap
    );

    let options = {};
    if (extAmount.gt(0) && checkNativeAddress(wrapUnwrapToken)) {
      let tokenWrapper = TokenWrapper__factory.connect(await this.contract.token(), this.signer);
      let valueToSend = await tokenWrapper.getAmountToWrap(extAmount);

      options = {
        value: valueToSend.toHexString(),
      };
    } else {
      options = {};
    }

    console.log('before transact in VAnchor.ts');
    let tx: ContractTransaction;
    if (keyData === undefined && owner === undefined) {
      tx = await contractCall(
        publicInputs.proof,
        ZERO_BYTES32,
        {
          recipient: extData.recipient,
          extAmount: extData.extAmount,
          relayer: extData.relayer,
          fee: extData.fee,
          refund: extData.refund,
          token: extData.token,
        },
        {
          roots: publicInputs.roots,
          extensionRoots: '0x',
          inputNullifiers: publicInputs.inputNullifiers,
          outputCommitments: [publicInputs.outputCommitments[0], publicInputs.outputCommitments[1]],
          publicAmount: publicInputs.publicAmount,
          extDataHash: publicInputs.extDataHash,
        },
        {
          encryptedOutput1: extData.encryptedOutput1,
          encryptedOutput2: extData.encryptedOutput2,
        },
        options
      );
    } else {

      tx = await contractCall(
        { owner, keyData: keyData },
        publicInputs.proof,
        ZERO_BYTES32,
        {
          recipient: extData.recipient,
          extAmount: extData.extAmount,
          relayer: extData.relayer,
          fee: extData.fee,
          refund: extData.refund,
          token: extData.token,
        },
        {
          roots: publicInputs.roots,
          extensionRoots: [],
          inputNullifiers: publicInputs.inputNullifiers,
          outputCommitments: [publicInputs.outputCommitments[0], publicInputs.outputCommitments[1]],
          publicAmount: publicInputs.publicAmount,
          extDataHash: publicInputs.extDataHash,
        },
        extData,
        options
      )

    }
    const receipt = await tx.wait();

    // Add the leaves to the tree
    await this.updateTree(outputs);

    return receipt;
  }
}

export default VAnchor;

