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
import type {
  IncrementalQuinTree,
  IncrementalQuinTreeInterface,
} from "../IncrementalQuinTree";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_treeLevels",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_zeroValue",
        type: "uint256",
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
        name: "leaf",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "leafIndex",
        type: "uint256",
      },
    ],
    name: "LeafInsertion",
    type: "event",
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
    name: "OwnershipTransferred",
    type: "event",
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
        internalType: "uint256[]",
        name: "array",
        type: "uint256[]",
      },
    ],
    name: "hash11",
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
        internalType: "uint256[5]",
        name: "array",
        type: "uint256[5]",
      },
    ],
    name: "hash5",
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
        name: "_left",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_right",
        type: "uint256",
      },
    ],
    name: "hashLeftRight",
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
        name: "_leaf",
        type: "uint256",
      },
    ],
    name: "insertLeaf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
    name: "isOwner",
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
    inputs: [],
    name: "owner",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "root",
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
    name: "rootHistory",
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
        internalType: "uint256",
        name: "i",
        type: "uint256",
      },
    ],
    name: "zeroes",
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
];

const _bytecode =
  "0x60806040526000600155600580546001600160401b03191690553480156200002657600080fd5b506040516200161438038062001614833981016040819052620000499162000269565b600080546001600160a01b03191633178082556040516001600160a01b039190911691907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a360008260ff16118015620000aa5750602060ff831611155b620000d25760405162461bcd60e51b8152600401620000c990620002d0565b60405180910390fd5b6000805460ff60a01b1916600160a01b60ff85160217905580620000f562000232565b60005b8460ff168160ff1610156200018e5760005b600560ff82161015620001565783838260ff16600581106200013c57634e487b7160e01b600052603260045260246000fd5b6020020152806200014d816200032d565b9150506200010a565b5060ff8116600090815260036020526040902083905562000177826200019c565b92508062000185816200032d565b915050620000f8565b5050600255506200035a9050565b604051630926f44b60e31b815260009073__$02d9c88e2205ee83263af200711ff3a915$__90634937a25890620001d89085906004016200029d565b60206040518083038186803b158015620001f157600080fd5b505af415801562000206573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200022c919062000250565b92915050565b6040518060a001604052806005906020820280368337509192915050565b60006020828403121562000262578081fd5b5051919050565b600080604083850312156200027c578081fd5b825160ff811681146200028d578182fd5b6020939093015192949293505050565b60a08101818360005b6005811015620002c7578151835260209283019290910190600101620002a6565b50505092915050565b60208082526039908201527f496e6372656d656e74616c5175696e547265653a205f747265654c6576656c7360408201527f206d757374206265206265747765656e203020616e6420333300000000000000606082015260800190565b600060ff821660ff8114156200035157634e487b7160e01b82526011600452602482fd5b60010192915050565b6112aa806200036a6000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063b720243411610097578063ebf0c71711610066578063ebf0c717146101f1578063f1c621ee146101f9578063f2fde38b1461020c578063fc7e9c6f1461021f57610100565b8063b7202434146101b0578063bc95a804146101c3578063c2b40ae4146101d6578063cd87a3b4146101e957610100565b80638da5cb5b116100d35780638da5cb5b1461016b5780638f32d59b1461018057806390eeb02b146101885780639cfced971461019d57610100565b80635bb93995146101055780636d9833e31461012e578063715018a61461014e5780638a1a52d214610158575b600080fd5b610118610113366004610e34565b610227565b6040516101259190610ecd565b60405180910390f35b61014161013c366004610e04565b6102ca565b6040516101259190610ec2565b610156610348565b005b610118610166366004610d5d565b6103bf565b610173610809565b6040516101259190610e55565b610141610818565b610190610829565b6040516101259190610ffd565b6101186101ab366004610cdb565b610835565b6101186101be366004610e04565b6108c5565b6101186101d1366004610e04565b610b68565b6101186101e4366004610e04565b610b7a565b610190610b8c565b610118610b91565b610141610207366004610e04565b610b97565b61015661021a366004610cad565b610bac565b610190610bdc565b6000610231610c71565b838152602081018390526040516314d2f97b60e11b815273__$625747953a90ee357f08b142f331ee4d5e$__906329a5f2f690610272908490600401610e69565b60206040518083038186803b15801561028a57600080fd5b505af415801561029e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c29190610e1c565b949350505050565b6000816102d957506000610343565b60055463ffffffff16805b63ffffffff811660009081526004602052604090205484141561030c57600192505050610343565b63ffffffff811661031b5750601e5b80610325816111a0565b9150508163ffffffff168163ffffffff1614156102e4576000925050505b919050565b610350610818565b6103755760405162461bcd60e51b815260040161036c90610f87565b60405180910390fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b60408051600b808252610180820190925260009182919060208201610160803683370190505090506103ef610c8f565b6103f7610c8f565b60005b85518110156104685785818151811061042357634e487b7160e01b600052603260045260246000fd5b602002602001015184828151811061044b57634e487b7160e01b600052603260045260246000fd5b602090810291909101015280610460816111c0565b9150506103fa565b5084515b600b8110156104b457600084828151811061049757634e487b7160e01b600052603260045260246000fd5b6020908102919091010152806104ac816111c0565b91505061046c565b5060005b6005811015610577578381815181106104e157634e487b7160e01b600052603260045260246000fd5b602002602001015183826005811061050957634e487b7160e01b600052603260045260246000fd5b60200201528361051a826005611038565b8151811061053857634e487b7160e01b600052603260045260246000fd5b602002602001015182826005811061056057634e487b7160e01b600052603260045260246000fd5b60200201528061056f816111c0565b9150506104b8565b50610580610c71565b604051630926f44b60e31b815273__$02d9c88e2205ee83263af200711ff3a915$__90634937a258906105b7908690600401610e9a565b60206040518083038186803b1580156105cf57600080fd5b505af41580156105e3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106079190610e1c565b8152604051630926f44b60e31b815273__$02d9c88e2205ee83263af200711ff3a915$__90634937a25890610640908590600401610e9a565b60206040518083038186803b15801561065857600080fd5b505af415801561066c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106909190610e1c565b602082015261069d610c71565b6040516314d2f97b60e11b815273__$625747953a90ee357f08b142f331ee4d5e$__906329a5f2f6906106d4908590600401610e69565b60206040518083038186803b1580156106ec57600080fd5b505af4158015610700573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107249190610e1c565b815284518590600a90811061074957634e487b7160e01b600052603260045260246000fd5b60200260200101518160016002811061077257634e487b7160e01b600052603260045260246000fd5b60200201526040516314d2f97b60e11b815273__$625747953a90ee357f08b142f331ee4d5e$__906329a5f2f6906107ae908490600401610e69565b60206040518083038186803b1580156107c657600080fd5b505af41580156107da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107fe9190610e1c565b979650505050505050565b6000546001600160a01b031690565b6000546001600160a01b0316331490565b60055463ffffffff1681565b604051630926f44b60e31b815260009073__$02d9c88e2205ee83263af200711ff3a915$__90634937a2589061086f908590600401610e9a565b60206040518083038186803b15801561088757600080fd5b505af415801561089b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108bf9190610e1c565b92915050565b60006108cf610818565b6108eb5760405162461bcd60e51b815260040161036c90610f87565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001821061092a5760405162461bcd60e51b815260040161036c90610f1c565b60005461094290600160a01b900460ff1660056110d2565b600154106109625760405162461bcd60e51b815260040161036c90610fbc565b6001548261096e610c8f565b600061097b6005856111fb565b905060005b60005460ff600160a01b90910481169082161015610aaa57816109ea5760015b600560ff821610156109e85760ff80831660009081526003602090815260408083205460068352818420948616845293909152902055806109e0816111db565b9150506109a0565b505b60ff8116600090815260066020908152604080832085845290915281208590555b600560ff82161015610a725760ff80831660009081526006602090815260408083209385168084529390915290205490859060058110610a5b57634e487b7160e01b600052603260045260246000fd5b602002015280610a6a816111db565b915050610a0b565b50610a7c83610835565b9350610a89600586611078565b9450610a966005866111fb565b915080610aa2816111db565b915050610980565b5060028390556000838152600760205260408120805460ff19166001908117909155600554601e91610ae29163ffffffff1690611050565b610aec919061120f565b6005805463ffffffff191663ffffffff831690811790915560025460009182526004602052604082205560018054929350908190610b2a8285611038565b9091555050604051819089907fe6f49fa84abd31919f446b22a52bb3ceae774b4b87f062f022fec45c46f4f45890600090a350939695505050505050565b60009081526003602052604090205490565b60046020526000908152604090205481565b601e81565b60025481565b60076020526000908152604090205460ff1681565b610bb4610818565b610bd05760405162461bcd60e51b815260040161036c90610f87565b610bd981610bf0565b50565b600554640100000000900463ffffffff1681565b6001600160a01b038116610c165760405162461bcd60e51b815260040161036c90610ed6565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b60405180604001604052806002906020820280368337509192915050565b6040518060a001604052806005906020820280368337509192915050565b600060208284031215610cbe578081fd5b81356001600160a01b0381168114610cd4578182fd5b9392505050565b600060a08284031215610cec578081fd5b82601f830112610cfa578081fd5b60405160a0810181811067ffffffffffffffff82111715610d1d57610d1d61125e565b604052808360a08101861015610d31578384fd5b835b6005811015610d52578135835260209283019290910190600101610d33565b509195945050505050565b60006020808385031215610d6f578182fd5b823567ffffffffffffffff80821115610d86578384fd5b818501915085601f830112610d99578384fd5b813581811115610dab57610dab61125e565b8381029150610dbb84830161100e565b8181528481019084860184860187018a1015610dd5578788fd5b8795505b83861015610df7578035835260019590950194918601918601610dd9565b5098975050505050505050565b600060208284031215610e15578081fd5b5035919050565b600060208284031215610e2d578081fd5b5051919050565b60008060408385031215610e46578081fd5b50508035926020909101359150565b6001600160a01b0391909116815260200190565b60408101818360005b6002811015610e91578151835260209283019290910190600101610e72565b50505092915050565b60a08101818360005b6005811015610e91578151835260209283019290910190600101610ea3565b901515815260200190565b90815260200190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b60208082526045908201527f496e6372656d656e74616c5175696e547265653a20696e736572744c6561662060408201527f617267756d656e74206d757374206265203c20534e41524b5f5343414c41525f606082015264119251531160da1b608082015260a00190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526021908201527f496e6372656d656e74616c5175696e547265653a20747265652069732066756c6040820152601b60fa1b606082015260800190565b63ffffffff91909116815260200190565b60405181810167ffffffffffffffff811182821017156110305761103061125e565b604052919050565b6000821982111561104b5761104b611232565b500190565b600063ffffffff80831681851680830382111561106f5761106f611232565b01949350505050565b60008261108757611087611248565b500490565b80825b600180861161109e57506110c9565b8187048211156110b0576110b0611232565b808616156110bd57918102915b9490941c93800261108f565b94509492505050565b6000610cd460001984846000826110eb57506001610cd4565b816110f857506000610cd4565b816001811461110e576002811461111857611145565b6001915050610cd4565b60ff84111561112957611129611232565b6001841b91508482111561113f5761113f611232565b50610cd4565b5060208310610133831016604e8410600b8410161715611178575081810a8381111561117357611173611232565b610cd4565b611185848484600161108c565b80860482111561119757611197611232565b02949350505050565b600063ffffffff8216806111b6576111b6611232565b6000190192915050565b60006000198214156111d4576111d4611232565b5060010190565b600060ff821660ff8114156111f2576111f2611232565b60010192915050565b60008261120a5761120a611248565b500690565b600063ffffffff8084168061122657611226611248565b92169190910692915050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220801af63d8a53f171d5e0dbf40ced0c86e9860e8f511f25b7d7c6f52b429ce46c64736f6c63430008000033";

