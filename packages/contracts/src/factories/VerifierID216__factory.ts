/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { VerifierID216, VerifierID216Interface } from "../VerifierID216";

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
        internalType: "uint256[25]",
        name: "input",
        type: "uint256[25]",
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
  "0x608060405234801561001057600080fd5b50611cca806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80636228e16614610030575b600080fd5b61004361003e366004611a6d565b610057565b604051901515815260200160405180910390f35b60006100616118db565b60408051808201825287518152602080890151818301529083528151608081018352875151818401908152885183015160608301528152825180840184528883018051518252518301518184015281830152838201528151808301835286518152868201518183015283830152815160198082526103408201909352600092909182016103208036833701905050905060005b60198110156101435784816019811061010f5761010f611c68565b602002015182828151811061012657610126611c68565b60209081029190910101528061013b81611c15565b9150506100f4565b5061014e818361016c565b61015d57600192505050610164565b6000925050505b949350505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181610198610363565b9050806080015151855160016101ae9190611bc7565b146101f55760405162461bcd60e51b81526020600482015260126024820152711d995c9a599a595c8b5898590b5a5b9c1d5d60721b60448201526064015b60405180910390fd5b604080518082019091526000808252602082018190525b86518110156102e6578387828151811061022857610228611c68565b60200260200101511061027d5760405162461bcd60e51b815260206004820152601f60248201527f76657269666965722d6774652d736e61726b2d7363616c61722d6669656c640060448201526064016101ec565b6102d2826102cd85608001518460016102969190611bc7565b815181106102a6576102a6611c68565b60200260200101518a85815181106102c0576102c0611c68565b6020026020010151611226565b6112c2565b9150806102de81611c15565b91505061020c565b5061030f81836080015160008151811061030257610302611c68565b60200260200101516112c2565b9050610345610321866000015161135a565b8660200151846000015185602001518587604001518b6040015189606001516113f9565b610355576001935050505061035d565b600093505050505b92915050565b61036b61192c565b6040805180820182527f2d4d9aa7e302d9df41749d5507949d05dbea33fbb16c643b22f599a2be6df2e281527f14bedd503c37ceb061d8ec60209fe345ce89830a19230301f076caff004d19266020808301919091529083528151608080820184527f0967032fcbf776d1afc985f88877f182d38480a653f2decaa9794cbc3bf3060c8285019081527f0e187847ad4c798374d0d6732bf501847dd68bc0e071241e0213bc7fc13db7ab606080850191909152908352845180860186527f304cfbd1e08a704a99f5e847d93f8c3caafddec46b7a0d379da69a4d112346a781527f1739c1b1a457a8c7313123d24d2f9192f896b7c63eea05a9d57f06547ad0cec8818601528385015285840192909252835180820185527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c28186019081527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed828501528152845180860186527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b81527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa818601528185015285850152835190810184527f188850ea3fab7db880ac195ffce5f314cba819884e90ee9a9b061580cd36fa5b8185019081527f093b02b1d5e5b36b048305dcf879ef5d584dcc94e3149094179d24e76cdec988828401528152835180850185527f164a797c00dcc8e6b953f5dbbe0dded5cb413ae7dd9da8a868e4acefbf7d866e81527f25aca026e0276907e3ca7aeac57f8f84264c9ccbf057395a4113f7515c12b10f8185015281840152908401528151601a8082526103608201909352919082015b60408051808201909152600080825260208201528152602001906001900390816105e757505060808201908152604080518082019091527f041e535d59cfc2455ac396192d9fbc801f0e9ff71b7b3825ded6631eeb591c2781527f12e7bc68aafd4bf1959b4c9ac57815ebeb32b66e3e3876a1c60e8517bf4da48f60208201529051805160009061067a5761067a611c68565b602002602001018190525060405180604001604052807f2affe61975c0108b608f96936cf24f0162d426a032ccedda48c4db0598afcb6681526020017e0ad2e78a1b081fdbdc0db25a97a8969e98de952d91cc96d6ec9a0a5a8c06cd81525081608001516001815181106106f0576106f0611c68565b602002602001018190525060405180604001604052807f15fc6c646bcb78beb376873ddb3a4221f5e3934e3f57e1debda465d22f9a6e8181526020017f2e3525e35293bcd723dafd2399f9bedb4193d8d84f671c96849f0417bcca2709815250816080015160028151811061076757610767611c68565b602002602001018190525060405180604001604052807f01ba66fa3d0d65c45fceaaedce36a9858b7078f746ef27d17e127fd38182b80b81526020017f1743b072df4a970d88b708b473e322a9e9bef07cfff0c0900993f1e2b6f3801181525081608001516003815181106107de576107de611c68565b602002602001018190525060405180604001604052807f2fbb3ff57d84a4676723ca34a2f4c18eb47ca598c788e55b88cbaa531c7d0aa381526020017f28a034a055e217231f2ed029192e4ebb56291b648aefe9849d7fceb9da009ffd815250816080015160048151811061085557610855611c68565b602002602001018190525060405180604001604052807f10fc29fe86675a1f5cc4a90b0425857e87bcc7848c2c2da835ef69e87060178181526020017f19f8691cfcdce4e75ce5d9fe99afa696171d9d804c286e32e361c49c66fb3c1881525081608001516005815181106108cc576108cc611c68565b602002602001018190525060405180604001604052807f2df2cc64b6e6bd6cba02485619aaf257334e5c8b53cc15bc86d1b94869ca667d81526020017f2df8a435cb1f244308c8e2229896d1ce8bf072fb0d9aaa8ef777c7735c4ef964815250816080015160068151811061094357610943611c68565b602002602001018190525060405180604001604052807f0d5fd1dbf4b1fbdf5cff509d73f8a5b3bee698b17d167f74bb66bae36607579781526020017f017b00229a368c7dce28ff57d614f431445cb8b3731e057fd870489e721c66af81525081608001516007815181106109ba576109ba611c68565b602002602001018190525060405180604001604052807f2359ba8bf8703f557bcd18fa6c99e3d59a793a870fb6b11b06bfa1c77901e98581526020017f2d63dc68cf664596e29cbb7b3cae755d9b90273aee7f62e3161367bcae6949b28152508160800151600881518110610a3157610a31611c68565b602002602001018190525060405180604001604052807f26ec435273d45b1ac281e4eb7a0d0f9a65878efc95c11964336b4777f46d788581526020017f1cc27b87cb2378cd6440d4d6c65648e209958164f855959456b7d513c6ddd9958152508160800151600981518110610aa857610aa8611c68565b602002602001018190525060405180604001604052807f16980889a39262906201cd1ee0ebbb6c36b99e2f396a2645d8483e448af4a8d781526020017f0cd32206079d57cd84611ee8dd23975815f933de186baa995d09f34a0737c7538152508160800151600a81518110610b1f57610b1f611c68565b602002602001018190525060405180604001604052807f25322278863012d62ee82a3cfaeb48fd8a3b2357cb45f0bc1d19921d4d6f523c81526020017f22194cd8758976be941ea77cc024e02067274390ad0c21e801bcdefa180ed8a48152508160800151600b81518110610b9657610b96611c68565b602002602001018190525060405180604001604052807f0d5b5e732703d7a358682d91d086a642e829e74c8942b7be7ac66a8651f26f4a81526020017f262d876d88f23f7bf9047f257296e756d1effe334e1f33ed77a144e5c6e7a3738152508160800151600c81518110610c0d57610c0d611c68565b602002602001018190525060405180604001604052807f0327d82b471e63fcfccd615278c2f2799201c7b5d9c43477c3c341d184ecb07281526020017f0d5b6cd42060308c65675ec8f6e02dece0ee33ad7d038deff60da65e4827ff1f8152508160800151600d81518110610c8457610c84611c68565b602002602001018190525060405180604001604052807f24cf439b2d75b0f1406004681d8d376eeaf050b1524c13b1f0136eb5ff312ae381526020017f2d64c5b7fe46f05a91497b4e8bbd33320c532f4db2cb846f21d6975e25ed14658152508160800151600e81518110610cfb57610cfb611c68565b602002602001018190525060405180604001604052807f2ea1b0e4e5cbfcd7f68285fbdcea441ae62f0eebea149e3a077527e09987d0bd81526020017f15134da7370df1a0647e69d003c58670f5cb21720f819f9fba0bb8d52de3d5318152508160800151600f81518110610d7257610d72611c68565b602002602001018190525060405180604001604052807f2bcb8a22a2bd4bf822411ca0b0efc3e7e457702999635decb222ffaa2bb5806281526020017f14277fcfd04ca49fa9b76d3d31ccf91d19dc8cdeea3aae3d3b68be3fc128a1588152508160800151601081518110610de957610de9611c68565b602002602001018190525060405180604001604052807f2085078a62df2f79aa72e72a8b2344e336172d909d410ac153a55550f23b241781526020017f1405d39bc0d380e424d69c5d32e182c2a03cd706ca682b2e923dd276e93da0bb8152508160800151601181518110610e6057610e60611c68565b602002602001018190525060405180604001604052807f11108c87ddf13a1883fcdf61d36e0133262c4d9a02a3e65685182e6ca80b951881526020017f1711ef9bf42102350b34467b953f6a3e6bf9e2a4be122da209a0d6d24cd646c28152508160800151601281518110610ed757610ed7611c68565b602002602001018190525060405180604001604052807f220172e5e6caf76b5b18cd3b161a2ae0d4f19fecfa6c0a387e564bd6fd32442781526020017f107c0d71ff5cfea33058c127c8281a70c5d91c9aa53099086cbbbf7cef837cc68152508160800151601381518110610f4e57610f4e611c68565b602002602001018190525060405180604001604052807f1284bac98824e0d7a50ae2aaffaa61ad79e3abf229976f345361255af26ccb0881526020017f0e89463bc7a836e74fa7fd2b88af8733a86167c9393acbc92351b938e9522f8d8152508160800151601481518110610fc557610fc5611c68565b602002602001018190525060405180604001604052807f1472a948a5f34f59bcd7d638f625363771182f2f1f5b826bb640fccbdd0e4e6981526020017f17080cb0889eca2d14bdff661280546f8cf263b42b509222fc009789c417844c815250816080015160158151811061103c5761103c611c68565b602002602001018190525060405180604001604052807f0f51ec569ccce2b05cb05fdc9a37d82f3f0b898484bc069416e819a783e94f6081526020017f10784e4c6688868822a46effbf1d350c32b67a790addd6596bce84de8b00c37781525081608001516016815181106110b3576110b3611c68565b602002602001018190525060405180604001604052807f216dce5fc6ddceb7210af057b5f1feed2017359ccc1660c0f7146a7bb960e0b381526020017f089e2ffb4d6fbf693b2b5b1d7c70a9d9dfb9b2bbd9e6ce62a8bdd6b4f63a93b8815250816080015160178151811061112a5761112a611c68565b602002602001018190525060405180604001604052807f044b02812e46e98a5800b5af8105f92b018ad047c06731533c7963fd7f78c40781526020017f1b7ae5e6e08f0675fb57b69ea4b54d7b12b28ac367bae15ab846048c19e02fa081525081608001516018815181106111a1576111a1611c68565b602002602001018190525060405180604001604052807f2a6b32df2265d685433e4d39c74228a5b8cf4daa494f5a38917d37e35d9d82b181526020017f0beffea0a2db947fb645a6fd6e779f9a4d2ec7b1f30b9cf663945d6506332078815250816080015160198151811061121857611218611c68565b602002602001018190525090565b604080518082019091526000808252602082015261124261197d565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa905080801561127557611277565bfe5b50806112ba5760405162461bcd60e51b81526020600482015260126024820152711c185a5c9a5b99cb5b5d5b0b59985a5b195960721b60448201526064016101ec565b505092915050565b60408051808201909152600080825260208201526112de61199b565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa90508080156112755750806112ba5760405162461bcd60e51b81526020600482015260126024820152711c185a5c9a5b99cb5859190b59985a5b195960721b60448201526064016101ec565b604080518082019091526000808252602082015281517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47901580156113a157506020830151155b156113c15750506040805180820190915260008082526020820152919050565b6040518060400160405280846000015181526020018285602001516113e69190611c30565b6113f09084611bfe565b90529392505050565b60408051600480825260a08201909252600091829190816020015b604080518082019091526000808252602082015281526020019060019003908161141457505060408051600480825260a0820190925291925060009190602082015b61145e6119b9565b8152602001906001900390816114565790505090508a8260008151811061148757611487611c68565b602002602001018190525088826001815181106114a6576114a6611c68565b602002602001018190525086826002815181106114c5576114c5611c68565b602002602001018190525084826003815181106114e4576114e4611c68565b6020026020010181905250898160008151811061150357611503611c68565b6020026020010181905250878160018151811061152257611522611c68565b6020026020010181905250858160028151811061154157611541611c68565b6020026020010181905250838160038151811061156057611560611c68565b60200260200101819052506115758282611584565b9b9a5050505050505050505050565b600081518351146115d05760405162461bcd60e51b81526020600482015260166024820152751c185a5c9a5b99cb5b195b99dd1a1ccb59985a5b195960521b60448201526064016101ec565b825160006115df826006611bdf565b905060008167ffffffffffffffff8111156115fc576115fc611c7e565b604051908082528060200260200182016040528015611625578160200160208202803683370190505b50905060005b838110156118605786818151811061164557611645611c68565b6020026020010151600001518282600661165f9190611bdf565b61166a906000611bc7565b8151811061167a5761167a611c68565b60200260200101818152505086818151811061169857611698611c68565b602002602001015160200151828260066116b29190611bdf565b6116bd906001611bc7565b815181106116cd576116cd611c68565b6020026020010181815250508581815181106116eb576116eb611c68565b6020908102919091010151515182611704836006611bdf565b61170f906002611bc7565b8151811061171f5761171f611c68565b60200260200101818152505085818151811061173d5761173d611c68565b60209081029190910181015151015182611758836006611bdf565b611763906003611bc7565b8151811061177357611773611c68565b60200260200101818152505085818151811061179157611791611c68565b6020026020010151602001516000600281106117af576117af611c68565b6020020151826117c0836006611bdf565b6117cb906004611bc7565b815181106117db576117db611c68565b6020026020010181815250508581815181106117f9576117f9611c68565b60200260200101516020015160016002811061181757611817611c68565b602002015182611828836006611bdf565b611833906005611bc7565b8151811061184357611843611c68565b60209081029190910101528061185881611c15565b91505061162b565b506118696119d9565b6000602082602086026020860160086107d05a03fa90508080156112755750806118cd5760405162461bcd60e51b81526020600482015260156024820152741c185a5c9a5b99cb5bdc18dbd9194b59985a5b1959605a1b60448201526064016101ec565b505115159695505050505050565b6040805160a0810190915260006060820181815260808301919091528152602081016119056119b9565b8152602001611927604051806040016040528060008152602001600081525090565b905290565b6040805160e08101909152600060a0820181815260c08301919091528152602081016119566119b9565b81526020016119636119b9565b81526020016119706119b9565b8152602001606081525090565b60405180606001604052806003906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b60405180604001604052806119cc6119f7565b81526020016119276119f7565b60405180602001604052806001906020820280368337509192915050565b60405180604001604052806002906020820280368337509192915050565b600082601f830112611a2657600080fd5b611a2e611b5e565b808385604086011115611a4057600080fd5b60005b6002811015611a62578135845260209384019390910190600101611a43565b509095945050505050565b600080600080610420808688031215611a8557600080fd5b611a8f8787611a15565b9450604087605f880112611aa257600080fd5b611aaa611b5e565b8082890160c08a018b811115611abf57600080fd5b60005b6002811015611ae957611ad58d84611a15565b855260209094019391850191600101611ac2565b50829850611af78c82611a15565b975050505050508661011f870112611b0e57600080fd5b611b16611b95565b80610100880189848a011115611b2b57600080fd5b600093505b6019841015611b5057803583526001939093019260209283019201611b30565b509598949750929550505050565b6040805190810167ffffffffffffffff81118282101715611b8f57634e487b7160e01b600052604160045260246000fd5b60405290565b604051610320810167ffffffffffffffff81118282101715611b8f57634e487b7160e01b600052604160045260246000fd5b60008219821115611bda57611bda611c52565b500190565b6000816000190483118215151615611bf957611bf9611c52565b500290565b600082821015611c1057611c10611c52565b500390565b6000600019821415611c2957611c29611c52565b5060010190565b600082611c4d57634e487b7160e01b600052601260045260246000fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212205dacd339046d42ea1e8d097f5602030a034e601d90b6880f4a8427d8599e45ea64736f6c63430008050033";

export class VerifierID216__factory extends ContractFactory {
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
  ): Promise<VerifierID216> {
    return super.deploy(overrides || {}) as Promise<VerifierID216>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): VerifierID216 {
    return super.attach(address) as VerifierID216;
  }
  connect(signer: Signer): VerifierID216__factory {
    return super.connect(signer) as VerifierID216__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VerifierID216Interface {
    return new utils.Interface(_abi) as VerifierID216Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VerifierID216 {
    return new Contract(address, _abi, signerOrProvider) as VerifierID216;
  }
}
