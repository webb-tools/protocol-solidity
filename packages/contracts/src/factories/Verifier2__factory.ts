/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Verifier2, Verifier2Interface } from "../Verifier2";

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
  "0x608060405234801561001057600080fd5b50611559806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063c542c93b14610030575b600080fd5b61004361003e3660046112fc565b610057565b604051901515815260200160405180910390f35b600061006161116a565b60408051808201825287518152602080890151818301529083528151608081018352875151818401908152885183015160608301528152825180840184528883018051518252518301518184015281830152838201528151808301835286518152868201518183015283830152815160098082526101408201909352600092909182016101208036833701905050905060005b60098110156101435784816009811061010f5761010f6114f7565b6020020151828281518110610126576101266114f7565b60209081029190910101528061013b816114a4565b9150506100f4565b5061014e818361016c565b61015d57600192505050610164565b6000925050505b949350505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181610198610363565b9050806080015151855160016101ae9190611456565b146101f55760405162461bcd60e51b81526020600482015260126024820152711d995c9a599a595c8b5898590b5a5b9c1d5d60721b60448201526064015b60405180910390fd5b604080518082019091526000808252602082018190525b86518110156102e65783878281518110610228576102286114f7565b60200260200101511061027d5760405162461bcd60e51b815260206004820152601f60248201527f76657269666965722d6774652d736e61726b2d7363616c61722d6669656c640060448201526064016101ec565b6102d2826102cd85608001518460016102969190611456565b815181106102a6576102a66114f7565b60200260200101518a85815181106102c0576102c06114f7565b6020026020010151610ab5565b610b51565b9150806102de816114a4565b91505061020c565b5061030f818360800151600081518110610302576103026114f7565b6020026020010151610b51565b90506103456103218660000151610be9565b8660200151846000015185602001518587604001518b604001518960600151610c88565b610355576001935050505061035d565b600093505050505b92915050565b61036b6111bb565b6040805180820182527f229140b67fcfcf3049595ff75e549d4fdf21fb4d1dcdb3cb9371f06bed9921c181527f08382ad8e66f245b397da86f562116dd6d3460f9b8c42271b502a1033c18b6e96020808301919091529083528151608080820184527f0f96b6b4127319718b503245ed652c753205293b14ce5876c1bcabab082bf60d8285019081527f100486fa5e1f0aa03310a179f6699f3142731105f9f56881c0abce7befc77c02606080850191909152908352845180860186527f043a5d45934f6ca80ac6da4f5fa494e5f528071c42de1ab97a6b6ec48a99384481527f09d5e83cf294d4b6acfa81b560556adc23761e8083ffc46a1fedb53faf4c9678818601528385015285840192909252835180820185527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c28186019081527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed828501528152845180860186527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b81527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa818601528185015285850152835190810184527f2f5b13bcc3a9595a51a8fb97e94f8fef8380a624ce883cb017de9fc8916562868185019081527f2263152136a7b9c69040dc2fd0c2a0ecd987b054612dc3ac566a55dee7cb7d4f828401528152835180850185527f056fc70991e0744921ae76595034c1fded502a9ced97c465264443a6c9ab792481527f26af73bc89704550d0bf8e3121d247b3d6dd465613f0dabce99fa20296c47d768185015281840152908401528151600a8082526101608201909352919082015b60408051808201909152600080825260208201528152602001906001900390816105e757505060808201908152604080518082019091527f263f7b5734f69e82c51fb91a4a170cabaf93105700666e8aeb9337fb67e0d98c81527f0860482b1242484029b0053becceb0c16fe6be0625b9f9f86decd00ccbb0242d60208201529051805160009061067a5761067a6114f7565b602002602001018190525060405180604001604052807f0a7b24ff9caa539278a1e588c126b5240905518fcd7bfe43bbaa9a0da07a60df81526020017f16cde9648199b56c9d64a9e874239955d316b9d70ad7824eaa21459125b8450c81525081608001516001815181106106f1576106f16114f7565b602002602001018190525060405180604001604052807f0866b6d7ad65cafe345b430a36b84ac891756016517721235ce1df41bd72830781526020017f2930f62fd02411b2154c48f5b4a75f9e24e259acd9002bf80856ccb9a78e71808152508160800151600281518110610768576107686114f7565b602002602001018190525060405180604001604052807f0c8a83d71fa39b9b36ee957fe80cddb697d111a8f69a60fc81c9dd1e96cc3daf81526020017f22c361b6d4d14f6785d669ddc866c9f4830be353b8e0457b09c550d3c5816af581525081608001516003815181106107df576107df6114f7565b602002602001018190525060405180604001604052807f14e125ce1b4894836ccc7fd8664607bfd41a19b475cc752e7e1ef4dd2b47dea181526020017f1d1ca5a4a905b2c7386a4a4fa3e34960f99106299de8ac50862783bc9c4906208152508160800151600481518110610856576108566114f7565b602002602001018190525060405180604001604052807f072c68e7ff05c64190dd24069ff53d7c17d3444da36b5f513899dafc72be739c81526020017f0e31dcacc9c3d21fdd43f475c7ced8621e30417a81990b9463c2887ce4ace7ac81525081608001516005815181106108cd576108cd6114f7565b602002602001018190525060405180604001604052807f064bb781663f16a0d9fed41a7198f5d0e3938c4b8af335d75b2e5a889d7ac59481526020017f2fd6bb1b6fc018b54a7783fd77c337a92a460eaa4a6eb09298e6a09009c8e4cc8152508160800151600681518110610944576109446114f7565b602002602001018190525060405180604001604052807e051152d2366ab71ca996f82708c5257382e043940c4adfae5cc2ae977ce2ed81526020017f29c2306f39e8d3bc9c899e8cd4f896f28662512fb5ccc4741980b854ff1af1c981525081608001516007815181106109ba576109ba6114f7565b602002602001018190525060405180604001604052807ea290fa3f1ff5bd03eccd1ee2b2a6c1cec44ac7f2c49e378a3a009ef8c592e481526020017f0cf96f10c35b140d0392eb208960fe91d507d7af8155df245b4da1d64f397b368152508160800151600881518110610a3057610a306114f7565b602002602001018190525060405180604001604052807f1eab579b5880b7468af5536ef923d2c08a905ff47a5cebec239d688c4d7a9ff181526020017f2ab9369d635d1bce1b6b377d4c6e585acc28250463099ab52a99c2955ef1eae58152508160800151600981518110610aa757610aa76114f7565b602002602001018190525090565b6040805180820190915260008082526020820152610ad161120c565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa9050808015610b0457610b06565bfe5b5080610b495760405162461bcd60e51b81526020600482015260126024820152711c185a5c9a5b99cb5b5d5b0b59985a5b195960721b60448201526064016101ec565b505092915050565b6040805180820190915260008082526020820152610b6d61122a565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa9050808015610b04575080610b495760405162461bcd60e51b81526020600482015260126024820152711c185a5c9a5b99cb5859190b59985a5b195960721b60448201526064016101ec565b604080518082019091526000808252602082015281517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4790158015610c3057506020830151155b15610c505750506040805180820190915260008082526020820152919050565b604051806040016040528084600001518152602001828560200151610c7591906114bf565b610c7f908461148d565b90529392505050565b60408051600480825260a08201909252600091829190816020015b6040805180820190915260008082526020820152815260200190600190039081610ca357505060408051600480825260a0820190925291925060009190602082015b610ced611248565b815260200190600190039081610ce55790505090508a82600081518110610d1657610d166114f7565b60200260200101819052508882600181518110610d3557610d356114f7565b60200260200101819052508682600281518110610d5457610d546114f7565b60200260200101819052508482600381518110610d7357610d736114f7565b60200260200101819052508981600081518110610d9257610d926114f7565b60200260200101819052508781600181518110610db157610db16114f7565b60200260200101819052508581600281518110610dd057610dd06114f7565b60200260200101819052508381600381518110610def57610def6114f7565b6020026020010181905250610e048282610e13565b9b9a5050505050505050505050565b60008151835114610e5f5760405162461bcd60e51b81526020600482015260166024820152751c185a5c9a5b99cb5b195b99dd1a1ccb59985a5b195960521b60448201526064016101ec565b82516000610e6e82600661146e565b905060008167ffffffffffffffff811115610e8b57610e8b61150d565b604051908082528060200260200182016040528015610eb4578160200160208202803683370190505b50905060005b838110156110ef57868181518110610ed457610ed46114f7565b60200260200101516000015182826006610eee919061146e565b610ef9906000611456565b81518110610f0957610f096114f7565b602002602001018181525050868181518110610f2757610f276114f7565b60200260200101516020015182826006610f41919061146e565b610f4c906001611456565b81518110610f5c57610f5c6114f7565b602002602001018181525050858181518110610f7a57610f7a6114f7565b6020908102919091010151515182610f9383600661146e565b610f9e906002611456565b81518110610fae57610fae6114f7565b602002602001018181525050858181518110610fcc57610fcc6114f7565b60209081029190910181015151015182610fe783600661146e565b610ff2906003611456565b81518110611002576110026114f7565b602002602001018181525050858181518110611020576110206114f7565b60200260200101516020015160006002811061103e5761103e6114f7565b60200201518261104f83600661146e565b61105a906004611456565b8151811061106a5761106a6114f7565b602002602001018181525050858181518110611088576110886114f7565b6020026020010151602001516001600281106110a6576110a66114f7565b6020020151826110b783600661146e565b6110c2906005611456565b815181106110d2576110d26114f7565b6020908102919091010152806110e7816114a4565b915050610eba565b506110f8611268565b6000602082602086026020860160086107d05a03fa9050808015610b0457508061115c5760405162461bcd60e51b81526020600482015260156024820152741c185a5c9a5b99cb5bdc18dbd9194b59985a5b1959605a1b60448201526064016101ec565b505115159695505050505050565b6040805160a081019091526000606082018181526080830191909152815260208101611194611248565b81526020016111b6604051806040016040528060008152602001600081525090565b905290565b6040805160e08101909152600060a0820181815260c08301919091528152602081016111e5611248565b81526020016111f2611248565b81526020016111ff611248565b8152602001606081525090565b60405180606001604052806003906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b604051806040016040528061125b611286565b81526020016111b6611286565b60405180602001604052806001906020820280368337509192915050565b60405180604001604052806002906020820280368337509192915050565b600082601f8301126112b557600080fd5b6112bd6113ed565b8083856040860111156112cf57600080fd5b60005b60028110156112f15781358452602093840193909101906001016112d2565b509095945050505050565b60008060008061022080868803121561131457600080fd5b61131e87876112a4565b9450604087605f88011261133157600080fd5b6113396113ed565b8082890160c08a018b81111561134e57600080fd5b60005b6002811015611378576113648d846112a4565b855260209094019391850191600101611351565b508298506113868c826112a4565b975050505050508661011f87011261139d57600080fd5b6113a5611424565b80610100880189848a0111156113ba57600080fd5b600093505b60098410156113df578035835260019390930192602092830192016113bf565b509598949750929550505050565b6040805190810167ffffffffffffffff8111828210171561141e57634e487b7160e01b600052604160045260246000fd5b60405290565b604051610120810167ffffffffffffffff8111828210171561141e57634e487b7160e01b600052604160045260246000fd5b60008219821115611469576114696114e1565b500190565b6000816000190483118215151615611488576114886114e1565b500290565b60008282101561149f5761149f6114e1565b500390565b60006000198214156114b8576114b86114e1565b5060010190565b6000826114dc57634e487b7160e01b600052601260045260246000fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220e9363dead18dc09776a531e331bf2ec1a8ee577734aaa6293c793f15dfe9f73b64736f6c63430008050033";

export class Verifier2__factory extends ContractFactory {
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
  ): Promise<Verifier2> {
    return super.deploy(overrides || {}) as Promise<Verifier2>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Verifier2 {
    return super.attach(address) as Verifier2;
  }
  connect(signer: Signer): Verifier2__factory {
    return super.connect(signer) as Verifier2__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Verifier2Interface {
    return new utils.Interface(_abi) as Verifier2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Verifier2 {
    return new Contract(address, _abi, signerOrProvider) as Verifier2;
  }
}
