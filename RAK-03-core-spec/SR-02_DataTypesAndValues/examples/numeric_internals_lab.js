/**
 * LAB: Numeric Internals (The Variable vs Industrial Load)
 */

console.log("--- Mengetes Batas Presisi (The 0.1 + 0.2 Challenge) ---");

// 1. Floating Point Challenge
const val = 0.1 + 0.2;
console.log(`0.1 + 0.2 = ${val}`); // 0.30000000000000004
console.log(`Apakah tepat 0.3? ${val === 0.3}`); // false


// 2. Safe Integer Threshold
console.log("\n--- Mengetes Kapasitas Maksimum Number ---");
const max = Number.MAX_SAFE_INTEGER;
console.log(`Max Safe Integer: ${max.toLocaleString()}`);

// Di luar batas, presisi hilang
console.log(`Max + 1: ${max + 1}`);
console.log(`Max + 2: ${max + 2}`);
console.log(`Apakah Max+1 === Max+2? ${max + 1 === max + 2}`); // true (ERROR!)


// 3. BigInt Rescue
console.log("\n--- Mengetes BigInt (Industrial Load) ---");
const bigMax = BigInt(max);
console.log(`BigInt Max + 1n: ${bigMax + 1n}`);
console.log(`BigInt Max + 2n: ${bigMax + 2n}`);
console.log(`Apakah Big Max+1 === Big Max+2? ${bigMax + 1n === bigMax + 2n}`); // false (BENAR)


// 4. Special Values
console.log("\n--- Mengetes Sinyal Khusus ---");
console.log(`1 / 0      = ${1 / 0}`);        // Infinity
console.log(`"TEXT" * 5 = ${"TEXT" * 5}`);  // NaN
console.log(`typeof NaN = ${typeof NaN}`);  // "number" (A historic irony!)
