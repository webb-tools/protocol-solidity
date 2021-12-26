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
  SignatureBridge,
  SignatureBridgeInterface,
} from "../SignatureBridge";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "chainID",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "initialGovernor",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "originChainID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "enum SignatureBridge.ProposalStatus",
        name: "status",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "dataHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "sig",
        type: "bytes",
      },
    ],
    name: "ProposalEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "originChainID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "nonce",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "enum SignatureBridge.ProposalStatus",
        name: "status",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "dataHash",
        type: "bytes32",
      },
    ],
    name: "ProposalVote",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recovered",
        type: "address",
      },
    ],
    name: "RecoveredAddress",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "RELAYER_ROLE",
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
    name: "_chainID",
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
    name: "_counts",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_expiry",
    outputs: [
      {
        internalType: "uint40",
        name: "",
        type: "uint40",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_fee",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
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
    name: "_resourceIDToHandlerAddress",
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
        internalType: "bytes32[]",
        name: "resourceIDs",
        type: "bytes32[]",
      },
      {
        internalType: "address",
        name: "newBridge",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "sig",
        type: "bytes",
      },
    ],
    name: "adminMigrateBridgeWithSignature",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "handlerAddress",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "resourceID",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "executionContextAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "sig",
        type: "bytes",
      },
    ],
    name: "adminSetResourceWithSignature",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "pubkey",
        type: "bytes",
      },
    ],
    name: "checkPubKey",
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
        name: "chainID",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "sig",
        type: "bytes",
      },
    ],
    name: "executeProposalWithSignature",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getChainId",
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
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "sig",
        type: "bytes",
      },
    ],
    name: "isSignatureFromGovernor",
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
    name: "paused",
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
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "sig",
        type: "bytes",
      },
    ],
    name: "recover",
    outputs: [],
    stateMutability: "nonpayable",
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
    ],
    name: "transferOwnershipWithSignature",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "publicKey",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "sig",
        type: "bytes",
      },
    ],
    name: "transferOwnershipWithSignaturePubKey",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "verify",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001a0138038062001a018339810160408190526200003491620001c9565b600080546001600160a81b0319166101006001600160a01b03868116820292909217808455604051879492909104909216917f1f323489f404e3bad762215fc05447f9a77bb7f3b630a6f08a2851b999db41f7908290a35083600281905550620000a9826200011160201b62000bdc1760201c565b600360006101000a8154816001600160801b0302191690836001600160801b03160217905550620000e5816200017060201b62000c351760201c565b600360106101000a81548164ffffffffff021916908364ffffffffff1602179055505050505062000216565b6000600160801b82106200016c5760405162461bcd60e51b815260206004820152601e60248201527f76616c756520646f6573206e6f742066697420696e203132382062697473000060448201526064015b60405180910390fd5b5090565b60006501000000000082106200016c5760405162461bcd60e51b815260206004820152601d60248201527f76616c756520646f6573206e6f742066697420696e2034302062697473000000604482015260640162000163565b60008060008060808587031215620001e057600080fd5b845160208601519094506001600160a01b03811681146200020057600080fd5b6040860151606090960151949790965092505050565b6117db80620002266000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c80638755bcad116100b8578063c5ec89701161007c578063c5ec8970146102a5578063c7af3352146102d3578063d4066f4c146102eb578063d75a0683146102fe578063f1835db714610341578063f2fde38b1461035457600080fd5b80638755bcad1461022457806387ac4f5114610237578063926d7d7f1461024a578063beab713114610271578063c5b37c221461027a57600080fd5b80633408e470116100ff5780633408e470146101b95780635c975abb146101c95780636aca1be3146101e0578063715018a6146101f357806384db809f146101fb57600080fd5b806306afa63d1461013c5780630bf71175146101515780630c340a24146101645780631ed13d1b146101935780631eee6bc8146101a6575b600080fd5b61014f61014a36600461141f565b610367565b005b61014f61015f36600461123a565b61058d565b60005461010090046001600160a01b03165b6040516001600160a01b0390911681526020015b60405180910390f35b61014f6101a13660046113c5565b610668565b61014f6101b43660046111d2565b6106b8565b465b60405190815260200161018a565b60005460ff165b604051901515815260200161018a565b61014f6101ee3660046113c5565b6107e4565b61014f610881565b610176610209366004611327565b6005602052600090815260409020546001600160a01b031681565b6101d06102323660046113c5565b6108ff565b61014f610245366004611288565b610935565b6101bb7fe2b7fb3b832174769106daebcfd6d1970523240dda11281102db9363b83b0dc481565b6101bb60025481565b60035461028d906001600160801b031681565b6040516001600160801b03909116815260200161018a565b6003546102bd90600160801b900464ffffffffff1681565b60405164ffffffffff909116815260200161018a565b60005461010090046001600160a01b031633146101d0565b6101d06102f9366004611383565b610a76565b61032861030c366004611327565b60046020526000908152604090205467ffffffffffffffff1681565b60405167ffffffffffffffff909116815260200161018a565b6101d061034f366004611340565b610aac565b61014f6103623660046111b0565b610ba1565b82826040516103779291906114e4565b60405180910390208160006040518060400160405280601c815260200160008051602061178683398151915281525090506103d381846040516020016103be9291906114f4565b604051602081830303815290604052836108ff565b6103f85760405162461bcd60e51b81526004016103ef906115c1565b60405180910390fd5b366000610408602082898b611676565b9092509050600061041982846116a0565b9050600061042b6020601c8587611676565b610434916116be565b905060e081901c4663ffffffff161461048f5760405162461bcd60e51b815260206004820152601860248201527f657865637574696e67206f6e2077726f6e6720636861696e000000000000000060448201526064016103ef565b60008281526005602090815260408083205490516001600160a01b0390911692916104c09184918f918f9101611479565b6040516020818303038152906040528051906020012090506000829050806001600160a01b031663e248cff2868f8f6040518463ffffffff1660e01b815260040161050d93929190611545565b600060405180830381600087803b15801561052757600080fd5b505af115801561053b573d6000803e3d6000fd5b505050507f66d3a93bc0d53bcda132e74c043dee3c4a0e88451b90ca51439eee8ef22ea1da8e6003848e6040516105759493929190611610565b60405180910390a15050505050505050505050505050565b60006040518060400160405280601c815260200160008051602061178683398151915281525090506000836040516020016105db919060609190911b6001600160601b031916815260140190565b60405160208183030381529060405280519060200120905061063d828260405160200161060a91815260200190565b60408051601f19818403018152908290526106289291602001611516565b604051602081830303815290604052846108ff565b6106595760405162461bcd60e51b81526004016103ef9061157b565b61066284610c8c565b50505050565b81516020830120600061067b8284610d5a565b6040519091506001600160a01b038216907f391f5edd7209ba797e8055bce97cab2d1a480a2849b0c7fe965c370457166dc490600090a250505050565b6040516001600160601b0319606086811b821660208401526034830186905284901b166054820152606801604051602081830303815290604052805190602001208160006040518060400160405280601c8152602001600080516020611786833981519152815250905061073881846040516020016103be9291906114f4565b6107545760405162461bcd60e51b81526004016103ef906115c1565b6000868152600560205260409081902080546001600160a01b0319166001600160a01b038a81169182179092559151635c7d1b9b60e11b815260048101899052908716602482015288919063b8fa373690604401600060405180830381600087803b1580156107c257600080fd5b505af11580156107d6573d6000803e3d6000fd5b505050505050505050505050565b604080518082018252601c81526000805160206117868339815191526020808301919091528451858201208351918201819052919282916108559185910160408051601f19818403018152908290526108409291602001611516565b604051602081830303815290604052856108ff565b6108715760405162461bcd60e51b81526004016103ef9061157b565b61087a81610c8c565b5050505050565b60005461010090046001600160a01b031633146108b05760405162461bcd60e51b81526004016103ef9061157b565b600080546040516101009091046001600160a01b0316907f1f323489f404e3bad762215fc05447f9a77bb7f3b630a6f08a2851b999db41f7908390a360008054610100600160a81b0319169055565b81516020830120600090816109148285610d5a565b60005461010090046001600160a01b03908116911614925050505b92915050565b83838360405160200161094a939291906114a5565b604051602081830303815290604052805190602001208160006040518060400160405280601c8152602001600080516020611786833981519152815250905061099f81846040516020016103be9291906114f4565b6109bb5760405162461bcd60e51b81526004016103ef906115c1565b60005b86811015610a6c576000600560008a8a858181106109de576109de611759565b60209081029290920135835250810191909152604090810160002054905163d7f5b35960e01b81526001600160a01b0389811660048301529091169150819063d7f5b35990602401600060405180830381600087803b158015610a4057600080fd5b505af1158015610a54573d6000803e3d6000fd5b50505050508080610a649061171a565b9150506109be565b5050505050505050565b6000336001600160a01b03168383604051610a929291906114e4565b6040519081900390206001600160a01b0316149392505050565b6000806040518060400160405280601c8152602001600080516020611786833981519152815250905060008187604051602001610aea9291906114f4565b604051602081830303815290604052805190602001209050610b1a6000546001600160a01b036101009091041690565b6001600160a01b031660018288888860405160008152602001604052604051610b5f949392919093845260ff9290921660208401526040830152606082015260800190565b6020604051602081039080840390855afa158015610b81573d6000803e3d6000fd5b505050602060405103516001600160a01b03161492505050949350505050565b60005461010090046001600160a01b03163314610bd05760405162461bcd60e51b81526004016103ef9061157b565b610bd981610c8c565b50565b6000600160801b8210610c315760405162461bcd60e51b815260206004820152601e60248201527f76616c756520646f6573206e6f742066697420696e203132382062697473000060448201526064016103ef565b5090565b6000650100000000008210610c315760405162461bcd60e51b815260206004820152601d60248201527f76616c756520646f6573206e6f742066697420696e203430206269747300000060448201526064016103ef565b6001600160a01b038116610cf45760405162461bcd60e51b815260206004820152602960248201527f476f7665726e61626c653a206e6577206f776e657220697320746865207a65726044820152686f206164647265737360b81b60648201526084016103ef565b600080546040516001600160a01b038085169361010090930416917f1f323489f404e3bad762215fc05447f9a77bb7f3b630a6f08a2851b999db41f791a3600080546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b6000806000610d698585610d7e565b91509150610d7681610dee565b509392505050565b600080825160411415610db55760208301516040840151606085015160001a610da987828585610fa9565b94509450505050610de7565b825160401415610ddf5760208301516040840151610dd4868383611096565b935093505050610de7565b506000905060025b9250929050565b6000816004811115610e0257610e02611743565b1415610e0b5750565b6001816004811115610e1f57610e1f611743565b1415610e6d5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016103ef565b6002816004811115610e8157610e81611743565b1415610ecf5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016103ef565b6003816004811115610ee357610ee3611743565b1415610f3c5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016103ef565b6004816004811115610f5057610f50611743565b1415610bd95760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b60648201526084016103ef565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115610fe0575060009050600361108d565b8460ff16601b14158015610ff857508460ff16601c14155b15611009575060009050600461108d565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa15801561105d573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166110865760006001925092505061108d565b9150600090505b94509492505050565b6000806001600160ff1b03831660ff84901c601b016110b787828885610fa9565b935093505050935093915050565b80356001600160a01b03811681146110dc57600080fd5b919050565b60008083601f8401126110f357600080fd5b50813567ffffffffffffffff81111561110b57600080fd5b602083019150836020828501011115610de757600080fd5b600082601f83011261113457600080fd5b813567ffffffffffffffff8082111561114f5761114f61176f565b604051601f8301601f19908116603f011681019082821181831017156111775761117761176f565b8160405283815286602085880101111561119057600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000602082840312156111c257600080fd5b6111cb826110c5565b9392505050565b600080600080608085870312156111e857600080fd5b6111f1856110c5565b935060208501359250611206604086016110c5565b9150606085013567ffffffffffffffff81111561122257600080fd5b61122e87828801611123565b91505092959194509250565b6000806040838503121561124d57600080fd5b611256836110c5565b9150602083013567ffffffffffffffff81111561127257600080fd5b61127e85828601611123565b9150509250929050565b6000806000806060858703121561129e57600080fd5b843567ffffffffffffffff808211156112b657600080fd5b818701915087601f8301126112ca57600080fd5b8135818111156112d957600080fd5b8860208260051b85010111156112ee57600080fd5b60208301965080955050611304602088016110c5565b9350604087013591508082111561131a57600080fd5b5061122e87828801611123565b60006020828403121561133957600080fd5b5035919050565b6000806000806080858703121561135657600080fd5b84359350602085013560ff8116811461136e57600080fd5b93969395505050506040820135916060013590565b6000806020838503121561139657600080fd5b823567ffffffffffffffff8111156113ad57600080fd5b6113b9858286016110e1565b90969095509350505050565b600080604083850312156113d857600080fd5b823567ffffffffffffffff808211156113f057600080fd5b6113fc86838701611123565b9350602085013591508082111561141257600080fd5b5061127e85828601611123565b6000806000806060858703121561143557600080fd5b84359350602085013567ffffffffffffffff8082111561145457600080fd5b611460888389016110e1565b9095509350604087013591508082111561131a57600080fd5b6bffffffffffffffffffffffff198460601b168152818360148301376000910160140190815292915050565b60006001600160fb1b038411156114bb57600080fd5b8360051b8086843760609390931b6001600160601b031916919092019081526014019392505050565b8183823760009101908152919050565b600083516115068184602088016116ee565b9190910191825250602001919050565b600083516115288184602088016116ee565b83519083019061153c8183602088016116ee565b01949350505050565b83815260406020820152816040820152818360608301376000818301606090810191909152601f909201601f1916010192915050565b60208082526026908201527f476f7665726e61626c653a2063616c6c6572206973206e6f742074686520676f6040820152653b32b93737b960d11b606082015260800190565b6020808252602f908201527f7369676e656420627920676f7665726e6f723a204e6f742076616c696420736960408201526e3390333937b69033b7bb32b93737b960891b606082015260800190565b84815260006005851061163357634e487b7160e01b600052602160045260246000fd5b84602083015283604083015260806060830152825180608084015261165f8160a08501602087016116ee565b601f01601f19169190910160a00195945050505050565b6000808585111561168657600080fd5b8386111561169357600080fd5b5050820193919092039150565b8035602083101561092f57600019602084900360031b1b1692915050565b6001600160e01b031981358181169160048510156116e65780818660040360031b1b83161692505b505092915050565b60005b838110156117095781810151838201526020016116f1565b838111156106625750506000910152565b600060001982141561173c57634e487b7160e01b600052601160045260246000fd5b5060010190565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfe19457468657265756d205369676e6564204d6573736167653a0a333200000000a2646970667358221220e42466e537fe7875f8dad3dce5280af5984eb201933a0b124bf89d50c58d6b0964736f6c63430008050033";

export class SignatureBridge__factory extends ContractFactory {
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
    chainID: BigNumberish,
    initialGovernor: string,
    fee: BigNumberish,
    expiry: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SignatureBridge> {
    return super.deploy(
      chainID,
      initialGovernor,
      fee,
      expiry,
      overrides || {}
    ) as Promise<SignatureBridge>;
  }
  getDeployTransaction(
    chainID: BigNumberish,
    initialGovernor: string,
    fee: BigNumberish,
    expiry: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      chainID,
      initialGovernor,
      fee,
      expiry,
      overrides || {}
    );
  }
  attach(address: string): SignatureBridge {
    return super.attach(address) as SignatureBridge;
  }
  connect(signer: Signer): SignatureBridge__factory {
    return super.connect(signer) as SignatureBridge__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SignatureBridgeInterface {
    return new utils.Interface(_abi) as SignatureBridgeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SignatureBridge {
    return new Contract(address, _abi, signerOrProvider) as SignatureBridge;
  }
}
