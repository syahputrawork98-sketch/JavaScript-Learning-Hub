/**
 * LAB: Numerical Power (Number & BigInt)
 * --------------------------------------
 * Dalam lab ini, kita akan melihat perbedaan presisi antara
 * Number standar dan BigInt untuk data raksasa.
 */

// --- BAGIAN 1: MASALAH PRESISI (The Float Trap) ---
console.log("--- Bagian 1: Jebakan Floating Point ---");

const mathCheck = 0.1 + 0.2;
console.log(`0.1 + 0.2 = ${mathCheck}`); 
console.log(`Apakah 0.1 + 0.2 === 0.3?`, mathCheck === 0.3); // false!

// Solusi Arsitek: Gunakan pembulatan atau scaling
const fixedResult = (0.1 * 10 + 0.2 * 10) / 10;
console.log(`Hasil dengan Scaling: ${fixedResult}`);

// --- BAGIAN 2: BATAS AMAN (Safe Integer) ---
console.log("\n--- Bagian 2: Batas Kapasitas Number ---");

const maxSafe = Number.MAX_SAFE_INTEGER;
console.log(`Max Safe Integer: ${maxSafe}`);
console.log(`Max + 1: ${maxSafe + 1}`);
console.log(`Max + 2: ${maxSafe + 2}`); // Terjadi kehilangan presisi!

// --- BAGIAN 3: BIGINT (The Heavy Duty) ---
console.log("\n--- Bagian 3: Solusi BigInt ---");

const megaID = 9007199254740991n; // Akhiran 'n' menandakan BigInt
console.log(`Mega ID + 1n: ${megaID + 1n}`);
console.log(`Mega ID + 2n: ${megaID + 2n}`); // Akurasi terjaga!

// --- BAGIAN 4: VALIDASI ARUS (Numerical Methods) ---
console.log("\n--- Bagian 4: Validasi Arus Numerik ---");

const inputA = "5000";
const inputB = "Error-404";

console.log(`Parse Input A: ${Number.parseInt(inputA)}`);
console.log(`Parse Input B: ${Number.parseInt(inputB)}`); // NaN

if (Number.isNaN(Number.parseInt(inputB))) {
    console.log("Peringatan: Arus Input B tidak valid (NaN)!");
}

// --- BAGIAN 5: KONVERSI ---
console.log("\n--- Bagian 5: Konversi Antar Tipe ---");
const largeNum = BigInt(123456789); // Konversi dari Number ke BigInt
const backToNum = Number(100n);      // Konversi dari BigInt ke Number (hati-hati overflow)
console.log(`BigInt Object: ${largeNum}`);
console.log(`Back to Number: ${backToNum}`);
