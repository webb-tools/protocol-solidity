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
        internalType: "uint256[6]",
        name: "input",
        type: "uint256[6]",
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
  "0x608060405234801561001057600080fd5b506113f2806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063f398789b14610030575b600080fd5b61004361003e366004611196565b610057565b604051901515815260200160405180910390f35b6000610061611004565b604080518082018252875181526020808901518183015290835281516080810183528751518184019081528851830151606083015281528251808401845288830180515182525183015181840152818301528382015281518083018352865181528682015181830152838301528151600680825260e082019093526000929091820160c08036833701905050905060005b60068110156101415784816006811061010d5761010d611390565b602002015182828151811061012457610124611390565b6020908102919091010152806101398161133d565b9150506100f2565b5061014c818361016a565b61015b57600192505050610162565b6000925050505b949350505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181610196610361565b9050806080015151855160016101ac91906112ef565b146101f35760405162461bcd60e51b81526020600482015260126024820152711d995c9a599a595c8b5898590b5a5b9c1d5d60721b60448201526064015b60405180910390fd5b604080518082019091526000808252602082018190525b86518110156102e4578387828151811061022657610226611390565b60200260200101511061027b5760405162461bcd60e51b815260206004820152601f60248201527f76657269666965722d6774652d736e61726b2d7363616c61722d6669656c640060448201526064016101ea565b6102d0826102cb856080015184600161029491906112ef565b815181106102a4576102a4611390565b60200260200101518a85815181106102be576102be611390565b602002602001015161094f565b6109eb565b9150806102dc8161133d565b91505061020a565b5061030d81836080015160008151811061030057610300611390565b60200260200101516109eb565b905061034361031f8660000151610a83565b8660200151846000015185602001518587604001518b604001518960600151610b22565b610353576001935050505061035b565b600093505050505b92915050565b610369611055565b6040805180820182527f229140b67fcfcf3049595ff75e549d4fdf21fb4d1dcdb3cb9371f06bed9921c181527f08382ad8e66f245b397da86f562116dd6d3460f9b8c42271b502a1033c18b6e96020808301919091529083528151608080820184527f0f96b6b4127319718b503245ed652c753205293b14ce5876c1bcabab082bf60d8285019081527f100486fa5e1f0aa03310a179f6699f3142731105f9f56881c0abce7befc77c02606080850191909152908352845180860186527f043a5d45934f6ca80ac6da4f5fa494e5f528071c42de1ab97a6b6ec48a99384481527f09d5e83cf294d4b6acfa81b560556adc23761e8083ffc46a1fedb53faf4c9678818601528385015285840192909252835180820185527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c28186019081527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed828501528152845180860186527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b81527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa818601528185015285850152835190810184527f22c91bcece63926f137fda0d1645ea61742384f59c034e0965c43ee88d71934e8185019081527f2c4ef2c6f1dde6ff324026788835bc75dc6f4a0d1815d53e21f774d5e7a5b7a3828401528152835180850185527f0bcb7401eec6ece07961fda05965b082ad9d54d8c3544bbc3e8028fb29cd57c681527f089a7ed7215dfaa8683275d8f707eaff9871a8b3f90103a9e2df1fcf09203328818501528184015290840152815160078082526101008201909352919082015b60408051808201909152600080825260208201528152602001906001900390816105e557505060808201908152604080518082019091527f25765e0528560efe43b15be75e801f7218b66a82a7564954d0a4c47839073abe81527f303c527f34ee218839491aa777f162b2ada4b8a78e04a3268a0b89394ee8b7d160208201529051805160009061067857610678611390565b602002602001018190525060405180604001604052807f06e98acc59a189f357bd22e3c2be254e04aba3dd5d2513b39ec0d55df7a67fa081526020017f29a06964dc4939cf68ca1c01da88063268de0f0d828b381393caa28a10fc3c0e81525081608001516001815181106106ef576106ef611390565b602002602001018190525060405180604001604052807f21d67407866dd33509a963c7643802606a04be9fb4b4e1bee7738be342cea97381526020017f07480e7582f1f5e6304fb3ffe1d4629c26b8a3bdac56469e8e5275ef5fc967ef815250816080015160028151811061076657610766611390565b602002602001018190525060405180604001604052807f2920f0df18a40ad8d6a5a18bc0b6657a6b33a3ffb6fef0b96bb5ebdfef5e301081526020017f27b94a8e6abd0dce36bc5405269c6e40a134e23fc2b58d6e44f82b77a36a725481525081608001516003815181106107dd576107dd611390565b602002602001018190525060405180604001604052807f1270c40ac14c4b71c55856aecd054b31d504ff29e3073916cd395a363b00d6db81526020017f13a84832758a9e2db88fb0a2065d85d32d7f86ad4cfab08a1792bd619c40e260815250816080015160048151811061085457610854611390565b602002602001018190525060405180604001604052807f2b91898be2e0dd6c7cd8c4e09e33556f0fb2b1e448f87badb196909d4b21b38481526020017f2af15466b2e515db3e4717d7906272b78b4753e58a11d75a999c3b105ef54fc981525081608001516005815181106108cb576108cb611390565b602002602001018190525060405180604001604052807f039ecf10d9154de1f055806c5064f05f1fb676fc422ceab45aa7d4fa4eac69c581526020017eca2839731681731866cdaba6a30954bbd9107f599b0c2765d3720453a3d781815250816080015160068151811061094157610941611390565b602002602001018190525090565b604080518082019091526000808252602082015261096b6110a6565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa905080801561099e576109a0565bfe5b50806109e35760405162461bcd60e51b81526020600482015260126024820152711c185a5c9a5b99cb5b5d5b0b59985a5b195960721b60448201526064016101ea565b505092915050565b6040805180820190915260008082526020820152610a076110c4565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa905080801561099e5750806109e35760405162461bcd60e51b81526020600482015260126024820152711c185a5c9a5b99cb5859190b59985a5b195960721b60448201526064016101ea565b604080518082019091526000808252602082015281517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4790158015610aca57506020830151155b15610aea5750506040805180820190915260008082526020820152919050565b604051806040016040528084600001518152602001828560200151610b0f9190611358565b610b199084611326565b90529392505050565b60408051600480825260a08201909252600091829190816020015b6040805180820190915260008082526020820152815260200190600190039081610b3d57505060408051600480825260a0820190925291925060009190602082015b610b876110e2565b815260200190600190039081610b7f5790505090508a82600081518110610bb057610bb0611390565b60200260200101819052508882600181518110610bcf57610bcf611390565b60200260200101819052508682600281518110610bee57610bee611390565b60200260200101819052508482600381518110610c0d57610c0d611390565b60200260200101819052508981600081518110610c2c57610c2c611390565b60200260200101819052508781600181518110610c4b57610c4b611390565b60200260200101819052508581600281518110610c6a57610c6a611390565b60200260200101819052508381600381518110610c8957610c89611390565b6020026020010181905250610c9e8282610cad565b9b9a5050505050505050505050565b60008151835114610cf95760405162461bcd60e51b81526020600482015260166024820152751c185a5c9a5b99cb5b195b99dd1a1ccb59985a5b195960521b60448201526064016101ea565b82516000610d08826006611307565b905060008167ffffffffffffffff811115610d2557610d256113a6565b604051908082528060200260200182016040528015610d4e578160200160208202803683370190505b50905060005b83811015610f8957868181518110610d6e57610d6e611390565b60200260200101516000015182826006610d889190611307565b610d939060006112ef565b81518110610da357610da3611390565b602002602001018181525050868181518110610dc157610dc1611390565b60200260200101516020015182826006610ddb9190611307565b610de69060016112ef565b81518110610df657610df6611390565b602002602001018181525050858181518110610e1457610e14611390565b6020908102919091010151515182610e2d836006611307565b610e389060026112ef565b81518110610e4857610e48611390565b602002602001018181525050858181518110610e6657610e66611390565b60209081029190910181015151015182610e81836006611307565b610e8c9060036112ef565b81518110610e9c57610e9c611390565b602002602001018181525050858181518110610eba57610eba611390565b602002602001015160200151600060028110610ed857610ed8611390565b602002015182610ee9836006611307565b610ef49060046112ef565b81518110610f0457610f04611390565b602002602001018181525050858181518110610f2257610f22611390565b602002602001015160200151600160028110610f4057610f40611390565b602002015182610f51836006611307565b610f5c9060056112ef565b81518110610f6c57610f6c611390565b602090810291909101015280610f818161133d565b915050610d54565b50610f92611102565b6000602082602086026020860160086107d05a03fa905080801561099e575080610ff65760405162461bcd60e51b81526020600482015260156024820152741c185a5c9a5b99cb5bdc18dbd9194b59985a5b1959605a1b60448201526064016101ea565b505115159695505050505050565b6040805160a08101909152600060608201818152608083019190915281526020810161102e6110e2565b8152602001611050604051806040016040528060008152602001600081525090565b905290565b6040805160e08101909152600060a0820181815260c083019190915281526020810161107f6110e2565b815260200161108c6110e2565b81526020016110996110e2565b8152602001606081525090565b60405180606001604052806003906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b60405180604001604052806110f5611120565b8152602001611050611120565b60405180602001604052806001906020820280368337509192915050565b60405180604001604052806002906020820280368337509192915050565b600082601f83011261114f57600080fd5b611157611287565b80838560408601111561116957600080fd5b60005b600281101561118b57813584526020938401939091019060010161116c565b509095945050505050565b6000806000806101c08086880312156111ae57600080fd5b6111b8878761113e565b9450604087605f8801126111cb57600080fd5b6111d3611287565b8082890160c08a018b8111156111e857600080fd5b60005b6002811015611212576111fe8d8461113e565b8552602090940193918501916001016111eb565b508298506112208c8261113e565b975050505050508661011f87011261123757600080fd5b61123f6112be565b80610100880189848a01111561125457600080fd5b600093505b600684101561127957803583526001939093019260209283019201611259565b509598949750929550505050565b6040805190810167ffffffffffffffff811182821017156112b857634e487b7160e01b600052604160045260246000fd5b60405290565b60405160c0810167ffffffffffffffff811182821017156112b857634e487b7160e01b600052604160045260246000fd5b600082198211156113025761130261137a565b500190565b60008160001904831182151516156113215761132161137a565b500290565b6000828210156113385761133861137a565b500390565b60006000198214156113515761135161137a565b5060010190565b60008261137557634e487b7160e01b600052601260045260246000fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212205dd1362faa3d898d31fe9f9d7cc237fb5d7f6d5e4cc17081adcc1e26abb719a564736f6c63430008050033";

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
