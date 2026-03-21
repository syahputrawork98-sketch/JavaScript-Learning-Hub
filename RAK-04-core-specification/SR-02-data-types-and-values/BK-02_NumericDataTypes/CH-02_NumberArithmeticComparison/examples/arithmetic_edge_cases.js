/**
 * LAB: Arithmetic Edge Cases and Comparison Logic
 * 
 * Eksperimen ini membedah perilaku operasi aritmatika dan perbandingan 
 * pada nilai khusus sesuai Clause 6.1.6.1.1 - 6.1.6.1.20.
 */

// 1. NaN Contamination
console.log("--- 1. NaN Contamination ---");
console.log(`10 + NaN: ${10 + NaN}`);
console.log(`NaN * 5: ${NaN * 5}`);
console.log(`NaN / 0: ${NaN / 0}`);

// 2. Infinity Scenarios
console.log("\n--- 2. Infinity Arithmetic ---");
console.log(`Infinity + 1: ${Infinity + 1}`);
console.log(`Infinity - Infinity: ${Infinity - Infinity}`); // NaN
console.log(`Infinity / Infinity: ${Infinity / Infinity}`); // NaN
console.log(`Infinity * 0: ${Infinity * 0}`); // NaN

// 3. Relational Comparison with NaN
console.log("\n--- 3. Relational Comparison with NaN ---");
console.log(`10 < NaN: ${10 < NaN}`); // false
console.log(`10 > NaN: ${10 > NaN}`); // false
console.log(`NaN == NaN: ${NaN == NaN}`); // false

// 4. Rounding Ties (To Even)
console.log("\n--- 4. ToPrecision Rounding ---");
// Catatan: Pembulatan internal bit sulit dilihat langsung di JS, 
// tapi kita bisa melihat efek pembulatan pada toFixed/toPrecision.
console.log(`(1.005).toFixed(2): ${(1.005).toFixed(2)}`); // "1.00" (Round to even/down due to precision)
console.log(`(1.015).toFixed(2): ${(1.015).toFixed(2)}`); // "1.02"
