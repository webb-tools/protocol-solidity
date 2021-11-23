/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Verifier4, Verifier4Interface } from "../Verifier4";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "a",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "b",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "c",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[11]",
        name: "input",
        type: "uint256[11]",
      },
    ],
    name: "verifyProof",
    outputs: [
      {
        internalType: "bool",
        name: "r",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061188a806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063b9c6ea8714610030575b600080fd5b61004361003e36600461157f565b610059565b604051610050919061162f565b60405180910390f35b6000610063611373565b604080518082018252875181526020808901518183015290835281516080810183528751518184019081528851830151606083015281528251808401845288830180515182525183015181840152818301528382015281518083018352865181528682015181830152838301528151600b8082526101808201909352600092909182016101608036833701905050905060005b600b811015610161578481600b811061011f57634e487b7160e01b600052603260045260246000fd5b602002015182828151811061014457634e487b7160e01b600052603260045260246000fd5b602090810291909101015280610159816117ed565b9150506100f6565b5061016c818361018a565b61017b57600192505050610182565b6000925050505b949350505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001816101b6610368565b9050806080015151855160016101cc919061179f565b146101f25760405162461bcd60e51b81526004016101e99061163a565b60405180910390fd5b604080518082019091526000808252602082018190525b86518110156102dd578387828151811061023357634e487b7160e01b600052603260045260246000fd5b6020026020010151106102585760405162461bcd60e51b81526004016101e990611692565b6102c9826102c48560800151846001610271919061179f565b8151811061028f57634e487b7160e01b600052603260045260246000fd5b60200260200101518a85815181106102b757634e487b7160e01b600052603260045260246000fd5b6020026020010151610c45565b610cb0565b9150806102d5816117ed565b915050610209565b5061031481836080015160008151811061030757634e487b7160e01b600052603260045260246000fd5b6020026020010151610cb0565b905061034a6103268660000151610d17565b8660200151846000015185602001518587604001518b604001518960600151610dac565b61035a5760019350505050610362565b600093505050505b92915050565b6103706113a5565b6040805180820182527f144eb091c16ba8b33a5dc5f67230ab8037fdbc24e8434d4d145e2e86090ac99181527f0bfd7814aef9058cc4afab73eac966a9926b1fb5bf44e869a5097bbd8f0136386020808301919091529083528151608080820184527f01be67363af78c013e78be060fbf5908f614ddf21b64fd550111a9e71aba7d388285019081527f094e0cbcf6c5d9edbb40880709beeea4955614321b1cf743cf9d35e37362e51c606080850191909152908352845180860186527f2413ad2058836d73d4737ee5494c7022c043320c664ddeb7e6214f40a2e40f6781527f0af19d8be2408e789be51a423fff1a7331e062709739f35aa6f8257f392b60d9818601528385015285840192909252835180820185527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c28186019081527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed828501528152845180860186527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b81527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa818601528185015285850152835190810184527f2e30f4575af9adbb5f88fc5c2d33efe82bb4c3d7e947cd34987cc5552506b63e8185019081527f11e4da4524bacb0d1845f2692b0dbd829425c625001603870255ac680d315961828401528152835180850185527f26f1c6b1a7e747bc25ed1f73a95b5ad5b31ccf81cc1de55337ad8c83c88cf58981527ec47b070c6e7ca8e4f5ae20da40ff51989820875e8f14c729aff5178f0cdb1b8185015281840152908401528151600c8082526101a08201909352919082015b6105f36113ec565b8152602001906001900390816105eb57505060808201908152604080518082019091527f1ddf3996157947cbd9e2f23f61a11cb107657af555d8e9df3009593eeabdf31881527f1bfa473bf92ed0e8676b1a3df450a8965d35999d630cd50a4d2844a257b44a9760208201529051805160009061068057634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f04a1b6c413cf2b7e447364a75c217c73dbd2706ce262e6d52b921865343c4c3381526020017f08b849b5e6e701fe398fb20ca5b211877d3cc07e74112e512583544a3c2988fb815250816080015160018151811061070557634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f27ca346c84f4c763f4c9d37a4da889c2c29ff1ec909314f94e44740a8c9905e681526020017f11c5eddd984f5899d03e0e57d25d40ab824bc08bd4e7b762b1c639ca63686cb4815250816080015160028151811061078a57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f02f4794065a110087e5977f4f9dff1a8b0571356c5ab94b388f57c12921dd8d781526020017f2ad79ccf11b5c6c3823b1c9f48cf00c81b4532f7fe59b3766c16f04216973292815250816080015160038151811061080f57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f2c07cc447d594f5b67338fcbdd706a0193ea83e79dce2b3c0f1f0858c7028e1c81526020017f054e5fce75e685da16eb08e7c0cc0b196e15de676a69cac3210dee925228ecbe815250816080015160048151811061089457634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f2ee620aae10d61d6a5055956469b9a961203d1bad5e685ce869ee93aedc04a1681526020017f0d3cf183b81a98befb10ec5f60346fa009e3c7eff39e1e39e4e882c698107483815250816080015160058151811061091957634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f07e481f2bdca496c4c3ac791f8fc56458cdb8baebaecd90d7df6558ece5e010081526020017f254ebe6c120298d0fd93f0ab547b26bb900e89338f8518c9c5645b406520874b815250816080015160068151811061099e57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f2591eb320fb1bec3e93de405cc9f6fb5fc644fe6a4715007fe617fbaabd964ea81526020017f21e7a56e87a2813f995baf1f019d450bafd174a552ad61c318b48d1890fe03778152508160800151600781518110610a2357634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f1e1fb1a88afaca55b967d623e234beecc32e9d98d1d7851c7eab72b4a01e75c181526020017f0a8e8a1f717634583e2efeb71e52dfcf51c3e7dafaf1e74be670c4da1f702d878152508160800151600881518110610aa857634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f1e014e9ce2a4bf6cf024b244d69f520e5594f36116dae819407adb11ed500af881526020017f02fdc17f0c10d7a7de25299f1853b7f8aa495690b66ea32e2da355422ae1c6758152508160800151600981518110610b2d57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f1e1c440738cd373d7a90a7855ced6de9b7338cecfe67c7466bf72b0ead2b0ce281526020017f09f4ce2cdfad15cf24f946af946ab170308a6e2a0aeaeb3241474fb41c06bb2c8152508160800151600a81518110610bb257634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f0704169e3ad42a802c2d12c39efc8f5da762ed7b30cdcd36bc1f88d92b43138481526020017f1ada014205b38fbe24376d1094e97e12d94f4e27a3b6a2b7b1fc620079d92f8f8152508160800151600b81518110610c3757634e487b7160e01b600052603260045260246000fd5b602002602001018190525090565b610c4d6113ec565b610c55611406565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa9050808015610c8857610c8a565bfe5b5080610ca85760405162461bcd60e51b81526004016101e990611666565b505092915050565b610cb86113ec565b610cc0611424565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa9050808015610c88575080610ca85760405162461bcd60e51b81526004016101e9906116f9565b610d1f6113ec565b81517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4790158015610d5257506020830151155b15610d725750506040805180820190915260008082526020820152610da7565b604051806040016040528084600001518152602001828560200151610d979190611808565b610da190846117d6565b90529150505b919050565b60408051600480825260a08201909252600091829190816020015b610dcf6113ec565b815260200190600190039081610dc757505060408051600480825260a0820190925291925060009190602082015b610e05611442565b815260200190600190039081610dfd5790505090508a82600081518110610e3c57634e487b7160e01b600052603260045260246000fd5b60200260200101819052508882600181518110610e6957634e487b7160e01b600052603260045260246000fd5b60200260200101819052508682600281518110610e9657634e487b7160e01b600052603260045260246000fd5b60200260200101819052508482600381518110610ec357634e487b7160e01b600052603260045260246000fd5b60200260200101819052508981600081518110610ef057634e487b7160e01b600052603260045260246000fd5b60200260200101819052508781600181518110610f1d57634e487b7160e01b600052603260045260246000fd5b60200260200101819052508581600281518110610f4a57634e487b7160e01b600052603260045260246000fd5b60200260200101819052508381600381518110610f7757634e487b7160e01b600052603260045260246000fd5b6020026020010181905250610f8c8282610f9b565b9b9a5050505050505050505050565b60008151835114610fbe5760405162461bcd60e51b81526004016101e9906116c9565b82516000610fcd8260066117b7565b905060008167ffffffffffffffff811115610ff857634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015611021578160200160208202803683370190505b50905060005b838110156113205786818151811061104f57634e487b7160e01b600052603260045260246000fd5b6020026020010151600001518282600661106991906117b7565b61107490600061179f565b8151811061109257634e487b7160e01b600052603260045260246000fd5b6020026020010181815250508681815181106110be57634e487b7160e01b600052603260045260246000fd5b602002602001015160200151828260066110d891906117b7565b6110e390600161179f565b8151811061110157634e487b7160e01b600052603260045260246000fd5b60200260200101818152505085818151811061112d57634e487b7160e01b600052603260045260246000fd5b60209081029190910101515151826111468360066117b7565b61115190600261179f565b8151811061116f57634e487b7160e01b600052603260045260246000fd5b60200260200101818152505085818151811061119b57634e487b7160e01b600052603260045260246000fd5b602090810291909101810151510151826111b68360066117b7565b6111c190600361179f565b815181106111df57634e487b7160e01b600052603260045260246000fd5b60200260200101818152505085818151811061120b57634e487b7160e01b600052603260045260246000fd5b60200260200101516020015160006002811061123757634e487b7160e01b600052603260045260246000fd5b6020020151826112488360066117b7565b61125390600461179f565b8151811061127157634e487b7160e01b600052603260045260246000fd5b60200260200101818152505085818151811061129d57634e487b7160e01b600052603260045260246000fd5b6020026020010151602001516001600281106112c957634e487b7160e01b600052603260045260246000fd5b6020020151826112da8360066117b7565b6112e590600561179f565b8151811061130357634e487b7160e01b600052603260045260246000fd5b602090810291909101015280611318816117ed565b915050611027565b50611329611462565b6000602082602086026020860160086107d05a03fa9050808015610c885750806113655760405162461bcd60e51b81526004016101e990611725565b505115159695505050505050565b60405180606001604052806113866113ec565b8152602001611393611442565b81526020016113a06113ec565b905290565b6040518060a001604052806113b86113ec565b81526020016113c5611442565b81526020016113d2611442565b81526020016113df611442565b8152602001606081525090565b604051806040016040528060008152602001600081525090565b60405180606001604052806003906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b6040518060400160405280611455611480565b81526020016113a0611480565b60405180602001604052806001906020820280368337509192915050565b60405180604001604052806002906020820280368337509192915050565b600082601f8301126114ae578081fd5b60405161016080820182811067ffffffffffffffff821117156114d3576114d361183e565b60405281848281018710156114e6578485fd5b8492505b600b83101561150a578035825260019290920191602091820191016114ea565b509195945050505050565b600082601f830112611525578081fd5b6040516040810181811067ffffffffffffffff821117156115485761154861183e565b806040525080838560408601111561155e578384fd5b835b600281101561150a578135835260209283019290910190600101611560565b6000806000806102608587031215611595578384fd5b61159f8686611515565b9350604086605f8701126115b1578384fd5b60026115c46115bf8261177e565b611754565b8083890160c08a018b8111156115d8578889fd5b885b85811015611600576115ec8d84611515565b8552602090940193918601916001016115da565b5082985061160e8c82611515565b975050505050505061162486610100870161149e565b905092959194509250565b901515815260200190565b6020808252601290820152711d995c9a599a595c8b5898590b5a5b9c1d5d60721b604082015260600190565b6020808252601290820152711c185a5c9a5b99cb5b5d5b0b59985a5b195960721b604082015260600190565b6020808252601f908201527f76657269666965722d6774652d736e61726b2d7363616c61722d6669656c6400604082015260600190565b6020808252601690820152751c185a5c9a5b99cb5b195b99dd1a1ccb59985a5b195960521b604082015260600190565b6020808252601290820152711c185a5c9a5b99cb5859190b59985a5b195960721b604082015260600190565b6020808252601590820152741c185a5c9a5b99cb5bdc18dbd9194b59985a5b1959605a1b604082015260600190565b60405181810167ffffffffffffffff811182821017156117765761177661183e565b604052919050565b600067ffffffffffffffff8211156117985761179861183e565b5060200290565b600082198211156117b2576117b2611828565b500190565b60008160001904831182151516156117d1576117d1611828565b500290565b6000828210156117e8576117e8611828565b500390565b600060001982141561180157611801611828565b5060010190565b60008261182357634e487b7160e01b81526012600452602481fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220982553e11455bd1451dec220729a7231af6e3760eeff3ae84e3a1a599899e1dc64736f6c63430008000033";

export class Verifier4__factory extends ContractFactory {
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
  ): Promise<Verifier4> {
    return super.deploy(overrides || {}) as Promise<Verifier4>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Verifier4 {
    return super.attach(address) as Verifier4;
  }
  connect(signer: Signer): Verifier4__factory {
    return super.connect(signer) as Verifier4__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Verifier4Interface {
    return new utils.Interface(_abi) as Verifier4Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Verifier4 {
    return new Contract(address, _abi, signerOrProvider) as Verifier4;
  }
}
