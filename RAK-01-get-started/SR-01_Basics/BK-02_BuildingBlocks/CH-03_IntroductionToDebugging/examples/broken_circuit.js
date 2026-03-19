/**
 * broken_circuit.js
 * 
 * LATIHAN: Temukan bug di bawah ini!
 * Sirkuit ini seharusnya menghitung total daya dari 3 baterai,
 * tapi hasilnya selalu salah atau error.
 */

const batteryA = 100;
const batteryB = "50"; // HINT: Cek tipe datanya!
const batteryC = 200;

function calculateTotalEnergy(a, b, c) {
    console.log("--- Memulai Kalkulasi ---");
    console.log("Input A:", a);
    console.log("Input B:", b);
    console.log("Input C:", c);

    // BUG 1: Penggabungan string vs Penjumlahan angka
    const total = a + b + c; 
    
    return total;
}

const result = calculateTotalEnergy(batteryA, batteryB, batteryC);

// Hasil yang diharapkan: 350
// Hasil saat ini: 10050200 (Kenapa?)
console.log("\nTOTAL ENERGI TERDETEKSI:", result);

if (result === 350) {
    console.log(">>> STATUS: SIRKUIT SEHAT!");
} else {
    console.log(">>> STATUS: KORSLETIING! (Hasil tidak sesuai)");
    // TIPS: Gunakan `typeof` di console.log untuk memeriksa batteryB
}

/**
 * TUGAS:
 * 1. Jalankan file ini menggunakan `node broken_circuit.js`.
 * 2. Lihat outputnya.
 * 3. Perbaiki batteryB agar menjadi angka, atau gunakan Number() di dalam fungsi.
 */
