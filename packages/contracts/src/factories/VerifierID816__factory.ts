/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { VerifierID816, VerifierID816Interface } from "../VerifierID816";

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
        internalType: "uint256[37]",
        name: "input",
        type: "uint256[37]",
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
  "0x608060405234801561001057600080fd5b5061225e806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80637685257114610030575b600080fd5b61004361003e366004612001565b610057565b604051901515815260200160405180910390f35b6000610061611e6f565b60408051808201825287518152602080890151818301529083528151608081018352875151818401908152885183015160608301528152825180840184528883018051518252518301518184015281830152838201528151808301835286518152868201518183015283830152815160258082526104c08201909352600092909182016104a08036833701905050905060005b60258110156101435784816025811061010f5761010f6121fc565b6020020151828281518110610126576101266121fc565b60209081029190910101528061013b816121a9565b9150506100f4565b5061014e818361016c565b61015d57600192505050610164565b6000925050505b949350505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181610198610363565b9050806080015151855160016101ae919061215b565b146101f55760405162461bcd60e51b81526020600482015260126024820152711d995c9a599a595c8b5898590b5a5b9c1d5d60721b60448201526064015b60405180910390fd5b604080518082019091526000808252602082018190525b86518110156102e65783878281518110610228576102286121fc565b60200260200101511061027d5760405162461bcd60e51b815260206004820152601f60248201527f76657269666965722d6774652d736e61726b2d7363616c61722d6669656c640060448201526064016101ec565b6102d2826102cd8560800151846001610296919061215b565b815181106102a6576102a66121fc565b60200260200101518a85815181106102c0576102c06121fc565b60200260200101516117ba565b611856565b9150806102de816121a9565b91505061020c565b5061030f818360800151600081518110610302576103026121fc565b6020026020010151611856565b905061034561032186600001516118ee565b8660200151846000015185602001518587604001518b60400151896060015161198d565b610355576001935050505061035d565b600093505050505b92915050565b61036b611ec0565b6040805180820182527f2d4d9aa7e302d9df41749d5507949d05dbea33fbb16c643b22f599a2be6df2e281527f14bedd503c37ceb061d8ec60209fe345ce89830a19230301f076caff004d19266020808301919091529083528151608080820184527f0967032fcbf776d1afc985f88877f182d38480a653f2decaa9794cbc3bf3060c8285019081527f0e187847ad4c798374d0d6732bf501847dd68bc0e071241e0213bc7fc13db7ab606080850191909152908352845180860186527f304cfbd1e08a704a99f5e847d93f8c3caafddec46b7a0d379da69a4d112346a781527f1739c1b1a457a8c7313123d24d2f9192f896b7c63eea05a9d57f06547ad0cec8818601528385015285840192909252835180820185527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c28186019081527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed828501528152845180860186527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b81527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa818601528185015285850152835190810184527f11f1680356527667b5d7005a18579b3c6e6f6d330940be2c96d4e55de12dd42f8185019081527f181498e475408b7774599707698ac7c82be77052fc94c9699c7f8a8d10e4b540828401528152835180850185527f0bf5a118a06098b4d422503886f780f0c2df5c07df9fec7035a60b1e1ed7549581527f1d36d876b6615dd15839bee686fc8c95a34fac8125907687520bd60496c95a17818501528184015290840152815160268082526104e08201909352919082015b60408051808201909152600080825260208201528152602001906001900390816105e757505060808201908152604080518082019091527f0b0299f4bfcb91243dd231c97260d9c5fa9bcbc86e3ed125a3a9707697dbc88981527e8ae8566f55e835dbb9c888d0ea3227384011a035cd8f051b0d537dace9e4fb602082015290518051600090610679576106796121fc565b602002602001018190525060405180604001604052807f012616cac48e2c72a58367e62a9d4c78747a3768f5e8d5d4fec5ea2080e03a6581526020017f2742647ec8e7ca37831b48696eb53bb119262a800892d037a16ad577183040ee81525081608001516001815181106106f0576106f06121fc565b602002602001018190525060405180604001604052807f07c8ee413f8b9160d452d4194e4aa2ba2a60ca126bc71fcd392452dce170f4d581526020017f2e52e5b7ac609a428411f4d16d94eafe496035fd969666dfd534d64e130dd8848152508160800151600281518110610767576107676121fc565b602002602001018190525060405180604001604052807f0f95122bf5b1ddb81b40d489169695227f8abead611ebc275eb5fb68d736a5ba81526020017f20bc9184235a1cc7a6df5752d3b193352c1b9c479af3f339a5eff5492b0832e481525081608001516003815181106107de576107de6121fc565b602002602001018190525060405180604001604052807f204608fc51768b8eed622684a079f39bfe67bf1b6ade3e97dbcb694a2156911d81526020017f03a57553283a107280b90f5f4c075badbbf75bfb903c2dffb47dcedfc08b1cfb8152508160800151600481518110610855576108556121fc565b602002602001018190525060405180604001604052807f189c7d79d847a0d08e165baaeb97286522586b7fe2d47abf3e186e3101fb7c0081526020017f177615a972de0f704aee23f779cd1d83838b394c362984bc6068bb10addaa53581525081608001516005815181106108cc576108cc6121fc565b602002602001018190525060405180604001604052807f2d8211eed7a12d501c9b0e12461de3035322375b7545638395b1c445cbfec50d81526020017f0f10c3cbb01d5230cc4cacf11d972e117f1191bfc1707c670fcc5ecfcd978df28152508160800151600681518110610943576109436121fc565b602002602001018190525060405180604001604052807f0dc8d24d9aee2c94b8bddda85ba3f84e5dd361955ba0b45e24416276ec20b7ec81526020017f0c349f4dac1f4b662daa6b6f51ca87ecf188b500c3a15251af64ecda9735275b81525081608001516007815181106109ba576109ba6121fc565b602002602001018190525060405180604001604052807f19e6e4369a67dafda8754610e8a16d303392212e7e0e6b7f38424a78e44ee5ed81526020017f162adffcf3325516839a334537d4a10fbe0d0ce52bb1718f27db32f51b4b15fb8152508160800151600881518110610a3157610a316121fc565b602002602001018190525060405180604001604052807f18fc28291ecb8b1d4569d548c0b5cd34e937e7cf0ff98f02dd4e9360d39095f081526020017f14d1726e3a93bc709d868e2a24c9484e6df6b7c54034dbf7d38abd0e90123d478152508160800151600981518110610aa857610aa86121fc565b602002602001018190525060405180604001604052807f24c87673891d91feb2d7ffd8a68051147343bb61504cc36d04935bc41236c3a681526020017f03c3b12bf81990d85373f4cff02fd40698f03a6622a5090e881f338d38e276fb8152508160800151600a81518110610b1f57610b1f6121fc565b602002602001018190525060405180604001604052807f1ea9765ee85fed1ebddaa35d4dc55907d6efae517a36e87ee1a037a1e038499c81526020017f1392493afc9e217f202a526d3b6df66c78d3d5e5969ed1403bdd139eb13421758152508160800151600b81518110610b9657610b966121fc565b602002602001018190525060405180604001604052807f2eff323913c9b95ad983ae77992c1d31eb45f1a85ee79cb4ddc521e03337558981526020017f2fb1fdf7f5cc5090443dc73ac9331655de9b81b6bce08103c70d503362bdf4598152508160800151600c81518110610c0d57610c0d6121fc565b602002602001018190525060405180604001604052807f274ffdc899911aab222997deb85d8589e80b76a08c311fd2f058eaf67a93d36681526020017f0d76159a4d36a4ef25ddaa643e6363b3a8a1e746beb7831c9dad4796eb1591b78152508160800151600d81518110610c8457610c846121fc565b602002602001018190525060405180604001604052807f1788644a14b44e4367c6c45793a51ba2fa6bbd4c567838421049b75b0939315181526020017f283347518621b3650ea62dc70daeab220105eeac26e2ca4f7d2a6ea7bf5df13a8152508160800151600e81518110610cfb57610cfb6121fc565b602002602001018190525060405180604001604052807f26fe92704dbffdec3f3ca96e4cf9fef4ddc6e5269ce0b6a174c5fc96b998002a81526020017f2a8e0dcd825b4f313f67d2beb8e85659603dbdaf2dbf420e7682d733c589d4ee8152508160800151600f81518110610d7257610d726121fc565b602002602001018190525060405180604001604052807f1baaa5794c840e559e755ed3844d4c7742336594f7867292f18f834647e7b1a981526020017f2185cf23994f2c2de5d66fe7a33e9c386159ecf66a987a48ff69f855956c9f8b8152508160800151601081518110610de957610de96121fc565b602002602001018190525060405180604001604052807f2faa11db5141a1cb0954f4372e9ce9023621284bdebd0ba3d57b8914462edfba81526020017f229e5fab624efb0a1fd9977d4b46d65b09e7867315d23a39a0b0b4c144e9f6bd8152508160800151601181518110610e6057610e606121fc565b602002602001018190525060405180604001604052807f277f9cbb1a75c8ffddddfed27d9dc3a8d46ba9c5d98cb246568c2e8e1b26675b81526020017f2876feb45f8fce42e4ab3877a33f1a38969860812425b0680fc37de7d9c954828152508160800151601281518110610ed757610ed76121fc565b602002602001018190525060405180604001604052807f1e9fbe41c2dc866cc443c952aa1dc5712c21da0b8237a58c7ce1a1204eea5c6681526020017f1b436c79d159f87b15fac8459b13432d1524b38f13a66060f7a7d5756079644a8152508160800151601381518110610f4e57610f4e6121fc565b602002602001018190525060405180604001604052807f227fc49621993e64f296c71f07507c024880cb3a8f60b269ee0ba06d7ccda57c81526020017f1e29419013c3f8b9a56bf6274e102951539eb0c544b2a74610a47054e4ebb3c98152508160800151601481518110610fc557610fc56121fc565b602002602001018190525060405180604001604052807f02a1cd5f0048550c13492121e29de59f2fa9b66f13b83b067319823650d4632a81526020017f2ed8db00fc225a3ba099a156b7374e03821f96d6242821d1da783b3f3673d40e815250816080015160158151811061103c5761103c6121fc565b602002602001018190525060405180604001604052807f0916fc101490ecb7cc12446aa65c3a13ab92cd492b7080ab2bd2851da8f5341081526020017f0fd84c024fa7548aabd46274eca65433dbfafa58fab3ccc63736d5a89d1f203581525081608001516016815181106110b3576110b36121fc565b602002602001018190525060405180604001604052807f06627154b213e1cbdb5c2c76f3bb20d70b1d7e75e10d110864f32ea558326d4f81526020017f1d4d49db485cacc0fc070faeaac761c05ced3ff4d36f2000e2339a19012a7e01815250816080015160178151811061112a5761112a6121fc565b602002602001018190525060405180604001604052807f045f463423e56da771daec85d5135d0e7b13cdaddd858ed3ad30d15ebc12d6bf81526020017f2b80dde8e3cb3ee1fcfcd3ff5dcddbcbbf688b69d0180fcc139e7a6e455a48a581525081608001516018815181106111a1576111a16121fc565b602002602001018190525060405180604001604052807f1ce168971a75d9b5078a648024b6f996875a5f08fd7dcb202f9b248f90c2e8d981526020017f1bbebc79d1b5cee6bcad7f8fc9caf35643a82216cd76c2d5cce7c514f54ea49d8152508160800151601981518110611218576112186121fc565b602002602001018190525060405180604001604052807f22824c2fedd121ee417835ead984da10a162802f21a0312a597828781492195381526020017f262672911bee728bd74a052fd7dc939293b3645e72e9f137e99384bb83d1c5cb8152508160800151601a8151811061128f5761128f6121fc565b602002602001018190525060405180604001604052807f097163116fe7e32c9abcf25a94a1f1242381dd84068ab968dedab01cacd07cfe81526020017f0433e54eb89c01ae9aef9c734c766f63f7ec10dc1980bd884057a57e1b628f968152508160800151601b81518110611306576113066121fc565b602002602001018190525060405180604001604052807f2a528a2d329e52fe4335a8fa44a09ed2f3a2a89ce0011820fd71e01fa221f0b781526020017f10bcb1cd3ff6224304b5938462baff3c023d6ba2c91e0d52dfd6c669803d84c48152508160800151601c8151811061137d5761137d6121fc565b602002602001018190525060405180604001604052807f1fa9e77cea16460d1d76e00bf7a2d587bd98bbd61b71d13220415642c5bf192581526020017f26e44bc7ad4ee2cf5e5ba2fc911b3898668b5fdcee18d0f2b128a1f0a266cc578152508160800151601d815181106113f4576113f46121fc565b602002602001018190525060405180604001604052807f23816ac714bfbacf4f613415246ae2114c78491497724c3b7dbace85cee2b8cf81526020017f1ccb3beb29838663115afba78487f54782279d768888dcd0020975df74cc9b238152508160800151601e8151811061146b5761146b6121fc565b602002602001018190525060405180604001604052807f2d199da3f7b8d48cc34bfd5a5f44b77d87e4e190a40a7e24794be609df6bf9ad81526020017f2b77412a88dc5fd33a69cd4e1734811516dbdc8273e4b167c8af7684d945fba68152508160800151601f815181106114e2576114e26121fc565b602002602001018190525060405180604001604052807f07c34701c2e731f24bb9c14925bdfbea980ff8856571021655151ecda74a439481526020017f0eacc38283b3945bc31e8a10b625f2c5c235bf9d5b5fca91ad724420b1c7c7148152508160800151602081518110611559576115596121fc565b602002602001018190525060405180604001604052807f1b7d637e9cceeca1c6f66af25fd1a6272b30a1dbf6a8f40e33e4563a18b7990181526020017f01262567281b34b3002ebce01624e64cf9493bf9334d37db228f66c09334f58881525081608001516021815181106115d0576115d06121fc565b602002602001018190525060405180604001604052807f0d4efb7a0b9025b739ee649bab9214b971729ac2c2e4c4c758d24dd108a6fb1581526020017f141ac6324e5e56b12d8bb490ba8d00a84e6f2c438d8371f7752611e3e4424ef28152508160800151602281518110611647576116476121fc565b602002602001018190525060405180604001604052807f129b2346ce680bb1abdd8e162e4d52383bfdf1c4cffea2b842234c02a0794b9b81526020017f2fa18dd505284a31ae6298edaafd18411ddfccb44a9ea7a43c8243f92fc1b65881525081608001516023815181106116be576116be6121fc565b602002602001018190525060405180604001604052807f1ea341c09bc2f3eb5cc130ef1c71445ad0bd92e047505e6fb504966c9b3f243781526020017f16b22408bba46a664251cbcd74dee5a4fe9ad02ec2a3e0ec81c2ca32f10d25258152508160800151602481518110611735576117356121fc565b602002602001018190525060405180604001604052807f087780cc3a1a430fff50de5826afc6acc14e8ca6cdf7d09a2722694229577f1681526020017f2766c075e9df39cf7fe81dbc0717c8e3770e71fa2da1c073dac065de18ea82b881525081608001516025815181106117ac576117ac6121fc565b602002602001018190525090565b60408051808201909152600080825260208201526117d6611f11565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa90508080156118095761180b565bfe5b508061184e5760405162461bcd60e51b81526020600482015260126024820152711c185a5c9a5b99cb5b5d5b0b59985a5b195960721b60448201526064016101ec565b505092915050565b6040805180820190915260008082526020820152611872611f2f565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa905080801561180957508061184e5760405162461bcd60e51b81526020600482015260126024820152711c185a5c9a5b99cb5859190b59985a5b195960721b60448201526064016101ec565b604080518082019091526000808252602082015281517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd479015801561193557506020830151155b156119555750506040805180820190915260008082526020820152919050565b60405180604001604052808460000151815260200182856020015161197a91906121c4565b6119849084612192565b90529392505050565b60408051600480825260a08201909252600091829190816020015b60408051808201909152600080825260208201528152602001906001900390816119a857505060408051600480825260a0820190925291925060009190602082015b6119f2611f4d565b8152602001906001900390816119ea5790505090508a82600081518110611a1b57611a1b6121fc565b60200260200101819052508882600181518110611a3a57611a3a6121fc565b60200260200101819052508682600281518110611a5957611a596121fc565b60200260200101819052508482600381518110611a7857611a786121fc565b60200260200101819052508981600081518110611a9757611a976121fc565b60200260200101819052508781600181518110611ab657611ab66121fc565b60200260200101819052508581600281518110611ad557611ad56121fc565b60200260200101819052508381600381518110611af457611af46121fc565b6020026020010181905250611b098282611b18565b9b9a5050505050505050505050565b60008151835114611b645760405162461bcd60e51b81526020600482015260166024820152751c185a5c9a5b99cb5b195b99dd1a1ccb59985a5b195960521b60448201526064016101ec565b82516000611b73826006612173565b905060008167ffffffffffffffff811115611b9057611b90612212565b604051908082528060200260200182016040528015611bb9578160200160208202803683370190505b50905060005b83811015611df457868181518110611bd957611bd96121fc565b60200260200101516000015182826006611bf39190612173565b611bfe90600061215b565b81518110611c0e57611c0e6121fc565b602002602001018181525050868181518110611c2c57611c2c6121fc565b60200260200101516020015182826006611c469190612173565b611c5190600161215b565b81518110611c6157611c616121fc565b602002602001018181525050858181518110611c7f57611c7f6121fc565b6020908102919091010151515182611c98836006612173565b611ca390600261215b565b81518110611cb357611cb36121fc565b602002602001018181525050858181518110611cd157611cd16121fc565b60209081029190910181015151015182611cec836006612173565b611cf790600361215b565b81518110611d0757611d076121fc565b602002602001018181525050858181518110611d2557611d256121fc565b602002602001015160200151600060028110611d4357611d436121fc565b602002015182611d54836006612173565b611d5f90600461215b565b81518110611d6f57611d6f6121fc565b602002602001018181525050858181518110611d8d57611d8d6121fc565b602002602001015160200151600160028110611dab57611dab6121fc565b602002015182611dbc836006612173565b611dc790600561215b565b81518110611dd757611dd76121fc565b602090810291909101015280611dec816121a9565b915050611bbf565b50611dfd611f6d565b6000602082602086026020860160086107d05a03fa9050808015611809575080611e615760405162461bcd60e51b81526020600482015260156024820152741c185a5c9a5b99cb5bdc18dbd9194b59985a5b1959605a1b60448201526064016101ec565b505115159695505050505050565b6040805160a081019091526000606082018181526080830191909152815260208101611e99611f4d565b8152602001611ebb604051806040016040528060008152602001600081525090565b905290565b6040805160e08101909152600060a0820181815260c0830191909152815260208101611eea611f4d565b8152602001611ef7611f4d565b8152602001611f04611f4d565b8152602001606081525090565b60405180606001604052806003906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b6040518060400160405280611f60611f8b565b8152602001611ebb611f8b565b60405180602001604052806001906020820280368337509192915050565b60405180604001604052806002906020820280368337509192915050565b600082601f830112611fba57600080fd5b611fc26120f2565b808385604086011115611fd457600080fd5b60005b6002811015611ff6578135845260209384019390910190600101611fd7565b509095945050505050565b6000806000806105a080868803121561201957600080fd5b6120238787611fa9565b9450604087605f88011261203657600080fd5b61203e6120f2565b8082890160c08a018b81111561205357600080fd5b60005b600281101561207d576120698d84611fa9565b855260209094019391850191600101612056565b5082985061208b8c82611fa9565b975050505050508661011f8701126120a257600080fd5b6120aa612129565b80610100880189848a0111156120bf57600080fd5b600093505b60258410156120e4578035835260019390930192602092830192016120c4565b509598949750929550505050565b6040805190810167ffffffffffffffff8111828210171561212357634e487b7160e01b600052604160045260246000fd5b60405290565b6040516104a0810167ffffffffffffffff8111828210171561212357634e487b7160e01b600052604160045260246000fd5b6000821982111561216e5761216e6121e6565b500190565b600081600019048311821515161561218d5761218d6121e6565b500290565b6000828210156121a4576121a46121e6565b500390565b60006000198214156121bd576121bd6121e6565b5060010190565b6000826121e157634e487b7160e01b600052601260045260246000fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212207888ce777aae86c147d39ad2b8c92e8ead952c4258f6bfb9c59deff0d5be8c8164736f6c63430008050033";

export class VerifierID816__factory extends ContractFactory {
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
  ): Promise<VerifierID816> {
    return super.deploy(overrides || {}) as Promise<VerifierID816>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): VerifierID816 {
    return super.attach(address) as VerifierID816;
  }
  connect(signer: Signer): VerifierID816__factory {
    return super.connect(signer) as VerifierID816__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VerifierID816Interface {
    return new utils.Interface(_abi) as VerifierID816Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VerifierID816 {
    return new Contract(address, _abi, signerOrProvider) as VerifierID816;
  }
}