type IncrementalQuinTreeConstructorParams =
  | [linkLibraryAddresses: IncrementalQuinTreeLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: IncrementalQuinTreeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class IncrementalQuinTree__factory extends ContractFactory {
  constructor(...args: IncrementalQuinTreeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        IncrementalQuinTree__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: IncrementalQuinTreeLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$02d9c88e2205ee83263af200711ff3a915\\$__", "g"),
      linkLibraryAddresses["contracts/trees/Poseidon.sol:PoseidonT6Lib"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$625747953a90ee357f08b142f331ee4d5e\\$__", "g"),
      linkLibraryAddresses["contracts/trees/Poseidon.sol:PoseidonT3Lib"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(
    _treeLevels: BigNumberish,
    _zeroValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<IncrementalQuinTree> {
    return super.deploy(
      _treeLevels,
      _zeroValue,
      overrides || {}
    ) as Promise<IncrementalQuinTree>;
  }
  getDeployTransaction(
    _treeLevels: BigNumberish,
    _zeroValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_treeLevels, _zeroValue, overrides || {});
  }
  attach(address: string): IncrementalQuinTree {
    return super.attach(address) as IncrementalQuinTree;
  }
  connect(signer: Signer): IncrementalQuinTree__factory {
    return super.connect(signer) as IncrementalQuinTree__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IncrementalQuinTreeInterface {
    return new utils.Interface(_abi) as IncrementalQuinTreeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IncrementalQuinTree {
    return new Contract(address, _abi, signerOrProvider) as IncrementalQuinTree;
  }
}

export interface IncrementalQuinTreeLibraryAddresses {
  ["contracts/trees/Poseidon.sol:PoseidonT6Lib"]: string;
  ["contracts/trees/Poseidon.sol:PoseidonT3Lib"]: string;
}