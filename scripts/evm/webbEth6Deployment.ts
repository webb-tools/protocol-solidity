require('dotenv').config();
import { ethers } from 'ethers';
import { Bridge, BridgeInput, DeployerConfig } from '@webb-tools/fixed-bridge';
import { fetchComponentsFromFilePaths } from '@webb-tools/utils';
import path from "path";

export async function run() {

  const providerRinkeby = new ethers.providers.JsonRpcProvider(`https://rinkeby.infura.io/v3/fff68ca474dd4764a8d54dd14fa5519e`);
  const walletRinkeby = new ethers.Wallet(process.env.PRIVATE_KEY!, providerRinkeby);
  const providerKovan = new ethers.providers.JsonRpcProvider(`https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`);
  const walletKovan = new ethers.Wallet(process.env.PRIVATE_KEY!, providerKovan);
  const providerRopsten = new ethers.providers.JsonRpcProvider(`https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`);
  const walletRopsten = new ethers.Wallet(process.env.PRIVATE_KEY!, providerRopsten);
  const providerGoerli = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`);
  const walletGoerli = new ethers.Wallet(process.env.PRIVATE_KEY!, providerGoerli);
  const providerOptimism = new ethers.providers.JsonRpcProvider('https://kovan.optimism.io');
  const walletOptimism = new ethers.Wallet(process.env.PRIVATE_KEY!, providerOptimism);
  const providerArbitrum = new ethers.providers.JsonRpcProvider('https://rinkeby.arbitrum.io/rpc');
  const walletArbitrum = new ethers.Wallet(process.env.PRIVATE_KEY!, providerArbitrum);

  const zkComponents = await fetchComponentsFromFilePaths(
    path.resolve(__dirname, '../../protocol-solidity-fixtures/fixtures/bridge/6/poseidon_bridge_6.wasm'),
    path.resolve(__dirname, '../../protocol-solidity-fixtures/fixtures/bridge/6/witness_calculator.js'),
    path.resolve(__dirname, '../../protocol-solidity-fixtures/fixtures/bridge/6/circuit_final.zkey')
  );

  const bridgeInput: BridgeInput = {
    anchorInputs: {
      asset: {
        3: ['0x0000000000000000000000000000000000000000'],
        4: ['0x0000000000000000000000000000000000000000'],
        5: ['0x0000000000000000000000000000000000000000'],
        42: ['0x0000000000000000000000000000000000000000'],
        69: ['0x0000000000000000000000000000000000000000'],
        421611: ['0x0000000000000000000000000000000000000000'],
      },
      anchorSizes: ['100000000000000000'],
    },
    chainIDs: [3, 4, 5, 42, 69, 421611],
  };

  //Record<number, ethers.Signer>;
  const deployers: DeployerConfig = {
    wallets: {
      42: walletKovan,
      3: walletRopsten,
      4: walletRinkeby,
      5: walletGoerli,
      69: walletOptimism,
      421611: walletArbitrum,
    },
    gasLimits: {
      42: '0x5B8D80',
      3: '0x5B8D80',
      4: '0x5B8D80',
      5: '0x5B8D80',
      69: '0x5B8D80',
      421611: '0x99999999'
    }
  };

  const bridge = await Bridge.deployBridge(bridgeInput, deployers, zkComponents);

  // print out all the info for the addresses to run 
  const bridgeConfig = await bridge.exportConfig();

  for (const anchor of Array.from(bridgeConfig.anchors.values())) {
    const chainId = await anchor.signer.getChainId();
    console.log(`Anchor ${anchor.contract.address} for chain ${chainId}`);
  };

  for (const bridgeSide of Array.from(bridgeConfig.bridgeSides.values())) {
    const chainId = await bridgeSide.admin.getChainId();
    console.log(`BridgeSide ${bridgeSide.contract.address} for chain ${chainId}`);
  }

  for (const webbToken of Array.from(bridgeConfig.webbTokenAddresses.entries())) {
    console.log(`webbToken entry: ${webbToken[0]} + ${webbToken[1]}`);
  }
}

run();

