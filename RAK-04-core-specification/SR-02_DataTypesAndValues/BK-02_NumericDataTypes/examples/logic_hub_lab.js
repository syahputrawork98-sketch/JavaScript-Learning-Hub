/**
 * LAB: Numeric Bitwise & Comparison (The Logic Hub)
 */

console.log("--- Mengetes Bitwise Shunting ---");

// 1. Unsigned Shift (The Absolute Positive)
const negVal = -1;
console.log(`-1 Signed   : ${negVal >> 0}`);
console.log(`-1 Unsigned : ${negVal >>> 0}`); // 4294967295


// 2. Logic Gates (AND/OR/XOR)
console.log("\n--- Mengetes Gerbang Logika ---");
const READ    = 0b001;
const WRITE   = 0b010;
const EXECUTE = 0b100;

let myPermission = READ | WRITE; // Merging signals
console.log(`Dapat Baca? ${(myPermission & READ) !== 0}`);
console.log(`Dapat Eksekusi? ${(myPermission & EXECUTE) !== 0}`);


// 3. Comparison Pitfalls
console.log("\n--- Mengetes Pengukur Besaran (Edge Cases) ---");
const values = [NaN, Infinity, -Infinity, 0, -0];

values.forEach(v => {
    console.log(`value: ${String(v).padEnd(10)} | safe: ${Number.isFinite(v)}`);
});
