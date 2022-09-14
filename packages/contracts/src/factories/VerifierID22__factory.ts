/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { VerifierID22, VerifierID22Interface } from "../VerifierID22";

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
  "0x608060405234801561001057600080fd5b50611649806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063b9c6ea8714610030575b600080fd5b61004361003e3660046113ec565b610057565b604051901515815260200160405180910390f35b600061006161125a565b604080518082018252875181526020808901518183015290835281516080810183528751518184019081528851830151606083015281528251808401845288830180515182525183015181840152818301528382015281518083018352865181528682015181830152838301528151600b8082526101808201909352600092909182016101608036833701905050905060005b600b811015610143578481600b811061010f5761010f6115e7565b6020020151828281518110610126576101266115e7565b60209081029190910101528061013b81611594565b9150506100f4565b5061014e818361016c565b61015d57600192505050610164565b6000925050505b949350505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181610198610363565b9050806080015151855160016101ae9190611546565b146101f55760405162461bcd60e51b81526020600482015260126024820152711d995c9a599a595c8b5898590b5a5b9c1d5d60721b60448201526064015b60405180910390fd5b604080518082019091526000808252602082018190525b86518110156102e65783878281518110610228576102286115e7565b60200260200101511061027d5760405162461bcd60e51b815260206004820152601f60248201527f76657269666965722d6774652d736e61726b2d7363616c61722d6669656c640060448201526064016101ec565b6102d2826102cd85608001518460016102969190611546565b815181106102a6576102a66115e7565b60200260200101518a85815181106102c0576102c06115e7565b6020026020010151610ba5565b610c41565b9150806102de81611594565b91505061020c565b5061030f818360800151600081518110610302576103026115e7565b6020026020010151610c41565b90506103456103218660000151610cd9565b8660200151846000015185602001518587604001518b604001518960600151610d78565b610355576001935050505061035d565b600093505050505b92915050565b61036b6112ab565b6040805180820182527f2d4d9aa7e302d9df41749d5507949d05dbea33fbb16c643b22f599a2be6df2e281527f14bedd503c37ceb061d8ec60209fe345ce89830a19230301f076caff004d19266020808301919091529083528151608080820184527f0967032fcbf776d1afc985f88877f182d38480a653f2decaa9794cbc3bf3060c8285019081527f0e187847ad4c798374d0d6732bf501847dd68bc0e071241e0213bc7fc13db7ab606080850191909152908352845180860186527f304cfbd1e08a704a99f5e847d93f8c3caafddec46b7a0d379da69a4d112346a781527f1739c1b1a457a8c7313123d24d2f9192f896b7c63eea05a9d57f06547ad0cec8818601528385015285840192909252835180820185527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c28186019081527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed828501528152845180860186527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b81527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa818601528185015285850152835190810184527f187f6d8231c72d993abbee94fd4a831c6f6d1f08ab7b0f6ef64e53dd28daff118185019081527f16513df2f2cf8a9866c5358f7dddbe62ae0762c2dad8fcb208ff676217c4370c828401528152835180850185527f2c96060de2e276d836c5b0d46321cb22ae50138849beb50b73ce61dae742f81481527f2d8cd402b92a9bcdce134f2941ebb5a15cc86b448492baed41af29e888b3a8838185015281840152908401528151600c8082526101a08201909352919082015b60408051808201909152600080825260208201528152602001906001900390816105e757505060808201908152604080518082019091527f037b0dfee28bb1262385a1fde9acca7d388de9d85f1b1cf01549754265ad84b381527f2dddf12881f415b5f5c598ce939b5b9da8892d857cfa201219a2317dea955fb260208201529051805160009061067a5761067a6115e7565b602002602001018190525060405180604001604052807f2aa6d264ff4eb2678afd2d27506fa45da86ad34a8deb0669aed6ba554ead313081526020017f19bacd97f53d2481a9b1738eb188e536449bd41453bc91119a2914195380dd9781525081608001516001815181106106f1576106f16115e7565b602002602001018190525060405180604001604052807f01fd52f2dca0fd2ea259c681037feb513c7c56248209652c16ca10e3aa95741181526020017f0cf613db70f1f56adf0b3d13f5f7e6ff630d8652369bd796870abc8030d37a798152508160800151600281518110610768576107686115e7565b602002602001018190525060405180604001604052807f0d80013f40799ea60b6538f90dea1436c432bd34b044cf3782157dacd65a91fd81526020017f195f806352f4e8d87e4e60d3bba376371966d329356dde374f9dd9bfa508919281525081608001516003815181106107df576107df6115e7565b602002602001018190525060405180604001604052807f0aaa067e3eb2a727298437bdd65c0b95fe2db337fab9225c43ad5fb943c7b77181526020017f0abc9e9096504d73529730ad3a41e1414a43bf27deb0a7a19691a3470bf2695d8152508160800151600481518110610856576108566115e7565b602002602001018190525060405180604001604052807f0feeb32cfd162e8969f6907daa8c23bdebc45c5cfa3334ab974e8af23926b17981526020017f225a37da3bb04205766344a0102f0adaac61585604346cc2531990aaa85ba62881525081608001516005815181106108cd576108cd6115e7565b602002602001018190525060405180604001604052807f278059fe065ddaaf00dbe710f192f5e8ed19600bcd55e22e9cc7e01e02e0007b81526020017f03f9d017bcec8300c695d3f97712c18126777c4809ea193f2c3c57fb38778cee8152508160800151600681518110610944576109446115e7565b602002602001018190525060405180604001604052807f0304238006cddee98c5a51d2969bbaffcecc5c425d6dd0ab67a00081eea5df5381526020017f0ef70bc944465fd97cc1a349730d4b8bd3a5155939d701b33b5035440eb4ab3e81525081608001516007815181106109bb576109bb6115e7565b602002602001018190525060405180604001604052807f0fa59fd94ecb8467ce5078bd129f3e639dc65bb58af4410f5f538d8582cdd09d81526020017f09bee9814bf2ea67d152c71eeaf00addc74e2608785c3806c89f64f5084a686f8152508160800151600881518110610a3257610a326115e7565b602002602001018190525060405180604001604052807f27a9c8304562a0da6fff6279ae88bb1205b3e5338522b0d5d334b237e75ef69081526020017f11d641da53366dd8a7b99fde40624a57478d36f542c693b11e1fc0d142bd75798152508160800151600981518110610aa957610aa96115e7565b602002602001018190525060405180604001604052807f02a63fa37b9323083337b44e31c89b98045b73b104a939835342ee72c80a938581526020017f1c45191eac82e0e37ffbb037e4978f1e42644538f3abeb6331c4c1ad1bb0c2d68152508160800151600a81518110610b2057610b206115e7565b602002602001018190525060405180604001604052807f204640d194879ecde2fd71d3c17cd14cc933793ee7a5d88f289e91e1bb9a256381526020017f0384600de81ca9b6fef9b84460ac5955f95cb32a9c4a01901dc7450ac626e8338152508160800151600b81518110610b9757610b976115e7565b602002602001018190525090565b6040805180820190915260008082526020820152610bc16112fc565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa9050808015610bf457610bf6565bfe5b5080610c395760405162461bcd60e51b81526020600482015260126024820152711c185a5c9a5b99cb5b5d5b0b59985a5b195960721b60448201526064016101ec565b505092915050565b6040805180820190915260008082526020820152610c5d61131a565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa9050808015610bf4575080610c395760405162461bcd60e51b81526020600482015260126024820152711c185a5c9a5b99cb5859190b59985a5b195960721b60448201526064016101ec565b604080518082019091526000808252602082015281517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4790158015610d2057506020830151155b15610d405750506040805180820190915260008082526020820152919050565b604051806040016040528084600001518152602001828560200151610d6591906115af565b610d6f908461157d565b90529392505050565b60408051600480825260a08201909252600091829190816020015b6040805180820190915260008082526020820152815260200190600190039081610d9357505060408051600480825260a0820190925291925060009190602082015b610ddd611338565b815260200190600190039081610dd55790505090508a82600081518110610e0657610e066115e7565b60200260200101819052508882600181518110610e2557610e256115e7565b60200260200101819052508682600281518110610e4457610e446115e7565b60200260200101819052508482600381518110610e6357610e636115e7565b60200260200101819052508981600081518110610e8257610e826115e7565b60200260200101819052508781600181518110610ea157610ea16115e7565b60200260200101819052508581600281518110610ec057610ec06115e7565b60200260200101819052508381600381518110610edf57610edf6115e7565b6020026020010181905250610ef48282610f03565b9b9a5050505050505050505050565b60008151835114610f4f5760405162461bcd60e51b81526020600482015260166024820152751c185a5c9a5b99cb5b195b99dd1a1ccb59985a5b195960521b60448201526064016101ec565b82516000610f5e82600661155e565b905060008167ffffffffffffffff811115610f7b57610f7b6115fd565b604051908082528060200260200182016040528015610fa4578160200160208202803683370190505b50905060005b838110156111df57868181518110610fc457610fc46115e7565b60200260200101516000015182826006610fde919061155e565b610fe9906000611546565b81518110610ff957610ff96115e7565b602002602001018181525050868181518110611017576110176115e7565b60200260200101516020015182826006611031919061155e565b61103c906001611546565b8151811061104c5761104c6115e7565b60200260200101818152505085818151811061106a5761106a6115e7565b602090810291909101015151518261108383600661155e565b61108e906002611546565b8151811061109e5761109e6115e7565b6020026020010181815250508581815181106110bc576110bc6115e7565b602090810291909101810151510151826110d783600661155e565b6110e2906003611546565b815181106110f2576110f26115e7565b602002602001018181525050858181518110611110576111106115e7565b60200260200101516020015160006002811061112e5761112e6115e7565b60200201518261113f83600661155e565b61114a906004611546565b8151811061115a5761115a6115e7565b602002602001018181525050858181518110611178576111786115e7565b602002602001015160200151600160028110611196576111966115e7565b6020020151826111a783600661155e565b6111b2906005611546565b815181106111c2576111c26115e7565b6020908102919091010152806111d781611594565b915050610faa565b506111e8611358565b6000602082602086026020860160086107d05a03fa9050808015610bf457508061124c5760405162461bcd60e51b81526020600482015260156024820152741c185a5c9a5b99cb5bdc18dbd9194b59985a5b1959605a1b60448201526064016101ec565b505115159695505050505050565b6040805160a081019091526000606082018181526080830191909152815260208101611284611338565b81526020016112a6604051806040016040528060008152602001600081525090565b905290565b6040805160e08101909152600060a0820181815260c08301919091528152602081016112d5611338565b81526020016112e2611338565b81526020016112ef611338565b8152602001606081525090565b60405180606001604052806003906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b604051806040016040528061134b611376565b81526020016112a6611376565b60405180602001604052806001906020820280368337509192915050565b60405180604001604052806002906020820280368337509192915050565b600082601f8301126113a557600080fd5b6113ad6114dd565b8083856040860111156113bf57600080fd5b60005b60028110156113e15781358452602093840193909101906001016113c2565b509095945050505050565b60008060008061026080868803121561140457600080fd5b61140e8787611394565b9450604087605f88011261142157600080fd5b6114296114dd565b8082890160c08a018b81111561143e57600080fd5b60005b6002811015611468576114548d84611394565b855260209094019391850191600101611441565b508298506114768c82611394565b975050505050508661011f87011261148d57600080fd5b611495611514565b80610100880189848a0111156114aa57600080fd5b600093505b600b8410156114cf578035835260019390930192602092830192016114af565b509598949750929550505050565b6040805190810167ffffffffffffffff8111828210171561150e57634e487b7160e01b600052604160045260246000fd5b60405290565b604051610160810167ffffffffffffffff8111828210171561150e57634e487b7160e01b600052604160045260246000fd5b60008219821115611559576115596115d1565b500190565b6000816000190483118215151615611578576115786115d1565b500290565b60008282101561158f5761158f6115d1565b500390565b60006000198214156115a8576115a86115d1565b5060010190565b6000826115cc57634e487b7160e01b600052601260045260246000fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220b7fb6d23298e0ac1b4b628fcdf41ffab17de71be908e8b7bd6785a51c7e6a29d64736f6c63430008050033";

export class VerifierID22__factory extends ContractFactory {
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
  ): Promise<VerifierID22> {
    return super.deploy(overrides || {}) as Promise<VerifierID22>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): VerifierID22 {
    return super.attach(address) as VerifierID22;
  }
  connect(signer: Signer): VerifierID22__factory {
    return super.connect(signer) as VerifierID22__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VerifierID22Interface {
    return new utils.Interface(_abi) as VerifierID22Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VerifierID22 {
    return new Contract(address, _abi, signerOrProvider) as VerifierID22;
  }
}
