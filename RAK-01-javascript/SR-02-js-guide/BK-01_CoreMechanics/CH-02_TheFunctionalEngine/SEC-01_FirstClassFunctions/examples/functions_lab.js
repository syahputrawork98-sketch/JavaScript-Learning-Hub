/**
 * LAB: First-class Functions (Energy Units)
 * Mental Model: "Portable Power Units"
 */

// 1. Fungsi disimpan dalam Variabel
const thermalTransformer = function(input) {
    return input * 0.8;
};

// 2. Fungsi dikirim sebagai Argumen
function PowerStation(input, transformer) {
    const output = transformer(input);
    console.log(`Input: ${input}kW -> Output: ${output}kW`);
}

console.log("--- Pengiriman Unit Energi ---");
PowerStation(1000, thermalTransformer);

// 3. Fungsi dikembalikan sebagai Return Value
function createTurboModule(boostFactor) {
    return function(energy) {
        return energy * boostFactor;
    };
}

const speedBoost = createTurboModule(1.5);
console.log("Hasil Turbo Boost:", speedBoost(100));
