/**
 * Copyright 2021-2023 Webb Technologies
 * SPDX-License-Identifier: MIT OR Apache-2.0
 */
pragma solidity >=0.8.19 <0.9.0;

import "../utils/ChainIdWithType.sol";

/// @param voterMerkleRoot the Merkle root of the voter set Merkle tree
/// @param averageSessionLengthInMillisecs the average session length in milliseconds
/// @param voterCount the number of voters
/// @param nonce the nonce of the proposal
/// @param publicKey the public key of the new governor
struct RefreshProposal {
	bytes32 voterMerkleRoot;
	uint64 averageSessionLengthInMillisecs;
	uint32 voterCount;
	uint32 nonce;
	bytes publicKey;
}

contract ProposalHelpers is ChainIdWithType {
	///													///
	///				Generic proposal helpers			///
	///													///

	function buildTypedChainId(uint16 chainType, uint32 chainId) public pure returns (bytes6) {
		// Return a 6 bytes value of the chainType and chainId concatenated
		return bytes6((uint48(chainType) << (4 * 8)) | uint32(chainId));
	}

	function buildResourceId(address resource, bytes6 typedChainId) public pure returns (bytes32) {
		// Return a 32 bytes value of the resource and typedChainId concatenated
		return
			(bytes32(uint256(uint160(resource)) << (6 * 8))) |
			bytes32(uint256(uint48(typedChainId)));
	}

	function buildManyResourceIds(
		uint8 count,
		address randomResource,
		bytes6 typedChainId
	) public pure returns (bytes32[] memory) {
		bytes32[] memory resourceIds = new bytes32[](count);
		for (uint8 i = 0; i < count; i++) {
			bytes32 randomHash = keccak256(abi.encodePacked(i, randomResource));
			address resource = address(ripemd160(abi.encodePacked(randomHash)));
			resourceIds[i] = buildResourceId(resource, typedChainId);
		}
		return resourceIds;
	}

	function buildProposalHeader(
		bytes32 resourceId,
		bytes4 functionSig,
		uint32 nonce
	) public pure returns (bytes memory) {
		// Return a 40 bytes value of the resourceId, functionSig and nonce concatenated
		return abi.encodePacked(resourceId, functionSig, nonce);
	}

	function buildProposal(
		bytes memory proposalHeader,
		bytes memory proposalData
	) public pure returns (bytes memory) {
		// Return a 40 + proposalData.length bytes value of the proposalHeader and proposalData concatenated
		return abi.encodePacked(proposalHeader, proposalData);
	}

	function buildSetSingleAddressProposal(
		bytes32 targetResourceId,
		uint32 nonce,
		bytes4 functionSig,
		address newAddress
	) public pure returns (bytes memory) {
		// Create the proposal header with the resourceId as the nonce
		bytes memory proposalHeader = buildProposalHeader(targetResourceId, functionSig, nonce);
		// Create the proposal data as the newAddress concatenated
		bytes memory proposalData = abi.encodePacked(newAddress);
		// Return the proposal header and proposal data concatenated
		return buildProposal(proposalHeader, proposalData);
	}

	function buildSetSingleUint256Proposal(
		bytes32 targetResourceId,
		uint32 nonce,
		bytes4 functionSig,
		uint256 newValue
	) public pure returns (bytes memory) {
		// Create the proposal header with the resourceId as the nonce
		bytes memory proposalHeader = buildProposalHeader(targetResourceId, functionSig, nonce);
		// Create the proposal data as the newValue concatenated
		bytes memory proposalData = abi.encodePacked(newValue);
		// Return the proposal header and proposal data concatenated
		return buildProposal(proposalHeader, proposalData);
	}

	function buildSetHandlerProposal(
		bytes32 targetResourceId,
		uint32 nonce,
		address handlerAddress
	) public pure returns (bytes memory) {
		return
			buildSetSingleAddressProposal(
				targetResourceId,
				nonce,
				bytes4(keccak256("setHandler(address,uint32)")),
				handlerAddress
			);
	}

	///													///
	///					Anchor proposals				///
	///													///

	function buildAnchorUpdateProposal(
		bytes32 targetResourceId,
		bytes32 merkleRoot,
		uint32 leafIndex,
		bytes32 srcResourceId
	) public pure returns (bytes memory) {
		// Create the proposal header with the leafIndex as the nonce
		bytes memory proposalHeader = buildProposalHeader(
			targetResourceId,
			bytes4(keccak256("updateEdge(uint256,uint32,bytes32)")),
			leafIndex
		);
		// Create the proposal data as the merkleRoot + srcResourceId concatenated
		bytes memory proposalData = abi.encodePacked(merkleRoot, srcResourceId);
		// Return the proposal header and proposal data concatenated
		return buildProposal(proposalHeader, proposalData);
	}

	function buildSetVerifierProposal(
		bytes32 targetResourceId,
		uint32 nonce,
		address verifierAddress
	) public pure returns (bytes memory) {
		return
			buildSetSingleAddressProposal(
				targetResourceId,
				nonce,
				bytes4(keccak256("setVerifier(address,uint32)")),
				verifierAddress
			);
	}

	function buildSetMaximumDepositLimitProposal(
		bytes32 targetResourceId,
		uint32 nonce,
		uint256 maximumDepositLimit
	) public pure returns (bytes memory) {
		return
			buildSetSingleUint256Proposal(
				targetResourceId,
				nonce,
				bytes4(keccak256("configureMaximumDepositLimit(uint256,uint32)")),
				maximumDepositLimit
			);
	}

	function buildSetMinimumWithdrawalLimitProposal(
		bytes32 targetResourceId,
		uint32 nonce,
		uint256 minimumWithdrawLimit
	) public pure returns (bytes memory) {
		return
			buildSetSingleUint256Proposal(
				targetResourceId,
				nonce,
				bytes4(keccak256("configureMinimumWithdrawalLimit(uint256,uint32)")),
				minimumWithdrawLimit
			);
	}

	///													///
	///					Bridge proposals				///
	///													///

	function buildSetResourceProposal(
		bytes32 bridgeResourceId,
		uint32 nonce,
		bytes32 newResourceId,
		address handlerAddress
	) public pure returns (bytes memory) {
		// Create the proposal header with the resourceId as the nonce
		bytes memory proposalHeader = buildProposalHeader(
			bridgeResourceId,
			bytes4(
				keccak256(
					"adminSetResourceWithSignature(bytes32,bytes4,uint32,bytes32,address,bytes)"
				)
			),
			nonce
		);
		// Create the proposal data as the newResourceId + handlerAddress concatenated
		bytes memory proposalData = abi.encodePacked(newResourceId, handlerAddress);
		// Return the proposal header and proposal data concatenated
		return buildProposal(proposalHeader, proposalData);
	}

	///													///
	///					Refresh proposals				///
	///													///

	function buildRefreshProposal(
		bytes32 _voterMerkleRoot,
		uint64 _averageSessionLengthInMillisecs,
		uint32 _voterCount,
		uint32 _refreshNonce,
		bytes memory _publicKey
	) public pure returns (RefreshProposal memory, bytes memory) {
		return (
			RefreshProposal(
				_voterMerkleRoot,
				_averageSessionLengthInMillisecs,
				_voterCount,
				_refreshNonce,
				_publicKey
			),
			abi.encodePacked(
				_voterMerkleRoot,
				_averageSessionLengthInMillisecs,
				_voterCount,
				_refreshNonce,
				_publicKey
			)
		);
	}

	///														///
	///		TokenWrapper / TokenWrapperHandler proposals	///
	///														///

	function buildAddTokenProposal(
		bytes32 tokenResourceId,
		uint32 nonce,
		address tokenToAdd
	) public pure returns (bytes memory) {
		return
			buildSetSingleAddressProposal(
				tokenResourceId,
				nonce,
				bytes4(keccak256("add(address,uint32)")),
				tokenToAdd
			);
	}

	function buildRemoveTokenProposal(
		bytes32 tokenResourceId,
		uint32 nonce,
		address tokenToRemove
	) public pure returns (bytes memory) {
		return
			buildSetSingleAddressProposal(
				tokenResourceId,
				nonce,
				bytes4(keccak256("remove(address,uint32)")),
				tokenToRemove
			);
	}

	function buildSetFeeProposal(
		bytes32 tokenResourceId,
		uint32 nonce,
		uint16 fee
	) public pure returns (bytes memory) {
		// Create the proposal header with the resourceId as the nonce
		bytes memory proposalHeader = buildProposalHeader(
			tokenResourceId,
			bytes4(keccak256("setFee(uint16,uint32)")),
			nonce
		);
		// Create the proposal data as the newResourceId + handlerAddress concatenated
		bytes memory proposalData = abi.encodePacked(fee);
		// Return the proposal header and proposal data concatenated
		return buildProposal(proposalHeader, proposalData);
	}

	function buildSetFeeRecipientProposal(
		bytes32 tokenResourceId,
		uint32 nonce,
		address feeRecipient
	) public pure returns (bytes memory) {
		return
			buildSetSingleAddressProposal(
				tokenResourceId,
				nonce,
				bytes4(keccak256("setFeeRecipient(address,uint32)")),
				feeRecipient
			);
	}

	function buildSetNativeAllowedProposal(
		bytes32 tokenResourceId,
		uint32 nonce,
		bool nativeAllowed
	) public pure returns (bytes memory) {
		// Create the proposal header with the resourceId as the nonce
		bytes memory proposalHeader = buildProposalHeader(
			tokenResourceId,
			bytes4(keccak256("setNativeAllowed(bool,uint32)")),
			nonce
		);
		// Create the proposal data as the newResourceId + handlerAddress concatenated
		bytes memory proposalData = abi.encodePacked(nativeAllowed);
		// Return the proposal header and proposal data concatenated
		return buildProposal(proposalHeader, proposalData);
	}

	///													///
	///					Treasury proposals				///
	///													///

	function buildRescueTokensProposal(
		bytes32 treasuryResourceId,
		uint32 nonce,
		address tokenAddress,
		address payable to,
		uint256 amountToRescue
	) public pure returns (bytes memory) {
		// Create the proposal header with the resourceId as the nonce
		bytes memory proposalHeader = buildProposalHeader(
			treasuryResourceId,
			bytes4(keccak256("rescueTokens(address,address,uint256,uint32)")),
			nonce
		);
		// Create the proposal data as the newResourceId + handlerAddress concatenated
		bytes memory proposalData = abi.encodePacked(tokenAddress, to, amountToRescue);
		// Return the proposal header and proposal data concatenated
		return buildProposal(proposalHeader, proposalData);
	}
}
