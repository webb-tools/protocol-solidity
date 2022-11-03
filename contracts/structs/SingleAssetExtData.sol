/**
 * Copyright 2021 Webb Technologies
 * SPDX-License-Identifier: GPL-3.0-or-later-only
 */

pragma solidity ^0.8.0;

struct ExtData {
	address recipient;
	int256 extAmount;
	address relayer;
	uint256 fee;
	uint256 refund;
	address token;
	bytes encryptedOutput1;
	bytes encryptedOutput2;
}