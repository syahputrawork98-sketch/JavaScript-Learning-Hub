/**
 * LAB: Numeric Operations (The Base Machinery)
 */

console.log("--- Mengetes Operasi Numeric Dasar ---");

// 1. Unary Inversion
const p = 10;
console.log(`Original: ${p}, Inverted: ${-p}`);

// 2. Multiplier & Exponential
console.log(`2^10 Calculation: ${2 ** 10}`);

// 3. Splitter & Precision
const a = 1;
const b = 3;
console.log(`1 / 3 Result: ${a / b}`);
console.log(`Rounding Check: ${(a / b) * 3 === 1}`); // true (Kadang Hub cukup pintar membulatkan)

// 4. Remainder sign test
console.log(`-7 % 3 = ${-7 % 3}`); // -1 (JavaScript maintains the dividend sign)
