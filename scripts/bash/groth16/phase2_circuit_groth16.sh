compile_phase2 () {
    local outdir="$1" circuit="$2" pathToCircuitDir="$3"
    echo $outdir;
    mkdir -p $outdir;

    echo "Setting up Phase 2 ceremony for $circuit"
    echo "Outputting circuit_final.zkey and verifier.sol to $outdir"

    npx snarkjs groth16 setup "$pathToCircuitDir/$circuit.r1cs" ./protocol-solidity-fixtures/ptau/powersOfTau28_hez_final_22.ptau "$outdir/circuit_0000.zkey"
    echo "test" | npx snarkjs zkey contribute "$outdir/circuit_0000.zkey" "$outdir/circuit_0001.zkey" --name"1st Contributor name" -v
    npx snarkjs zkey verify "$pathToCircuitDir/$circuit.r1cs" ./protocol-solidity-fixtures/ptau/powersOfTau28_hez_final_22.ptau "$outdir/circuit_0001.zkey"
    npx snarkjs zkey beacon "$outdir/circuit_0001.zkey" "$outdir/circuit_final.zkey" 0102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f 10 -n="Final Beacon phase2"
    npx snarkjs zkey verify "$pathToCircuitDir/$circuit.r1cs" ./protocol-solidity-fixtures/ptau/powersOfTau28_hez_final_22.ptau "$outdir/circuit_final.zkey"
    npx snarkjs zkey export verificationkey "$outdir/circuit_final.zkey" "$outdir/verification_key.json"  

    npx snarkjs zkey export solidityverifier "$outdir/circuit_final.zkey" $outdir/verifier.sol
    echo "Done!\n"
}

move_verifiers_and_metadata () {
    local outdir="$1" size="$2" anchorType="$3"
    if [[ ! -f contracts/verifiers/$anchorType/ ]]; then
        mkdir -p contracts/verifiers/$anchorType
    fi
    cp $outdir/circuit_final.zkey protocol-solidity-fixtures/fixtures/$anchorType/$size/circuit_final.zkey
    cp $outdir/verifier.sol contracts/verifiers/$anchorType/"Verifier$size.sol"
    # sed -i 's/pragma solidity ^0.8.0;'/'pragma solidity ^0.8.0;'/ contracts/verifiers/$anchorType/"Verifier$size.sol"
    # sed -i "s/contract Verifier {"/"contract Verifier$size {"/ contracts/verifiers/$anchorType/"Verifier$size.sol"
}

move_verifiers_and_metadata_vanchor () {
    local indir="$1" size="$2" anchorType="$3" nIns="$4"
    cp $indir/circuit_final.zkey protocol-solidity-fixtures/fixtures/$anchorType/$size/circuit_final.zkey

    mkdir -p contracts/verifiers/$anchorType
    cp $indir/verifier.sol contracts/verifiers/$anchorType/Verifier"$size"_"$nIns".sol
    # sed -i 's/pragma solidity ^0.6.11/pragma solidity ^0.8.0/' contracts/verifiers/Verifier"$size".sol
    # sed -i "s/contract Verifier {/contract Verifier$size {/" contracts/verifiers/Verifier"$size".sol
}

move_verifiers_and_metadata_identity_vanchor () {
    local indir="$1" size="$2" anchorType="$3" nIns="$4"
    cp $indir/circuit_final.zkey protocol-solidity-fixtures/fixtures/$anchorType/$size/circuit_final.zkey

    mkdir -p contracts/verifiers/$anchorType
    cp $indir/verifier.sol contracts/verifiers/$anchorType/VerifierID"$size"_"$nIns".sol
    sed -i 's/pragma solidity ^0.6.11/pragma solidity ^0.8.0/' contracts/verifiers/$anchorType/VerifierID"$size"_"$nIns".sol
    sed -i "s/contract Verifier {/contract VerifierID${size}_${nIns} {/" contracts/verifiers/$anchorType/VerifierID"$size"_"$nIns".sol
}
