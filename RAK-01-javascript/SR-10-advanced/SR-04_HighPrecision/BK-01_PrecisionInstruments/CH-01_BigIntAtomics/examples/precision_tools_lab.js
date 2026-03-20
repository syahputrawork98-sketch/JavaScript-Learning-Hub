/**
 * LAB: High-Precision Instruments (BigInt & Atomics)
 * Mental Model: "High-Precision Instruments"
 */

console.log("--- Mengetes Timbangan Raksasa (BigInt) ---");

// 1. Melewati Batas Aman Number
const maxSafe = BigInt(Number.MAX_SAFE_INTEGER);
console.log(`Batas Aman Standar: ${maxSafe}`);

const beyondLimit = maxSafe + 100n;
console.log(`Beban Ekstrem (+100): ${beyondLimit}`);


// 2. Operasi Matematika BigInt
const factor = 2n ** 64n; // 64-bit max value
console.log(`Kapasitas 64-bit: ${factor}`);


console.log("\n--- Mengetes Lampu Lalu Lintas Memori (Atomics) ---");

// 3. Menyiapkan Memori Bersama (Shared Memory)
const buffer = new SharedArrayBuffer(1024); // 1KB shared space
const uint8 = new Int32Array(buffer);

// Operasi Atomik: Menambah nilai secara aman
// (Meskipun di sini single-thread, polanya sama untuk multi-worker)
Atomics.store(uint8, 0, 500); // Set index 0 ke 500
Atomics.add(uint8, 0, 50);    // Tambahkan 50 secara atomik

console.log(`Nilai akhir di memori bersama: ${Atomics.load(uint8, 0)}MW`);
