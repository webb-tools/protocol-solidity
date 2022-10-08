/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { KeccakHasher, KeccakHasherInterface } from "../KeccakHasher";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_left",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_right",
        type: "uint256",
      },
    ],
    name: "hashLeftRight",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
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
  "0x608060405234801561001057600080fd5b50610746806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80635bb939951461003b578063e829558814610087575b600080fd5b6100756100493660046106ee565b604080516020808201949094528082019290925280518083038201815260609092019052805191012090565b60405190815260200160405180910390f35b6100756100953660046106d5565b6000816100c357507f2fe54c60d3acabf3343a35b6eba15db4821b340f76e741e2249685ed4899af6c919050565b81600114156100f357507f4fc2fe9184a25f44ce8ddb5f32671fcae6d9c85ed710c199acef16ad16b29911919050565b816002141561012357507f0d826a474f851c563052d929ef0daa70f658aba9ba084f51f6e3483c13c0e59a919050565b816003141561015357507ff7761a16b5e4c0120e4c5704b910dbe18ff6162a9668ed1c2c4efde7c4f15806919050565b816004141561018357507fce9ce09a0ab259d6d14ca3dcd74e6c6b9e7d9074bff66973d4c57ccdffdb2a82919050565b81600514156101b357507f02efd44c63015ff1385344e0624867775486d05e6eb1290a24976964a598003b919050565b81600614156101e357507fc4dec5845d407ce2ac2e6824bb7857c4b138f819e5789d5d11e812db10c846cd919050565b816007141561021357507f5fbe3f20c23f3bd6ac347917fb0903433e0b9a48373412348240a5f919bfde19919050565b816008141561024357507f92d1b07e56b3da96b7917778cb657f2c513eaeeb4d1579a73b5ea316f25b7289919050565b816009141561027357507fa08add5656d6d3d0827ef909f7647981eac42aa1f51970a752f130f718f6d76a919050565b81600a14156102a357507f1704c5f297590d8ec62776b0714f4f3f2234bae0524035342b0da8b8988ebd79919050565b81600b14156102d357507fc5ae2bd47379c2c6d1189cfc3d057948dc6054caf845fcacd8f7affe94b11944919050565b81600c141561030357507f12a161d6d5561062f387d91ad9f0f8966c0956afdb9e8325458b9e5057b82bdb919050565b81600d141561033357507f4ade524ba596de20bbe94507a761c45251ae7a27857ceb4287d9018525b99bc5919050565b81600e141561036357507f38287ad69151fa833bf4bf8b8eb6ffb39400a38f1a7e53b473f639c8c60fd5e4919050565b81600f141561039357507f57f2ade7d711707e785451f2aba6c95872c7fe03153a98b7327b4024e8068fa3919050565b81601014156103c357507fb1982e0d1b0de46a88d8b17941472e41a86d3ff64571ed8e0ca72d58633547fc919050565b81601114156103f357507fb7c60f8670af15eb32b4ee36727179bc085a3dde03d5f9a1486664ba576b30a6919050565b816012141561042357507f5ff905c5c659a926b132ef3665a3de5d5a859c1d479e68851085bfc0348c5331919050565b816013141561045357507fb4dfa78b912e98c9f7eb42d71eb537a02bf3173d44a2eb887a48b3972072dd8e919050565b816014141561048357507f60919a16a2eb8b91cfb8ba1e5b4c155a76a14c217b5403edbd563f34e508ecdc919050565b81601514156104b357507f5fc8c1e9d260531cade53159072fe9f14921a9559e5222dca7e28d504ab3dd04919050565b81601614156104e357507f7ef08ed4b30c17c851a892c539030a92e5319857aa0cd453330a31a0183ac975919050565b816017141561051357507f6420ebe493376e2596f8082f7902dd5c83af477fa9e5d52b74f0f7759e2a9068919050565b816018141561054357507f93766eb9a297fe6ca5c12f268f84999d275250c2408aaea8a0a66aa7aef520a9919050565b816019141561057357507f52b9d8e178f12c49cd409cffc0a54139816ad9de9261f49d75e0cca3c581fab8919050565b81601a14156105a357507f5191df2c0bd0f66075ef15f47daf661fab17bd7d9520e1b011c5f7cb17ac1c3c919050565b81601b14156105d357507fca95564bdcd199f493f50a366e5a1ba1d749f136e586c2e81127fa0bba6b3076919050565b81601c141561060357507f6955b26d7325787f232d42480b9dce4241793c3fe249ea6fbe03c6a798b20512919050565b81601d141561063357507f02fab0f86aba653fbd368bbee2baa6092199592c90397b8c4b414803910e2553919050565b81601e141561066357507f3878a3ff0eda8bcd772059f6c38939e9b4888d7848b36e8645e3929e0ba2f974919050565b81601f141561069357507f819bff9ae5cb51403b906d369e5a1bbd8b791c51f7c27d3be41f9271d9434af1919050565b60405162461bcd60e51b8152602060048201526013602482015272496e646578206f7574206f6620626f756e647360681b604482015260640160405180910390fd5b6000602082840312156106e757600080fd5b5035919050565b6000806040838503121561070157600080fd5b5050803592602090910135915056fea26469706673582212203aee546033e7f24c1bb6cc36e90b3d05ada0bcdc21f2510748c8d968cff5b1e464736f6c63430008050033";

export class KeccakHasher__factory extends ContractFactory {
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
  ): Promise<KeccakHasher> {
    return super.deploy(overrides || {}) as Promise<KeccakHasher>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): KeccakHasher {
    return super.attach(address) as KeccakHasher;
  }
  connect(signer: Signer): KeccakHasher__factory {
    return super.connect(signer) as KeccakHasher__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KeccakHasherInterface {
    return new utils.Interface(_abi) as KeccakHasherInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KeccakHasher {
    return new Contract(address, _abi, signerOrProvider) as KeccakHasher;
  }
}
