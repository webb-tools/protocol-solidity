/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  NativeAnchorPoseidon,
  NativeAnchorPoseidonInterface,
} from "../NativeAnchorPoseidon";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IVerifier",
        name: "_verifier",
        type: "address",
      },
      {
        internalType: "contract IPoseidonT3",
        name: "_hasher",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_denomination",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "_merkleTreeHeight",
        type: "uint32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "commitment",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "leafIndex",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "nullifierHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "relayer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    inputs: [],
    name: "FIELD_SIZE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ROOT_HISTORY_SIZE",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ZERO_VALUE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "bridge",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "commitments",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentRootIndex",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "denomination",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_commitment",
        type: "bytes32",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "filledSubtrees",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLastRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "handler",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IPoseidonT3",
        name: "_hasher",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_left",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_right",
        type: "bytes32",
      },
    ],
    name: "hashLeftRight",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "hasher",
    outputs: [
      {
        internalType: "contract IPoseidonT3",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32",
      },
    ],
    name: "isKnownRoot",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_nullifierHash",
        type: "bytes32",
      },
    ],
    name: "isSpent",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "_nullifierHashes",
        type: "bytes32[]",
      },
    ],
    name: "isSpentArray",
    outputs: [
      {
        internalType: "bool[]",
        name: "spent",
        type: "bool[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "levels",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextIndex",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "nullifierHashes",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "roots",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "verifier",
    outputs: [
      {
        internalType: "contract IVerifier",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_proof",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_nullifierHash",
        type: "bytes32",
      },
      {
        internalType: "address payable",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "_relayer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_refund",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "i",
        type: "uint256",
      },
    ],
    name: "zeros",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x610100604052600280546001600160401b03191690553480156200002257600080fd5b506040516200285c3803806200285c833981016040819052620000459162000811565b838383838083818160008263ffffffff16116200007f5760405162461bcd60e51b81526004016200007690620008ef565b60405180910390fd5b60208263ffffffff1610620000a85760405162461bcd60e51b81526004016200007690620008b8565b60e09190911b6001600160e01b03191660a05260601b6001600160601b03191660805260005b8263ffffffff168163ffffffff1610156200011f57620000f463ffffffff8216620001b5565b63ffffffff821660009081526020819052604090205580620001168162000991565b915050620000ce565b506200013d6200013160018462000969565b63ffffffff16620001b5565b60008052600160208190527fa6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb4991909155600355505081620001925760405162461bcd60e51b8152600401620000769062000873565b5060609290921b6001600160601b03191660c0525060e05250620009e792505050565b600081620001e557507f2fe54c60d3acabf3343a35b6eba15db4821b340f76e741e2249685ed4899af6c6200080c565b81600114156200021757507f13e37f2d6cb86c78ccc1788607c2b199788c6bb0a615a21f2e7a8e88384222f86200080c565b81600214156200024957507f217126fa352c326896e8c2803eec8fd63ad50cf65edfef27a41a9e32dc6227656200080c565b81600314156200027b57507f0e28a61a9b3e91007d5a9e3ada18e1b24d6d230c618388ee5df34cacd7397eee6200080c565b8160041415620002ad57507f27953447a6979839536badc5425ed15fadb0e292e9bc36f92f0aa5cfa50135876200080c565b8160051415620002df57507f194191edbfb91d10f6a7afd315f33095410c7801c47175c2df6dc2cce0e3affc6200080c565b81600614156200031157507f1733dece17d71190516dbaf1927936fa643dc7079fc0cc731de9d6845a47741f6200080c565b81600714156200034357507f267855a7dc75db39d81d17f95d0a7aa572bf5ae19f4db0e84221d2b2ef9992196200080c565b81600814156200037557507f1184e11836b4c36ad8238a340ecc0985eeba665327e33e9b0e3641027c27620d6200080c565b8160091415620003a757507f0702ab83a135d7f55350ab1bfaa90babd8fc1d2b3e6a7215381a7b2213d6c5ce6200080c565b81600a1415620003d957507f2eecc0de814cfd8c57ce882babb2e30d1da56621aef7a47f3291cffeaec26ad76200080c565b81600b14156200040b57507f280bc02145c155d5833585b6c7b08501055157dd30ce005319621dc462d33b476200080c565b81600c14156200043d57507f045132221d1fa0a7f4aed8acd2cbec1e2189b7732ccb2ec272b9c60f0d5afc5b6200080c565b81600d14156200046f57507f27f427ccbf58a44b1270abbe4eda6ba53bd6ac4d88cf1e00a13c4371ce71d3666200080c565b81600e1415620004a157507f1617eaae5064f26e8f8a6493ae92bfded7fde71b65df1ca6d5dcec0df70b2cef6200080c565b81600f1415620004d357507f20c6b400d0ea1b15435703c31c31ee63ad7ba5c8da66cec2796feacea575abca6200080c565b81601014156200050557507f09589ddb438723f53a8e57bdada7c5f8ed67e8fece3889a73618732965645eec6200080c565b81601114156200053657507e64b6a738a5ff537db7b220f3394f0ecbd35bfd355c5425dc1166bf3236079b6200080c565b81601214156200056857507f095de56281b1d5055e897c3574ff790d5ee81dbc5df784ad2d67795e557c9e9f6200080c565b81601314156200059a57507f11cf2e2887aa21963a6ec14289183efe4d4c60f14ecd3d6fe0beebdf855a9b636200080c565b8160141415620005cc57507f2b0f6fc0179fa65b6f73627c0e1e84c7374d2eaec44c9a48f2571393ea77bcbb6200080c565b8160151415620005fe57507f16fdb637c2abf9c0f988dbf2fd64258c46fb6a273d537b2cf1603ea460b132796200080c565b81601614156200063057507f21bbd7e944f6124dad4c376df9cc12e7ca66e47dff703ff7cedb1a454edcf0ff6200080c565b81601714156200066257507f2784f8220b1c963e468f590f137baaa1625b3b92a27ad9b6e84eb0d3454d99626200080c565b81601814156200069457507f16ace1a65b7534142f8cc1aad810b3d6a7a74ca905d9c275cb98ba57e509fc106200080c565b8160191415620006c657507f2328068c6a8c24265124debd8fe10d3f29f0665ea725a65e3638f6192a96a0136200080c565b81601a1415620006f857507f2ddb991be1f028022411b4c4d2c22043e5e751c120736f00adf54acab1c9ac146200080c565b81601b14156200072a57507f0113798410eaeb95056a464f70521eb58377c0155f2fe518a5594d38cc209cc06200080c565b81601c14156200075c57507f202d1ae61526f0d0d01ef80fb5d4055a7af45721024c2c24cffd6a3798f54d506200080c565b81601d14156200078e57507f23ab323453748129f2765f79615022f5bebd6f4096a796300aab049a60b0f1876200080c565b81601e1415620007c057507f1f15585f8947e378bcf8bd918716799da909acdb944c57150b1eb4565fda8aa06200080c565b81601f1415620007f257507f1eb064b21055ac6a350cf41eb30e4ce2cb19680217df3a243617c2838185ad066200080c565b60405162461bcd60e51b8152600401620000769062000932565b919050565b6000806000806080858703121562000827578384fd5b84516200083481620009ce565b60208601519094506200084781620009ce565b60408601516060870151919450925063ffffffff8116811462000868578182fd5b939692955090935050565b60208082526025908201527f64656e6f6d696e6174696f6e2073686f756c6420626520677265617465722074604082015264068616e20360dc1b606082015260800190565b6020808252601e908201527f5f6c6576656c732073686f756c64206265206c657373207468616e2033320000604082015260600190565b60208082526023908201527f5f6c6576656c732073686f756c642062652067726561746572207468616e207a60408201526265726f60e81b606082015260800190565b60208082526013908201527f496e646578206f7574206f6620626f756e647300000000000000000000000000604082015260600190565b600063ffffffff83811690831681811015620009895762000989620009b8565b039392505050565b600063ffffffff80831681811415620009ae57620009ae620009b8565b6001019392505050565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b0381168114620009e457600080fd5b50565b60805160601c60a05160e01c60c05160601c60e051611e0162000a5b6000396000818161043b0152818161073b01528181611173015261147a015260008181610518015261063c015260008181610684015281816112ac01526113050152600081816110ce015261139e0152611e016000f3fe60806040526004361061014b5760003560e01c8063ba70f757116100b6578063e82955881161006f578063e82955881461035f578063ec7329591461037f578063ed33639f14610394578063f178e47c146103a9578063f851a440146103c9578063fc7e9c6f146103de5761014b565b8063ba70f757146102cb578063c2b40ae4146102e0578063c80916d414610300578063cd87a3b414610315578063e5285dcc1461032a578063e78cea921461034a5761014b565b8063839df94511610108578063839df945146102215780638bca6d16146102415780638ea3099e1461025657806390eeb02b146102765780639fa12d0b1461028b578063b214faa5146102b85761014b565b806317cc915c1461015057806321a0adb6146101865780632b7ac3f31461019b578063414a37ba146101bd5780634ecf518b146101df5780636d9833e314610201575b600080fd5b34801561015c57600080fd5b5061017061016b366004611553565b6103f3565b60405161017d9190611717565b60405180910390f35b61019961019436600461156b565b610408565b005b3480156101a757600080fd5b506101b061063a565b60405161017d919061166b565b3480156101c957600080fd5b506101d261065e565b60405161017d9190611722565b3480156101eb57600080fd5b506101f4610682565b60405161017d9190611b54565b34801561020d57600080fd5b5061017061021c366004611553565b6106a6565b34801561022d57600080fd5b5061017061023c366004611553565b610724565b34801561024d57600080fd5b506101d2610739565b34801561026257600080fd5b506101d261027136600461161c565b61075d565b34801561028257600080fd5b506101f461087a565b34801561029757600080fd5b506102ab6102a63660046114c4565b610886565b60405161017d91906116a0565b6101996102c6366004611553565b610966565b3480156102d757600080fd5b506101d2610a2e565b3480156102ec57600080fd5b506101d26102fb366004611553565b610a49565b34801561030c57600080fd5b506101b0610a5b565b34801561032157600080fd5b506101f4610a6a565b34801561033657600080fd5b50610170610345366004611553565b610a6f565b34801561035657600080fd5b506101b0610a84565b34801561036b57600080fd5b506101d261037a366004611553565b610a93565b34801561038b57600080fd5b506101d26110a8565b3480156103a057600080fd5b506101b06110cc565b3480156103b557600080fd5b506101d26103c4366004611553565b6110f0565b3480156103d557600080fd5b506101b0611102565b3480156103ea57600080fd5b506101f4611111565b60076020526000908152604090205460ff1681565b600260035414156104345760405162461bcd60e51b815260040161042b90611ac8565b60405180910390fd5b60026003557f00000000000000000000000000000000000000000000000000000000000000008211156104795760405162461bcd60e51b815260040161042b906117bd565b60008581526007602052604090205460ff16156104a85760405162461bcd60e51b815260040161042b9061194b565b6104b1866106a6565b6104cd5760405162461bcd60e51b815260040161042b90611786565b6040805160c081018252878152602081018790526001600160a01b038681168284015285811660608301526080820185905260a08201849052915163695ef6f960e01b8152869286927f00000000000000000000000000000000000000000000000000000000000000009091169163695ef6f991610551918e918e9160040161172b565b602060405180830381600087803b15801561056b57600080fd5b505af115801561057f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105a39190611533565b6105bf5760405162461bcd60e51b815260040161042b906118c7565b6000878152600760205260409020805460ff191660011790556105e486868686611125565b846001600160a01b03167fe9e508bad6d4c3227e881ca19068f099da81b5164dd6d62b2eaf1e8bc6c349318789876040516106219392919061167f565b60405180910390a2505060016003555050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000816106b55750600061071f565b60025463ffffffff16805b63ffffffff81166000908152600160205260409020548414156106e85760019250505061071f565b63ffffffff81166106f75750601e5b8061070181611d05565b9150508163ffffffff168163ffffffff1614156106c0576000925050505b919050565b60086020526000908152604090205460ff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001831061079e5760405162461bcd60e51b815260040161042b90611851565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000182106107dd5760405162461bcd60e51b815260040161042b90611886565b6040805180820182528481526020810184905290516314d2f97b60e11b8152849184916001600160a01b038816916329a5f2f69161081e91906004016116e6565b60206040518083038186803b15801561083657600080fd5b505afa15801561084a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061086e9190611650565b925050505b9392505050565b60025463ffffffff1681565b60608167ffffffffffffffff8111156108af57634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156108d8578160200160208202803683370190505b50905060005b8281101561095f5761091584848381811061090957634e487b7160e01b600052603260045260246000fd5b90506020020135610a6f565b1561094d57600182828151811061093c57634e487b7160e01b600052603260045260246000fd5b911515602092830291909101909101525b8061095781611d25565b9150506108de565b5092915050565b600260035414156109895760405162461bcd60e51b815260040161042b90611ac8565b600260035560008181526008602052604090205460ff16156109bd5760405162461bcd60e51b815260040161042b90611982565b60006109c88261128f565b6000838152600860205260409020805460ff1916600117905590506109eb611478565b817fa945e51eec50ab98c161376f0db4cf2aeba3ec92755fe2fcd388bdbbb80ff1968242604051610a1d929190611b65565b60405180910390a250506001600355565b60025463ffffffff1660009081526001602052604090205490565b60016020526000908152604090205481565b6006546001600160a01b031681565b601e81565b60009081526007602052604090205460ff1690565b6004546001600160a01b031681565b600081610ac157507f2fe54c60d3acabf3343a35b6eba15db4821b340f76e741e2249685ed4899af6c61071f565b8160011415610af157507f13e37f2d6cb86c78ccc1788607c2b199788c6bb0a615a21f2e7a8e88384222f861071f565b8160021415610b2157507f217126fa352c326896e8c2803eec8fd63ad50cf65edfef27a41a9e32dc62276561071f565b8160031415610b5157507f0e28a61a9b3e91007d5a9e3ada18e1b24d6d230c618388ee5df34cacd7397eee61071f565b8160041415610b8157507f27953447a6979839536badc5425ed15fadb0e292e9bc36f92f0aa5cfa501358761071f565b8160051415610bb157507f194191edbfb91d10f6a7afd315f33095410c7801c47175c2df6dc2cce0e3affc61071f565b8160061415610be157507f1733dece17d71190516dbaf1927936fa643dc7079fc0cc731de9d6845a47741f61071f565b8160071415610c1157507f267855a7dc75db39d81d17f95d0a7aa572bf5ae19f4db0e84221d2b2ef99921961071f565b8160081415610c4157507f1184e11836b4c36ad8238a340ecc0985eeba665327e33e9b0e3641027c27620d61071f565b8160091415610c7157507f0702ab83a135d7f55350ab1bfaa90babd8fc1d2b3e6a7215381a7b2213d6c5ce61071f565b81600a1415610ca157507f2eecc0de814cfd8c57ce882babb2e30d1da56621aef7a47f3291cffeaec26ad761071f565b81600b1415610cd157507f280bc02145c155d5833585b6c7b08501055157dd30ce005319621dc462d33b4761071f565b81600c1415610d0157507f045132221d1fa0a7f4aed8acd2cbec1e2189b7732ccb2ec272b9c60f0d5afc5b61071f565b81600d1415610d3157507f27f427ccbf58a44b1270abbe4eda6ba53bd6ac4d88cf1e00a13c4371ce71d36661071f565b81600e1415610d6157507f1617eaae5064f26e8f8a6493ae92bfded7fde71b65df1ca6d5dcec0df70b2cef61071f565b81600f1415610d9157507f20c6b400d0ea1b15435703c31c31ee63ad7ba5c8da66cec2796feacea575abca61071f565b8160101415610dc157507f09589ddb438723f53a8e57bdada7c5f8ed67e8fece3889a73618732965645eec61071f565b8160111415610df057507e64b6a738a5ff537db7b220f3394f0ecbd35bfd355c5425dc1166bf3236079b61071f565b8160121415610e2057507f095de56281b1d5055e897c3574ff790d5ee81dbc5df784ad2d67795e557c9e9f61071f565b8160131415610e5057507f11cf2e2887aa21963a6ec14289183efe4d4c60f14ecd3d6fe0beebdf855a9b6361071f565b8160141415610e8057507f2b0f6fc0179fa65b6f73627c0e1e84c7374d2eaec44c9a48f2571393ea77bcbb61071f565b8160151415610eb057507f16fdb637c2abf9c0f988dbf2fd64258c46fb6a273d537b2cf1603ea460b1327961071f565b8160161415610ee057507f21bbd7e944f6124dad4c376df9cc12e7ca66e47dff703ff7cedb1a454edcf0ff61071f565b8160171415610f1057507f2784f8220b1c963e468f590f137baaa1625b3b92a27ad9b6e84eb0d3454d996261071f565b8160181415610f4057507f16ace1a65b7534142f8cc1aad810b3d6a7a74ca905d9c275cb98ba57e509fc1061071f565b8160191415610f7057507f2328068c6a8c24265124debd8fe10d3f29f0665ea725a65e3638f6192a96a01361071f565b81601a1415610fa057507f2ddb991be1f028022411b4c4d2c22043e5e751c120736f00adf54acab1c9ac1461071f565b81601b1415610fd057507f0113798410eaeb95056a464f70521eb58377c0155f2fe518a5594d38cc209cc061071f565b81601c141561100057507f202d1ae61526f0d0d01ef80fb5d4055a7af45721024c2c24cffd6a3798f54d5061071f565b81601d141561103057507f23ab323453748129f2765f79615022f5bebd6f4096a796300aab049a60b0f18761071f565b81601e141561106057507f1f15585f8947e378bcf8bd918716799da909acdb944c57150b1eb4565fda8aa061071f565b81601f141561109057507f1eb064b21055ac6a350cf41eb30e4ce2cb19680217df3a243617c2838185ad0661071f565b60405162461bcd60e51b815260040161042b90611a4b565b7f2fe54c60d3acabf3343a35b6eba15db4821b340f76e741e2249685ed4899af6c81565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006020819052908152604090205481565b6005546001600160a01b031681565b600254640100000000900463ffffffff1681565b34156111435760405162461bcd60e51b815260040161042b90611aff565b80156111615760405162461bcd60e51b815260040161042b906118f7565b60006001600160a01b038516611197847f0000000000000000000000000000000000000000000000000000000000000000611cee565b6040516111a390611668565b60006040518083038185875af1925050503d80600081146111e0576040519150601f19603f3d011682016040523d82523d6000602084013e6111e5565b606091505b50509050806112065760405162461bcd60e51b815260040161042b906119c3565b821561128857836001600160a01b03168360405161122390611668565b60006040518083038185875af1925050503d8060008114611260576040519150601f19603f3d011682016040523d82523d6000602084013e611265565b606091505b505080915050806112885760405162461bcd60e51b815260040161042b90611a08565b5050505050565b6002805460009164010000000090910463ffffffff16906112d1907f000000000000000000000000000000000000000000000000000000000000000090611c0c565b63ffffffff168163ffffffff1614156112fc5760405162461bcd60e51b815260040161042b90611a78565b8083600080805b7f000000000000000000000000000000000000000000000000000000000000000063ffffffff168163ffffffff1610156113e557611342600286611d64565b63ffffffff1661137d5783925061135e8163ffffffff16610a93565b63ffffffff821660009081526020819052604090208590559150611399565b63ffffffff811660009081526020819052604090205492508391505b6113c47f0000000000000000000000000000000000000000000000000000000000000000848461075d565b93506113d1600286611ba3565b9450806113dd81611d40565b915050611303565b50600254600090601e906114009063ffffffff166001611b7b565b61140a9190611d64565b6002805463ffffffff191663ffffffff83169081179091556000908152600160208190526040909120869055909150611444908790611b7b565b6002805463ffffffff929092166401000000000267ffffffff00000000199092169190911790555093945050505050919050565b7f000000000000000000000000000000000000000000000000000000000000000034146114b75760405162461bcd60e51b815260040161042b906117f4565b565b803561071f81611db3565b600080602083850312156114d6578182fd5b823567ffffffffffffffff808211156114ed578384fd5b818501915085601f830112611500578384fd5b81358181111561150e578485fd5b8660208083028501011115611521578485fd5b60209290920196919550909350505050565b600060208284031215611544578081fd5b81518015158114610873578182fd5b600060208284031215611564578081fd5b5035919050565b60008060008060008060008060e0898b031215611586578384fd5b883567ffffffffffffffff8082111561159d578586fd5b818b0191508b601f8301126115b0578586fd5b8135818111156115be578687fd5b8c60208285010111156115cf578687fd5b60209283019a509850508901359550604089013594506115f160608a016114b9565b93506115ff60808a016114b9565b925060a0890135915060c089013590509295985092959890939650565b600080600060608486031215611630578283fd5b833561163b81611db3565b95602085013595506040909401359392505050565b600060208284031215611661578081fd5b5051919050565b90565b6001600160a01b0391909116815260200190565b6001600160a01b039390931683526020830191909152604082015260600190565b6020808252825182820181905260009190848201906040850190845b818110156116da5783511515835292840192918401916001016116bc565b50909695505050505050565b60408101818360005b600281101561170e5781518352602092830192909101906001016116ef565b50505092915050565b901515815260200190565b90815260200190565b600060e082528360e0830152610100848682850137828501810191909152601f8401601f191682010160208083018460005b600681101561177a5781518352918301919083019060010161175d565b50505050949350505050565b6020808252601c908201527f43616e6e6f742066696e6420796f7572206d65726b6c6520726f6f7400000000604082015260600190565b6020808252601a908201527f4665652065786365656473207472616e736665722076616c7565000000000000604082015260600190565b60208082526038908201527f506c656173652073656e6420606d697844656e6f6d696e6174696f6e6020455460408201527f4820616c6f6e672077697468207472616e73616374696f6e0000000000000000606082015260800190565b6020808252818101527f5f6c6566742073686f756c6420626520696e7369646520746865206669656c64604082015260600190565b60208082526021908201527f5f72696768742073686f756c6420626520696e7369646520746865206669656c6040820152601960fa1b606082015260800190565b60208082526016908201527524b73b30b634b2103bb4ba34323930bb90383937b7b360511b604082015260600190565b60208082526034908201527f526566756e642076616c756520697320737570706f73656420746f206265207a60408201527365726f20666f722045544820696e7374616e636560601b606082015260800190565b6020808252601f908201527f546865206e6f746520686173206265656e20616c7265616479207370656e7400604082015260600190565b60208082526021908201527f54686520636f6d6d69746d656e7420686173206265656e207375626d697474656040820152601960fa1b606082015260800190565b60208082526025908201527f7061796d656e7420746f205f726563697069656e7420646964206e6f7420676f604082015264207468727560d81b606082015260800190565b60208082526023908201527f7061796d656e7420746f205f72656c6179657220646964206e6f7420676f207460408201526268727560e81b606082015260800190565b602080825260139082015272496e646578206f7574206f6620626f756e647360681b604082015260600190565b60208082526030908201527f4d65726b6c6520747265652069732066756c6c2e204e6f206d6f7265206c656160408201526f1d995cc818d85b88189948185919195960821b606082015260800190565b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b60208082526035908201527f4d6573736167652076616c756520697320737570706f73656420746f206265206040820152747a65726f20666f722045544820696e7374616e636560581b606082015260800190565b63ffffffff91909116815260200190565b63ffffffff929092168252602082015260400190565b600063ffffffff808316818516808303821115611b9a57611b9a611d87565b01949350505050565b600063ffffffff80841680611bba57611bba611d9d565b92169190910492915050565b80825b6001808611611bd85750611c03565b818704821115611bea57611bea611d87565b80861615611bf757918102915b9490941c938002611bc9565b94509492505050565b600063ffffffff611c2281828616838616611c2a565b949350505050565b600082611c3957506001610873565b81611c4657506000610873565b8160018114611c5c5760028114611c6657611c93565b6001915050610873565b60ff841115611c7757611c77611d87565b6001841b915084821115611c8d57611c8d611d87565b50610873565b5060208310610133831016604e8410600b8410161715611cc6575081810a83811115611cc157611cc1611d87565b610873565b611cd38484846001611bc6565b808604821115611ce557611ce5611d87565b02949350505050565b600082821015611d0057611d00611d87565b500390565b600063ffffffff821680611d1b57611d1b611d87565b6000190192915050565b6000600019821415611d3957611d39611d87565b5060010190565b600063ffffffff80831681811415611d5a57611d5a611d87565b6001019392505050565b600063ffffffff80841680611d7b57611d7b611d9d565b92169190910692915050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b6001600160a01b0381168114611dc857600080fd5b5056fea26469706673582212205ad3fb6111ce67278fe23b96d3ac566ca34f8fe93df25947dfca69e002800acf64736f6c63430008000033";

export class NativeAnchorPoseidon__factory extends ContractFactory {
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
    _verifier: string,
    _hasher: string,
    _denomination: BigNumberish,
    _merkleTreeHeight: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NativeAnchorPoseidon> {
    return super.deploy(
      _verifier,
      _hasher,
      _denomination,
      _merkleTreeHeight,
      overrides || {}
    ) as Promise<NativeAnchorPoseidon>;
  }
  getDeployTransaction(
    _verifier: string,
    _hasher: string,
    _denomination: BigNumberish,
    _merkleTreeHeight: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _verifier,
      _hasher,
      _denomination,
      _merkleTreeHeight,
      overrides || {}
    );
  }
  attach(address: string): NativeAnchorPoseidon {
    return super.attach(address) as NativeAnchorPoseidon;
  }
  connect(signer: Signer): NativeAnchorPoseidon__factory {
    return super.connect(signer) as NativeAnchorPoseidon__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NativeAnchorPoseidonInterface {
    return new utils.Interface(_abi) as NativeAnchorPoseidonInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NativeAnchorPoseidon {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as NativeAnchorPoseidon;
  }
}