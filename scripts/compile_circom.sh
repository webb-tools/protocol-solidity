mkdir -p artifacts
mkdir -p artifacts/circuits
mkdir -p artifacts/circuits/tornado
mkdir -p artifacts/circuits/bridge

# echo "Compiling Tornado style withdrawal circuit..."
# circom circuits/withdraw.circom \
#   --r1cs artifacts/circuits/tornado/withdraw.r1cs \
#   --wasm artifacts/circuits/tornado/withdraw.wasm \
#   --sym artifacts/circuits/tornado/withdraw.sym
# echo "Done!\n\n"

echo "Compiling Webb style MiMC bridge withdrawal circuit..."
circom circuits/test/mimc_bridge_2.circom \
  --r1cs artifacts/circuits/bridge/mimc_bridge_2.r1cs \
  --wasm artifacts/circuits/bridge/mimc_bridge_2.wasm \
  --sym artifacts/circuits/bridge/mimc_bridge_2.sym
echo "Done!"

echo "Compiling Webb style Poseidon bridge withdrawal circuit..."
circom circuits/test/poseidon_bridge_2.circom \
  --r1cs artifacts/circuits/bridge/poseidon_bridge_2.r1cs \
  --wasm artifacts/circuits/bridge/poseidon_bridge_2.wasm \
  --sym artifacts/circuits/bridge/poseidon_bridge_2.sym
echo "Done!"