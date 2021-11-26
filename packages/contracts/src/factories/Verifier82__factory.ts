/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Verifier82, Verifier82Interface } from "../Verifier82";

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
        internalType: "uint256[15]",
        name: "input",
        type: "uint256[15]",
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
  "0x608060405234801561001057600080fd5b50611a9f806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063f054a9a314610030575b600080fd5b61004361003e366004611794565b610059565b6040516100509190611844565b60405180910390f35b6000610063611588565b604080518082018252875181526020808901518183015290835281516080810183528751518184019081528851830151606083015281528251808401845288830180515182525183015181840152818301528382015281518083018352865181528682015181830152838301528151600f8082526102008201909352600092909182016101e08036833701905050905060005b600f811015610161578481600f811061011f57634e487b7160e01b600052603260045260246000fd5b602002015182828151811061014457634e487b7160e01b600052603260045260246000fd5b60209081029190910101528061015981611a02565b9150506100f6565b5061016c818361018a565b61017b57600192505050610182565b6000925050505b949350505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001816101b6610368565b9050806080015151855160016101cc91906119b4565b146101f25760405162461bcd60e51b81526004016101e99061184f565b60405180910390fd5b604080518082019091526000808252602082018190525b86518110156102dd578387828151811061023357634e487b7160e01b600052603260045260246000fd5b6020026020010151106102585760405162461bcd60e51b81526004016101e9906118a7565b6102c9826102c4856080015184600161027191906119b4565b8151811061028f57634e487b7160e01b600052603260045260246000fd5b60200260200101518a85815181106102b757634e487b7160e01b600052603260045260246000fd5b6020026020010151610e5a565b610ec5565b9150806102d581611a02565b915050610209565b5061031481836080015160008151811061030757634e487b7160e01b600052603260045260246000fd5b6020026020010151610ec5565b905061034a6103268660000151610f2c565b8660200151846000015185602001518587604001518b604001518960600151610fc1565b61035a5760019350505050610362565b600093505050505b92915050565b6103706115ba565b6040805180820182527f229140b67fcfcf3049595ff75e549d4fdf21fb4d1dcdb3cb9371f06bed9921c181527f08382ad8e66f245b397da86f562116dd6d3460f9b8c42271b502a1033c18b6e96020808301919091529083528151608080820184527f0f96b6b4127319718b503245ed652c753205293b14ce5876c1bcabab082bf60d8285019081527f100486fa5e1f0aa03310a179f6699f3142731105f9f56881c0abce7befc77c02606080850191909152908352845180860186527f043a5d45934f6ca80ac6da4f5fa494e5f528071c42de1ab97a6b6ec48a99384481527f09d5e83cf294d4b6acfa81b560556adc23761e8083ffc46a1fedb53faf4c9678818601528385015285840192909252835180820185527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c28186019081527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed828501528152845180860186527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b81527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa818601528185015285850152835190810184527f0f90d41012a0e8e910dfca2adcdefd649874e89c6a6288d212bae9555c6d13b28185019081527f1245b487dce1237371245a777b716e2d89e720623b8207c02ada8314d2b5ae13828401528152835180850185527f0bcb1100b30d9cc8530fd45c7385607614be14bec01e12cf9c99e65d24ce246081527f176340425155b2f0455fd15b13648340b23e077c11136a1c30cf646457d4aad3818501528184015290840152815160108082526102208201909352919082015b6105f4611601565b8152602001906001900390816105ec57505060808201908152604080518082019091527f1cbb35d3cb56a2d43dc5892f1dc43a982743a90058691693d9850be62ebcb2f681527f1b6be221b6523f34b9c0b8902a7ecaa357b935877e562fe69d02f1c92c661acf60208201529051805160009061068157634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f029c0cb93384dba67f339543a994690c0a335a943f2aea45bef6a222bc4935f781526020017f1508c270c672ec8172f6db9f4dcc4f8f0d0d908fbf9b27864199f4f92d4b1681815250816080015160018151811061070657634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f177bd60f2f90b38c78ef24c1b0ec79ec5121246cb8c7a04b03b348c10bd77f0781526020017f157c03bbd034d0d05a28731406908d2e87f61525216ca48e70dabd6f6f935442815250816080015160028151811061078b57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f1b50c5f6aa94e31c67475383ec697a43517397036f76b43adce464471dc23e8781526020017f09959aff3e472be3417c9cf394183263b6f3b49f3a2710d74ebefea910686125815250816080015160038151811061081057634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f142264d5a40f285bbd2692b12cdd170804ae7036d7762b3774f0c7f65b0e88d081526020017f24c5df29b9963d005dae89aea75877b6c1f45b4c0c10b46a623ffeefd13be01d815250816080015160048151811061089557634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f26a2e9fbed569017b5d2c412477efb01b4bd2a47bbc5abf354887bfb63aa868c81526020017f1c1e4b8d25cbe04838d69f358ce8f26280bc1e4cf2e5546617c86e26d76d09c0815250816080015160058151811061091a57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f1608b327998480656786dbab0adff4343630168be66a4d09256eb97689806cdb81526020017f2b24d50e9afe8046b657caa4668b8647b861438f1ead6ea22b0a347b945c880c815250816080015160068151811061099f57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f06a9a9137c0531f979da7b98a11ac20e1da4bd33887701b7047a71b9b22f097281526020017f2afac87f8719dbd1cd5b3cbd27d1ed4226e0c84843c94052034f39c448b402288152508160800151600781518110610a2457634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f2e08ef01ba5a42c6183fe1ef7cb5e0961b56c9e80c27ece386638a630d3967e281526020017f24e5dbe4cd8b671797d8269ef72c1e8dbc2b84ea90e406e7a248350d9191fb4c8152508160800151600881518110610aa957634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f0d242ee81255c475ab139ca37a8a472751a78c1154e5736756e8149a9424908081526020017f09a958cd8540562394ba4c82b73036845928f07223bcbc7f442f552904521bef8152508160800151600981518110610b2e57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f16abdcf819f01b4406181665f1a7fe31f3b118c4732be0ac6a4790d815c8a55881526020017f0ffe235982710a9a5a1b72876dda60271431c0c9deab73945145c34e0ece75758152508160800151600a81518110610bb357634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f0fc02de5fddf49c55695f77456922d03279e6cf9dbb5cdbe26448d68a9e9da7481526020017f209a8a4c3c5dd35dc699790df87b106b4fc5d40d8a6e0ccafee8cb0cf13a2ba38152508160800151600b81518110610c3857634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f0a77e936de90aec2200d3f74496eb66e438ff2980cbe3b6555788a3d121cc33181526020017f218a07868a02d2628936023a0ce3f8ca59f2b1928f88e9027e015f9e0d0a6e6f8152508160800151600c81518110610cbd57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f165d37f786d653eb8ba6d4318d8a3ccc4bc799e3381bc5866cbe6b0f94babf5581526020017f0918bfa8b6bc24ad3fd6861c5a7d8837ee2109bbee8a84974536527da62a8c8e8152508160800151600d81518110610d4257634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f1c14226f0e25356a859ca869e14d3ae51383bbbbdae9449ea61a8e1d72ba3f1681526020017f1ab16f206be9655dc15b380170be9b4da5db3b8e5b73fdec7a6fc03bf6d72d4d8152508160800151600e81518110610dc757634e487b7160e01b600052603260045260246000fd5b602002602001018190525060405180604001604052807f196db614c301d5c90ae1bdb51c64a0982ee3a6aca3956bbf90693f61fd3429cb81526020017f1bbf7fa93f645cad62c5f031370abb16e7877ce4542729cec75e17a6fdc3cb578152508160800151600f81518110610e4c57634e487b7160e01b600052603260045260246000fd5b602002602001018190525090565b610e62611601565b610e6a61161b565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa9050808015610e9d57610e9f565bfe5b5080610ebd5760405162461bcd60e51b81526004016101e99061187b565b505092915050565b610ecd611601565b610ed5611639565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa9050808015610e9d575080610ebd5760405162461bcd60e51b81526004016101e99061190e565b610f34611601565b81517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4790158015610f6757506020830151155b15610f875750506040805180820190915260008082526020820152610fbc565b604051806040016040528084600001518152602001828560200151610fac9190611a1d565b610fb690846119eb565b90529150505b919050565b60408051600480825260a08201909252600091829190816020015b610fe4611601565b815260200190600190039081610fdc57505060408051600480825260a0820190925291925060009190602082015b61101a611657565b8152602001906001900390816110125790505090508a8260008151811061105157634e487b7160e01b600052603260045260246000fd5b6020026020010181905250888260018151811061107e57634e487b7160e01b600052603260045260246000fd5b602002602001018190525086826002815181106110ab57634e487b7160e01b600052603260045260246000fd5b602002602001018190525084826003815181106110d857634e487b7160e01b600052603260045260246000fd5b6020026020010181905250898160008151811061110557634e487b7160e01b600052603260045260246000fd5b6020026020010181905250878160018151811061113257634e487b7160e01b600052603260045260246000fd5b6020026020010181905250858160028151811061115f57634e487b7160e01b600052603260045260246000fd5b6020026020010181905250838160038151811061118c57634e487b7160e01b600052603260045260246000fd5b60200260200101819052506111a182826111b0565b9b9a5050505050505050505050565b600081518351146111d35760405162461bcd60e51b81526004016101e9906118de565b825160006111e28260066119cc565b905060008167ffffffffffffffff81111561120d57634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015611236578160200160208202803683370190505b50905060005b838110156115355786818151811061126457634e487b7160e01b600052603260045260246000fd5b6020026020010151600001518282600661127e91906119cc565b6112899060006119b4565b815181106112a757634e487b7160e01b600052603260045260246000fd5b6020026020010181815250508681815181106112d357634e487b7160e01b600052603260045260246000fd5b602002602001015160200151828260066112ed91906119cc565b6112f89060016119b4565b8151811061131657634e487b7160e01b600052603260045260246000fd5b60200260200101818152505085818151811061134257634e487b7160e01b600052603260045260246000fd5b602090810291909101015151518261135b8360066119cc565b6113669060026119b4565b8151811061138457634e487b7160e01b600052603260045260246000fd5b6020026020010181815250508581815181106113b057634e487b7160e01b600052603260045260246000fd5b602090810291909101810151510151826113cb8360066119cc565b6113d69060036119b4565b815181106113f457634e487b7160e01b600052603260045260246000fd5b60200260200101818152505085818151811061142057634e487b7160e01b600052603260045260246000fd5b60200260200101516020015160006002811061144c57634e487b7160e01b600052603260045260246000fd5b60200201518261145d8360066119cc565b6114689060046119b4565b8151811061148657634e487b7160e01b600052603260045260246000fd5b6020026020010181815250508581815181106114b257634e487b7160e01b600052603260045260246000fd5b6020026020010151602001516001600281106114de57634e487b7160e01b600052603260045260246000fd5b6020020151826114ef8360066119cc565b6114fa9060056119b4565b8151811061151857634e487b7160e01b600052603260045260246000fd5b60209081029190910101528061152d81611a02565b91505061123c565b5061153e611677565b6000602082602086026020860160086107d05a03fa9050808015610e9d57508061157a5760405162461bcd60e51b81526004016101e99061193a565b505115159695505050505050565b604051806060016040528061159b611601565b81526020016115a8611657565b81526020016115b5611601565b905290565b6040518060a001604052806115cd611601565b81526020016115da611657565b81526020016115e7611657565b81526020016115f4611657565b8152602001606081525090565b604051806040016040528060008152602001600081525090565b60405180606001604052806003906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b604051806040016040528061166a611695565b81526020016115b5611695565b60405180602001604052806001906020820280368337509192915050565b60405180604001604052806002906020820280368337509192915050565b600082601f8301126116c3578081fd5b6040516101e080820182811067ffffffffffffffff821117156116e8576116e8611a53565b60405281848281018710156116fb578485fd5b8492505b600f83101561171f578035825260019290920191602091820191016116ff565b509195945050505050565b600082601f83011261173a578081fd5b6040516040810181811067ffffffffffffffff8211171561175d5761175d611a53565b8060405250808385604086011115611773578384fd5b835b600281101561171f578135835260209283019290910190600101611775565b6000806000806102e085870312156117aa578384fd5b6117b4868661172a565b9350604086605f8701126117c6578384fd5b60026117d96117d482611993565b611969565b8083890160c08a018b8111156117ed578889fd5b885b85811015611815576118018d8461172a565b8552602090940193918601916001016117ef565b508298506118238c8261172a565b97505050505050506118398661010087016116b3565b905092959194509250565b901515815260200190565b6020808252601290820152711d995c9a599a595c8b5898590b5a5b9c1d5d60721b604082015260600190565b6020808252601290820152711c185a5c9a5b99cb5b5d5b0b59985a5b195960721b604082015260600190565b6020808252601f908201527f76657269666965722d6774652d736e61726b2d7363616c61722d6669656c6400604082015260600190565b6020808252601690820152751c185a5c9a5b99cb5b195b99dd1a1ccb59985a5b195960521b604082015260600190565b6020808252601290820152711c185a5c9a5b99cb5859190b59985a5b195960721b604082015260600190565b6020808252601590820152741c185a5c9a5b99cb5bdc18dbd9194b59985a5b1959605a1b604082015260600190565b60405181810167ffffffffffffffff8111828210171561198b5761198b611a53565b604052919050565b600067ffffffffffffffff8211156119ad576119ad611a53565b5060200290565b600082198211156119c7576119c7611a3d565b500190565b60008160001904831182151516156119e6576119e6611a3d565b500290565b6000828210156119fd576119fd611a3d565b500390565b6000600019821415611a1657611a16611a3d565b5060010190565b600082611a3857634e487b7160e01b81526012600452602481fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220a007b316a6a4137ffa4c7faa564f2d9483a790bb8c930a3ab022b2d6d1be212564736f6c63430008000033";

export class Verifier82__factory extends ContractFactory {
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
  ): Promise<Verifier82> {
    return super.deploy(overrides || {}) as Promise<Verifier82>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Verifier82 {
    return super.attach(address) as Verifier82;
  }
  connect(signer: Signer): Verifier82__factory {
    return super.connect(signer) as Verifier82__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Verifier82Interface {
    return new utils.Interface(_abi) as Verifier82Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Verifier82 {
    return new Contract(address, _abi, signerOrProvider) as Verifier82;
  }
}
