/**
 * CH-11: The BigInt Type & Objects
 * 
 * Demonstrasi presisi arbitrer dan aturan main BigInt.
 */

// 1. Melewati Batas Aman Number
const maxSafe = Number.MAX_SAFE_INTEGER;
console.log("Max Safe Integer:", maxSafe);
console.log("Max + 1 (Number):", maxSafe + 1);
console.log("Max + 2 (Number - FAILED):", maxSafe + 2); // Hasilnya sama dengan Max+1!

// Gunakan BigInt (akhiran 'n')
const bigSafe = BigInt(maxSafe);
console.log("Max + 1 (BigInt):", bigSafe + 1n);
console.log("Max + 2 (BigInt - SUCCESS):", bigSafe + 2n); // Akurat!

// 2. Pembagian Integer (No Decimals)
console.log("10 / 3 (Number):", 10 / 3);
console.log("10n / 3n (BigInt):", 10n / 3n); // Hasilnya 3n (Desimal dibuang)

// 3. Larangan Pencampuran Tipe
try {
    const result = 10n + 5; // Mencampur BigInt dan Number
} catch (e) {
    console.log("Error Expected:", e.message); // Cannot mix BigInt and other types
}

// Cara benar: Konversi Eksplisit
console.log("Mixed result (explicit):", 10n + BigInt(5));

// 4. Architect Case: Crypto/ID Simulation
// Mensimulasikan ID 64-bit yang biasa digunakan di database skala besar
const twitterId = 1800000000000000000n;
const nextId = twitterId + 1n;
console.log("Original ID:", twitterId);
console.log("Next ID:", nextId);

console.log("BigInt Concept Verified: Presisi mutlak untuk angka integer raksasa.");
