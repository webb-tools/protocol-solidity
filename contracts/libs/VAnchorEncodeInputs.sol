// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;

library VAnchorEncodeInputs {
  struct Proof {
    bytes proof;
    bytes roots;
    bytes32[] inputNullifiers;
    bytes32[2] outputCommitments;
    uint256 publicAmount;
    bytes32 extDataHash;
  }

  function getChainId() public view returns (uint) {
    uint chainId;
    assembly { chainId := chainid() }
    return chainId;
  }

  function _encodeInputs2(
    Proof memory _args,
    uint8 maxEdges
  ) public view returns (bytes memory, bytes32[] memory) {
    uint256 _chainId = getChainId();
    bytes32[] memory result = new bytes32[](maxEdges + 1);
    bytes memory encodedInput;

    if (maxEdges == 1) {
      uint256[9] memory inputs;
      bytes32[2] memory roots = abi.decode(_args.roots, (bytes32[2]));
      // assign roots
      result[0] = roots[0];
      result[1] = roots[1];
      // assign input
      inputs[0] = uint256(_args.publicAmount);
      inputs[1] = uint256(_args.extDataHash);
      inputs[2] = uint256(_args.inputNullifiers[0]);
      inputs[3] = uint256(_args.inputNullifiers[1]);
      inputs[4] = uint256(_args.outputCommitments[0]);
      inputs[5] = uint256(_args.outputCommitments[1]);
      inputs[6] = uint256(_chainId);
      inputs[7] = uint256(roots[0]);
      inputs[8] = uint256(roots[1]);
      encodedInput = abi.encodePacked(inputs);
    } else if (maxEdges == 2) {
      uint256[10] memory inputs;
      bytes32[3] memory roots = abi.decode(_args.roots, (bytes32[3]));
      // assign roots
      result[0] = roots[0];
      result[1] = roots[1];
      result[2] = roots[2];
      // assign input
      //encodedInput = abi.encodePacked(inputs);
      inputs[0] = uint256(_args.publicAmount);
      inputs[1] = uint256(_args.extDataHash);
      inputs[2] = uint256(_args.inputNullifiers[0]);
      inputs[3] = uint256(_args.inputNullifiers[1]);
      inputs[4] = uint256(_args.outputCommitments[0]);
      inputs[5] = uint256(_args.outputCommitments[1]);
      inputs[6] = uint256(_chainId);
      inputs[7] = uint256(roots[0]);
      inputs[8] = uint256(roots[1]);
      inputs[9] = uint256(roots[2]);
    } else if (maxEdges == 3) {
      uint256[11] memory inputs;
      bytes32[4] memory roots = abi.decode(_args.roots, (bytes32[4]));
      // assign roots
      result[0] = roots[0];
      result[1] = roots[1];
      result[2] = roots[2];
      result[3] = roots[3];
      // assign input
      //encodedInput = abi.encodePacked(inputs);
      inputs[0] = uint256(_args.publicAmount);
      inputs[1] = uint256(_args.extDataHash);
      inputs[2] = uint256(_args.inputNullifiers[0]);
      inputs[3] = uint256(_args.inputNullifiers[1]);
      inputs[4] = uint256(_args.outputCommitments[0]);
      inputs[5] = uint256(_args.outputCommitments[1]);
      inputs[6] = uint256(_chainId);
      inputs[7] = uint256(roots[0]);
      inputs[8] = uint256(roots[1]);
      inputs[9] = uint256(roots[2]);
      inputs[10] = uint256(roots[3]);
    } else if (maxEdges == 4) {
      uint256[12] memory inputs;
      bytes32[5] memory roots = abi.decode(_args.roots, (bytes32[5]));
      // assign roots
      result[0] = roots[0];
      result[1] = roots[1];
      result[2] = roots[2];
      result[3] = roots[3];
      result[4] = roots[4];
      // assign input
      //encodedInput = abi.encodePacked(inputs);
      inputs[0] = uint256(_args.publicAmount);
      inputs[1] = uint256(_args.extDataHash);
      inputs[2] = uint256(_args.inputNullifiers[0]);
      inputs[3] = uint256(_args.inputNullifiers[1]);
      inputs[4] = uint256(_args.outputCommitments[0]);
      inputs[5] = uint256(_args.outputCommitments[1]);
      inputs[6] = uint256(_chainId);
      inputs[7] = uint256(roots[0]);
      inputs[8] = uint256(roots[1]);
      inputs[9] = uint256(roots[2]);
      inputs[10] = uint256(roots[3]);
      inputs[11] = uint256(roots[4]);
    } else if (maxEdges == 5) {
      uint256[13] memory inputs;
      bytes32[6] memory roots = abi.decode(_args.roots, (bytes32[6]));
      // assign roots
      result[0] = roots[0];
      result[1] = roots[1];
      result[2] = roots[2];
      result[3] = roots[3];
      result[4] = roots[4];
      result[5] = roots[5];
      // assign input
      //encodedInput = abi.encodePacked(inputs);
      inputs[0] = uint256(_args.publicAmount);
      inputs[1] = uint256(_args.extDataHash);
      inputs[2] = uint256(_args.inputNullifiers[0]);
      inputs[3] = uint256(_args.inputNullifiers[1]);
      inputs[4] = uint256(_args.outputCommitments[0]);
      inputs[5] = uint256(_args.outputCommitments[1]);
      inputs[6] = uint256(_chainId);
      inputs[7] = uint256(roots[0]);
      inputs[8] = uint256(roots[1]);
      inputs[9] = uint256(roots[2]);
      inputs[10] = uint256(roots[3]);
      inputs[11] = uint256(roots[4]);
      inputs[12] = uint256(roots[5]);
    } else {
      require(false, "Invalid edges");
    }

    return (encodedInput, result);
  }



  function _encodeInputs16(
    Proof memory _args,
    uint8 maxEdges
  ) public view returns (bytes memory, bytes32[] memory) {
    uint256 _chainId = getChainId();
    bytes32[] memory result = new bytes32[](maxEdges + 1);
    bytes memory encodedInput;

    if (maxEdges == 1) {
      uint256[23] memory inputs;
      bytes32[2] memory roots = abi.decode(_args.roots, (bytes32[2]));
      // assign roots
      result[0] = roots[0];
      result[1] = roots[1];
      // assign input
      //encodedInput = abi.encodePacked(inputs);
      inputs[0] = uint256(_args.publicAmount);
      inputs[1] = uint256(_args.extDataHash);
      inputs[2] = uint256(_args.inputNullifiers[0]);
      inputs[3] = uint256(_args.inputNullifiers[1]);
      inputs[4] = uint256(_args.inputNullifiers[2]);
      inputs[5] = uint256(_args.inputNullifiers[3]);
      inputs[6] = uint256(_args.inputNullifiers[4]);
      inputs[7] = uint256(_args.inputNullifiers[5]);
      inputs[8] = uint256(_args.inputNullifiers[6]);
      inputs[9] = uint256(_args.inputNullifiers[7]);
      inputs[10] = uint256(_args.inputNullifiers[8]);
      inputs[11] = uint256(_args.inputNullifiers[9]);
      inputs[12] = uint256(_args.inputNullifiers[10]);
      inputs[13] = uint256(_args.inputNullifiers[11]);
      inputs[14] = uint256(_args.inputNullifiers[12]);
      inputs[15] = uint256(_args.inputNullifiers[13]);
      inputs[16] = uint256(_args.inputNullifiers[14]);
      inputs[17] = uint256(_args.inputNullifiers[15]);
      inputs[18] = uint256(_args.outputCommitments[0]);
      inputs[19] = uint256(_args.outputCommitments[1]);
      inputs[20] = uint256(_chainId);
      inputs[21] = uint256(roots[0]);
      inputs[22] = uint256(roots[1]);
      encodedInput = abi.encodePacked(inputs);
    } else if (maxEdges == 2) {
      uint256[24] memory inputs;
      bytes32[3] memory roots = abi.decode(_args.roots, (bytes32[3]));
      // assign roots
      result[0] = roots[0];
      result[1] = roots[1];
      result[2] = roots[2];
      // assign input
      //encodedInput = abi.encodePacked(inputs);
      inputs[0] = uint256(_args.publicAmount);
      inputs[1] = uint256(_args.extDataHash);
      inputs[2] = uint256(_args.inputNullifiers[0]);
      inputs[3] = uint256(_args.inputNullifiers[1]);
      inputs[4] = uint256(_args.inputNullifiers[2]);
      inputs[5] = uint256(_args.inputNullifiers[3]);
      inputs[6] = uint256(_args.inputNullifiers[4]);
      inputs[7] = uint256(_args.inputNullifiers[5]);
      inputs[8] = uint256(_args.inputNullifiers[6]);
      inputs[9] = uint256(_args.inputNullifiers[7]);
      inputs[10] = uint256(_args.inputNullifiers[8]);
      inputs[11] = uint256(_args.inputNullifiers[9]);
      inputs[12] = uint256(_args.inputNullifiers[10]);
      inputs[13] = uint256(_args.inputNullifiers[11]);
      inputs[14] = uint256(_args.inputNullifiers[12]);
      inputs[15] = uint256(_args.inputNullifiers[13]);
      inputs[16] = uint256(_args.inputNullifiers[14]);
      inputs[17] = uint256(_args.inputNullifiers[15]);
      inputs[18] = uint256(_args.outputCommitments[0]);
      inputs[19] = uint256(_args.outputCommitments[1]);
      inputs[20] = uint256(_chainId);
      inputs[21] = uint256(roots[0]);
      inputs[22] = uint256(roots[1]);
      inputs[23] = uint256(roots[2]);
    } else if (maxEdges == 3) {
      uint256[25] memory inputs;
      bytes32[4] memory roots = abi.decode(_args.roots, (bytes32[4]));
      // assign roots
      result[0] = roots[0];
      result[1] = roots[1];
      result[2] = roots[2];
      result[3] = roots[3];
      // assign input
      //encodedInput = abi.encodePacked(inputs);
      inputs[0] = uint256(_args.publicAmount);
      inputs[1] = uint256(_args.extDataHash);
      inputs[2] = uint256(_args.inputNullifiers[0]);
      inputs[3] = uint256(_args.inputNullifiers[1]);
      inputs[4] = uint256(_args.inputNullifiers[2]);
      inputs[5] = uint256(_args.inputNullifiers[3]);
      inputs[6] = uint256(_args.inputNullifiers[4]);
      inputs[7] = uint256(_args.inputNullifiers[5]);
      inputs[8] = uint256(_args.inputNullifiers[6]);
      inputs[9] = uint256(_args.inputNullifiers[7]);
      inputs[10] = uint256(_args.inputNullifiers[8]);
      inputs[11] = uint256(_args.inputNullifiers[9]);
      inputs[12] = uint256(_args.inputNullifiers[10]);
      inputs[13] = uint256(_args.inputNullifiers[11]);
      inputs[14] = uint256(_args.inputNullifiers[12]);
      inputs[15] = uint256(_args.inputNullifiers[13]);
      inputs[16] = uint256(_args.inputNullifiers[14]);
      inputs[17] = uint256(_args.inputNullifiers[15]);
      inputs[18] = uint256(_args.outputCommitments[0]);
      inputs[19] = uint256(_args.outputCommitments[1]);
      inputs[20] = uint256(_chainId);
      inputs[21] = uint256(roots[0]);
      inputs[22] = uint256(roots[1]);
      inputs[23] = uint256(roots[2]);
      inputs[24] = uint256(roots[3]);
    } else if (maxEdges == 4) {
      uint256[26] memory inputs;
      bytes32[5] memory roots = abi.decode(_args.roots, (bytes32[5]));
      // assign roots
      result[0] = roots[0];
      result[1] = roots[1];
      result[2] = roots[2];
      result[3] = roots[3];
      result[4] = roots[4];
      // assign input
      //encodedInput = abi.encodePacked(inputs);
      inputs[0] = uint256(_args.publicAmount);
      inputs[1] = uint256(_args.extDataHash);
      inputs[2] = uint256(_args.inputNullifiers[0]);
      inputs[3] = uint256(_args.inputNullifiers[1]);
      inputs[4] = uint256(_args.inputNullifiers[2]);
      inputs[5] = uint256(_args.inputNullifiers[3]);
      inputs[6] = uint256(_args.inputNullifiers[4]);
      inputs[7] = uint256(_args.inputNullifiers[5]);
      inputs[8] = uint256(_args.inputNullifiers[6]);
      inputs[9] = uint256(_args.inputNullifiers[7]);
      inputs[10] = uint256(_args.inputNullifiers[8]);
      inputs[11] = uint256(_args.inputNullifiers[9]);
      inputs[12] = uint256(_args.inputNullifiers[10]);
      inputs[13] = uint256(_args.inputNullifiers[11]);
      inputs[14] = uint256(_args.inputNullifiers[12]);
      inputs[15] = uint256(_args.inputNullifiers[13]);
      inputs[16] = uint256(_args.inputNullifiers[14]);
      inputs[17] = uint256(_args.inputNullifiers[15]);
      inputs[18] = uint256(_args.outputCommitments[0]);
      inputs[19] = uint256(_args.outputCommitments[1]);
      inputs[20] = uint256(_chainId);
      inputs[21] = uint256(roots[0]);
      inputs[22] = uint256(roots[1]);
      inputs[23] = uint256(roots[2]);
      inputs[24] = uint256(roots[3]);
      inputs[25] = uint256(roots[4]);
    } else if (maxEdges == 5) {
      uint256[27] memory inputs;
      bytes32[6] memory roots = abi.decode(_args.roots, (bytes32[6]));
      // assign roots
      result[0] = roots[0];
      result[1] = roots[1];
      result[2] = roots[2];
      result[3] = roots[3];
      result[4] = roots[4];
      result[5] = roots[5];
      // assign input
      //encodedInput = abi.encodePacked(inputs);
      inputs[0] = uint256(_args.publicAmount);
      inputs[1] = uint256(_args.extDataHash);
      inputs[2] = uint256(_args.inputNullifiers[0]);
      inputs[3] = uint256(_args.inputNullifiers[1]);
      inputs[4] = uint256(_args.inputNullifiers[2]);
      inputs[5] = uint256(_args.inputNullifiers[3]);
      inputs[6] = uint256(_args.inputNullifiers[4]);
      inputs[7] = uint256(_args.inputNullifiers[5]);
      inputs[8] = uint256(_args.inputNullifiers[6]);
      inputs[9] = uint256(_args.inputNullifiers[7]);
      inputs[10] = uint256(_args.inputNullifiers[8]);
      inputs[11] = uint256(_args.inputNullifiers[9]);
      inputs[12] = uint256(_args.inputNullifiers[10]);
      inputs[13] = uint256(_args.inputNullifiers[11]);
      inputs[14] = uint256(_args.inputNullifiers[12]);
      inputs[15] = uint256(_args.inputNullifiers[13]);
      inputs[16] = uint256(_args.inputNullifiers[14]);
      inputs[17] = uint256(_args.inputNullifiers[15]);
      inputs[18] = uint256(_args.outputCommitments[0]);
      inputs[19] = uint256(_args.outputCommitments[1]);
      inputs[20] = uint256(_chainId);
      inputs[21] = uint256(roots[0]);
      inputs[22] = uint256(roots[1]);
      inputs[23] = uint256(roots[2]);
      inputs[24] = uint256(roots[3]);
      inputs[25] = uint256(roots[4]);
      inputs[26] = uint256(roots[5]);
    } else {
      require(false, "Invalid edges");
    }

      return (encodedInput, result);
  }
}