/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MerkleTree, MerkleTreeInterface } from "../MerkleTree";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_levels",
        type: "uint32",
      },
      {
        internalType: "contract IHasher",
        name: "_hasher",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
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
    inputs: [
      {
        internalType: "contract IHasher",
        name: "_hasher",
        type: "address",
      },
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "roots",
    outputs: [
      {
        internalType: "bytes32",
        name: "root",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "latestLeafindex",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000805462010000600160501b031916905534801561002257600080fd5b5060405161081038038061081083398101604081905261004191610315565b60008263ffffffff16116100a85760405162461bcd60e51b815260206004820152602360248201527f5f6c6576656c732073686f756c642062652067726561746572207468616e207a60448201526265726f60e81b60648201526084015b60405180910390fd5b60208263ffffffff16106100fe5760405162461bcd60e51b815260206004820152601e60248201527f5f6c6576656c732073686f756c64206265206c657373207468616e2033320000604482015260640161009f565b6000805463ffffffff60501b19166a010000000000000000000063ffffffff851602178155600280546001600160a01b0319166001600160a01b0384161790555b8263ffffffff168163ffffffff1610156101fc57600254604051631d052ab160e31b815263ffffffff831660048201526001600160a01b039091169063e82955889060240160206040518083038186803b15801561019c57600080fd5b505afa1580156101b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d491906102fc565b63ffffffff8216600090815260036020526040902055806101f481610389565b91505061013f565b506040805180820190915260025481906001600160a01b031663e8295588610225600187610364565b6040516001600160e01b031960e084901b16815263ffffffff91909116600482015260240160206040518083038186803b15801561026257600080fd5b505afa158015610276573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061029a91906102fc565b81526000602091820181905280526001815281517fa6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb495501517fa6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb4a55506103c39050565b60006020828403121561030e57600080fd5b5051919050565b6000806040838503121561032857600080fd5b825163ffffffff8116811461033c57600080fd5b60208401519092506001600160a01b038116811461035957600080fd5b809150509250929050565b600063ffffffff83811690831681811015610381576103816103ad565b039392505050565b600063ffffffff808316818114156103a3576103a36103ad565b6001019392505050565b634e487b7160e01b600052601160045260246000fd5b61043e806103d26000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063c2b40ae411610071578063c2b40ae41461018c578063cd87a3b4146101c8578063ec732959146101d0578063ed33639f146101f7578063f178e47c14610222578063fc7e9c6f1461024257600080fd5b8063414a37ba146100b95780634ecf518b146100f35780636d9833e31461011f5780638ea3099e1461014257806390eeb02b14610155578063ba70f7571461016b575b600080fd5b6100e07f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181565b6040519081526020015b60405180910390f35b60005461010a90600160501b900463ffffffff1681565b60405163ffffffff90911681526020016100ea565b61013261012d366004610367565b61025c565b60405190151581526020016100ea565b6100e0610150366004610380565b6102dd565b60005461010a9062010000900463ffffffff1681565b6000805462010000900463ffffffff168152600160205260409020546100e0565b6101b361019a366004610367565b6001602081905260009182526040909120805491015482565b604080519283526020830191909152016100ea565b61010a601e81565b6100e07f2fe54c60d3acabf3343a35b6eba15db4821b340f76e741e2249685ed4899af6c81565b60025461020a906001600160a01b031681565b6040516001600160a01b0390911681526020016100ea565b6100e0610230366004610367565b60036020526000908152604090205481565b60005461010a906601000000000000900463ffffffff1681565b60008161026b57506000919050565b60005462010000900463ffffffff16805b63ffffffff81166000908152600160205260409020548414156102a3575060019392505050565b63ffffffff81166102b25750601e5b806102bc816103da565b9150508163ffffffff168163ffffffff16141561027c575060009392505050565b604051635bb9399560e01b815260048101839052602481018290526000906001600160a01b03851690635bb939959060440160206040518083038186803b15801561032757600080fd5b505afa15801561033b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061035f91906103c1565b949350505050565b60006020828403121561037957600080fd5b5035919050565b60008060006060848603121561039557600080fd5b83356001600160a01b03811681146103ac57600080fd5b95602085013595506040909401359392505050565b6000602082840312156103d357600080fd5b5051919050565b600063ffffffff8216806103fe57634e487b7160e01b600052601160045260246000fd5b600019019291505056fea2646970667358221220fb67d75081278cb1097c276869d09c2fc5ad6b9588891cf203665babaafd96c464736f6c63430008050033";

export class MerkleTree__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _levels: BigNumberish,
    _hasher: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MerkleTree> {
    return super.deploy(
      _levels,
      _hasher,
      overrides || {}
    ) as Promise<MerkleTree>;
  }
  getDeployTransaction(
    _levels: BigNumberish,
    _hasher: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_levels, _hasher, overrides || {});
  }
  attach(address: string): MerkleTree {
    return super.attach(address) as MerkleTree;
  }
  connect(signer: Signer): MerkleTree__factory {
    return super.connect(signer) as MerkleTree__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MerkleTreeInterface {
    return new utils.Interface(_abi) as MerkleTreeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MerkleTree {
    return new Contract(address, _abi, signerOrProvider) as MerkleTree;
  }
}
