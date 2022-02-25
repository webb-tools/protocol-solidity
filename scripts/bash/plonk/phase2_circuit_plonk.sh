compile_phase2 () {
    local outdir="$1" circuit="$2" pathToCircuitDir="$3" maxPhase1Constraints="$4"
    mkdir -p $1

    echo "Setting up Phase 2 ceremony for $2"
    echo "Outputting circuit_final.zkey and verifier.sol to $1"

    npx snarkjs plonk setup "$pathToCircuitDir/$circuit.r1cs" ./build/ptau/pot$maxPhase1Constraints_final.ptau "$outdir/circuit_final.zkey"
    npx snarkjs zkey export verificationkey "$outdir/circuit_final.zkey" "$1/verification_key.json"  
    snarkjs zkey export solidityverifier "$1/circuit_final.zkey" $1/verifier.sol
    # npx snarkjs wtns calculate "$3/$2_js/$2.wasm" "$1/input.json" "$1/witness.wtns"
    #npx snarkjs wtns debug "$3/$2_js/$2.wasm" "$1/input.json" "$1/witness.wtns" "$3/$2_js/$2.sym" --trigger --get --set
    echo -e "Done!\n"
}

move_verifiers_and_metadata () {
    local outdir="$1" size="$2"
    cp $outdir/circuit_final.zkey protocol-solidity-fixtures/fixtures/$size/plonk/circuit_final.zkey
    cp $outdir/verifier.sol contracts/verifiers/anchor/"Verifier$size.sol"
    sed -i s/'pragma solidity ^0.6.11;'/'pragma solidity ^0.8.0;'/ contracts/verifiers/bridge/plonk/"Verifier$size.sol"
    sed -i s/"contract Verifier"/"contract Verifier$size"/ contracts/verifiers/Verifier$size.sol
}

move_verifiers_and_metadata_vanchor () {
    local indir="$1" size="$2" anchorType="$3" nIns="$4"
    mkdir -p contracts/verifiers/$anchorType
    cp $indir/verifier.sol contracts/verifiers/$anchorType/"Verifier$size"\_"$nIns.sol"
    sed -i s/'pragma solidity ^0.6.11;'/'pragma solidity ^0.8.0;'/ contracts/verifiers/$anchorType/"Verifier$size"\_"$nIns.sol"
    sed -i s/"contract Verifier {"/"contract Verifier$size\_$nIns {"/ contracts/verifiers/$anchorType/"Verifier$size"\_"$nIns.sol"
}
}
