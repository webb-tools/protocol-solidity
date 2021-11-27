/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Governable, GovernableInterface } from "../Governable";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "GovernanceOwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "governor",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isGovernor",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "sig",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "transferOwnershipWithSignature",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b03191633178082556040516001600160a01b039190911691907f1f323489f404e3bad762215fc05447f9a77bb7f3b630a6f08a2851b999db41f7908290a3610926806100696000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80630c340a241461005c578063715018a61461007a578063769b95af14610084578063c7af335214610097578063f2fde38b146100ac575b600080fd5b6100646100bf565b60405161007191906106d6565b60405180910390f35b6100826100ce565b005b610082610092366004610665565b610145565b61009f610215565b60405161007191906106ea565b6100826100ba366004610644565b610226565b6000546001600160a01b031690565b6100d6610215565b6100fb5760405162461bcd60e51b81526004016100f29061074a565b60405180910390fd5b600080546040516001600160a01b03909116907f1f323489f404e3bad762215fc05447f9a77bb7f3b630a6f08a2851b999db41f7908390a3600080546001600160a01b0319169055565b61014d610215565b6101695760405162461bcd60e51b81526004016100f29061074a565b80516020808301919091206000818152600190925260409091205460ff16156101a45760405162461bcd60e51b81526004016100f290610894565b60006101b08285610256565b90506101ba6100bf565b6001600160a01b0316816001600160a01b0316146101ea5760405162461bcd60e51b81526004016100f29061074a565b6101f38561027a565b506000908152600160208190526040909120805460ff19169091179055505050565b6000546001600160a01b0316331490565b61022e610215565b61024a5760405162461bcd60e51b81526004016100f29061074a565b6102538161027a565b50565b600080600061026585856102fb565b915091506102728161036b565b509392505050565b6001600160a01b0381166102a05760405162461bcd60e51b81526004016100f290610809565b600080546040516001600160a01b03808516939216917f1f323489f404e3bad762215fc05447f9a77bb7f3b630a6f08a2851b999db41f791a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000808251604114156103325760208301516040840151606085015160001a61032687828585610498565b94509450505050610364565b82516040141561035c5760208301516040840151610351868383610578565b935093505050610364565b506000905060025b9250929050565b600081600481111561038d57634e487b7160e01b600052602160045260246000fd5b141561039857610253565b60018160048111156103ba57634e487b7160e01b600052602160045260246000fd5b14156103d85760405162461bcd60e51b81526004016100f290610713565b60028160048111156103fa57634e487b7160e01b600052602160045260246000fd5b14156104185760405162461bcd60e51b81526004016100f290610790565b600381600481111561043a57634e487b7160e01b600052602160045260246000fd5b14156104585760405162461bcd60e51b81526004016100f2906107c7565b600481600481111561047a57634e487b7160e01b600052602160045260246000fd5b14156102535760405162461bcd60e51b81526004016100f290610852565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156104cf575060009050600361056f565b8460ff16601b141580156104e757508460ff16601c14155b156104f8575060009050600461056f565b60006001878787876040516000815260200160405260405161051d94939291906106f5565b6020604051602081039080840390855afa15801561053f573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166105685760006001925092505061056f565b9150600090505b94509492505050565b6000806001600160ff1b03831660ff84901c601b0161059987828885610498565b935093505050935093915050565b80356001600160a01b03811681146105be57600080fd5b919050565b600082601f8301126105d3578081fd5b813567ffffffffffffffff808211156105ee576105ee6108da565b604051601f8301601f191681016020018281118282101715610612576106126108da565b604052828152848301602001861015610629578384fd5b82602086016020830137918201602001929092529392505050565b600060208284031215610655578081fd5b61065e826105a7565b9392505050565b600080600060608486031215610679578182fd5b610682846105a7565b9250602084013567ffffffffffffffff8082111561069e578384fd5b6106aa878388016105c3565b935060408601359150808211156106bf578283fd5b506106cc868287016105c3565b9150509250925092565b6001600160a01b0391909116815260200190565b901515815260200190565b93845260ff9290921660208401526040830152606082015260800190565b60208082526018908201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604082015260600190565b60208082526026908201527f476f7665726e61626c653a2063616c6c6572206973206e6f742074686520676f6040820152653b32b93737b960d11b606082015260800190565b6020808252601f908201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604082015260600190565b60208082526022908201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604082015261756560f01b606082015260800190565b60208082526029908201527f476f7665726e61626c653a206e6577206f776e657220697320746865207a65726040820152686f206164647265737360b81b606082015260800190565b60208082526022908201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604082015261756560f01b606082015260800190565b60208082526026908201527f476f7665726e61626c653a20646174612068617320616c7265616479206265656040820152651b881d5cd95960d21b606082015260800190565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220530d036ed7cb934cc075cd23f5f3f5511d0f3b038888a157d3f5d6a49736374264736f6c63430008000033";

export class Governable__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Governable> {
    return super.deploy(overrides || {}) as Promise<Governable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Governable {
    return super.attach(address) as Governable;
  }
  connect(signer: Signer): Governable__factory {
    return super.connect(signer) as Governable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GovernableInterface {
    return new utils.Interface(_abi) as GovernableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Governable {
    return new Contract(address, _abi, signerOrProvider) as Governable;
  }
}