import { BigNumber, ethers, Overrides } from 'ethers';
import { getChainIdType } from '@webb-tools/utils';
import { toHex, generateFunctionSigHash, toFixedHex } from '@webb-tools/sdk-core';
import { Treasury as TreasuryContract, Treasury__factory } from '@webb-tools/contracts';

export class Treasury {
  contract: TreasuryContract;
  signer: ethers.Signer;
  
  SET_HANDLER_SIGNATURE = "setHandler(address,uint256)";
  RESCUE_TOKENS_SIGNATURE = "rescueTokens(address,address,uint256,uint256)";

  constructor(
    contract: TreasuryContract,
    signer: ethers.Signer
  ) {
    this.contract = contract;
    this.signer = signer;
  }

  public static async createTreasury(
    treasuryHandler: string,
    deployer: ethers.Signer,
    overrides?: Overrides
  ) {
    const factory = new Treasury__factory(deployer);
    const contract = await factory.deploy(
      treasuryHandler,
      { ...overrides }
    );
    await contract.deployed();

    const handler = new Treasury(contract, deployer);
    return handler;
  }

  public static connect(address: string, signer: ethers.Signer) {
    const contract = Treasury__factory.connect(address, signer);
    const treasury = new Treasury(contract, signer);
    return treasury;
  }

  public async createResourceId(): Promise<string> {
    return toHex(this.contract.address + toHex(getChainIdType(await this.signer.getChainId()), 6).substr(2), 32);
  }

  public async getSetHandlerProposalData(newHandler: string): Promise<string> {
    //First 4 bytes of keccak hash is encoded function sig...
    const resourceID = await this.createResourceId();
    const functionSig = generateFunctionSigHash(this.SET_HANDLER_SIGNATURE);
    const nonce = (await this.contract.proposalNonce()).add(1).toNumber();
  
    return '0x' +
    toHex(resourceID, 32).substr(2) + 
    functionSig.slice(2) +
    toHex(nonce,4).substr(2) + 
    newHandler.padEnd(42, '0').slice(2);
  }

  /**
   * @returns Proposal data for rescue tokens proposal
   */
  public async getRescueTokensProposalData(tokenAddress: string, to: string, amountToRescue: BigNumber): Promise<string> {
    const resourceID = await this.createResourceId();
    const functionSig = generateFunctionSigHash(this.RESCUE_TOKENS_SIGNATURE);
    const nonce = (await this.contract.proposalNonce()).add(1).toNumber();
  
    return '0x' +
      toHex(resourceID, 32).substr(2) + 
      functionSig.slice(2) +
      toHex(nonce,4).substr(2) + 
      tokenAddress.padEnd(42, '0').slice(2) +
      to.padEnd(42, '0').slice(2) +
      toFixedHex(amountToRescue).slice(2);
  }
}
