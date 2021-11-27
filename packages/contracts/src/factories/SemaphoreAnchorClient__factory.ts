/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SemaphoreAnchorClient,
  SemaphoreAnchorClientInterface,
} from "../SemaphoreAnchorClient";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract SemaphoreAnchorBase",
        name: "_semaphore",
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
        indexed: true,
        internalType: "uint256",
        name: "signalIndex",
        type: "uint256",
      },
    ],
    name: "SignalBroadcastByClient",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_signal",
        type: "bytes",
      },
      {
        internalType: "uint256[8]",
        name: "_proof",
        type: "uint256[8]",
      },
      {
        internalType: "bytes",
        name: "_roots",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_nullifiersHash",
        type: "uint256",
      },
      {
        internalType: "uint232",
        name: "_externalNullifier",
        type: "uint232",
      },
    ],
    name: "broadcastSignal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getExternalNullifierBySignalIndex",
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
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getSignalBySignalIndex",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextSignalIndex",
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
    name: "semaphore",
    outputs: [
      {
        internalType: "contract SemaphoreAnchorBase",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "signalIndexToExternalNullifier",
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
    name: "signalIndexToSignal",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600060025534801561001557600080fd5b506040516107f73803806107f783398101604081905261003491610059565b600380546001600160a01b0319166001600160a01b0392909216919091179055610087565b60006020828403121561006a578081fd5b81516001600160a01b0381168114610080578182fd5b9392505050565b610761806100966000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80637b5d25341161005b5780637b5d2534146100e05780638d2d593b146100f5578063911ca41e146100fd578063f9cdb5cd146101105761007d565b80630b353d5f1461008257806327acf71b14610097578063740afb77146100c0575b600080fd5b6100956100903660046104a4565b610123565b005b6100aa6100a5366004610578565b610211565b6040516100b791906105db565b60405180910390f35b6100d36100ce366004610578565b6102ab565b6040516100b79190610680565b6100e86102c0565b6040516100b7919061066c565b6100d36102cf565b6100aa61010b366004610578565b6102d5565b6100d361011e366004610578565b610377565b600254600081815260208181526040909120875161014392890190610389565b506002805460009081526001602052604081206001600160e81b03851690558154919061016f836106ee565b9091555050600354604051630b353d5f60e01b81526001600160a01b0390911690630b353d5f906101ac90899089908990899089906004016105f5565b600060405180830381600087803b1580156101c657600080fd5b505af11580156101da573d6000803e3d6000fd5b50506040518392507faa676fd106f1023de6c9eafff9af5bc8e299b3493d3aa816a3278a15d055657b9150600090a2505050505050565b6000602081905290815260409020805461022a906106b3565b80601f0160208091040260200160405190810160405280929190818152602001828054610256906106b3565b80156102a35780601f10610278576101008083540402835291602001916102a3565b820191906000526020600020905b81548152906001019060200180831161028657829003601f168201915b505050505081565b6000818152600160205260409020545b919050565b6003546001600160a01b031681565b60025481565b60008181526020819052604090208054606091906102f2906106b3565b80601f016020809104026020016040519081016040528092919081815260200182805461031e906106b3565b801561036b5780601f106103405761010080835404028352916020019161036b565b820191906000526020600020905b81548152906001019060200180831161034e57829003601f168201915b50505050509050919050565b60016020526000908152604090205481565b828054610395906106b3565b90600052602060002090601f0160209004810192826103b757600085556103fd565b82601f106103d057805160ff19168380011785556103fd565b828001600101855582156103fd579182015b828111156103fd5782518255916020019190600101906103e2565b5061040992915061040d565b5090565b5b80821115610409576000815560010161040e565b600082601f830112610432578081fd5b813567ffffffffffffffff81111561044c5761044c610715565b61045f601f8201601f1916602001610689565b818152846020838601011115610473578283fd5b816020850160208301379081016020019190915292915050565b80356001600160e81b03811681146102bb57600080fd5b600080600080600061018086880312156104bc578081fd5b853567ffffffffffffffff808211156104d3578283fd5b6104df89838a01610422565b96506020915088603f8901126104f3578283fd5b6104fe610100610689565b80838a016101208b018c811115610513578687fd5b865b600881101561053257823585529386019391860191600101610515565b50919850503592505080821115610547578283fd5b5061055488828901610422565b935050610140860135915061056c610160870161048d565b90509295509295909350565b600060208284031215610589578081fd5b5035919050565b60008151808452815b818110156105b557602081850181015186830182015201610599565b818111156105c65782602083870101525b50601f01601f19169290920160200192915050565b6000602082526105ee6020830184610590565b9392505050565b600061018080835261060981840189610590565b9050602080840188845b600881101561063057815183529183019190830190600101610613565b505050508281036101208401526106478187610590565b61014084019590955250506001600160e81b0391909116610160909101529392505050565b6001600160a01b0391909116815260200190565b90815260200190565b60405181810167ffffffffffffffff811182821017156106ab576106ab610715565b604052919050565b6002810460018216806106c757607f821691505b602082108114156106e857634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141561070e57634e487b7160e01b81526011600452602481fd5b5060010190565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220df520b8a072c5731042443906c153982f416e58bc6a00bf1c5d3ad230ed8485e64736f6c63430008000033";

export class SemaphoreAnchorClient__factory extends ContractFactory {
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
    _semaphore: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SemaphoreAnchorClient> {
    return super.deploy(
      _semaphore,
      overrides || {}
    ) as Promise<SemaphoreAnchorClient>;
  }
  getDeployTransaction(
    _semaphore: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_semaphore, overrides || {});
  }
  attach(address: string): SemaphoreAnchorClient {
    return super.attach(address) as SemaphoreAnchorClient;
  }
  connect(signer: Signer): SemaphoreAnchorClient__factory {
    return super.connect(signer) as SemaphoreAnchorClient__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SemaphoreAnchorClientInterface {
    return new utils.Interface(_abi) as SemaphoreAnchorClientInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SemaphoreAnchorClient {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SemaphoreAnchorClient;
  }
}