/**
 * Contoh: Implementation-Approximated Behavior
 * 
 * Spesifikasi ECMA-262 sering menggunakan istilah "approximated" untuk operasi 
 * matematika yang hasilnya mungkin sedikit berbeda antar implementasi (engine) 
 * karena batasan presisi floating-point (IEEE 754).
 */

console.log("--- Implementation-Approximated Performance ---");

// Contoh klasik: Presisi Floating Point
const a = 0.1;
const b = 0.2;
const sum = a + b;

console.log(`0.1 + 0.2 = ${sum}`);
console.log(`Apakah 0.1 + 0.2 === 0.3? ${sum === 0.3}`);

// Mengapa ini penting? 
// Spec membolehkan engine untuk memberikan hasil yang "mendekati" nilai matematis ideal 
// sesuai dengan batasan hardware/representasi memori.

/**
 * Tips Arsitek:
 * Jangan pernah membandingkan nilai floating point secara langsung dalam logika bisnis 
 * yang kritis (seperti uang). Gunakan epsilon atau library BigInt/Decimal.
 */
const epsilon = Number.EPSILON;
console.log(`Menggunakan Epsilon: ${Math.abs(sum - 0.3) < epsilon ? "Sesuai" : "Tidak Sesuai"}`);
