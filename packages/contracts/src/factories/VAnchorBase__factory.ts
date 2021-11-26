/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { VAnchorBase, VAnchorBaseInterface } from "../VAnchorBase";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "chainID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "latestLeafIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "merkleRoot",
        type: "bytes32",
      },
    ],
    name: "EdgeAddition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "chainID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "latestLeafIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "merkleRoot",
        type: "bytes32",
      },
    ],
    name: "EdgeUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "commitment",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "encryptedOutput",
        type: "bytes",
      },
    ],
    name: "NewCommitment",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "nullifier",
        type: "bytes32",
      },
    ],
    name: "NewNullifier",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "key",
        type: "bytes",
      },
    ],
    name: "PublicKey",
    type: "event",
  },
  {
    inputs: [],
    name: "FIELD_SIZE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_EXT_AMOUNT",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_FEE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ROOT_HISTORY_SIZE",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ZERO_VALUE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "_extAmount",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
    ],
    name: "calculatePublicAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_minimalWithdrawalAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maximumDepositAmount",
        type: "uint256",
      },
    ],
    name: "configureLimits",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "currentNeighborRootIndex",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentRootIndex",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "edgeExistsForChain",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "edgeIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "edgeList",
    outputs: [
      {
        internalType: "uint256",
        name: "chainID",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "root",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "latestLeafIndex",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "filledSubtrees",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLastRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLatestNeighborEdges",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "chainID",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "root",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "latestLeafIndex",
            type: "uint256",
          },
        ],
        internalType: "struct VAnchorBase.Edge[]",
        name: "edges",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_left",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_right",
        type: "bytes32",
      },
    ],
    name: "hashLeftRight",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "hasher",
    outputs: [
      {
        internalType: "contract IHasher",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_minimalWithdrawalAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maximumDepositAmount",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "neighborChainID",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32",
      },
    ],
    name: "isKnownNeighborRoot",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32",
      },
    ],
    name: "isKnownRoot",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_nullifierHash",
        type: "bytes32",
      },
    ],
    name: "isSpent",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "roots",
        type: "bytes32[]",
      },
    ],
    name: "isValidRoots",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "levels",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxEdges",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maximumDepositAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minimalWithdrawalAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "neighborRoots",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextIndex",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "nullifierHashes",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "permissions",
    outputs: [
      {
        internalType: "address",
        name: "bridge",
        type: "address",
      },
      {
        internalType: "address",
        name: "admin",
        type: "address",
      },
      {
        internalType: "address",
        name: "handler",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "publicKey",
            type: "bytes",
          },
        ],
        internalType: "struct VAnchorBase.Account",
        name: "_account",
        type: "tuple",
      },
    ],
    name: "register",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "publicKey",
            type: "bytes",
          },
        ],
        internalType: "struct VAnchorBase.Account",
        name: "_account",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "bytes",
            name: "proof",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "roots",
            type: "bytes",
          },
          {
            internalType: "bytes32[]",
            name: "inputNullifiers",
            type: "bytes32[]",
          },
          {
            internalType: "bytes32[2]",
            name: "outputCommitments",
            type: "bytes32[2]",
          },
          {
            internalType: "uint256",
            name: "publicAmount",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "extDataHash",
            type: "bytes32",
          },
        ],
        internalType: "struct VAnchorEncodeInputs.Proof",
        name: "_proofArgs",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "int256",
            name: "extAmount",
            type: "int256",
          },
          {
            internalType: "address",
            name: "relayer",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "fee",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "encryptedOutput1",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "encryptedOutput2",
            type: "bytes",
          },
        ],
        internalType: "struct VAnchorBase.ExtData",
        name: "_extData",
        type: "tuple",
      },
    ],
    name: "registerAndTransact",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "roots",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes",
            name: "proof",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "roots",
            type: "bytes",
          },
          {
            internalType: "bytes32[]",
            name: "inputNullifiers",
            type: "bytes32[]",
          },
          {
            internalType: "bytes32[2]",
            name: "outputCommitments",
            type: "bytes32[2]",
          },
          {
            internalType: "uint256",
            name: "publicAmount",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "extDataHash",
            type: "bytes32",
          },
        ],
        internalType: "struct VAnchorEncodeInputs.Proof",
        name: "_args",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "int256",
            name: "extAmount",
            type: "int256",
          },
          {
            internalType: "address",
            name: "relayer",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "fee",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "encryptedOutput1",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "encryptedOutput2",
            type: "bytes",
          },
        ],
        internalType: "struct VAnchorBase.ExtData",
        name: "_extData",
        type: "tuple",
      },
    ],
    name: "transact",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[8]",
        name: "_proof",
        type: "uint256[8]",
      },
    ],
    name: "unpackProof",
    outputs: [
      {
        internalType: "uint256[2]",
        name: "",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "",
        type: "uint256[2]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "verifier",
    outputs: [
      {
        internalType: "contract IVAnchorVerifier",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "i",
        type: "uint256",
      },
    ],
    name: "zeros",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

export class VAnchorBase__factory {
  static readonly abi = _abi;
  static createInterface(): VAnchorBaseInterface {
    return new utils.Interface(_abi) as VAnchorBaseInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VAnchorBase {
    return new Contract(address, _abi, signerOrProvider) as VAnchorBase;
  }
}
