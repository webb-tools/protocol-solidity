/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Verifier, VerifierInterface } from "../Verifier";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IVerifier2",
        name: "_verifier2",
        type: "address",
      },
      {
        internalType: "contract IVerifier3",
        name: "_verifier3",
        type: "address",
      },
      {
        internalType: "contract IVerifier4",
        name: "_verifier4",
        type: "address",
      },
      {
        internalType: "contract IVerifier5",
        name: "_verifier5",
        type: "address",
      },
      {
        internalType: "contract IVerifier6",
        name: "_verifier6",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "v2",
    outputs: [
      {
        internalType: "contract IVerifier2",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "v3",
    outputs: [
      {
        internalType: "contract IVerifier3",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "v4",
    outputs: [
      {
        internalType: "contract IVerifier4",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "v5",
    outputs: [
      {
        internalType: "contract IVerifier5",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "v6",
    outputs: [
      {
        internalType: "contract IVerifier6",
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
        internalType: "bytes",
        name: "input",
        type: "bytes",
      },
      {
        internalType: "uint8",
        name: "maxEdges",
        type: "uint8",
      },
      {
        internalType: "bool",
        name: "_unused",
        type: "bool",
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
  "0x608060405234801561001057600080fd5b50604051610b5a380380610b5a83398101604081905261002f91610091565b600080546001600160a01b03199081166001600160a01b0397881617909155600180548216958716959095179094556002805485169386169390931790925560038054841691851691909117905560048054909216921691909117905561011e565b600080600080600060a086880312156100a957600080fd5b85516100b481610106565b60208701519095506100c581610106565b60408701519094506100d681610106565b60608701519093506100e781610106565b60808701519092506100f881610106565b809150509295509295909350565b6001600160a01b038116811461011b57600080fd5b50565b610a2d8061012d6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806309c5e7061461006757806331473ebe146100975780636257a38e146100aa5780638041ca53146100bd578063bfa57503146100e0578063f3acae3a146100f3575b600080fd5b60045461007a906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b60035461007a906001600160a01b031681565b60015461007a906001600160a01b031681565b6100d06100cb366004610628565b610106565b604051901515815260200161008e565b60025461007a906001600160a01b031681565b60005461007a906001600160a01b031681565b60008260ff16600114156101b95760008480602001905181019061012a919061070d565b60005460405163c542c93b60e01b81529192506001600160a01b03169063c542c93b90610161908b908b908b908790600401610956565b60206040518083038186803b15801561017957600080fd5b505afa15801561018d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101b1919061078b565b915050610320565b8260ff1660021415610212576000848060200190518101906101db9190610430565b6001546040516379ddb87b60e11b81529192506001600160a01b03169063f3bb70f690610161908b908b908b908790600401610806565b8260ff166003141561026b5760008480602001905181019061023491906104ae565b60025460405163b9c6ea8760e01b81529192506001600160a01b03169063b9c6ea8790610161908b908b908b908790600401610863565b8260ff16600414156102c45760008480602001905181019061028d919061052c565b60035460405163465d607d60e11b81529192506001600160a01b031690638cbac0fa90610161908b908b908b9087906004016108b4565b8260ff166005141561031c576000848060200190518101906102e691906105aa565b600480546040516378a1d3af60e11b81529293506001600160a01b03169163f143a75e91610161918c918c918c91889101610905565b5060005b9695505050505050565b600082601f83011261033b57600080fd5b6103436109a7565b80838560408601111561035557600080fd5b60005b6002811015610377578135845260209384019390910190600101610358565b509095945050505050565b803561038d816109e6565b919050565b600082601f8301126103a357600080fd5b813567ffffffffffffffff808211156103be576103be6109d0565b604051601f8301601f19908116603f011681019082821181831017156103e6576103e66109d0565b816040528381528660208588010111156103ff57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803560ff8116811461038d57600080fd5b600061014080838503121561044457600080fd5b83601f84011261045357600080fd5b60405181810181811067ffffffffffffffff82111715610475576104756109d0565b604052808483810187101561048957600080fd5b600093505b600a8410156103775780518252600193909301926020918201910161048e565b60006101608083850312156104c257600080fd5b83601f8401126104d157600080fd5b60405181810181811067ffffffffffffffff821117156104f3576104f36109d0565b604052808483810187101561050757600080fd5b600093505b600b8410156103775780518252600193909301926020918201910161050c565b600061018080838503121561054057600080fd5b83601f84011261054f57600080fd5b60405181810181811067ffffffffffffffff82111715610571576105716109d0565b604052808483810187101561058557600080fd5b600093505b600c8410156103775780518252600193909301926020918201910161058a565b60006101a08083850312156105be57600080fd5b83601f8401126105cd57600080fd5b60405181810181811067ffffffffffffffff821117156105ef576105ef6109d0565b604052808483810187101561060357600080fd5b600093505b600d84101561037757805182526001939093019260209182019101610608565b600080600080600080610160878903121561064257600080fd5b61064c888861032a565b9550604088605f89011261065f57600080fd5b6106676109a7565b80828a0160c08b018c81111561067c57600080fd5b60005b60028110156106a6576106928e8461032a565b85526020909401939185019160010161067f565b508299506106b48d8261032a565b9850505050505061010087013567ffffffffffffffff8111156106d657600080fd5b6106e289828a01610392565b9350506106f2610120880161041f565b91506107016101408801610382565b90509295509295509295565b600061012080838503121561072157600080fd5b83601f84011261073057600080fd5b60405181810181811067ffffffffffffffff82111715610752576107526109d0565b604052808483810187101561076657600080fd5b600093505b60098410156103775780518252600193909301926020918201910161076b565b60006020828403121561079d57600080fd5b81516107a8816109e6565b9392505050565b8060005b60028110156107dd576107c78483516107e3565b60409390930192602091909101906001016107b3565b50505050565b8060005b60028110156107dd5781518452602093840193909101906001016107e7565b610240810161081582876107e3565b61082260408301866107af565b61082f60c08301856107e3565b61010082018360005b600a811015610857578151835260209283019290910190600101610838565b50505095945050505050565b610260810161087282876107e3565b61087f60408301866107af565b61088c60c08301856107e3565b61010082018360005b600b811015610857578151835260209283019290910190600101610895565b61028081016108c382876107e3565b6108d060408301866107af565b6108dd60c08301856107e3565b61010082018360005b600c8110156108575781518352602092830192909101906001016108e6565b6102a0810161091482876107e3565b61092160408301866107af565b61092e60c08301856107e3565b61010082018360005b600d811015610857578151835260209283019290910190600101610937565b610220810161096582876107e3565b61097260408301866107af565b61097f60c08301856107e3565b61010082018360005b6009811015610857578151835260209283019290910190600101610988565b6040805190810167ffffffffffffffff811182821017156109ca576109ca6109d0565b60405290565b634e487b7160e01b600052604160045260246000fd5b80151581146109f457600080fd5b5056fea264697066735822122092eca054b226b9d49a78ab86c28bf68c4cbb0591076b7a9a4b2546588dd70d4864736f6c63430008050033";

export class Verifier__factory extends ContractFactory {
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
    _verifier2: string,
    _verifier3: string,
    _verifier4: string,
    _verifier5: string,
    _verifier6: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Verifier> {
    return super.deploy(
      _verifier2,
      _verifier3,
      _verifier4,
      _verifier5,
      _verifier6,
      overrides || {}
    ) as Promise<Verifier>;
  }
  getDeployTransaction(
    _verifier2: string,
    _verifier3: string,
    _verifier4: string,
    _verifier5: string,
    _verifier6: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _verifier2,
      _verifier3,
      _verifier4,
      _verifier5,
      _verifier6,
      overrides || {}
    );
  }
  attach(address: string): Verifier {
    return super.attach(address) as Verifier;
  }
  connect(signer: Signer): Verifier__factory {
    return super.connect(signer) as Verifier__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VerifierInterface {
    return new utils.Interface(_abi) as VerifierInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Verifier {
    return new Contract(address, _abi, signerOrProvider) as Verifier;
  }
}
