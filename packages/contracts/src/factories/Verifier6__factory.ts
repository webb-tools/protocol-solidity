/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Verifier6, Verifier6Interface } from "../Verifier6";

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
        internalType: "uint256[13]",
        name: "input",
        type: "uint256[13]",
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
  "0x608060405234801561001057600080fd5b50611995806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063f143a75e14610030575b600080fd5b61004361003e36600461168a565b610059565b604051610050919061173a565b60405180910390f35b600061006361147e565b604080518082018252875181526020808901518183015290835281516080810183528751518184019081528851830151606083015281528251808401845288830180515182525183015181840152818301528382015281518083018352865181528682015181830152838301528151600d8082526101c08201909352600092909182016101a08036833701905050905060005b600d811015610161578481600d811061011f57634e487b7160e01b600052603260045260246000fd5b602002015182828151811061014457634e487b7160e01b600052603260045260246000fd5b602090810291909101015280610159816118f8565b9150506100f6565b5061016c818361018a565b61017b57600192505050610182565b6000925050505b949350505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001816101b6610368565b9050806080015151855160016101cc91906118aa565b146101f25760405162461bcd60e51b81526004016101e990611745565b60405180910390fd5b604080518082019091526000808252602082018190525b86518110156102dd578387828151811061023357634e487b7160e01b600052603260045260246000fd5b6020026020010151106102585760405162461bcd60e51b81526004016101e99061179d565b6102c9826102c4856080015184600161027191906118aa565b8151811061028f57634e487b7160e01b600052603260045260246000fd5b60200260200101518a85815181106102b757634e487b7160e01b600052603260045260246000fd5b6020026020010151610d50565b610dbb565b9150806102d5816118f8565b915050610209565b5061031481836080015160008151811061030757634e487b7160e01b600052603260045260246000fd5b6020026020010151610dbb565b905061034a6103268660000151610e22565b8660200151846000015185602001518587604001518b604001518960600151610eb7565b61035a5760019350505050610362565b600093505050505b92915050565b6103706114b0565b6040805180820182527f144eb091c16ba8b33a5dc5f67230ab8037fdbc24e8434d4d145e2e86090ac99181527f0bfd7814aef9058cc4afab73eac966a9926b1fb5bf44e869a5097bbd8f0136386020808301919091529083528151608080820184527f01be67363af78c013e78be060fbf5908f614ddf21b64fd550111a9e71aba7d388285019081527f094e0cbcf6c5d9edbb40880709beeea4955614321b1cf743cf9d35e37362e51c606080850191909152908352845180860186527f2413ad2058836d73d4737ee5494c7022c043320c664ddeb7e6214f40a2e40f6781527f0af19d8be2408e789be51a423fff1a7331e062709739f35aa6f8257f392b60d9818601528385015285840192909252835180820185527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c28186019081527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed828501528152845180860186527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b81527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa818601528185015285850152835190810184527f2feac9bffb13996e8a85329f8e4b885213d169b126d965e1920352acfee535c38185019081527f27a0052c125e9f4b83f34b89d476817a19cd6bf6aec45bb91c0c1000504f4342828401528152835180850185527f0c3a90fa01f33d57fc3165675fbecab52360178cc428f7eac09d4c07c73181af81527f048c211205725010fd0d72f974e445547f6b2886ae54c754e73819001403fd148185015281840152908401528151600e8082526101e08201909352919082015b6105f46114f7565b8152602001906001900390816105ec57505060808201908152604080518082019091527f12e3e369e1b8d448b985441b9d805231250663d32c25cae4bb47fdf22daf485a81527f0370fd9eeb7103a82dd9f0af74d3e7efd6a73c75222f4def8826a08f56c133ef60208201529051805160009061068157634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f2317eace64b52b2e56840772221c7a833933f23fe66c362fe4775095fa4b232e81526020017f29c6e249c5fcab68c57cd398e182d30fcca92b764ee1fdb10a59c081712bf442815250816080015160018151811061070657634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f2eeb6a5de5c60b0e10ab63a25b37e49832c0eddd5960ffe8529095a6a6ee4c0281526020017f068132905cd692585af4672eb1e33da68fe5ba0d1f01ecc9ca0c6606bca6d50b815250816080015160028151811061078b57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f086312015071438b49d74b268916ffe6f8c4b3583629d4a28b229b98c3e9944e81526020017f2074f9b6d7b1cc5c88660e862e64f487b5d6c94358f10452fa7a7df901932ea7815250816080015160038151811061081057634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f30530a22273ea291e05845eeca1d5ba6998d576bdca3a1f498736833d15bebb381526020017f1263db619acc742cabf132d41dbb18c6b468f6cec63a2e9bb14cf0aaf45b14fe815250816080015160048151811061089557634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f2dea6ea31221bf5fadebdda1812863c3fba106cb8c9125e7705b697d1a02ed9f81526020017f0e0cd80b863fbcfabff9446183eafdac9c98c368c262a76824ee8e12a2bb64c6815250816080015160058151811061091a57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f011f98cf989eb0000d64982710313880cdfe361b013904ceb75fd6562533528f81526020017f259690a025daf0fc59e8a5f2a11d86cc96a54df4be25643ebaccb671a3c5fc8b815250816080015160068151811061099f57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f041ca151e9e24e4c098a9571ca29f31cbc843275661df55b942250f2ce9fc90c81526020017f16db13870db54aa498d1ff25f38fa1d158da14645cc58898d268bc451ddd88bc8152508160800151600781518110610a2457634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f2c3f1afa992d171c8ca89c732f9753aab8cb4e486e09c54a0dd5a9c14d90bfb081526020017f2cd64d90ca35f76f412eb07c106c0311123959637ed61fe9c2032e23fb37cb5d8152508160800151600881518110610aa957634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f093f21df93210925b489b705baf092bf8c85860e3ff2fd0611fcd779ec8f6c2381526020017f2f9ef6cb4344b61c62e4c272d37fc4469c3b5354b1c7c43b753186d04572c3aa8152508160800151600981518110610b2e57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f0baa188f671a5e3bb934fe5d028c1bfaaaf1f43a817c9b7b98ed7bc1e4fc8a2281526020017f15e725eac768d45a9d9e8d9d05bd3eb145c2aeacb46c02a5c45f02bfc756a3988152508160800151600a81518110610bb357634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f268ef1edbc27210add2433f5729351084002d548260d10e4c8b88f57d33d7a0081526020017f18f898083d968276dad2c2a36a179064da6bd3a770d4fc577905e3b29d1a62f28152508160800151600b81518110610c3857634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f10e139808efc1d3a9a3e5c691f187170a51ba2fd7a7d95c5a363012c42bfd30981526020017f16fab745fd8c75acedcddcb998fd47e9e5fb3c2a2c6d5bfaf028a0543e1158838152508160800151600c81518110610cbd57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f12d526d7b2221ce5760c705cfa5bf7eeac7eeeb760601734ce9740f71c0a75ec81526020017f2eab56ea25ee0ffcde9db7344db710b9c462301a967d2cafb2fb7adf778bf32a8152508160800151600d81518110610d4257634e487b7160e01b600052603260045260246000fd5b602002602001018190525090565b610d586114f7565b610d60611511565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa9050808015610d9357610d95565bfe5b5080610db35760405162461bcd60e51b81526004016101e990611771565b505092915050565b610dc36114f7565b610dcb61152f565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa9050808015610d93575080610db35760405162461bcd60e51b81526004016101e990611804565b610e2a6114f7565b81517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4790158015610e5d57506020830151155b15610e7d5750506040805180820190915260008082526020820152610eb2565b604051806040016040528084600001518152602001828560200151610ea29190611913565b610eac90846118e1565b90529150505b919050565b60408051600480825260a08201909252600091829190816020015b610eda6114f7565b815260200190600190039081610ed257505060408051600480825260a0820190925291925060009190602082015b610f1061154d565b815260200190600190039081610f085790505090508a82600081518110610f4757634e487b7160e01b600052603260045260246000fd5b60200260200101819052508882600181518110610f7457634e487b7160e01b600052603260045260246000fd5b60200260200101819052508682600281518110610fa157634e487b7160e01b600052603260045260246000fd5b60200260200101819052508482600381518110610fce57634e487b7160e01b600052603260045260246000fd5b60200260200101819052508981600081518110610ffb57634e487b7160e01b600052603260045260246000fd5b6020026020010181905250878160018151811061102857634e487b7160e01b600052603260045260246000fd5b6020026020010181905250858160028151811061105557634e487b7160e01b600052603260045260246000fd5b6020026020010181905250838160038151811061108257634e487b7160e01b600052603260045260246000fd5b602002602001018190525061109782826110a6565b9b9a5050505050505050505050565b600081518351146110c95760405162461bcd60e51b81526004016101e9906117d4565b825160006110d88260066118c2565b905060008167ffffffffffffffff81111561110357634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561112c578160200160208202803683370190505b50905060005b8381101561142b5786818151811061115a57634e487b7160e01b600052603260045260246000fd5b6020026020010151600001518282600661117491906118c2565b61117f9060006118aa565b8151811061119d57634e487b7160e01b600052603260045260246000fd5b6020026020010181815250508681815181106111c957634e487b7160e01b600052603260045260246000fd5b602002602001015160200151828260066111e391906118c2565b6111ee9060016118aa565b8151811061120c57634e487b7160e01b600052603260045260246000fd5b60200260200101818152505085818151811061123857634e487b7160e01b600052603260045260246000fd5b60209081029190910101515151826112518360066118c2565b61125c9060026118aa565b8151811061127a57634e487b7160e01b600052603260045260246000fd5b6020026020010181815250508581815181106112a657634e487b7160e01b600052603260045260246000fd5b602090810291909101810151510151826112c18360066118c2565b6112cc9060036118aa565b815181106112ea57634e487b7160e01b600052603260045260246000fd5b60200260200101818152505085818151811061131657634e487b7160e01b600052603260045260246000fd5b60200260200101516020015160006002811061134257634e487b7160e01b600052603260045260246000fd5b6020020151826113538360066118c2565b61135e9060046118aa565b8151811061137c57634e487b7160e01b600052603260045260246000fd5b6020026020010181815250508581815181106113a857634e487b7160e01b600052603260045260246000fd5b6020026020010151602001516001600281106113d457634e487b7160e01b600052603260045260246000fd5b6020020151826113e58360066118c2565b6113f09060056118aa565b8151811061140e57634e487b7160e01b600052603260045260246000fd5b602090810291909101015280611423816118f8565b915050611132565b5061143461156d565b6000602082602086026020860160086107d05a03fa9050808015610d935750806114705760405162461bcd60e51b81526004016101e990611830565b505115159695505050505050565b60405180606001604052806114916114f7565b815260200161149e61154d565b81526020016114ab6114f7565b905290565b6040518060a001604052806114c36114f7565b81526020016114d061154d565b81526020016114dd61154d565b81526020016114ea61154d565b8152602001606081525090565b604051806040016040528060008152602001600081525090565b60405180606001604052806003906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b604051806040016040528061156061158b565b81526020016114ab61158b565b60405180602001604052806001906020820280368337509192915050565b60405180604001604052806002906020820280368337509192915050565b600082601f8301126115b9578081fd5b6040516101a080820182811067ffffffffffffffff821117156115de576115de611949565b60405281848281018710156115f1578485fd5b8492505b600d831015611615578035825260019290920191602091820191016115f5565b509195945050505050565b600082601f830112611630578081fd5b6040516040810181811067ffffffffffffffff8211171561165357611653611949565b8060405250808385604086011115611669578384fd5b835b600281101561161557813583526020928301929091019060010161166b565b6000806000806102a085870312156116a0578384fd5b6116aa8686611620565b9350604086605f8701126116bc578384fd5b60026116cf6116ca82611889565b61185f565b8083890160c08a018b8111156116e3578889fd5b885b8581101561170b576116f78d84611620565b8552602090940193918601916001016116e5565b508298506117198c82611620565b975050505050505061172f8661010087016115a9565b905092959194509250565b901515815260200190565b6020808252601290820152711d995c9a599a595c8b5898590b5a5b9c1d5d60721b604082015260600190565b6020808252601290820152711c185a5c9a5b99cb5b5d5b0b59985a5b195960721b604082015260600190565b6020808252601f908201527f76657269666965722d6774652d736e61726b2d7363616c61722d6669656c6400604082015260600190565b6020808252601690820152751c185a5c9a5b99cb5b195b99dd1a1ccb59985a5b195960521b604082015260600190565b6020808252601290820152711c185a5c9a5b99cb5859190b59985a5b195960721b604082015260600190565b6020808252601590820152741c185a5c9a5b99cb5bdc18dbd9194b59985a5b1959605a1b604082015260600190565b60405181810167ffffffffffffffff8111828210171561188157611881611949565b604052919050565b600067ffffffffffffffff8211156118a3576118a3611949565b5060200290565b600082198211156118bd576118bd611933565b500190565b60008160001904831182151516156118dc576118dc611933565b500290565b6000828210156118f3576118f3611933565b500390565b600060001982141561190c5761190c611933565b5060010190565b60008261192e57634e487b7160e01b81526012600452602481fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea264697066735822122080844f6805f84d133c8a679733e76c129aa4618b343a3bf65b85e34a0a7d34f864736f6c63430008000033";

export class Verifier6__factory extends ContractFactory {
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
  ): Promise<Verifier6> {
    return super.deploy(overrides || {}) as Promise<Verifier6>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Verifier6 {
    return super.attach(address) as Verifier6;
  }
  connect(signer: Signer): Verifier6__factory {
    return super.connect(signer) as Verifier6__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Verifier6Interface {
    return new utils.Interface(_abi) as Verifier6Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Verifier6 {
    return new Contract(address, _abi, signerOrProvider) as Verifier6;
  }
}
