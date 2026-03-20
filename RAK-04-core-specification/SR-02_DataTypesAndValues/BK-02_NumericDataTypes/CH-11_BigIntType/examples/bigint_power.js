/**
 * CH-11: BigInt Type (Spec Lab)
 * 
 * Lab ini menunjukkan kekuatan presisi mutlak BigInt 
 * pada angka yang sangat besar.
 */

// 1. Melewati batas MAX_SAFE_INTEGER
const max = BigInt(Number.MAX_SAFE_INTEGER);
const result = max + 2n;

console.log(`Max Safe (Number): ${Number.MAX_SAFE_INTEGER}`);
console.log(`Max + 2 (BigInt): ${result}`);

// 2. Bukti Presisi Mutlak
console.log(`Is result accurate? ${result % 2n === 1n ? "Yes (Odd)" : "No"}`);

/**
 * MENTAL MODEL:
 * BigInt adalah "Tali Jemuran yang Tak Terbatas". 
 * Anda bisa menambah panjangnya sebanyak apa pun 
 * tanpa takut jemuran itu melar (kehilangan presisi).
 */
