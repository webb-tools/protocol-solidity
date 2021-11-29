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
  "0x608060405234801561001057600080fd5b5061188b806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063b9c6ea8714610030575b600080fd5b61004361003e366004611580565b610059565b6040516100509190611630565b60405180910390f35b6000610063611374565b604080518082018252875181526020808901518183015290835281516080810183528751518184019081528851830151606083015281528251808401845288830180515182525183015181840152818301528382015281518083018352865181528682015181830152838301528151600b8082526101808201909352600092909182016101608036833701905050905060005b600b811015610161578481600b811061011f57634e487b7160e01b600052603260045260246000fd5b602002015182828151811061014457634e487b7160e01b600052603260045260246000fd5b602090810291909101015280610159816117ee565b9150506100f6565b5061016c818361018a565b61017b57600192505050610182565b6000925050505b949350505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001816101b6610368565b9050806080015151855160016101cc91906117a0565b146101f25760405162461bcd60e51b81526004016101e99061163b565b60405180910390fd5b604080518082019091526000808252602082018190525b86518110156102dd578387828151811061023357634e487b7160e01b600052603260045260246000fd5b6020026020010151106102585760405162461bcd60e51b81526004016101e990611693565b6102c9826102c4856080015184600161027191906117a0565b8151811061028f57634e487b7160e01b600052603260045260246000fd5b60200260200101518a85815181106102b757634e487b7160e01b600052603260045260246000fd5b6020026020010151610c46565b610cb1565b9150806102d5816117ee565b915050610209565b5061031481836080015160008151811061030757634e487b7160e01b600052603260045260246000fd5b6020026020010151610cb1565b905061034a6103268660000151610d18565b8660200151846000015185602001518587604001518b604001518960600151610dad565b61035a5760019350505050610362565b600093505050505b92915050565b6103706113a6565b6040805180820182527f229140b67fcfcf3049595ff75e549d4fdf21fb4d1dcdb3cb9371f06bed9921c181527f08382ad8e66f245b397da86f562116dd6d3460f9b8c42271b502a1033c18b6e96020808301919091529083528151608080820184527f0f96b6b4127319718b503245ed652c753205293b14ce5876c1bcabab082bf60d8285019081527f100486fa5e1f0aa03310a179f6699f3142731105f9f56881c0abce7befc77c02606080850191909152908352845180860186527f043a5d45934f6ca80ac6da4f5fa494e5f528071c42de1ab97a6b6ec48a99384481527f09d5e83cf294d4b6acfa81b560556adc23761e8083ffc46a1fedb53faf4c9678818601528385015285840192909252835180820185527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c28186019081527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed828501528152845180860186527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b81527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa818601528185015285850152835190810184527f226335fbf9c528709d55ab406667e89b1c0787c2cfd137045e57bf2034a78e3a8185019081527f03b772075bf04c552497b1e8d064166d3206b2189cfd27554818f7affa927d50828401528152835180850185527f2a7cc6c6a5fef9f20e5eeb1adf48de00c375ef6d3b14fa4e472152672b818dbb81527f29926d1c06b468911296e30705a7c6d4c9470350d4c6624efc41bd98ec31dbbf8185015281840152908401528151600c8082526101a08201909352919082015b6105f46113ed565b8152602001906001900390816105ec57505060808201908152604080518082019091527f206911f3f1bb07e0fd15a134994e86fe4c8681b375ec2fcca4bafa19368cf0d181527f28002c7d6dd12f960f69b0bc2be7554c6a395600bb9d20766e1d66979c7edf9360208201529051805160009061068157634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f1a0686bb6155cab5ab0cf8332ddfa5a1044fcd91361b37d5466bac886de0522581526020017f04b8b8a9ffffc4be93e4a1510f47f5dded021186e71efcd978662a725f323bc4815250816080015160018151811061070657634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f26d24abe4f1064f0e0409caf8dd4a8809e2ff759c5e3d985051ae98f3967261581526020017f13b14ae4abfc4ab2ed825c6f40aced58b39d935f2737001d44439bc66c4fccd9815250816080015160028151811061078b57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f1116c1a4e98b8f784239744fff43a84c7c1a60fdbe780e443da99da48cd1db2681526020017f17d964e446fc555199696524b1d2c50a70d945725cd82672c4d3e1be357e9d89815250816080015160038151811061081057634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f06d3362c677080fbf4f677962a954243811a0ccf0eb4ddda5af1ad6ebda2819881526020017f15dbdfd7a513220bf8e08dfec0e60f56ee1bd3a461db6276f5e2d934ece8128c815250816080015160048151811061089557634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f0f03437d462db0b897d617918be9a4ee718a9942a107373cdbcd265525b864e381526020017f173cbde9eee38ebf5eb10b51de4920f0b140ca4cac59eb810c85c3e6e5a84178815250816080015160058151811061091a57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f278ba9401231dd4d013df6b6da51aa60e2ca4231e22ea4a8726c1fb4ef9df13081526020017f04f00ff0b6e1ee1d5d6589a0820a7539d7c6d3f9412c9c291cc20a9375bb6420815250816080015160068151811061099f57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f01347d9924c11f0229a432041db663a7cef0a778244bab156dc9173a22d8251281526020017f264306a75ab19a941e8190f177d091d60b242282b2a6a370ba084fabf82121fb8152508160800151600781518110610a2457634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f1c46f6a687ffa256f39e6924f5908ee9a3dd7b413887b701182a5d280f08c81a81526020017f0d4bbba5293643ec4aa2a28554cc52600ed1f3606937e1fb69e3ef2dec858f0c8152508160800151600881518110610aa957634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f14a74940d5c92e3e1acfd7892d339f2a72d1a0fd6206dbc4d1e854120c22f42d81526020017f090d5799a0dabc7ed635a4461d8ceac76a207087f6fa5ff3a50050fec88e284a8152508160800151600981518110610b2e57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f0d0b80530a38f33b1cf959973c00f8bd4615f4c0a5e0d662ae596bac26d774b481526020017f2a000744179f3da8d861d2bbfcce36ecbd2889acf4566552b7045b20aa4247db8152508160800151600a81518110610bb357634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f14639f5e77f561c5527c1789418672db44844e97f28d9f4335d95b47640b1eb681526020017f2d97f8d5feff7bd310f14935d0f341ef9a0b0d7399d4362615e57846cad256908152508160800151600b81518110610c3857634e487b7160e01b600052603260045260246000fd5b602002602001018190525090565b610c4e6113ed565b610c56611407565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa9050808015610c8957610c8b565bfe5b5080610ca95760405162461bcd60e51b81526004016101e990611667565b505092915050565b610cb96113ed565b610cc1611425565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa9050808015610c89575080610ca95760405162461bcd60e51b81526004016101e9906116fa565b610d206113ed565b81517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4790158015610d5357506020830151155b15610d735750506040805180820190915260008082526020820152610da8565b604051806040016040528084600001518152602001828560200151610d989190611809565b610da290846117d7565b90529150505b919050565b60408051600480825260a08201909252600091829190816020015b610dd06113ed565b815260200190600190039081610dc857505060408051600480825260a0820190925291925060009190602082015b610e06611443565b815260200190600190039081610dfe5790505090508a82600081518110610e3d57634e487b7160e01b600052603260045260246000fd5b60200260200101819052508882600181518110610e6a57634e487b7160e01b600052603260045260246000fd5b60200260200101819052508682600281518110610e9757634e487b7160e01b600052603260045260246000fd5b60200260200101819052508482600381518110610ec457634e487b7160e01b600052603260045260246000fd5b60200260200101819052508981600081518110610ef157634e487b7160e01b600052603260045260246000fd5b60200260200101819052508781600181518110610f1e57634e487b7160e01b600052603260045260246000fd5b60200260200101819052508581600281518110610f4b57634e487b7160e01b600052603260045260246000fd5b60200260200101819052508381600381518110610f7857634e487b7160e01b600052603260045260246000fd5b6020026020010181905250610f8d8282610f9c565b9b9a5050505050505050505050565b60008151835114610fbf5760405162461bcd60e51b81526004016101e9906116ca565b82516000610fce8260066117b8565b905060008167ffffffffffffffff811115610ff957634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015611022578160200160208202803683370190505b50905060005b838110156113215786818151811061105057634e487b7160e01b600052603260045260246000fd5b6020026020010151600001518282600661106a91906117b8565b6110759060006117a0565b8151811061109357634e487b7160e01b600052603260045260246000fd5b6020026020010181815250508681815181106110bf57634e487b7160e01b600052603260045260246000fd5b602002602001015160200151828260066110d991906117b8565b6110e49060016117a0565b8151811061110257634e487b7160e01b600052603260045260246000fd5b60200260200101818152505085818151811061112e57634e487b7160e01b600052603260045260246000fd5b60209081029190910101515151826111478360066117b8565b6111529060026117a0565b8151811061117057634e487b7160e01b600052603260045260246000fd5b60200260200101818152505085818151811061119c57634e487b7160e01b600052603260045260246000fd5b602090810291909101810151510151826111b78360066117b8565b6111c29060036117a0565b815181106111e057634e487b7160e01b600052603260045260246000fd5b60200260200101818152505085818151811061120c57634e487b7160e01b600052603260045260246000fd5b60200260200101516020015160006002811061123857634e487b7160e01b600052603260045260246000fd5b6020020151826112498360066117b8565b6112549060046117a0565b8151811061127257634e487b7160e01b600052603260045260246000fd5b60200260200101818152505085818151811061129e57634e487b7160e01b600052603260045260246000fd5b6020026020010151602001516001600281106112ca57634e487b7160e01b600052603260045260246000fd5b6020020151826112db8360066117b8565b6112e69060056117a0565b8151811061130457634e487b7160e01b600052603260045260246000fd5b602090810291909101015280611319816117ee565b915050611028565b5061132a611463565b6000602082602086026020860160086107d05a03fa9050808015610c895750806113665760405162461bcd60e51b81526004016101e990611726565b505115159695505050505050565b60405180606001604052806113876113ed565b8152602001611394611443565b81526020016113a16113ed565b905290565b6040518060a001604052806113b96113ed565b81526020016113c6611443565b81526020016113d3611443565b81526020016113e0611443565b8152602001606081525090565b604051806040016040528060008152602001600081525090565b60405180606001604052806003906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b6040518060400160405280611456611481565b81526020016113a1611481565b60405180602001604052806001906020820280368337509192915050565b60405180604001604052806002906020820280368337509192915050565b600082601f8301126114af578081fd5b60405161016080820182811067ffffffffffffffff821117156114d4576114d461183f565b60405281848281018710156114e7578485fd5b8492505b600b83101561150b578035825260019290920191602091820191016114eb565b509195945050505050565b600082601f830112611526578081fd5b6040516040810181811067ffffffffffffffff821117156115495761154961183f565b806040525080838560408601111561155f578384fd5b835b600281101561150b578135835260209283019290910190600101611561565b6000806000806102608587031215611596578384fd5b6115a08686611516565b9350604086605f8701126115b2578384fd5b60026115c56115c08261177f565b611755565b8083890160c08a018b8111156115d9578889fd5b885b85811015611601576115ed8d84611516565b8552602090940193918601916001016115db565b5082985061160f8c82611516565b975050505050505061162586610100870161149f565b905092959194509250565b901515815260200190565b6020808252601290820152711d995c9a599a595c8b5898590b5a5b9c1d5d60721b604082015260600190565b6020808252601290820152711c185a5c9a5b99cb5b5d5b0b59985a5b195960721b604082015260600190565b6020808252601f908201527f76657269666965722d6774652d736e61726b2d7363616c61722d6669656c6400604082015260600190565b6020808252601690820152751c185a5c9a5b99cb5b195b99dd1a1ccb59985a5b195960521b604082015260600190565b6020808252601290820152711c185a5c9a5b99cb5859190b59985a5b195960721b604082015260600190565b6020808252601590820152741c185a5c9a5b99cb5bdc18dbd9194b59985a5b1959605a1b604082015260600190565b60405181810167ffffffffffffffff811182821017156117775761177761183f565b604052919050565b600067ffffffffffffffff8211156117995761179961183f565b5060200290565b600082198211156117b3576117b3611829565b500190565b60008160001904831182151516156117d2576117d2611829565b500290565b6000828210156117e9576117e9611829565b500390565b600060001982141561180257611802611829565b5060010190565b60008261182457634e487b7160e01b81526012600452602481fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220dded664ea94b00e6b01453f7a388fe18c7d67e3ac1baad1895c26bcae33478bb64736f6c63430008000033";

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
