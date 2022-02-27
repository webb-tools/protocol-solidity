import { getChainIdType } from "@webb-tools/utils";
import { ethers } from "ethers";

export const providerRinkeby = new ethers.providers.JsonRpcProvider(`https://rinkeby.infura.io/v3/fff68ca474dd4764a8d54dd14fa5519e`);
export const walletRinkeby = new ethers.Wallet(process.env.PRIVATE_KEY!, providerRinkeby);
export const chainIdTypeRinkeby = getChainIdType(4);
export const providerPolygon = new ethers.providers.JsonRpcProvider('https://rpc-mumbai.maticvigil.com/');
export const walletPolygon = new ethers.Wallet(process.env.PRIVATE_KEY!, providerPolygon);
export const chainIdTypePolygon = getChainIdType(80001);
export const providerRopsten = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`);
export const walletRopsten = new ethers.Wallet(process.env.PRIVATE_KEY!, providerRopsten);
export const chainIdTypeRopsten = getChainIdType(3);
export const providerGoerli = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`);
export const walletGoerli = new ethers.Wallet(process.env.PRIVATE_KEY!, providerGoerli);
export const chainIdTypeGoerli = getChainIdType(5);
export const providerOptimism = new ethers.providers.JsonRpcProvider('https://kovan.optimism.io');
export const walletOptimism = new ethers.Wallet(process.env.PRIVATE_KEY!, providerOptimism);
export const chainIdTypeOptimism = getChainIdType(69);
export const providerArbitrum = new ethers.providers.JsonRpcProvider('https://rinkeby.arbitrum.io/rpc');
export const walletArbitrum = new ethers.Wallet(process.env.PRIVATE_KEY!, providerArbitrum);
export const chainIdTypeArbitrum = getChainIdType(421611);
export const providerAthena = new ethers.providers.JsonRpcProvider(`http://127.0.0.1:5002`);
export const walletAthena = new ethers.Wallet("0x0000000000000000000000000000000000000001", providerAthena);
export const chainIdTypeAthena = getChainIdType(5002);
export const providerHermes = new ethers.providers.JsonRpcProvider(`http://127.0.0.1:5001`);
export const walletHermes = new ethers.Wallet("0x0000000000000000000000000000000000000001", providerHermes);
export const chainIdTypeHermes = getChainIdType(5001);
