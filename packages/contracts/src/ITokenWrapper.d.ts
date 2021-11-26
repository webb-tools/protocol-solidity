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
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ITokenWrapperInterface extends ethers.utils.Interface {
  functions: {
    "getAmountToWrap(uint256)": FunctionFragment;
    "getFeeFromAmount(uint256)": FunctionFragment;
    "setFee(uint8)": FunctionFragment;
    "unwrap(address,uint256)": FunctionFragment;
    "unwrapAndSendTo(address,uint256,address)": FunctionFragment;
    "unwrapFor(address,address,uint256)": FunctionFragment;
    "wrap(address,uint256)": FunctionFragment;
    "wrapFor(address,address,uint256)": FunctionFragment;
    "wrapForAndSendTo(address,address,uint256,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getAmountToWrap",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getFeeFromAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unwrap",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unwrapAndSendTo",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "unwrapFor",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wrap",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wrapFor",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wrapForAndSendTo",
    values: [string, string, BigNumberish, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "getAmountToWrap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFeeFromAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unwrap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unwrapAndSendTo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unwrapFor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wrap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wrapFor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "wrapForAndSendTo",
    data: BytesLike
  ): Result;

  events: {};
}

export class ITokenWrapper extends BaseContract {
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

  interface: ITokenWrapperInterface;

  functions: {
    getAmountToWrap(
      deposit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getFeeFromAmount(
      amountToWrap: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    setFee(
      feePercentage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unwrap(
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unwrapAndSendTo(
      tokenAddress: string,
      amount: BigNumberish,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unwrapFor(
      sender: string,
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    wrap(
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    wrapFor(
      sender: string,
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    wrapForAndSendTo(
      sender: string,
      tokenAddress: string,
      amount: BigNumberish,
      mintRecipient: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getAmountToWrap(
    deposit: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getFeeFromAmount(
    amountToWrap: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setFee(
    feePercentage: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unwrap(
    tokenAddress: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unwrapAndSendTo(
    tokenAddress: string,
    amount: BigNumberish,
    recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unwrapFor(
    sender: string,
    tokenAddress: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  wrap(
    tokenAddress: string,
    amount: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  wrapFor(
    sender: string,
    tokenAddress: string,
    amount: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  wrapForAndSendTo(
    sender: string,
    tokenAddress: string,
    amount: BigNumberish,
    mintRecipient: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getAmountToWrap(
      deposit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFeeFromAmount(
      amountToWrap: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setFee(
      feePercentage: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    unwrap(
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    unwrapAndSendTo(
      tokenAddress: string,
      amount: BigNumberish,
      recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unwrapFor(
      sender: string,
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    wrap(
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    wrapFor(
      sender: string,
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    wrapForAndSendTo(
      sender: string,
      tokenAddress: string,
      amount: BigNumberish,
      mintRecipient: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getAmountToWrap(
      deposit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFeeFromAmount(
      amountToWrap: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setFee(
      feePercentage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unwrap(
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unwrapAndSendTo(
      tokenAddress: string,
      amount: BigNumberish,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unwrapFor(
      sender: string,
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    wrap(
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    wrapFor(
      sender: string,
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    wrapForAndSendTo(
      sender: string,
      tokenAddress: string,
      amount: BigNumberish,
      mintRecipient: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getAmountToWrap(
      deposit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFeeFromAmount(
      amountToWrap: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setFee(
      feePercentage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unwrap(
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unwrapAndSendTo(
      tokenAddress: string,
      amount: BigNumberish,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unwrapFor(
      sender: string,
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    wrap(
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    wrapFor(
      sender: string,
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    wrapForAndSendTo(
      sender: string,
      tokenAddress: string,
      amount: BigNumberish,
      mintRecipient: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
