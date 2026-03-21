/**
 * PILLAR 1: IEEE 754 Bit Distribution
 * Membedah struktur 64-bit Number (Sign, Exponent, Mantissa).
 */

const buffer = new ArrayBuffer(8);
const floatView = new Float64Array(buffer);
const uintView = new BigUint64Array(buffer);

function inspectBits(n) {
    floatView[0] = n;
    console.log(`Number: ${n}`);
    console.log(`Hex: 0x${uintView[0].toString(16).padStart(16, '0')}`);
    console.log(`Binary: ${uintView[0].toString(2).padStart(64, '0')}`);
}

console.log("--- 1. Simple Number ---");
inspectBits(1);

console.log("\n--- 2. Specialized Values ---");
inspectBits(NaN);
inspectBits(Infinity);
inspectBits(-0);
