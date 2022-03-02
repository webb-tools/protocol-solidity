/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Verifier22, Verifier22Interface } from "../Verifier22";

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
        internalType: "uint256[9]",
        name: "input",
        type: "uint256[9]",
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
  "0x608060405234801561001057600080fd5b5061155b806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063c542c93b14610030575b600080fd5b61004361003e3660046112fe565b610057565b604051901515815260200160405180910390f35b600061006161116c565b60408051808201825287518152602080890151818301529083528151608081018352875151818401908152885183015160608301528152825180840184528883018051518252518301518184015281830152838201528151808301835286518152868201518183015283830152815160098082526101408201909352600092909182016101208036833701905050905060005b60098110156101435784816009811061010f5761010f6114f9565b6020020151828281518110610126576101266114f9565b60209081029190910101528061013b816114a6565b9150506100f4565b5061014e818361016c565b61015d57600192505050610164565b6000925050505b949350505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181610198610363565b9050806080015151855160016101ae9190611458565b146101f55760405162461bcd60e51b81526020600482015260126024820152711d995c9a599a595c8b5898590b5a5b9c1d5d60721b60448201526064015b60405180910390fd5b604080518082019091526000808252602082018190525b86518110156102e65783878281518110610228576102286114f9565b60200260200101511061027d5760405162461bcd60e51b815260206004820152601f60248201527f76657269666965722d6774652d736e61726b2d7363616c61722d6669656c640060448201526064016101ec565b6102d2826102cd85608001518460016102969190611458565b815181106102a6576102a66114f9565b60200260200101518a85815181106102c0576102c06114f9565b6020026020010151610ab7565b610b53565b9150806102de816114a6565b91505061020c565b5061030f818360800151600081518110610302576103026114f9565b6020026020010151610b53565b90506103456103218660000151610beb565b8660200151846000015185602001518587604001518b604001518960600151610c8a565b610355576001935050505061035d565b600093505050505b92915050565b61036b6111bd565b6040805180820182527f229140b67fcfcf3049595ff75e549d4fdf21fb4d1dcdb3cb9371f06bed9921c181527f08382ad8e66f245b397da86f562116dd6d3460f9b8c42271b502a1033c18b6e96020808301919091529083528151608080820184527f0f96b6b4127319718b503245ed652c753205293b14ce5876c1bcabab082bf60d8285019081527f100486fa5e1f0aa03310a179f6699f3142731105f9f56881c0abce7befc77c02606080850191909152908352845180860186527f043a5d45934f6ca80ac6da4f5fa494e5f528071c42de1ab97a6b6ec48a99384481527f09d5e83cf294d4b6acfa81b560556adc23761e8083ffc46a1fedb53faf4c9678818601528385015285840192909252835180820185527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c28186019081527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed828501528152845180860186527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b81527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa818601528185015285850152835190810184527f0ff7d8e41ab80d61e8355c31aa4985fd9799d78864e1da1e3086c33f7c7355d18185019081527f1f74b8f36aac9dc0f74d3ffe42c88a70dfaee2c99c82fd26b4795034eddd2792828401528152835180850185527f15e93118df2d721827505ac16f11bde6a8d1e674c46fb4f5fc0dae792d42938481527f0a3952fdf47238dcf1a0d981095d4445905ef8573c5424984ec20acb9f0202e88185015281840152908401528151600a8082526101608201909352919082015b60408051808201909152600080825260208201528152602001906001900390816105e757505060808201908152604080518082019091527f09751da0236d17afad56488c2b2adf65f5e110f226e2962d5814dabfe640910981527f0f75b0f37757523f98fdb5a00740fed2554b744c0e382b90dc26ec2cdc19299f60208201529051805160009061067a5761067a6114f9565b602002602001018190525060405180604001604052807f1e5860455a488152bdefde901e05154cb3c271958b3ab6aa7fb373e9792d64ec81526020017f037031e631dbc806dd615629ebb252b29fac2fba83f52ef3a4b335f2062eee1381525081608001516001815181106106f1576106f16114f9565b602002602001018190525060405180604001604052807f275ec8abb15e826a15450a99e8c923bd02125f62c8c2453a14b57bffdef5d88e81526020017f2dcc890fa096ce0ed430ba94f372567596cc7542d135605451cd7afa493459bd8152508160800151600281518110610768576107686114f9565b602002602001018190525060405180604001604052807f0eab6424d03220fd49948bbf10844ccb4fdd0fa7eb0143de321b8cfb22e0d2e481526020017f03561729aa634abd9fd856979fe1ea28ee2f020017f3f92f6c7a591b8583db9981525081608001516003815181106107df576107df6114f9565b602002602001018190525060405180604001604052807f2061ce3f3718216bc7fd561154187840fe99aeeb048f00a12dbf8b1542fa1dea81526020017f0378667678a3d792f97ce878e4311d749c28453ab452e8a4e858ccbbafeb8a818152508160800151600481518110610856576108566114f9565b602002602001018190525060405180604001604052807f2472168e85a4b68365eb2d19c5823f326e127f3b2a830f2d789e12585a3387d281526020017f103f5ddc3542b82647de417e02ce418f24f6d4fe815ba17aad597e8884bf88af81525081608001516005815181106108cd576108cd6114f9565b602002602001018190525060405180604001604052807f28ed7b003207817c94d5f1380d1c7cf2d39b73ba57ecebd4cd9e7844a12812cb81526020017f1b6cd62106e7a90b000dca136740dfbe1714adfc98b8b8c526c34d25bbf60f868152508160800151600681518110610944576109446114f9565b602002602001018190525060405180604001604052807f26627caa729ff8fe9e09611e5e4631eee6309e607a7f620bbe4638d56c8af58081526020017f12a19d375829f2019128c01f9dab8af8ee9736b55be25b211296e80409876a5181525081608001516007815181106109bb576109bb6114f9565b602002602001018190525060405180604001604052807f2a4690e862f18ad3ec225cbdf029804ba32c1dd26d18c6318e953f778c1b439981526020017f04c06cc3e0c49bd5e059fa4e063360c28dccfe31c3d18366f4d2702b1bb649348152508160800151600881518110610a3257610a326114f9565b602002602001018190525060405180604001604052807f1da9010676a12b70521b733ef0f780b96c95e43d5656a8a1e375c7968b69604781526020017f0ca909d74576f50637cd93bab55135451f58e0e1eb2d8508c3bc259041b23bd98152508160800151600981518110610aa957610aa96114f9565b602002602001018190525090565b6040805180820190915260008082526020820152610ad361120e565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa9050808015610b0657610b08565bfe5b5080610b4b5760405162461bcd60e51b81526020600482015260126024820152711c185a5c9a5b99cb5b5d5b0b59985a5b195960721b60448201526064016101ec565b505092915050565b6040805180820190915260008082526020820152610b6f61122c565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa9050808015610b06575080610b4b5760405162461bcd60e51b81526020600482015260126024820152711c185a5c9a5b99cb5859190b59985a5b195960721b60448201526064016101ec565b604080518082019091526000808252602082015281517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4790158015610c3257506020830151155b15610c525750506040805180820190915260008082526020820152919050565b604051806040016040528084600001518152602001828560200151610c7791906114c1565b610c81908461148f565b90529392505050565b60408051600480825260a08201909252600091829190816020015b6040805180820190915260008082526020820152815260200190600190039081610ca557505060408051600480825260a0820190925291925060009190602082015b610cef61124a565b815260200190600190039081610ce75790505090508a82600081518110610d1857610d186114f9565b60200260200101819052508882600181518110610d3757610d376114f9565b60200260200101819052508682600281518110610d5657610d566114f9565b60200260200101819052508482600381518110610d7557610d756114f9565b60200260200101819052508981600081518110610d9457610d946114f9565b60200260200101819052508781600181518110610db357610db36114f9565b60200260200101819052508581600281518110610dd257610dd26114f9565b60200260200101819052508381600381518110610df157610df16114f9565b6020026020010181905250610e068282610e15565b9b9a5050505050505050505050565b60008151835114610e615760405162461bcd60e51b81526020600482015260166024820152751c185a5c9a5b99cb5b195b99dd1a1ccb59985a5b195960521b60448201526064016101ec565b82516000610e70826006611470565b905060008167ffffffffffffffff811115610e8d57610e8d61150f565b604051908082528060200260200182016040528015610eb6578160200160208202803683370190505b50905060005b838110156110f157868181518110610ed657610ed66114f9565b60200260200101516000015182826006610ef09190611470565b610efb906000611458565b81518110610f0b57610f0b6114f9565b602002602001018181525050868181518110610f2957610f296114f9565b60200260200101516020015182826006610f439190611470565b610f4e906001611458565b81518110610f5e57610f5e6114f9565b602002602001018181525050858181518110610f7c57610f7c6114f9565b6020908102919091010151515182610f95836006611470565b610fa0906002611458565b81518110610fb057610fb06114f9565b602002602001018181525050858181518110610fce57610fce6114f9565b60209081029190910181015151015182610fe9836006611470565b610ff4906003611458565b81518110611004576110046114f9565b602002602001018181525050858181518110611022576110226114f9565b602002602001015160200151600060028110611040576110406114f9565b602002015182611051836006611470565b61105c906004611458565b8151811061106c5761106c6114f9565b60200260200101818152505085818151811061108a5761108a6114f9565b6020026020010151602001516001600281106110a8576110a86114f9565b6020020151826110b9836006611470565b6110c4906005611458565b815181106110d4576110d46114f9565b6020908102919091010152806110e9816114a6565b915050610ebc565b506110fa61126a565b6000602082602086026020860160086107d05a03fa9050808015610b0657508061115e5760405162461bcd60e51b81526020600482015260156024820152741c185a5c9a5b99cb5bdc18dbd9194b59985a5b1959605a1b60448201526064016101ec565b505115159695505050505050565b6040805160a08101909152600060608201818152608083019190915281526020810161119661124a565b81526020016111b8604051806040016040528060008152602001600081525090565b905290565b6040805160e08101909152600060a0820181815260c08301919091528152602081016111e761124a565b81526020016111f461124a565b815260200161120161124a565b8152602001606081525090565b60405180606001604052806003906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b604051806040016040528061125d611288565b81526020016111b8611288565b60405180602001604052806001906020820280368337509192915050565b60405180604001604052806002906020820280368337509192915050565b600082601f8301126112b757600080fd5b6112bf6113ef565b8083856040860111156112d157600080fd5b60005b60028110156112f35781358452602093840193909101906001016112d4565b509095945050505050565b60008060008061022080868803121561131657600080fd5b61132087876112a6565b9450604087605f88011261133357600080fd5b61133b6113ef565b8082890160c08a018b81111561135057600080fd5b60005b600281101561137a576113668d846112a6565b855260209094019391850191600101611353565b508298506113888c826112a6565b975050505050508661011f87011261139f57600080fd5b6113a7611426565b80610100880189848a0111156113bc57600080fd5b600093505b60098410156113e1578035835260019390930192602092830192016113c1565b509598949750929550505050565b6040805190810167ffffffffffffffff8111828210171561142057634e487b7160e01b600052604160045260246000fd5b60405290565b604051610120810167ffffffffffffffff8111828210171561142057634e487b7160e01b600052604160045260246000fd5b6000821982111561146b5761146b6114e3565b500190565b600081600019048311821515161561148a5761148a6114e3565b500290565b6000828210156114a1576114a16114e3565b500390565b60006000198214156114ba576114ba6114e3565b5060010190565b6000826114de57634e487b7160e01b600052601260045260246000fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220d542fd333cc264b9f8152e73f5f23fa228c4e566fd6a95dc1d76b34cb3bc027b64736f6c63430008050033";

export class Verifier22__factory extends ContractFactory {
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
  ): Promise<Verifier22> {
    return super.deploy(overrides || {}) as Promise<Verifier22>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Verifier22 {
    return super.attach(address) as Verifier22;
  }
  connect(signer: Signer): Verifier22__factory {
    return super.connect(signer) as Verifier22__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Verifier22Interface {
    return new utils.Interface(_abi) as Verifier22Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Verifier22 {
    return new Contract(address, _abi, signerOrProvider) as Verifier22;
  }
}
