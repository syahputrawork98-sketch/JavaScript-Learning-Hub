/**
 * LAB: The Engineering Lab (Math Utility)
 * --------------------------------------
 * Dalam lab ini, kita akan mencoba berbagai alat statis dari objek Math
 * untuk melakukan perhitungan teknis di Hub Energi.
 */

// --- BAGIAN 1: KONSTANTA ALAM (Mathematical Constants) ---
console.log("--- Bagian 1: Konstanta Alam ---");
console.log(`Nilai PI: ${Math.PI}`);
console.log(`Nilai Euler (E): ${Math.E}`);

// --- BAGIAN 2: ALAT PEMBULATAN (Rounding Tools) ---
console.log("\n--- Bagian 2: Alat Pembulatan ---");
const flux = 42.756;

console.log(`Nilai Asli: ${flux}`);
console.log(`Math.round (Terdekat): ${Math.round(flux)}`); // 43
console.log(`Math.ceil (Atas): ${Math.ceil(flux)}`);      // 43
console.log(`Math.floor (Bawah): ${Math.floor(flux)}`);    // 42
console.log(`Math.trunc (Potong): ${Math.trunc(flux)}`);   // 42

// --- BAGIAN 3: GENERATOR ACAK (The Randomizer) ---
console.log("\n--- Bagian 3: Simulasi Fluktuasi Acak ---");

// Fungsi pembantu untuk angka acak dalam rentang tertentu
function generateRandomLoad(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Simulasi Beban Grid (1-100%):");
for (let i = 1; i <= 3; i++) {
    console.log(`> Load Perangkat ${i}: ${generateRandomLoad(1, 100)}%`);
}

// --- BAGIAN 4: EKSTREM & EKSPONEN ---
console.log("\n--- Bagian 4: Ekstrem & Eksponen ---");

const loads = [500, 1200, 800, 2500, 300];
console.log(`Beban Tertinggi: ${Math.max(...loads)}`);
console.log(`Beban Terendah: ${Math.min(...loads)}`);

console.log(`Pangkat 2^10: ${Math.pow(2, 10)}`);
console.log(`Akar Kuadrat 144: ${Math.sqrt(144)}`);
