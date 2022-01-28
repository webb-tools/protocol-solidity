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
    "adminSetResourceWithSignature(bytes,bytes)": FunctionFragment;
    "bridgeHandler()": FunctionFragment;
    "checkPubKey(bytes)": FunctionFragment;
    "executeProposalWithSignature(bytes,bytes)": FunctionFragment;
    "getChainId()": FunctionFragment;
    "getChainIdType()": FunctionFragment;
    "governor()": FunctionFragment;
    "isGovernor()": FunctionFragment;
    "isSignatureFromGovernor(bytes,bytes)": FunctionFragment;
    "paused()": FunctionFragment;
    "proposalNonce()": FunctionFragment;
    "recover(bytes,bytes)": FunctionFragment;
    "refreshNonce()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "rescueTokens(address,address,uint256,uint256)": FunctionFragment;
    "setBridgeHandler(address,uint32)": FunctionFragment;
    "transferOwnership(address,uint32)": FunctionFragment;
    "transferOwnershipWithSignature(address,uint32,bytes)": FunctionFragment;
    "transferOwnershipWithSignaturePubKey(bytes,uint32,bytes)": FunctionFragment;
    "verify(bytes32,uint8,bytes32,bytes32)": FunctionFragment;
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
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "bridgeHandler",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "checkPubKey",
    values: [BytesLike]
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
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proposalNonce",
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
    functionFragment: "rescueTokens",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setBridgeHandler",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnershipWithSignature",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnershipWithSignaturePubKey",
    values: [BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "verify",
    values: [BytesLike, BigNumberish, BytesLike, BytesLike]
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
    functionFragment: "bridgeHandler",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkPubKey",
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
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proposalNonce",
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
    functionFragment: "rescueTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBridgeHandler",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnershipWithSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnershipWithSignaturePubKey",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;

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
      data: BytesLike,
      sig: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    bridgeHandler(overrides?: CallOverrides): Promise<[string]>;

    checkPubKey(
      pubkey: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

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

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    proposalNonce(overrides?: CallOverrides): Promise<[BigNumber]>;

    recover(
      data: BytesLike,
      sig: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    refreshNonce(overrides?: CallOverrides): Promise<[number]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rescueTokens(
      tokenAddress: string,
      to: string,
      amountToRescue: BigNumberish,
      nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setBridgeHandler(
      newHandler: string,
      nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnershipWithSignature(
      newOwner: string,
      nonce: BigNumberish,
      sig: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnershipWithSignaturePubKey(
      publicKey: BytesLike,
      nonce: BigNumberish,
      sig: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    verify(
      hash: BytesLike,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  EVM_CHAIN_ID_TYPE(overrides?: CallOverrides): Promise<string>;

  _resourceIDToHandlerAddress(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  adminSetResourceWithSignature(
    data: BytesLike,
    sig: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  bridgeHandler(overrides?: CallOverrides): Promise<string>;

  checkPubKey(pubkey: BytesLike, overrides?: CallOverrides): Promise<boolean>;

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

  paused(overrides?: CallOverrides): Promise<boolean>;

  proposalNonce(overrides?: CallOverrides): Promise<BigNumber>;

  recover(
    data: BytesLike,
    sig: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  refreshNonce(overrides?: CallOverrides): Promise<number>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rescueTokens(
    tokenAddress: string,
    to: string,
    amountToRescue: BigNumberish,
    nonce: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setBridgeHandler(
    newHandler: string,
    nonce: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    nonce: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnershipWithSignature(
    newOwner: string,
    nonce: BigNumberish,
    sig: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnershipWithSignaturePubKey(
    publicKey: BytesLike,
    nonce: BigNumberish,
    sig: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  verify(
    hash: BytesLike,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    EVM_CHAIN_ID_TYPE(overrides?: CallOverrides): Promise<string>;

    _resourceIDToHandlerAddress(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    adminSetResourceWithSignature(
      data: BytesLike,
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    bridgeHandler(overrides?: CallOverrides): Promise<string>;

    checkPubKey(pubkey: BytesLike, overrides?: CallOverrides): Promise<boolean>;

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

    paused(overrides?: CallOverrides): Promise<boolean>;

    proposalNonce(overrides?: CallOverrides): Promise<BigNumber>;

    recover(
      data: BytesLike,
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    refreshNonce(overrides?: CallOverrides): Promise<number>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    rescueTokens(
      tokenAddress: string,
      to: string,
      amountToRescue: BigNumberish,
      nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setBridgeHandler(
      newHandler: string,
      nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnershipWithSignature(
      newOwner: string,
      nonce: BigNumberish,
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnershipWithSignaturePubKey(
      publicKey: BytesLike,
      nonce: BigNumberish,
      sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    verify(
      hash: BytesLike,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
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
      data: BytesLike,
      sig: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    bridgeHandler(overrides?: CallOverrides): Promise<BigNumber>;

    checkPubKey(
      pubkey: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

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

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    proposalNonce(overrides?: CallOverrides): Promise<BigNumber>;

    recover(
      data: BytesLike,
      sig: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    refreshNonce(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rescueTokens(
      tokenAddress: string,
      to: string,
      amountToRescue: BigNumberish,
      nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setBridgeHandler(
      newHandler: string,
      nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnershipWithSignature(
      newOwner: string,
      nonce: BigNumberish,
      sig: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnershipWithSignaturePubKey(
      publicKey: BytesLike,
      nonce: BigNumberish,
      sig: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    verify(
      hash: BytesLike,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    EVM_CHAIN_ID_TYPE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _resourceIDToHandlerAddress(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    adminSetResourceWithSignature(
      data: BytesLike,
      sig: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    bridgeHandler(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    checkPubKey(
      pubkey: BytesLike,
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

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposalNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recover(
      data: BytesLike,
      sig: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    refreshNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rescueTokens(
      tokenAddress: string,
      to: string,
      amountToRescue: BigNumberish,
      nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setBridgeHandler(
      newHandler: string,
      nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnershipWithSignature(
      newOwner: string,
      nonce: BigNumberish,
      sig: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnershipWithSignaturePubKey(
      publicKey: BytesLike,
      nonce: BigNumberish,
      sig: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    verify(
      hash: BytesLike,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
