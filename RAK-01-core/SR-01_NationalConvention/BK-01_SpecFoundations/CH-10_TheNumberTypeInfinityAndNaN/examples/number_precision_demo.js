/**
 * CH-10: The Number Type, Infinity & NaN
 * 
 * Demonstrasi batas presisi dan nilai-nilai spesial Number.
 */

// 1. Masalah Presisi Floating Point
const a = 0.1;
const b = 0.2;
const result = a + b;

console.log("0.1 + 0.2 =", result);
console.log("Apakah 0.1 + 0.2 === 0.3?", result === 0.3); // false

// Cara Arsitek: Gunakan EPSILON
const isAlmostEqual = Math.abs(result - 0.3) < Number.EPSILON;
console.log("Apakah 0.1 + 0.2 mendekati 0.3?", isAlmostEqual); // true

// 2. Infinity (Melampaui Batas)
console.log("1 / 0 =", 1 / 0); // Infinity
console.log("Infinity + 1 =", Infinity + 1); // Tetap Infinity

// 3. NaN (The 'Non-Number' Number)
console.log("0 / 0 =", 0 / 0); // NaN
console.log("Tipe dari NaN:", typeof NaN); // "number" (Menjebak!)

// Cara cek NaN yang benar:
console.log("Apakah NaN === NaN?", NaN === NaN); // false (Satu-satunya nilai yang tidak sama dengan dirinya sendiri)
console.log("Cek via Numbers.isNaN:", Number.isNaN(NaN)); // true

// 4. Safe Integer Range
// Di atas angka ini, presisi mulai hilang.
console.log("Max Safe Integer:", Number.MAX_SAFE_INTEGER);
console.log("Max + 1:", Number.MAX_SAFE_INTEGER + 1);
console.log("Max + 2 (Sama dengan Max+1!):", Number.MAX_SAFE_INTEGER + 2);

console.log("Number Concept Verified: Gunakan Number untuk kalkulasi umum, BigInt untuk angka besar.");
