/**
 * PILLAR 2: Relational Comparison Logic
 * Audit algoritma perbandingan relasional (Clause 7.2.13).
 */

console.log("--- Relational Audit ---");
console.log(`10 < 20: ${10 < 20}`);
console.log(`10 < "20": ${10 < "20"}`); // Coercion to Number
console.log(`10 < NaN: ${10 < NaN}`);   // Undefined in spec -> false
console.log(`NaN < NaN: ${NaN < NaN}`); // false

console.log("\n--- String Comparison (Code Unit) ---");
console.log(`'2' < '10': ${'2' < '10'}`); // false! (2 > 1 in Unicode)
