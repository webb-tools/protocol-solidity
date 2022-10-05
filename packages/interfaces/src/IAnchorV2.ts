import { IAnchorDeposit, IAnchorDepositInfo } from './anchor';
import { AnchorBaseV2 } from '../../contracts/src';
import { MerkleProof, Utxo } from '@webb-tools/sdk-core';
import { BigNumberish, ethers } from 'ethers';

export interface IAnchorV2 {
  signer: ethers.Signer;
  contract: AnchorBaseV2;
  tree: any;
  // hex string of the connected root
  latestSyncedBlock: number;

  // The depositHistory stores leafIndex => information to create proposals (new root)
  depositHistory: Record<number, string>;
  token?: string;
  denomination?: string;

  setSigner(signer: ethers.Signer);
  getProposalData(resourceID: string, leafIndex?: number): Promise<string>;
  getHandler(): Promise<string>;
  getHandlerProposalData(newHandler: string): Promise<string>;
  getAddress(): string;
  getMinWithdrawalLimitProposalData(_minimalWithdrawalAmount: string): Promise<string>;
  getMaxDepositLimitProposalData(_maximumDepositAmount: string): Promise<string>;
  createResourceId(): Promise<string>;
  update(blockNumber?: number): Promise<void>;

  // VAnchor methods
  getMerkleProof(input: Utxo): MerkleProof;
}
