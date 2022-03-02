/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Verifier3, Verifier3Interface } from "../Verifier3";

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
        internalType: "uint256[10]",
        name: "input",
        type: "uint256[10]",
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
  "0x608060405234801561001057600080fd5b506115d0806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063f3bb70f614610030575b600080fd5b61004361003e366004611373565b610057565b604051901515815260200160405180910390f35b60006100616111e1565b604080518082018252875181526020808901518183015290835281516080810183528751518184019081528851830151606083015281528251808401845288830180515182525183015181840152818301528382015281518083018352865181528682015181830152838301528151600a8082526101608201909352600092909182016101408036833701905050905060005b600a811015610143578481600a811061010f5761010f61156e565b60200201518282815181106101265761012661156e565b60209081029190910101528061013b8161151b565b9150506100f4565b5061014e818361016c565b61015d57600192505050610164565b6000925050505b949350505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181610198610363565b9050806080015151855160016101ae91906114cd565b146101f55760405162461bcd60e51b81526020600482015260126024820152711d995c9a599a595c8b5898590b5a5b9c1d5d60721b60448201526064015b60405180910390fd5b604080518082019091526000808252602082018190525b86518110156102e657838782815181106102285761022861156e565b60200260200101511061027d5760405162461bcd60e51b815260206004820152601f60248201527f76657269666965722d6774652d736e61726b2d7363616c61722d6669656c640060448201526064016101ec565b6102d2826102cd856080015184600161029691906114cd565b815181106102a6576102a661156e565b60200260200101518a85815181106102c0576102c061156e565b6020026020010151610b2c565b610bc8565b9150806102de8161151b565b91505061020c565b5061030f8183608001516000815181106103025761030261156e565b6020026020010151610bc8565b90506103456103218660000151610c60565b8660200151846000015185602001518587604001518b604001518960600151610cff565b610355576001935050505061035d565b600093505050505b92915050565b61036b611232565b6040805180820182527f229140b67fcfcf3049595ff75e549d4fdf21fb4d1dcdb3cb9371f06bed9921c181527f08382ad8e66f245b397da86f562116dd6d3460f9b8c42271b502a1033c18b6e96020808301919091529083528151608080820184527f0f96b6b4127319718b503245ed652c753205293b14ce5876c1bcabab082bf60d8285019081527f100486fa5e1f0aa03310a179f6699f3142731105f9f56881c0abce7befc77c02606080850191909152908352845180860186527f043a5d45934f6ca80ac6da4f5fa494e5f528071c42de1ab97a6b6ec48a99384481527f09d5e83cf294d4b6acfa81b560556adc23761e8083ffc46a1fedb53faf4c9678818601528385015285840192909252835180820185527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c28186019081527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed828501528152845180860186527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b81527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa818601528185015285850152835190810184527f085b97dd3a3b17b0a745759b618a04708bcb687e62856ae531b23f9a6c2477638185019081527f02f576f200611d3bad13b66059e0776df0ae50bf383797458cab39e9ec008972828401528152835180850185527f1570cf10c1292addebf0cf15290d4af72e63b1ac6314ad9f9f1e31d1e8a9c71681527f09466a0059b30e9cc72c2ee00755bf0bc493e7c7df635d0d61e8d4a09a72408d8185015281840152908401528151600b8082526101808201909352919082015b60408051808201909152600080825260208201528152602001906001900390816105e757505060808201908152604080518082019091527f0580b98d455837592a0007fbe8e16cb77ffa0fa7f023eac74e60c7ca5f39d46a81527f1dd0ad0b02b0ce24e6b67149f0976c6a96d6849407c9a0e09675fb0f77adad7360208201529051805160009061067a5761067a61156e565b602002602001018190525060405180604001604052807f2d914db9f2ab5c9145c0c78426d5b40059245f4ddbe544abfec0c5f8a1def74281526020017f1b198831f5c50939dc0e30030881cd2e05c02e65ed3d34d51ff6ae7fba0b88e081525081608001516001815181106106f1576106f161156e565b602002602001018190525060405180604001604052807f1e9b5b410c6ea1a13ada97a24ec1f673d4a5e3c730059a2774392ad1fe680a9e81526020017e1864daffa96daac17e55d7485951cc92367cbe5fda841a6f7d7285c3c07dce81525081608001516002815181106107675761076761156e565b602002602001018190525060405180604001604052807f09eaa6a01738f7118396c9259d34b674c5450629a5e8a5ccb5230d5dfb47419b81526020017f274af5daafa7e97cab4ed5863671a9b5f759c70f0c0ef897440f9980ce70465081525081608001516003815181106107de576107de61156e565b602002602001018190525060405180604001604052807e074f196a64656de63b4c655239212bad48d83196981770ad5cef54f6de39c681526020017f0285c468adc4835faed29d2183baa28e5140acdd634791cf0585a853c83ec23a81525081608001516004815181106108545761085461156e565b602002602001018190525060405180604001604052807f231691663cfdbb6c3efc90793ce7d04a129c30d8e18c94b354cfb3877563685781526020017f14f1e8b9e504aed8b72cecf0c731f2efd6d3b4bc056b4f2d268306fc0a27cb3681525081608001516005815181106108cb576108cb61156e565b602002602001018190525060405180604001604052807f24979c6249548b58ebfc7bd27530e34d012413fe8167d5c6d562b889bf7c54b181526020017f22bfc268f91d00aa8068c213ff4504cfe85d31c2e790e07d14777d7cd69df95381525081608001516006815181106109425761094261156e565b602002602001018190525060405180604001604052807f0de056762238d163a89a2328048fc16de190b3c6808c5dd7aa746ba1879d0a6881526020017f23287bf593af3e91d577d813cea958224f1cdd68ba257e38d8f354c2a39b511881525081608001516007815181106109b9576109b961156e565b602002602001018190525060405180604001604052807f1dd022436ff9678da57764e4a945842fc212b3782509b9531cb1945d9b5030d981526020017f1772b04d6da79dcb8819b9455f6a2c40516e7d8b3cbe07fdc9240a55d36ffb9a8152508160800151600881518110610a3057610a3061156e565b602002602001018190525060405180604001604052807f109a9ba947eac864b027c7570d4f412810444725e68d223a924af0c50d3e5f5b81526020017f297d34136c66505fb724483fcf16f995f1996c7af3fa0f37f4103419b3f264918152508160800151600981518110610aa757610aa761156e565b602002602001018190525060405180604001604052807f0bd8aa1b4d4cfea075ca472b5da707ff4ba9a3a25edec38af2f28b85dd65091b81526020017f2d5763d96c3bc42c0529d3f627d6c3e9bc5f3e7ba9b6f9517d69ea7e102700bb8152508160800151600a81518110610b1e57610b1e61156e565b602002602001018190525090565b6040805180820190915260008082526020820152610b48611283565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa9050808015610b7b57610b7d565bfe5b5080610bc05760405162461bcd60e51b81526020600482015260126024820152711c185a5c9a5b99cb5b5d5b0b59985a5b195960721b60448201526064016101ec565b505092915050565b6040805180820190915260008082526020820152610be46112a1565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa9050808015610b7b575080610bc05760405162461bcd60e51b81526020600482015260126024820152711c185a5c9a5b99cb5859190b59985a5b195960721b60448201526064016101ec565b604080518082019091526000808252602082015281517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4790158015610ca757506020830151155b15610cc75750506040805180820190915260008082526020820152919050565b604051806040016040528084600001518152602001828560200151610cec9190611536565b610cf69084611504565b90529392505050565b60408051600480825260a08201909252600091829190816020015b6040805180820190915260008082526020820152815260200190600190039081610d1a57505060408051600480825260a0820190925291925060009190602082015b610d646112bf565b815260200190600190039081610d5c5790505090508a82600081518110610d8d57610d8d61156e565b60200260200101819052508882600181518110610dac57610dac61156e565b60200260200101819052508682600281518110610dcb57610dcb61156e565b60200260200101819052508482600381518110610dea57610dea61156e565b60200260200101819052508981600081518110610e0957610e0961156e565b60200260200101819052508781600181518110610e2857610e2861156e565b60200260200101819052508581600281518110610e4757610e4761156e565b60200260200101819052508381600381518110610e6657610e6661156e565b6020026020010181905250610e7b8282610e8a565b9b9a5050505050505050505050565b60008151835114610ed65760405162461bcd60e51b81526020600482015260166024820152751c185a5c9a5b99cb5b195b99dd1a1ccb59985a5b195960521b60448201526064016101ec565b82516000610ee58260066114e5565b905060008167ffffffffffffffff811115610f0257610f02611584565b604051908082528060200260200182016040528015610f2b578160200160208202803683370190505b50905060005b8381101561116657868181518110610f4b57610f4b61156e565b60200260200101516000015182826006610f6591906114e5565b610f709060006114cd565b81518110610f8057610f8061156e565b602002602001018181525050868181518110610f9e57610f9e61156e565b60200260200101516020015182826006610fb891906114e5565b610fc39060016114cd565b81518110610fd357610fd361156e565b602002602001018181525050858181518110610ff157610ff161156e565b602090810291909101015151518261100a8360066114e5565b6110159060026114cd565b815181106110255761102561156e565b6020026020010181815250508581815181106110435761104361156e565b6020908102919091018101515101518261105e8360066114e5565b6110699060036114cd565b815181106110795761107961156e565b6020026020010181815250508581815181106110975761109761156e565b6020026020010151602001516000600281106110b5576110b561156e565b6020020151826110c68360066114e5565b6110d19060046114cd565b815181106110e1576110e161156e565b6020026020010181815250508581815181106110ff576110ff61156e565b60200260200101516020015160016002811061111d5761111d61156e565b60200201518261112e8360066114e5565b6111399060056114cd565b815181106111495761114961156e565b60209081029190910101528061115e8161151b565b915050610f31565b5061116f6112df565b6000602082602086026020860160086107d05a03fa9050808015610b7b5750806111d35760405162461bcd60e51b81526020600482015260156024820152741c185a5c9a5b99cb5bdc18dbd9194b59985a5b1959605a1b60448201526064016101ec565b505115159695505050505050565b6040805160a08101909152600060608201818152608083019190915281526020810161120b6112bf565b815260200161122d604051806040016040528060008152602001600081525090565b905290565b6040805160e08101909152600060a0820181815260c083019190915281526020810161125c6112bf565b81526020016112696112bf565b81526020016112766112bf565b8152602001606081525090565b60405180606001604052806003906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b60405180604001604052806112d26112fd565b815260200161122d6112fd565b60405180602001604052806001906020820280368337509192915050565b60405180604001604052806002906020820280368337509192915050565b600082601f83011261132c57600080fd5b611334611464565b80838560408601111561134657600080fd5b60005b6002811015611368578135845260209384019390910190600101611349565b509095945050505050565b60008060008061024080868803121561138b57600080fd5b611395878761131b565b9450604087605f8801126113a857600080fd5b6113b0611464565b8082890160c08a018b8111156113c557600080fd5b60005b60028110156113ef576113db8d8461131b565b8552602090940193918501916001016113c8565b508298506113fd8c8261131b565b975050505050508661011f87011261141457600080fd5b61141c61149b565b80610100880189848a01111561143157600080fd5b600093505b600a84101561145657803583526001939093019260209283019201611436565b509598949750929550505050565b6040805190810167ffffffffffffffff8111828210171561149557634e487b7160e01b600052604160045260246000fd5b60405290565b604051610140810167ffffffffffffffff8111828210171561149557634e487b7160e01b600052604160045260246000fd5b600082198211156114e0576114e0611558565b500190565b60008160001904831182151516156114ff576114ff611558565b500290565b60008282101561151657611516611558565b500390565b600060001982141561152f5761152f611558565b5060010190565b60008261155357634e487b7160e01b600052601260045260246000fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220cb54573b6ad1ead1f41f1894a483f2e820e8af179c871e1d4c457adda2bf10a264736f6c63430008050033";

export class Verifier3__factory extends ContractFactory {
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
  ): Promise<Verifier3> {
    return super.deploy(overrides || {}) as Promise<Verifier3>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Verifier3 {
    return super.attach(address) as Verifier3;
  }
  connect(signer: Signer): Verifier3__factory {
    return super.connect(signer) as Verifier3__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Verifier3Interface {
    return new utils.Interface(_abi) as Verifier3Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Verifier3 {
    return new Contract(address, _abi, signerOrProvider) as Verifier3;
  }
}
