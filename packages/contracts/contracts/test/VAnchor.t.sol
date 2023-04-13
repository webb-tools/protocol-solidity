// // SPDX-License-Identifier: UNLICENSED
// pragma solidity >=0.8.19 <0.9.0;

// import { console2 } from "forge-std/console2.sol";
// import { StdCheats } from "forge-std/StdCheats.sol";

// import { Deployer } from "./Deployer.t.sol";
// import { PublicInputs } from "../structs/PublicInputs.sol";


// contract VAnchorTest is Deployer {
//     function setUp() override public virtual {
//         super.setUp();
//     }

//     function calculateProof(
//         int256 _amount
//     ) private returns (bytes memory) {
//         string[] memory inputs = new string[](15);
//         inputs[0] = "ts-node ./generate_transact_proof.ts";
//         inputs[1] = "--amount"
//         inputs[2] = uint256(_amount).toString();
//         bytes memory res = vm.ffi(inputs);
//         return res;
//     }

//     function encrypt(
//         uint256 _chain_id,
//         int256 _amount,
//         uint256 _blinding
//     ) private returns (Encryptions memory) {
//         string[] memory inputs = new string[](15);
//         inputs[0] = "ts-node ./generate_encryptions.ts";
//         inputs[1] = "--chain-id"
//         inputs[2] = uint256(chain_id).toString();
//         inputs[3] = "--amount"
//         inputs[4] = uint256(_amount).toString();
//         inputs[5] = "--blinding"
//         inputs[6] = uint256(_blinding).toString();
//         bytes memory res = vm.ffi(inputs);
//         return res;
//     }

//     // {
//     //     chainID, // destination chain identifier
//     //     amount,
//     //     pubkey,
//     //     blinding, // random number
//     // }
//     function test_deposit(uint256 blinding, uint256 privkey) public {
//         // Making a deposit, so no recipient or relayer are actually needed.
//         // The deposit will be of 1,000,000 wei. There is no fee or refund
//         // since this is a deposit.
//         address recipient = vm.addr(1);
//         address relayer = vm.addr(1);
//         uint256 extAmount = 1_000_000;        
//         uint256 fee = 0;
//         uint256 refund = 0;
//         uint256 publicAmount = extAmount - fee - refund;

//         // Generate the output commitment preimage data
//         uint256 blinding = ;
//         uint256 pubkey = PoseidonHasher.hash([])

//         CommonExtData extData = CommonExtData {
//             recipient,
//             extAmount,
//             relayer,
//             fee,
//             refund,
//             token
//         };

//         Encryptions encryptions = Encryptions {
//             encryptedOutput1,
// 	        encryptedOutput2,
//         };

//         bytes roots = abi.encodePacked(
//             vanchor.getLastRoot(),
//             vanchor.getNeighborRoots()
//         );
//         bytes extensionRoots = bytes(0x0);
//         bytes32 extDataHash = vanchor._genExtDataHash(, extData, encryptions);
//         // Dummy input nullifiers since we're depositing
//         uint256[2] inputNullifiers = [uint256(0), uint256(0)];
//         uint256[2] outputCommitments = [uint256(0), uint256(0)];
//         PublicInputs pubs = {
//             roots,
//             extensionRoots,
//             inputNullifiers,
//             outputCommitments,
//             publicAmount,
//             extDataHash
//         };

//         bytes proof = calculateProof();
//         bytes auxPublicInputs
//         vanchor.transact(
//             bytes memory _proof,
//             bytes memory _auxPublicInputs,
//             CommonExtData memory _externalData,
//             PublicInputs memory _publicInputs,
//             Encryptions memory _encryptions
//         )
//     }
// }
