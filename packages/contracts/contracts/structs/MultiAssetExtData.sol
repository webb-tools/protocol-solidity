/**
 * Copyright 2021-2023 Webb Technologies
 * SPDX-License-Identifier: MIT OR Apache-2.0
 */

pragma solidity ^0.8.19;

struct ExtData {
	uint256 assetID;
	address recipient;
	int256 extAmount;
	address relayer;
	uint256 fee;
	uint256 refund;
	address token;
	bytes encryptedOutput1;
	bytes encryptedOutput2;
}
