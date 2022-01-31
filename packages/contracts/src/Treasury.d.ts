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

interface TreasuryInterface extends ethers.utils.Interface {
  functions: {
    "proposalNonce()": FunctionFragment;
    "rescueTokens(address,address,uint256,uint256)": FunctionFragment;
    "setHandler(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "proposalNonce",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rescueTokens",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setHandler",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "proposalNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rescueTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setHandler", data: BytesLike): Result;

  events: {};
}

export class Treasury extends BaseContract {
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

  interface: TreasuryInterface;

  functions: {
    proposalNonce(overrides?: CallOverrides): Promise<[BigNumber]>;

    rescueTokens(
      tokenAddress: string,
      to: string,
      amountToRescue: BigNumberish,
      nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setHandler(
      newHandler: string,
      nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  proposalNonce(overrides?: CallOverrides): Promise<BigNumber>;

  rescueTokens(
    tokenAddress: string,
    to: string,
    amountToRescue: BigNumberish,
    nonce: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setHandler(
    newHandler: string,
    nonce: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    proposalNonce(overrides?: CallOverrides): Promise<BigNumber>;

    rescueTokens(
      tokenAddress: string,
      to: string,
      amountToRescue: BigNumberish,
      nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setHandler(
      newHandler: string,
      nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    proposalNonce(overrides?: CallOverrides): Promise<BigNumber>;

    rescueTokens(
      tokenAddress: string,
      to: string,
      amountToRescue: BigNumberish,
      nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setHandler(
      newHandler: string,
      nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    proposalNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rescueTokens(
      tokenAddress: string,
      to: string,
      amountToRescue: BigNumberish,
      nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setHandler(
      newHandler: string,
      nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}