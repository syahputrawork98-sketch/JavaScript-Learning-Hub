/**
 * LAB: Mathematical Values and Clamping Logic
 * 
 * Eksperimen ini membedah bagaimana Hub melakukan 'clamping' 
 * (pembatasan) nilai ke dalam tipe data memori (Uint8, Int32).
 */

// 1. Uint8 Wrapping (Modulo 256)
console.log("--- 1. Uint8 Wrapping ---");
const buffer = new Uint8Array(1);
buffer[0] = 255;
console.log(`Value: ${buffer[0]}`);
buffer[0] = 256;
console.log(`Value (256): ${buffer[0]}`); // 0 (256 % 256)
buffer[0] = 257;
console.log(`Value (257): ${buffer[0]}`); // 1 (257 % 256)

// 2. Int32 Truncation
console.log("\n--- 2. Int32 Bitwise Clamping ---");
// Operator bitwise di JS memaksa nilai menjadi Int32
const clampToInt32 = (val) => val | 0;

console.log(`10.9 | 0: ${clampToInt32(10.9)}`); // 10 (Truncated)
console.log(`-10.9 | 0: ${clampToInt32(-10.9)}`); // -10 (Truncated)
console.log(`2^31 | 0: ${Math.pow(2, 31) | 0}`); // -2147483648 (Overflow to Signed)

// 3. Clamped Array Logic
console.log("\n--- 3. Uint8ClampedArray Differentiation ---");
const clamped = new Uint8ClampedArray(1);
clamped[0] = 300;
console.log(`Uint8Array(300): ${buffer[0] = 300, buffer[0]}`); // 44 (Wrapping)
console.log(`Uint8ClampedArray(300): ${clamped[0]}`); // 255 (Clamped to Max)
