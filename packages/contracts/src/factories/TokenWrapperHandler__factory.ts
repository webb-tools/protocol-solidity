/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BytesLike,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TokenWrapperHandler,
  TokenWrapperHandlerInterface,
} from "../TokenWrapperHandler";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "bridgeAddress",
        type: "address",
      },
      {
        internalType: "bytes32[]",
        name: "initialResourceIDs",
        type: "bytes32[]",
      },
      {
        internalType: "address[]",
        name: "initialContractAddresses",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "_bridgeAddress",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "_contractAddressToResourceID",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "_contractWhitelist",
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
    name: "_counts",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "_resourceIDToContractAddress",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "_updateRecords",
    outputs: [
      {
        internalType: "address",
        name: "_tokenWrapperAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_executionChainID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
      {
        internalType: "bytes4",
        name: "functionSig",
        type: "bytes4",
      },
      {
        internalType: "bytes32",
        name: "_resourceID",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_updateValue",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "resourceID",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "executeProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "updateNonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "executionChainId",
        type: "uint256",
      },
    ],
    name: "getUpdateRecord",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "_tokenWrapperAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_executionChainID",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_nonce",
            type: "uint256",
          },
          {
            internalType: "bytes4",
            name: "functionSig",
            type: "bytes4",
          },
          {
            internalType: "bytes32",
            name: "_resourceID",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "_updateValue",
            type: "bytes32",
          },
        ],
        internalType: "struct TokenWrapperHandler.UpdateRecord",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newBridge",
        type: "address",
      },
    ],
    name: "migrateBridge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "resourceID",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    name: "setResource",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000d7838038062000d7883398101604081905262000034916200022e565b8051825114620000b05760405162461bcd60e51b815260206004820152603c60248201527f696e697469616c5265736f7572636549447320616e6420696e697469616c436f60448201527f6e7472616374416464726573736573206c656e206d69736d6174636800000000606482015260840160405180910390fd5b600080546001600160a01b0319166001600160a01b0385161781555b8251811015620001355762000120838281518110620000ef57620000ef62000393565b60200260200101518383815181106200010c576200010c62000393565b60200260200101516200013f60201b60201c565b806200012c8162000369565b915050620000cc565b50505050620003bf565b600082815260016020818152604080842080546001600160a01b039096166001600160a01b0319909616861790559383526002815283832094909455600390935220805460ff19169091179055565b80516001600160a01b0381168114620001a657600080fd5b919050565b600082601f830112620001bd57600080fd5b81516020620001d6620001d08362000343565b62000310565b80838252828201915082860187848660051b8901011115620001f757600080fd5b60005b8581101562000221576200020e826200018e565b84529284019290840190600101620001fa565b5090979650505050505050565b6000806000606084860312156200024457600080fd5b6200024f846200018e565b602085810151919450906001600160401b03808211156200026f57600080fd5b818701915087601f8301126200028457600080fd5b815162000295620001d08262000343565b8082825285820191508585018b878560051b8801011115620002b657600080fd5b600095505b83861015620002db578051835260019590950194918601918601620002bb565b5060408a01519097509450505080831115620002f657600080fd5b50506200030686828701620001ab565b9150509250925092565b604051601f8201601f191681016001600160401b03811182821017156200033b576200033b620003a9565b604052919050565b60006001600160401b038211156200035f576200035f620003a9565b5060051b60200190565b60006000198214156200038c57634e487b7160e01b600052601160045260246000fd5b5060010190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6109a980620003cf6000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063c54c2a1111610066578063c54c2a1114610225578063d75a06831461024e578063d7f5b3591461027c578063e248cff21461028f578063ec97d3b4146102a257600080fd5b80630c9e9e14146100a3578063318c136e146101455780636b84724a146101705780637f79bea8146101dd578063b8fa373614610210575b600080fd5b6100ff6100b1366004610878565b600460208181526000938452604080852090915291835291208054600182015460028301546003840154948401546005909401546001600160a01b03909316949193909260e09290921b9186565b604080516001600160a01b0390971687526020870195909552938501929092526001600160e01b0319166060840152608083015260a082015260c0015b60405180910390f35b600054610158906001600160a01b031681565b6040516001600160a01b03909116815260200161013c565b61018361017e366004610878565b6102c2565b60405161013c919081516001600160a01b0316815260208083015190820152604080830151908201526060808301516001600160e01b031916908201526080808301519082015260a0918201519181019190915260c00190565b6102006101eb366004610795565b60036020526000908152604090205460ff1681565b604051901515815260200161013c565b61022361021e3660046107d0565b61036e565b005b6101586102333660046107b7565b6001602052600090815260409020546001600160a01b031681565b61026e61025c3660046107b7565b60056020526000908152604090205481565b60405190815260200161013c565b61022361028a366004610795565b6103c6565b61022361029d3660046107fc565b6103f0565b61026e6102b0366004610795565b60026020526000908152604090205481565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a0810191909152506000818152600460208181526040808420868552825292839020835160c08101855281546001600160a01b03168152600182015492810192909252600281015493820193909352600383015460e01b6001600160e01b031916606082015290820154608082015260059091015460a08201525b92915050565b61037661071d565b600082815260016020818152604080842080546001600160a01b0319166001600160a01b0387169081179091558452600282528084208690556003909152909120805460ff191690911790555050565b6103ce61071d565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6103f861071d565b600080368161040a602082878961089a565b61041391610927565b935061042360246020878961089a565b61042c91610945565b925061043b856024818961089a565b60008981526001602052604090205491935091506001600160a01b0316806001600160e01b03198516638c6aa3f560e01b141561051e576000610481600482868861089a565b61048a91610945565b60e01c9050600061049f60056004878961089a565b6104a8916108c4565b604051638c6aa3f560e01b815260f89190911c6004820181905263ffffffff8416602483015291506001600160a01b03841690638c6aa3f5906044015b600060405180830381600087803b1580156104ff57600080fd5b505af1158015610513573d6000803e3d6000fd5b505050505050610712565b6001600160e01b0319851663f5d82b6b60e01b14156105ae576000610546600482868861089a565b61054f91610945565b60e01c9050600061056460186004878961089a565b61056d916108f4565b60405163f5d82b6b60e01b815260609190911c6004820181905263ffffffff8416602483015291506001600160a01b0384169063f5d82b6b906044016104e5565b6001600160e01b0319851663abe7f1ab60e01b141561063e5760006105d6600482868861089a565b6105df91610945565b60e01c905060006105f460186004878961089a565b6105fd916108f4565b60405163abe7f1ab60e01b815260609190911c6004820181905263ffffffff8416602483015291506001600160a01b0384169063abe7f1ab906044016104e5565b6001600160e01b03198516633180ab0560e21b14156106ce576000610666600482868861089a565b61066f91610945565b60e01c9050600061068460186004878961089a565b61068d916108f4565b604051633180ab0560e21b815260609190911c6004820181905263ffffffff8416602483015291506001600160a01b0384169063c602ac14906044016104e5565b60405162461bcd60e51b8152602060048201526014602482015273496e76616c69642066756e6374696f6e2073696760601b60448201526064015b60405180910390fd5b505050505050505050565b6000546001600160a01b031633146107775760405162461bcd60e51b815260206004820152601e60248201527f73656e646572206d7573742062652062726964676520636f6e747261637400006044820152606401610709565b565b80356001600160a01b038116811461079057600080fd5b919050565b6000602082840312156107a757600080fd5b6107b082610779565b9392505050565b6000602082840312156107c957600080fd5b5035919050565b600080604083850312156107e357600080fd5b823591506107f360208401610779565b90509250929050565b60008060006040848603121561081157600080fd5b83359250602084013567ffffffffffffffff8082111561083057600080fd5b818601915086601f83011261084457600080fd5b81358181111561085357600080fd5b87602082850101111561086557600080fd5b6020830194508093505050509250925092565b6000806040838503121561088b57600080fd5b50508035926020909101359150565b600080858511156108aa57600080fd5b838611156108b757600080fd5b5050820193919092039150565b6001600160f81b031981358181169160018510156108ec5780818660010360031b1b83161692505b505092915050565b6bffffffffffffffffffffffff1981358181169160148510156108ec5760149490940360031b84901b1690921692915050565b8035602083101561036857600019602084900360031b1b1692915050565b6001600160e01b031981358181169160048510156108ec5760049490940360031b84901b169092169291505056fea2646970667358221220704713fef99ce07ce17e8cb8015de867a9c916a20fc4e5318c7175e2d9c883a564736f6c63430008050033";

export class TokenWrapperHandler__factory extends ContractFactory {
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
    bridgeAddress: string,
    initialResourceIDs: BytesLike[],
    initialContractAddresses: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TokenWrapperHandler> {
    return super.deploy(
      bridgeAddress,
      initialResourceIDs,
      initialContractAddresses,
      overrides || {}
    ) as Promise<TokenWrapperHandler>;
  }
  getDeployTransaction(
    bridgeAddress: string,
    initialResourceIDs: BytesLike[],
    initialContractAddresses: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      bridgeAddress,
      initialResourceIDs,
      initialContractAddresses,
      overrides || {}
    );
  }
  attach(address: string): TokenWrapperHandler {
    return super.attach(address) as TokenWrapperHandler;
  }
  connect(signer: Signer): TokenWrapperHandler__factory {
    return super.connect(signer) as TokenWrapperHandler__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenWrapperHandlerInterface {
    return new utils.Interface(_abi) as TokenWrapperHandlerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenWrapperHandler {
    return new Contract(address, _abi, signerOrProvider) as TokenWrapperHandler;
  }
}
