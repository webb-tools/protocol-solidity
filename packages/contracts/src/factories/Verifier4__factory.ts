/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { Verifier4, Verifier4Interface } from '../Verifier4';

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint256[2]',
        name: 'a',
        type: 'uint256[2]',
      },
      {
        internalType: 'uint256[2][2]',
        name: 'b',
        type: 'uint256[2][2]',
      },
      {
        internalType: 'uint256[2]',
        name: 'c',
        type: 'uint256[2]',
      },
      {
        internalType: 'uint256[7]',
        name: 'input',
        type: 'uint256[7]',
      },
    ],
    name: 'verifyProof',
    outputs: [
      {
        internalType: 'bool',
        name: 'r',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b5061146b806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063c894e75714610030575b600080fd5b61004361003e36600461120f565b610057565b604051901515815260200160405180910390f35b600061006161107d565b604080518082018252875181526020808901518183015290835281516080810183528751518184019081528851830151606083015281528251808401845288830180515182525183015181840152818301528382015281518083018352865181528682015181830152838301528151600780825261010082019093526000929091820160e08036833701905050905060005b60078110156101425784816007811061010e5761010e611409565b602002015182828151811061012557610125611409565b60209081029190910101528061013a816113b6565b9150506100f3565b5061014d818361016b565b61015c57600192505050610163565b6000925050505b949350505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181610197610362565b9050806080015151855160016101ad9190611368565b146101f45760405162461bcd60e51b81526020600482015260126024820152711d995c9a599a595c8b5898590b5a5b9c1d5d60721b60448201526064015b60405180910390fd5b604080518082019091526000808252602082018190525b86518110156102e5578387828151811061022757610227611409565b60200260200101511061027c5760405162461bcd60e51b815260206004820152601f60248201527f76657269666965722d6774652d736e61726b2d7363616c61722d6669656c640060448201526064016101eb565b6102d1826102cc85608001518460016102959190611368565b815181106102a5576102a5611409565b60200260200101518a85815181106102bf576102bf611409565b60200260200101516109c8565b610a64565b9150806102dd816113b6565b91505061020b565b5061030e81836080015160008151811061030157610301611409565b6020026020010151610a64565b90506103446103208660000151610afc565b8660200151846000015185602001518587604001518b604001518960600151610b9b565b610354576001935050505061035c565b600093505050505b92915050565b61036a6110ce565b6040805180820182527f229140b67fcfcf3049595ff75e549d4fdf21fb4d1dcdb3cb9371f06bed9921c181527f08382ad8e66f245b397da86f562116dd6d3460f9b8c42271b502a1033c18b6e96020808301919091529083528151608080820184527f0f96b6b4127319718b503245ed652c753205293b14ce5876c1bcabab082bf60d8285019081527f100486fa5e1f0aa03310a179f6699f3142731105f9f56881c0abce7befc77c02606080850191909152908352845180860186527f043a5d45934f6ca80ac6da4f5fa494e5f528071c42de1ab97a6b6ec48a99384481527f09d5e83cf294d4b6acfa81b560556adc23761e8083ffc46a1fedb53faf4c9678818601528385015285840192909252835180820185527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c28186019081527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed828501528152845180860186527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b81527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa818601528185015285850152835190810184527f02faaf8e4e43577583b08dee1732bb697721789677aa3cb01e7b883c9b6d01088185019081527f1ef86068770a8da1f71efd139800cc9870f49f3017ea636f40bdcb821f1338ee828401528152835180850185527f2b590fe13e303e0d2815e793b71e0c08fead6faff44156beae663d6db338c28a81527f03a8cb62a263f8f64fddc1119a64b7da7dfd2df209911cde1a63371b6d6fbcb6818501528184015290840152815160088082526101208201909352919082015b60408051808201909152600080825260208201528152602001906001900390816105e657505060808201908152604080518082019091527f13032d313ef5e2aac628ebd47b00f7a7f186160480fbce818940c6a0ebb9612f81527f206d995a4f71f714af29eccec9f84dd8e9af54984fd6fac99c5c61453601a85260208201529051805160009061067957610679611409565b602002602001018190525060405180604001604052807f0eea7de519c1ef41b50bb6dca8397ae661e2103c2f93e305e7a8c8be6d678bad81526020017f2a0a3b5603e3dbabf32e5a688e5b716ecf433bf9c1b25f894f0cff9954a6520b81525081608001516001815181106106f0576106f0611409565b602002602001018190525060405180604001604052807f1d6c58b5fdb4fdbce363b18f496e06047fc0b6c38abeee8d4fac7efb575cd82781526020017f1904f746acca3ecd8678cac582b3b1e16f850dcd4a0761a0e678621105007ab9815250816080015160028151811061076757610767611409565b602002602001018190525060405180604001604052807f2f5ae80a8f5c62585c59d24eee9110150f168e5837b76d3e183af256889bbf1e81526020017f09c745512e55336f5e00d9275a4bcb4a8058066a5469a7ac7d1ed6805d7a33fe81525081608001516003815181106107de576107de611409565b602002602001018190525060405180604001604052807f0e2ddfd7c0cfadc34fbccbfb25c639a80b78e8c276c9da293cb3aa9342afe5d881526020017f15edc0f0fa5ef33e2a60e63d4acd3e1d569cac7fa0831aefe7fa92f3773ef2f0815250816080015160048151811061085557610855611409565b602002602001018190525060405180604001604052807f1ce69fd51c4cc135fd7484b304454ed94b22306b7f333cacf232717e8465e81e81526020017f063509f110d18def2963e68616bb5a95562d012d2fceab35fd6bd84999002b2e81525081608001516005815181106108cc576108cc611409565b602002602001018190525060405180604001604052807f260f0b223b0b90ab7273c7bc08e416d5deb389ba038047704e6c6cc05c33e51a81526020017f1efcaf87b5a3bd6ea7ddda8e22dee388a72bbff44632fcb66d1bdd0f0c9b3494815250816080015160068151811061094357610943611409565b602002602001018190525060405180604001604052807f18262043857d97df22ce767e148ab331bfd3289fa07d982668aa8ad0631328db81526020017f0b2c38ec9536b4b917333c1259e445dce5f25c9ed92152f7079ad50bdf77807381525081608001516007815181106109ba576109ba611409565b602002602001018190525090565b60408051808201909152600080825260208201526109e461111f565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa9050808015610a1757610a19565bfe5b5080610a5c5760405162461bcd60e51b81526020600482015260126024820152711c185a5c9a5b99cb5b5d5b0b59985a5b195960721b60448201526064016101eb565b505092915050565b6040805180820190915260008082526020820152610a8061113d565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa9050808015610a17575080610a5c5760405162461bcd60e51b81526020600482015260126024820152711c185a5c9a5b99cb5859190b59985a5b195960721b60448201526064016101eb565b604080518082019091526000808252602082015281517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4790158015610b4357506020830151155b15610b635750506040805180820190915260008082526020820152919050565b604051806040016040528084600001518152602001828560200151610b8891906113d1565b610b92908461139f565b90529392505050565b60408051600480825260a08201909252600091829190816020015b6040805180820190915260008082526020820152815260200190600190039081610bb657505060408051600480825260a0820190925291925060009190602082015b610c0061115b565b815260200190600190039081610bf85790505090508a82600081518110610c2957610c29611409565b60200260200101819052508882600181518110610c4857610c48611409565b60200260200101819052508682600281518110610c6757610c67611409565b60200260200101819052508482600381518110610c8657610c86611409565b60200260200101819052508981600081518110610ca557610ca5611409565b60200260200101819052508781600181518110610cc457610cc4611409565b60200260200101819052508581600281518110610ce357610ce3611409565b60200260200101819052508381600381518110610d0257610d02611409565b6020026020010181905250610d178282610d26565b9b9a5050505050505050505050565b60008151835114610d725760405162461bcd60e51b81526020600482015260166024820152751c185a5c9a5b99cb5b195b99dd1a1ccb59985a5b195960521b60448201526064016101eb565b82516000610d81826006611380565b905060008167ffffffffffffffff811115610d9e57610d9e61141f565b604051908082528060200260200182016040528015610dc7578160200160208202803683370190505b50905060005b8381101561100257868181518110610de757610de7611409565b60200260200101516000015182826006610e019190611380565b610e0c906000611368565b81518110610e1c57610e1c611409565b602002602001018181525050868181518110610e3a57610e3a611409565b60200260200101516020015182826006610e549190611380565b610e5f906001611368565b81518110610e6f57610e6f611409565b602002602001018181525050858181518110610e8d57610e8d611409565b6020908102919091010151515182610ea6836006611380565b610eb1906002611368565b81518110610ec157610ec1611409565b602002602001018181525050858181518110610edf57610edf611409565b60209081029190910181015151015182610efa836006611380565b610f05906003611368565b81518110610f1557610f15611409565b602002602001018181525050858181518110610f3357610f33611409565b602002602001015160200151600060028110610f5157610f51611409565b602002015182610f62836006611380565b610f6d906004611368565b81518110610f7d57610f7d611409565b602002602001018181525050858181518110610f9b57610f9b611409565b602002602001015160200151600160028110610fb957610fb9611409565b602002015182610fca836006611380565b610fd5906005611368565b81518110610fe557610fe5611409565b602090810291909101015280610ffa816113b6565b915050610dcd565b5061100b61117b565b6000602082602086026020860160086107d05a03fa9050808015610a1757508061106f5760405162461bcd60e51b81526020600482015260156024820152741c185a5c9a5b99cb5bdc18dbd9194b59985a5b1959605a1b60448201526064016101eb565b505115159695505050505050565b6040805160a0810190915260006060820181815260808301919091528152602081016110a761115b565b81526020016110c9604051806040016040528060008152602001600081525090565b905290565b6040805160e08101909152600060a0820181815260c08301919091528152602081016110f861115b565b815260200161110561115b565b815260200161111261115b565b8152602001606081525090565b60405180606001604052806003906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b604051806040016040528061116e611199565b81526020016110c9611199565b60405180602001604052806001906020820280368337509192915050565b60405180604001604052806002906020820280368337509192915050565b600082601f8301126111c857600080fd5b6111d0611300565b8083856040860111156111e257600080fd5b60005b60028110156112045781358452602093840193909101906001016111e5565b509095945050505050565b6000806000806101e080868803121561122757600080fd5b61123187876111b7565b9450604087605f88011261124457600080fd5b61124c611300565b8082890160c08a018b81111561126157600080fd5b60005b600281101561128b576112778d846111b7565b855260209094019391850191600101611264565b508298506112998c826111b7565b975050505050508661011f8701126112b057600080fd5b6112b8611337565b80610100880189848a0111156112cd57600080fd5b600093505b60078410156112f2578035835260019390930192602092830192016112d2565b509598949750929550505050565b6040805190810167ffffffffffffffff8111828210171561133157634e487b7160e01b600052604160045260246000fd5b60405290565b60405160e0810167ffffffffffffffff8111828210171561133157634e487b7160e01b600052604160045260246000fd5b6000821982111561137b5761137b6113f3565b500190565b600081600019048311821515161561139a5761139a6113f3565b500290565b6000828210156113b1576113b16113f3565b500390565b60006000198214156113ca576113ca6113f3565b5060010190565b6000826113ee57634e487b7160e01b600052601260045260246000fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212204c23ccbcd43ff27a5278b92672a2c3c84177c11fc207c8d70818d8c1aca058a464736f6c63430008050033';

export class Verifier4__factory extends ContractFactory {
  constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(overrides?: Overrides & { from?: string | Promise<string> }): Promise<Verifier4> {
    return super.deploy(overrides || {}) as Promise<Verifier4>;
  }
  getDeployTransaction(overrides?: Overrides & { from?: string | Promise<string> }): TransactionRequest {
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
  static connect(address: string, signerOrProvider: Signer | Provider): Verifier4 {
    return new Contract(address, _abi, signerOrProvider) as Verifier4;
  }
}
