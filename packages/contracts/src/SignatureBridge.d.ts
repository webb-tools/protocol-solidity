/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface SignatureBridgeInterface extends ethers.utils.Interface {
  functions: {
    "EVM_CHAIN_ID_TYPE()": FunctionFragment;
    "_resourceIDToHandlerAddress(bytes32)": FunctionFragment;
    "adminSetResourceWithSignature(bytes32,bytes4,uint32,bytes32,address,address,bytes)": FunctionFragment;
    "averageSessionLengthInMillisecs()": FunctionFragment;
    "currentVotingPeriod()": FunctionFragment;
    "executeProposalWithSignature(bytes,bytes)": FunctionFragment;
    "getChainId()": FunctionFragment;
    "getChainIdType()": FunctionFragment;
    "governor()": FunctionFragment;
    "isGovernor()": FunctionFragment;
    "isSignatureFromGovernor(bytes,bytes)": FunctionFragment;
    "lastGovernorUpdateTime()": FunctionFragment;
    "numOfProposers()": FunctionFragment;
    "parseChainIdFromResourceId(bytes32)": FunctionFragment;
    "paused()": FunctionFragment;
    "proposalNonce()": FunctionFragment;
    "proposerSetRoot()": FunctionFragment;
    "proposerSetUpdateNonce()": FunctionFragment;
    "recover(bytes,bytes)": FunctionFragment;
    "refreshNonce()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "sessionLengthMultiplier()": FunctionFragment;
    "transferOwnership(address,uint32)": FunctionFragment;
    "transferOwnershipWithSignaturePubKey(bytes,uint32,bytes)": FunctionFragment;
    "updateProposerSetData(bytes32,uint64,uint32,uint32,bytes)": FunctionFragment;
    "voteInFavorForceSetGovernor((uint32,bytes32[],address))": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "EVM_CHAIN_ID_TYPE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_resourceIDToHandlerAddress",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "adminSetResourceWithSignature",
    values: [
      BytesLike,
      BytesLike,
      BigNumberish,
      BytesLike,
      string,
      string,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "averageSessionLengthInMillisecs",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "currentVotingPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "executeProposalWithSignature",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getChainId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getChainIdType",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "governor", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isGovernor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isSignatureFromGovernor",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "lastGovernorUpdateTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "numOfProposers",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "parseChainIdFromResourceId",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proposalNonce",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposerSetRoot",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposerSetUpdateNonce",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "recover",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "refreshNonce",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sessionLengthMultiplier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnershipWithSignaturePubKey",
    values: [BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateProposerSetData",
    values: [BytesLike, BigNumberish, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "voteInFavorForceSetGovernor",
    values: [
      {
        leafIndex: BigNumberish;
        siblingPathNodes: BytesLike[];
        proposedGovernor: string;
      }
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "EVM_CHAIN_ID_TYPE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_resourceIDToHandlerAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "adminSetResourceWithSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "averageSessionLengthInMillisecs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentVotingPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeProposalWithSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getChainId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getChainIdType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isGovernor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isSignatureFromGovernor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastGovernorUpdateTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numOfProposers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "parseChainIdFromResourceId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proposalNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposerSetRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposerSetUpdateNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "recover", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "refreshNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sessionLengthMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnershipWithSignaturePubKey",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateProposerSetData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "voteInFavorForceSetGovernor",
    data: BytesLike
  ): Result;

  events: {
    "GovernanceOwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "RecoveredAddress(address)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(
    nameOrSignatureOrTopic: "GovernanceOwnershipTransferred"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RecoveredAddress"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export type GovernanceOwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type PausedEvent = TypedEvent<[string] & { account: string }>;

export type RecoveredAddressEvent = TypedEvent<
  [string] & { recovered: string }
>;

export type UnpausedEvent = TypedEvent<[string] & { account: string }>;

export class SignatureBridge extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: SignatureBridgeInterface;

  functions: {
    EVM_CHAIN_ID_TYPE(overrides?: CallOverrides): Promise<[string]>;

    _resourceIDToHandlerAddress(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    adminSetResourceWithSignature(
      resourceID: BytesLike,
      functionSig: BytesLike,
      nonce: BigNumberish,
      newResourceID: BytesLike,
      handlerAddress: string,
      executionContextAddress: string,
      sig: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    averageSessionLengthInMillisecs(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    currentVotingPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    executeProposalWithSignature(
      data: BytesLike,
      sig: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getChainId(overrides?: CallOverrides): Promise<[BigNumber]>;

    getChainIdType(overrides?: CallOverrides): Promise<[number]>;

    governor(overrides?: CallOverrides): Promise<[string]>;

    isGovernor(overrides?: CallOverrides): Promise<[boolean]>;

    isSignatureFromGovernor(
      data: BytesLike,
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    lastGovernorUpdateTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    numOfProposers(overrides?: CallOverrides): Promise<[number]>;

    parseChainIdFromResourceId(
      _resourceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    proposalNonce(overrides?: CallOverrides): Promise<[BigNumber]>;

    proposerSetRoot(overrides?: CallOverrides): Promise<[string]>;

    proposerSetUpdateNonce(overrides?: CallOverrides): Promise<[number]>;

    recover(
      data: BytesLike,
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    refreshNonce(overrides?: CallOverrides): Promise<[number]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sessionLengthMultiplier(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnershipWithSignaturePubKey(
      publicKey: BytesLike,
      nonce: BigNumberish,
      sig: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateProposerSetData(
      _proposerSetRoot: BytesLike,
      _averageSessionLengthInMillisecs: BigNumberish,
      _numOfProposers: BigNumberish,
      _proposerSetUpdateNonce: BigNumberish,
      _sig: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    voteInFavorForceSetGovernor(
      vote: {
        leafIndex: BigNumberish;
        siblingPathNodes: BytesLike[];
        proposedGovernor: string;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  EVM_CHAIN_ID_TYPE(overrides?: CallOverrides): Promise<string>;

  _resourceIDToHandlerAddress(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  adminSetResourceWithSignature(
    resourceID: BytesLike,
    functionSig: BytesLike,
    nonce: BigNumberish,
    newResourceID: BytesLike,
    handlerAddress: string,
    executionContextAddress: string,
    sig: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  averageSessionLengthInMillisecs(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  currentVotingPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  executeProposalWithSignature(
    data: BytesLike,
    sig: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getChainId(overrides?: CallOverrides): Promise<BigNumber>;

  getChainIdType(overrides?: CallOverrides): Promise<number>;

  governor(overrides?: CallOverrides): Promise<string>;

  isGovernor(overrides?: CallOverrides): Promise<boolean>;

  isSignatureFromGovernor(
    data: BytesLike,
    sig: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  lastGovernorUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

  numOfProposers(overrides?: CallOverrides): Promise<number>;

  parseChainIdFromResourceId(
    _resourceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  proposalNonce(overrides?: CallOverrides): Promise<BigNumber>;

  proposerSetRoot(overrides?: CallOverrides): Promise<string>;

  proposerSetUpdateNonce(overrides?: CallOverrides): Promise<number>;

  recover(
    data: BytesLike,
    sig: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  refreshNonce(overrides?: CallOverrides): Promise<number>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sessionLengthMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    nonce: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnershipWithSignaturePubKey(
    publicKey: BytesLike,
    nonce: BigNumberish,
    sig: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateProposerSetData(
    _proposerSetRoot: BytesLike,
    _averageSessionLengthInMillisecs: BigNumberish,
    _numOfProposers: BigNumberish,
    _proposerSetUpdateNonce: BigNumberish,
    _sig: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  voteInFavorForceSetGovernor(
    vote: {
      leafIndex: BigNumberish;
      siblingPathNodes: BytesLike[];
      proposedGovernor: string;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    EVM_CHAIN_ID_TYPE(overrides?: CallOverrides): Promise<string>;

    _resourceIDToHandlerAddress(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    adminSetResourceWithSignature(
      resourceID: BytesLike,
      functionSig: BytesLike,
      nonce: BigNumberish,
      newResourceID: BytesLike,
      handlerAddress: string,
      executionContextAddress: string,
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    averageSessionLengthInMillisecs(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentVotingPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    executeProposalWithSignature(
      data: BytesLike,
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    getChainId(overrides?: CallOverrides): Promise<BigNumber>;

    getChainIdType(overrides?: CallOverrides): Promise<number>;

    governor(overrides?: CallOverrides): Promise<string>;

    isGovernor(overrides?: CallOverrides): Promise<boolean>;

    isSignatureFromGovernor(
      data: BytesLike,
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    lastGovernorUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

    numOfProposers(overrides?: CallOverrides): Promise<number>;

    parseChainIdFromResourceId(
      _resourceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    proposalNonce(overrides?: CallOverrides): Promise<BigNumber>;

    proposerSetRoot(overrides?: CallOverrides): Promise<string>;

    proposerSetUpdateNonce(overrides?: CallOverrides): Promise<number>;

    recover(
      data: BytesLike,
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    refreshNonce(overrides?: CallOverrides): Promise<number>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    sessionLengthMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnershipWithSignaturePubKey(
      publicKey: BytesLike,
      nonce: BigNumberish,
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    updateProposerSetData(
      _proposerSetRoot: BytesLike,
      _averageSessionLengthInMillisecs: BigNumberish,
      _numOfProposers: BigNumberish,
      _proposerSetUpdateNonce: BigNumberish,
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    voteInFavorForceSetGovernor(
      vote: {
        leafIndex: BigNumberish;
        siblingPathNodes: BytesLike[];
        proposedGovernor: string;
      },
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "GovernanceOwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    GovernanceOwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "Paused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Paused(account?: null): TypedEventFilter<[string], { account: string }>;

    "RecoveredAddress(address)"(
      recovered?: string | null
    ): TypedEventFilter<[string], { recovered: string }>;

    RecoveredAddress(
      recovered?: string | null
    ): TypedEventFilter<[string], { recovered: string }>;

    "Unpaused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Unpaused(account?: null): TypedEventFilter<[string], { account: string }>;
  };

  estimateGas: {
    EVM_CHAIN_ID_TYPE(overrides?: CallOverrides): Promise<BigNumber>;

    _resourceIDToHandlerAddress(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    adminSetResourceWithSignature(
      resourceID: BytesLike,
      functionSig: BytesLike,
      nonce: BigNumberish,
      newResourceID: BytesLike,
      handlerAddress: string,
      executionContextAddress: string,
      sig: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    averageSessionLengthInMillisecs(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentVotingPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    executeProposalWithSignature(
      data: BytesLike,
      sig: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getChainId(overrides?: CallOverrides): Promise<BigNumber>;

    getChainIdType(overrides?: CallOverrides): Promise<BigNumber>;

    governor(overrides?: CallOverrides): Promise<BigNumber>;

    isGovernor(overrides?: CallOverrides): Promise<BigNumber>;

    isSignatureFromGovernor(
      data: BytesLike,
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastGovernorUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

    numOfProposers(overrides?: CallOverrides): Promise<BigNumber>;

    parseChainIdFromResourceId(
      _resourceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    proposalNonce(overrides?: CallOverrides): Promise<BigNumber>;

    proposerSetRoot(overrides?: CallOverrides): Promise<BigNumber>;

    proposerSetUpdateNonce(overrides?: CallOverrides): Promise<BigNumber>;

    recover(
      data: BytesLike,
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    refreshNonce(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sessionLengthMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnershipWithSignaturePubKey(
      publicKey: BytesLike,
      nonce: BigNumberish,
      sig: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateProposerSetData(
      _proposerSetRoot: BytesLike,
      _averageSessionLengthInMillisecs: BigNumberish,
      _numOfProposers: BigNumberish,
      _proposerSetUpdateNonce: BigNumberish,
      _sig: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    voteInFavorForceSetGovernor(
      vote: {
        leafIndex: BigNumberish;
        siblingPathNodes: BytesLike[];
        proposedGovernor: string;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    EVM_CHAIN_ID_TYPE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _resourceIDToHandlerAddress(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    adminSetResourceWithSignature(
      resourceID: BytesLike,
      functionSig: BytesLike,
      nonce: BigNumberish,
      newResourceID: BytesLike,
      handlerAddress: string,
      executionContextAddress: string,
      sig: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    averageSessionLengthInMillisecs(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currentVotingPeriod(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    executeProposalWithSignature(
      data: BytesLike,
      sig: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getChainIdType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isGovernor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isSignatureFromGovernor(
      data: BytesLike,
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastGovernorUpdateTime(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    numOfProposers(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    parseChainIdFromResourceId(
      _resourceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposalNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposerSetRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposerSetUpdateNonce(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    recover(
      data: BytesLike,
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    refreshNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sessionLengthMultiplier(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnershipWithSignaturePubKey(
      publicKey: BytesLike,
      nonce: BigNumberish,
      sig: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateProposerSetData(
      _proposerSetRoot: BytesLike,
      _averageSessionLengthInMillisecs: BigNumberish,
      _numOfProposers: BigNumberish,
      _proposerSetUpdateNonce: BigNumberish,
      _sig: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    voteInFavorForceSetGovernor(
      vote: {
        leafIndex: BigNumberish;
        siblingPathNodes: BytesLike[];
        proposedGovernor: string;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
