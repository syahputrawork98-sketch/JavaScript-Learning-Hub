/**
 * CH-01: Numeric Types Overview (Spec Lab)
 * 
 * Lab ini menunjukkan dua tipe numerik utama dalam 
 * ECMAScript: Number dan BigInt.
 */

// 1. Number (64-bit Float)
const num = 42;
console.log(`Number: ${num} (${typeof num})`);

// 2. BigInt (Arbitrary Precision)
const big = 42n;
console.log(`BigInt: ${big} (${typeof big})`);

// 3. Batas Aman Number
console.log(`Max Safe Integer: ${Number.MAX_SAFE_INTEGER}`);
const beyondSafe = Number.MAX_SAFE_INTEGER + 1;
const doubleBeyondValue = Number.MAX_SAFE_INTEGER + 2;
console.log(`Beyond Safe Check: ${beyondSafe === doubleBeyondValue}`); // true (Presisi hilang!)

/**
 * MENTAL MODEL:
 * Number adalah "Penggaris dengan pembulatan".
 * BigInt adalah "Timbangan Digital yang tak terbatas".
 */
