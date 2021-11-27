/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Verifier5, Verifier5Interface } from "../Verifier5";

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
        internalType: "uint256[12]",
        name: "input",
        type: "uint256[12]",
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
  "0x608060405234801561001057600080fd5b50611910806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80638cbac0fa14610030575b600080fd5b61004361003e366004611605565b610059565b60405161005091906116b5565b60405180910390f35b60006100636113f9565b604080518082018252875181526020808901518183015290835281516080810183528751518184019081528851830151606083015281528251808401845288830180515182525183015181840152818301528382015281518083018352865181528682015181830152838301528151600c8082526101a08201909352600092909182016101808036833701905050905060005b600c811015610161578481600c811061011f57634e487b7160e01b600052603260045260246000fd5b602002015182828151811061014457634e487b7160e01b600052603260045260246000fd5b60209081029190910101528061015981611873565b9150506100f6565b5061016c818361018a565b61017b57600192505050610182565b6000925050505b949350505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001816101b6610368565b9050806080015151855160016101cc9190611825565b146101f25760405162461bcd60e51b81526004016101e9906116c0565b60405180910390fd5b604080518082019091526000808252602082018190525b86518110156102dd578387828151811061023357634e487b7160e01b600052603260045260246000fd5b6020026020010151106102585760405162461bcd60e51b81526004016101e990611718565b6102c9826102c485608001518460016102719190611825565b8151811061028f57634e487b7160e01b600052603260045260246000fd5b60200260200101518a85815181106102b757634e487b7160e01b600052603260045260246000fd5b6020026020010151610ccb565b610d36565b9150806102d581611873565b915050610209565b5061031481836080015160008151811061030757634e487b7160e01b600052603260045260246000fd5b6020026020010151610d36565b905061034a6103268660000151610d9d565b8660200151846000015185602001518587604001518b604001518960600151610e32565b61035a5760019350505050610362565b600093505050505b92915050565b61037061142b565b6040805180820182527f144eb091c16ba8b33a5dc5f67230ab8037fdbc24e8434d4d145e2e86090ac99181527f0bfd7814aef9058cc4afab73eac966a9926b1fb5bf44e869a5097bbd8f0136386020808301919091529083528151608080820184527f01be67363af78c013e78be060fbf5908f614ddf21b64fd550111a9e71aba7d388285019081527f094e0cbcf6c5d9edbb40880709beeea4955614321b1cf743cf9d35e37362e51c606080850191909152908352845180860186527f2413ad2058836d73d4737ee5494c7022c043320c664ddeb7e6214f40a2e40f6781527f0af19d8be2408e789be51a423fff1a7331e062709739f35aa6f8257f392b60d9818601528385015285840192909252835180820185527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c28186019081527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed828501528152845180860186527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b81527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa818601528185015285850152835190810184527f1122adb914116fd0b48c78bf6dcfab40f6a31e4070a86d6f0827fbf196635ab38185019081527f01f2202fbe1a0980d0b50a12b3d2f2cba731cccfefe0c8cbb2c09ac1fd12a57a828401528152835180850185527f20639d55f6275b58fbab365c35068d6d98b2dc7eec378d620fc2209334aa309381527f1a696a3762ab5c798c57c3cf81a7dbb60c4fa38ca6872a5de8c265176a22baa18185015281840152908401528151600d8082526101c08201909352919082015b6105f4611472565b8152602001906001900390816105ec57505060808201908152604080518082019091527f23cd48a835024a91030160e8a6213504421f29564885593e4bc2f184cab5019081527f2e27a6d570c76ad9879f1e2aec55f501d76a5f8c8dddacecafd0d4c68b83139a60208201529051805160009061068157634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f2fd364ec0abae5e1ba91ea181efec0b0086eb297cef220f392a2e601fa43944e81526020017f0258634f459e5f77f629026299d30163dfc6194a65bdfbef20c6cb85b12f6f64815250816080015160018151811061070657634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f1f2ce70295627cecbc71b6513b20b9ffc8968633611bcc95b57d2fdeee19a8d081526020017f0e331fb9984812c5ec21cdcf23958c9e9832ddd2996224f4ea6cfeecedcecc4f815250816080015160028151811061078b57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f07c7494e47072eb848a5655efe0df1a8341c1ae83487a56a21d6688ebb9f097881526020017f11a0029332fdcd5d08dcfbbd55783959f64aaac0f57d9977922d16bf02b759e1815250816080015160038151811061081057634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f137b6aff448dfb6ab59bfe079d805350b8deedf8fe8f60ff29dc4144c2eed89f81526020017f208e2d8356f7bb4ab1a9dcd05fdec49e3d824954d66f490412dc3604fe6b4ebc815250816080015160048151811061089557634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f048b46809a0243e0b17a8b17772e4d94163426d57ae764eb065610daafa747b281526020017f2c0401c37b8cd1d29505bd4841f31be2b3335c5b20433163af38c267d3a8a240815250816080015160058151811061091a57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f240657f41612ea9c13f1118d7d3696ec1eab37bb66703a333b79e7d51fd40f8581526020017f03a17faadfd1ee0616dc2f290c4e8586cda9c72baad30bd00c906fa9c94de62a815250816080015160068151811061099f57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f22679fe7446f5f946a521a523bcb8f366f8b1063f8ca083ad10df08159a43faa81526020017f1721ced8d5e0196f537ad8f772d2d178449f5ae3b97feb640f9bc9db44c270388152508160800151600781518110610a2457634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f014b279747da8292cbd1d7dc78cc06886459b5048ea286949254bb557804dbde81526020017f2f85eecbc99dc3ddcc35a2cc504f1d2a891428aa67514ea72f9e88c3149504ea8152508160800151600881518110610aa957634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f16026aa3bb6bcc3fcf3b2edb0a41c72d12c4630fa18ae80332668847e9e281da81526020017f125609f9f45cf8f391bb3349200f365a3a1624d6bd3c2547d6810afcc198c75e8152508160800151600981518110610b2e57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f2dfd6a20b77dcac7cc061fd9762f34ac5f5a7fea90d55ecbd4a5c4cb7d030df481526020017f0e5bf0e3a38815cfc002f23379163f6c3d446c777d01777d57a75367d54d08898152508160800151600a81518110610bb357634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f0638c63d32610d99578601ddfd7b4e810ace3bc390ffc876af823dbcb85afc7b81526020017f182e4734ce373ad04d088bf31c4a9556e1b94511702d60d93f0ef879b4376acd8152508160800151600b81518110610c3857634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f143f4ca483acef429e8226a515d02a5857e6fd49e74d6d429d704e9dcb5dbb5081526020017f1fc2990222edd778bb8a47306efe4642b346a29cc73203575ca0506bab5cbf498152508160800151600c81518110610cbd57634e487b7160e01b600052603260045260246000fd5b602002602001018190525090565b610cd3611472565b610cdb61148c565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa9050808015610d0e57610d10565bfe5b5080610d2e5760405162461bcd60e51b81526004016101e9906116ec565b505092915050565b610d3e611472565b610d466114aa565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa9050808015610d0e575080610d2e5760405162461bcd60e51b81526004016101e99061177f565b610da5611472565b81517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4790158015610dd857506020830151155b15610df85750506040805180820190915260008082526020820152610e2d565b604051806040016040528084600001518152602001828560200151610e1d919061188e565b610e27908461185c565b90529150505b919050565b60408051600480825260a08201909252600091829190816020015b610e55611472565b815260200190600190039081610e4d57505060408051600480825260a0820190925291925060009190602082015b610e8b6114c8565b815260200190600190039081610e835790505090508a82600081518110610ec257634e487b7160e01b600052603260045260246000fd5b60200260200101819052508882600181518110610eef57634e487b7160e01b600052603260045260246000fd5b60200260200101819052508682600281518110610f1c57634e487b7160e01b600052603260045260246000fd5b60200260200101819052508482600381518110610f4957634e487b7160e01b600052603260045260246000fd5b60200260200101819052508981600081518110610f7657634e487b7160e01b600052603260045260246000fd5b60200260200101819052508781600181518110610fa357634e487b7160e01b600052603260045260246000fd5b60200260200101819052508581600281518110610fd057634e487b7160e01b600052603260045260246000fd5b60200260200101819052508381600381518110610ffd57634e487b7160e01b600052603260045260246000fd5b60200260200101819052506110128282611021565b9b9a5050505050505050505050565b600081518351146110445760405162461bcd60e51b81526004016101e99061174f565b8251600061105382600661183d565b905060008167ffffffffffffffff81111561107e57634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156110a7578160200160208202803683370190505b50905060005b838110156113a6578681815181106110d557634e487b7160e01b600052603260045260246000fd5b602002602001015160000151828260066110ef919061183d565b6110fa906000611825565b8151811061111857634e487b7160e01b600052603260045260246000fd5b60200260200101818152505086818151811061114457634e487b7160e01b600052603260045260246000fd5b6020026020010151602001518282600661115e919061183d565b611169906001611825565b8151811061118757634e487b7160e01b600052603260045260246000fd5b6020026020010181815250508581815181106111b357634e487b7160e01b600052603260045260246000fd5b60209081029190910101515151826111cc83600661183d565b6111d7906002611825565b815181106111f557634e487b7160e01b600052603260045260246000fd5b60200260200101818152505085818151811061122157634e487b7160e01b600052603260045260246000fd5b6020908102919091018101515101518261123c83600661183d565b611247906003611825565b8151811061126557634e487b7160e01b600052603260045260246000fd5b60200260200101818152505085818151811061129157634e487b7160e01b600052603260045260246000fd5b6020026020010151602001516000600281106112bd57634e487b7160e01b600052603260045260246000fd5b6020020151826112ce83600661183d565b6112d9906004611825565b815181106112f757634e487b7160e01b600052603260045260246000fd5b60200260200101818152505085818151811061132357634e487b7160e01b600052603260045260246000fd5b60200260200101516020015160016002811061134f57634e487b7160e01b600052603260045260246000fd5b60200201518261136083600661183d565b61136b906005611825565b8151811061138957634e487b7160e01b600052603260045260246000fd5b60209081029190910101528061139e81611873565b9150506110ad565b506113af6114e8565b6000602082602086026020860160086107d05a03fa9050808015610d0e5750806113eb5760405162461bcd60e51b81526004016101e9906117ab565b505115159695505050505050565b604051806060016040528061140c611472565b81526020016114196114c8565b8152602001611426611472565b905290565b6040518060a0016040528061143e611472565b815260200161144b6114c8565b81526020016114586114c8565b81526020016114656114c8565b8152602001606081525090565b604051806040016040528060008152602001600081525090565b60405180606001604052806003906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b60405180604001604052806114db611506565b8152602001611426611506565b60405180602001604052806001906020820280368337509192915050565b60405180604001604052806002906020820280368337509192915050565b600082601f830112611534578081fd5b60405161018080820182811067ffffffffffffffff82111715611559576115596118c4565b604052818482810187101561156c578485fd5b8492505b600c83101561159057803582526001929092019160209182019101611570565b509195945050505050565b600082601f8301126115ab578081fd5b6040516040810181811067ffffffffffffffff821117156115ce576115ce6118c4565b80604052508083856040860111156115e4578384fd5b835b60028110156115905781358352602092830192909101906001016115e6565b600080600080610280858703121561161b578384fd5b611625868661159b565b9350604086605f870112611637578384fd5b600261164a61164582611804565b6117da565b8083890160c08a018b81111561165e578889fd5b885b85811015611686576116728d8461159b565b855260209094019391860191600101611660565b508298506116948c8261159b565b97505050505050506116aa866101008701611524565b905092959194509250565b901515815260200190565b6020808252601290820152711d995c9a599a595c8b5898590b5a5b9c1d5d60721b604082015260600190565b6020808252601290820152711c185a5c9a5b99cb5b5d5b0b59985a5b195960721b604082015260600190565b6020808252601f908201527f76657269666965722d6774652d736e61726b2d7363616c61722d6669656c6400604082015260600190565b6020808252601690820152751c185a5c9a5b99cb5b195b99dd1a1ccb59985a5b195960521b604082015260600190565b6020808252601290820152711c185a5c9a5b99cb5859190b59985a5b195960721b604082015260600190565b6020808252601590820152741c185a5c9a5b99cb5bdc18dbd9194b59985a5b1959605a1b604082015260600190565b60405181810167ffffffffffffffff811182821017156117fc576117fc6118c4565b604052919050565b600067ffffffffffffffff82111561181e5761181e6118c4565b5060200290565b60008219821115611838576118386118ae565b500190565b6000816000190483118215151615611857576118576118ae565b500290565b60008282101561186e5761186e6118ae565b500390565b6000600019821415611887576118876118ae565b5060010190565b6000826118a957634e487b7160e01b81526012600452602481fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220afc2197756bb6fb903909e62c491fdb4cb18bfbc355f64710a329e7ebb50016164736f6c63430008000033";

export class Verifier5__factory extends ContractFactory {
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
  ): Promise<Verifier5> {
    return super.deploy(overrides || {}) as Promise<Verifier5>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Verifier5 {
    return super.attach(address) as Verifier5;
  }
  connect(signer: Signer): Verifier5__factory {
    return super.connect(signer) as Verifier5__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Verifier5Interface {
    return new utils.Interface(_abi) as Verifier5Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Verifier5 {
    return new Contract(address, _abi, signerOrProvider) as Verifier5;
  }
}