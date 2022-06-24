/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Verifier216, Verifier216Interface } from "../Verifier216";

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
        internalType: "uint256[23]",
        name: "input",
        type: "uint256[23]",
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
  "0x608060405234801561001057600080fd5b50611bdb806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063a0c2a19a14610030575b600080fd5b61004361003e36600461197e565b610057565b604051901515815260200160405180910390f35b60006100616117ec565b60408051808201825287518152602080890151818301529083528151608081018352875151818401908152885183015160608301528152825180840184528883018051518252518301518184015281830152838201528151808301835286518152868201518183015283830152815160178082526103008201909352600092909182016102e08036833701905050905060005b60178110156101435784816017811061010f5761010f611b79565b602002015182828151811061012657610126611b79565b60209081029190910101528061013b81611b26565b9150506100f4565b5061014e818361016c565b61015d57600192505050610164565b6000925050505b949350505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181610198610363565b9050806080015151855160016101ae9190611ad8565b146101f55760405162461bcd60e51b81526020600482015260126024820152711d995c9a599a595c8b5898590b5a5b9c1d5d60721b60448201526064015b60405180910390fd5b604080518082019091526000808252602082018190525b86518110156102e6578387828151811061022857610228611b79565b60200260200101511061027d5760405162461bcd60e51b815260206004820152601f60248201527f76657269666965722d6774652d736e61726b2d7363616c61722d6669656c640060448201526064016101ec565b6102d2826102cd85608001518460016102969190611ad8565b815181106102a6576102a6611b79565b60200260200101518a85815181106102c0576102c0611b79565b6020026020010151611137565b6111d3565b9150806102de81611b26565b91505061020c565b5061030f81836080015160008151811061030257610302611b79565b60200260200101516111d3565b9050610345610321866000015161126b565b8660200151846000015185602001518587604001518b60400151896060015161130a565b610355576001935050505061035d565b600093505050505b92915050565b61036b61183d565b6040805180820182527f2d4d9aa7e302d9df41749d5507949d05dbea33fbb16c643b22f599a2be6df2e281527f14bedd503c37ceb061d8ec60209fe345ce89830a19230301f076caff004d19266020808301919091529083528151608080820184527f0967032fcbf776d1afc985f88877f182d38480a653f2decaa9794cbc3bf3060c8285019081527f0e187847ad4c798374d0d6732bf501847dd68bc0e071241e0213bc7fc13db7ab606080850191909152908352845180860186527f304cfbd1e08a704a99f5e847d93f8c3caafddec46b7a0d379da69a4d112346a781527f1739c1b1a457a8c7313123d24d2f9192f896b7c63eea05a9d57f06547ad0cec8818601528385015285840192909252835180820185527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c28186019081527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed828501528152845180860186527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b81527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa818601528185015285850152835190810184527f0d90715fdb8741aaa360b7d045d6570488a0af1319e0762e4b381a3cdb86e0be8185019081527f099f61db4ae4134e6b7d16180a2b9c9450f8ea918166dbcab8f6d30537631f84828401528152835180850185527f19c07eddd3f9a6ed3864ae90b6efe9de960013d17e885266e1caaaaedff1306f81527f0fec4d428029c7dc57579c18ccfa615294c88203791285bd1ed8f42b62868c2a818501528184015290840152815160188082526103208201909352919082015b60408051808201909152600080825260208201528152602001906001900390816105e757505060808201908152604080518082019091527f28dc06fb73581c43eec4c0b4b47414ac364eff3f476014371a140432cce8055a81527f054a4c4400d2d45d71deb73f4bdf7d69364e7dc3e0b1bf83e2da4535e4c5064e60208201529051805160009061067a5761067a611b79565b602002602001018190525060405180604001604052807f09f97aeb9ccc8dcca5eccb023298611c0c351bad9cb61222f292e04f87fe478f81526020017f16494f386fa469f5bd2249d1c78aef85dc0eaab209750cc0598ae62dbd8f145e81525081608001516001815181106106f1576106f1611b79565b602002602001018190525060405180604001604052807f0ccaba896280b8264b415b5de71808cbe6082ad10e9630bfcf04b76309ad6acb81526020017f1497b669579fd3039ed06074d71d5fd14fb2a5a8d3fbc1db8de81dacf7ebecd3815250816080015160028151811061076857610768611b79565b602002602001018190525060405180604001604052807f0d1401a696e0c5b4260401e91b76feb5ab8fcaec71cb129bc2ab7746131493c981526020017f1b8e69c0ca562847c0f2418a8ed5f00156c28f9563b5e2ffb2e6fdfeb173f4fa81525081608001516003815181106107df576107df611b79565b602002602001018190525060405180604001604052807f211039b94925165c65bc1d42692767f2f152c80ee050a744ea90db3c9d393f0d81526020017f267f3f695423bcef679770f70ce399b59219cfb7dee8d6754a351e1dc9e3cae2815250816080015160048151811061085657610856611b79565b602002602001018190525060405180604001604052807f0b17bf11a1d69f6b8134f3bddd2b859d49a94cd5cf20f1e39f49dbf3f90d76c781526020017f17ad05cd2ea90301cfef8db97a48990b1209ade677cfeee2a678b8c7530456a081525081608001516005815181106108cd576108cd611b79565b602002602001018190525060405180604001604052807f22b2528d01b15235f4054d1c47be6eb14d99a45468af7617908d68d59d06276281526020017f02d17a4f23907703531154f874fc163c3b8871b65b7be39a611af6daaff2d9bd815250816080015160068151811061094457610944611b79565b602002602001018190525060405180604001604052807f0aaddc280610ccbcdec55cd0a98301318f148e6df2dbb7835b008a35c172e42981526020017f053a4001a1919e6d90e7073b6341ebe62239fb0b88ef94ae5f8081964af1a53d81525081608001516007815181106109bb576109bb611b79565b602002602001018190525060405180604001604052807f09991b1741b3c3e0f260bbdaed9f662d4dc2fe6eb950343b2215eb86730baec981526020017f20bd0d9b800a82c31ab684f3c33b1efe041f5038e789d51f0f127048f7be880d8152508160800151600881518110610a3257610a32611b79565b602002602001018190525060405180604001604052807f2ef936bd2bfbfeafcc907207812762babe7e841d58b30edd406a15f1dbdad8d581526020017f192668f5a1a3ccafb1fe1f40e286412af0e276de9113f8cd1b66582c1e9c21818152508160800151600981518110610aa957610aa9611b79565b602002602001018190525060405180604001604052807f170cd61a7129b66f9b85e78110f20f138986d566284aa7206341f919522cebce81526020017f0806a59823beeb24e8cae1d42c8e2cc3c557924ab1c10ccaaa7bc1d74d61745f8152508160800151600a81518110610b2057610b20611b79565b602002602001018190525060405180604001604052807f0e7d0b9fa8827b923caf50c7adf11cb4ca5332f218dfb5551a91e2c7d71c6fd381526020017f129066e8a22b3dc04fd7e4801cc47f278df0820d2ceb73eed14954e3d29e971f8152508160800151600b81518110610b9757610b97611b79565b602002602001018190525060405180604001604052807f23f1c73ff93df0551472aa515ef19841cfacd32da7f3227cee89d0674d66290181526020017f1e79b7984940f978fc96be903f7ecb0fb209372a70ba02b1e2e18129e4fbc6578152508160800151600c81518110610c0e57610c0e611b79565b602002602001018190525060405180604001604052807f1b2dab88aebb930cd51015b7837f8c2f2724f2e8b708481a09d35e1cfc0f92f981526020017f1b23fd4f021e4872c6737a2e7ac74b07a0606b8210292c3d5fd960a6035df8138152508160800151600d81518110610c8557610c85611b79565b602002602001018190525060405180604001604052807f21e3ee66f14a19977f409915e26ce5f36600bc576cc7829440f11c9a0b2cd5a881526020017f22c9fccd55a855540bbe29e3507907e0ce3293a2ab3af4f1f2e21e0c7248a8488152508160800151600e81518110610cfc57610cfc611b79565b602002602001018190525060405180604001604052807f035f91fe918c38ebdf392630a957ac8e477166ad8f5a0a36dd181f13514a140381526020017f021444019a1de1a9e957c17955fa4d6d03f343dcd77bc6a22f9caa0c9afb427b8152508160800151600f81518110610d7357610d73611b79565b602002602001018190525060405180604001604052807f26da2cad4ba914b898877e885f6010444fa1feff343dfe11b6ef046f5585101e81526020017f182e1b4234001179baca8412a517048e374bc709df948e2b35a05909ea3f7ca78152508160800151601081518110610dea57610dea611b79565b602002602001018190525060405180604001604052807ece06b30272787c480d19af1fb54fcf1094fcd9c1fa60a8bc1b1f4d43f6c9d881526020017f26bc72d22123e71011461f6a082fc0d08bbc6a29f8b99fa0736677a0252bb20d8152508160800151601181518110610e6057610e60611b79565b602002602001018190525060405180604001604052807f2a05e6db6dba6a7ad8f95373041d23291c118d645cba730b285391da154b3d0781526020017f0b827de858c5743e422dc66928d093853d0ffc7cb42c33d44029ca3b890dccd18152508160800151601281518110610ed757610ed7611b79565b602002602001018190525060405180604001604052807f28855449a65dee39991cd1a14fbbac7f8fe55e5d543118f42e01a3f747e7ba1281526020017f20f2fe7867e4e1a87478b14e5fff3dc88f534809963fbd88cbdbc84513356b8a8152508160800151601381518110610f4e57610f4e611b79565b602002602001018190525060405180604001604052807f286168bbf22a5da8e34a02893e56135a239e6fcc08d159d85fa8111fe32cf05d81526020017f112648ef76e887b26ad29d97df08a2e3d2ce5af205f9d4372c7e073de87131c78152508160800151601481518110610fc557610fc5611b79565b602002602001018190525060405180604001604052807e52bf26403d0a05144606678c7e11c1d00588a32a54f4fadd652b5e56d4162481526020017f0e0a8b9f6a88b22f1d7933a3cdd129f8fee1adeeba1b798d12fc6cd765dcaf64815250816080015160158151811061103b5761103b611b79565b602002602001018190525060405180604001604052807f2003403992340e7dabf6768d57472987c788f52eef3185551bc93a78b02a4dc081526020017f27b3af6047312e6b00ecfbec011c3661c6db4a75747f8cbb08c0506975c04e2481525081608001516016815181106110b2576110b2611b79565b602002602001018190525060405180604001604052807f1cf69c463989836166fc25b1b15c0d69a068afa30e45f4e994e1e64294034a8281526020017f1dde8c5ae340c064b56847c464c47541c4315bb1ad1232a45723f255cea35b7f815250816080015160178151811061112957611129611b79565b602002602001018190525090565b604080518082019091526000808252602082015261115361188e565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa905080801561118657611188565bfe5b50806111cb5760405162461bcd60e51b81526020600482015260126024820152711c185a5c9a5b99cb5b5d5b0b59985a5b195960721b60448201526064016101ec565b505092915050565b60408051808201909152600080825260208201526111ef6118ac565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa90508080156111865750806111cb5760405162461bcd60e51b81526020600482015260126024820152711c185a5c9a5b99cb5859190b59985a5b195960721b60448201526064016101ec565b604080518082019091526000808252602082015281517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47901580156112b257506020830151155b156112d25750506040805180820190915260008082526020820152919050565b6040518060400160405280846000015181526020018285602001516112f79190611b41565b6113019084611b0f565b90529392505050565b60408051600480825260a08201909252600091829190816020015b604080518082019091526000808252602082015281526020019060019003908161132557505060408051600480825260a0820190925291925060009190602082015b61136f6118ca565b8152602001906001900390816113675790505090508a8260008151811061139857611398611b79565b602002602001018190525088826001815181106113b7576113b7611b79565b602002602001018190525086826002815181106113d6576113d6611b79565b602002602001018190525084826003815181106113f5576113f5611b79565b6020026020010181905250898160008151811061141457611414611b79565b6020026020010181905250878160018151811061143357611433611b79565b6020026020010181905250858160028151811061145257611452611b79565b6020026020010181905250838160038151811061147157611471611b79565b60200260200101819052506114868282611495565b9b9a5050505050505050505050565b600081518351146114e15760405162461bcd60e51b81526020600482015260166024820152751c185a5c9a5b99cb5b195b99dd1a1ccb59985a5b195960521b60448201526064016101ec565b825160006114f0826006611af0565b905060008167ffffffffffffffff81111561150d5761150d611b8f565b604051908082528060200260200182016040528015611536578160200160208202803683370190505b50905060005b838110156117715786818151811061155657611556611b79565b602002602001015160000151828260066115709190611af0565b61157b906000611ad8565b8151811061158b5761158b611b79565b6020026020010181815250508681815181106115a9576115a9611b79565b602002602001015160200151828260066115c39190611af0565b6115ce906001611ad8565b815181106115de576115de611b79565b6020026020010181815250508581815181106115fc576115fc611b79565b6020908102919091010151515182611615836006611af0565b611620906002611ad8565b8151811061163057611630611b79565b60200260200101818152505085818151811061164e5761164e611b79565b60209081029190910181015151015182611669836006611af0565b611674906003611ad8565b8151811061168457611684611b79565b6020026020010181815250508581815181106116a2576116a2611b79565b6020026020010151602001516000600281106116c0576116c0611b79565b6020020151826116d1836006611af0565b6116dc906004611ad8565b815181106116ec576116ec611b79565b60200260200101818152505085818151811061170a5761170a611b79565b60200260200101516020015160016002811061172857611728611b79565b602002015182611739836006611af0565b611744906005611ad8565b8151811061175457611754611b79565b60209081029190910101528061176981611b26565b91505061153c565b5061177a6118ea565b6000602082602086026020860160086107d05a03fa90508080156111865750806117de5760405162461bcd60e51b81526020600482015260156024820152741c185a5c9a5b99cb5bdc18dbd9194b59985a5b1959605a1b60448201526064016101ec565b505115159695505050505050565b6040805160a0810190915260006060820181815260808301919091528152602081016118166118ca565b8152602001611838604051806040016040528060008152602001600081525090565b905290565b6040805160e08101909152600060a0820181815260c08301919091528152602081016118676118ca565b81526020016118746118ca565b81526020016118816118ca565b8152602001606081525090565b60405180606001604052806003906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b60405180604001604052806118dd611908565b8152602001611838611908565b60405180602001604052806001906020820280368337509192915050565b60405180604001604052806002906020820280368337509192915050565b600082601f83011261193757600080fd5b61193f611a6f565b80838560408601111561195157600080fd5b60005b6002811015611973578135845260209384019390910190600101611954565b509095945050505050565b6000806000806103e080868803121561199657600080fd5b6119a08787611926565b9450604087605f8801126119b357600080fd5b6119bb611a6f565b8082890160c08a018b8111156119d057600080fd5b60005b60028110156119fa576119e68d84611926565b8552602090940193918501916001016119d3565b50829850611a088c82611926565b975050505050508661011f870112611a1f57600080fd5b611a27611aa6565b80610100880189848a011115611a3c57600080fd5b600093505b6017841015611a6157803583526001939093019260209283019201611a41565b509598949750929550505050565b6040805190810167ffffffffffffffff81118282101715611aa057634e487b7160e01b600052604160045260246000fd5b60405290565b6040516102e0810167ffffffffffffffff81118282101715611aa057634e487b7160e01b600052604160045260246000fd5b60008219821115611aeb57611aeb611b63565b500190565b6000816000190483118215151615611b0a57611b0a611b63565b500290565b600082821015611b2157611b21611b63565b500390565b6000600019821415611b3a57611b3a611b63565b5060010190565b600082611b5e57634e487b7160e01b600052601260045260246000fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220af56b10e896476716beaeb8c8fc3fbfbc8c8bb8378e0113b59c4f558218e606b64736f6c63430008050033";

export class Verifier216__factory extends ContractFactory {
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
  ): Promise<Verifier216> {
    return super.deploy(overrides || {}) as Promise<Verifier216>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Verifier216 {
    return super.attach(address) as Verifier216;
  }
  connect(signer: Signer): Verifier216__factory {
    return super.connect(signer) as Verifier216__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Verifier216Interface {
    return new utils.Interface(_abi) as Verifier216Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Verifier216 {
    return new Contract(address, _abi, signerOrProvider) as Verifier216;
  }
}
