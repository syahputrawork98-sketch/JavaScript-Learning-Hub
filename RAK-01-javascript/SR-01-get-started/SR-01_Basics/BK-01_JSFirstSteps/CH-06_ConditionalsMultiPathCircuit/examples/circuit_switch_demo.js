/**
 * circuit_switch_demo.js
 * 
 * Simulasi pengalihan energi secara dinamis menggunakan
 * if-else dan switch case.
 */

const availableEnergy = 45; // kW
const sectorRequest = "RESIDENTIAL"; // INDUSTRIAL, RESIDENTIAL, HOSPITAL

console.log("--- Menjalankan Algoritma Distribusi Sektor ---");
console.log(`Energi Tersedia: ${availableEnergy}kW`);
console.log(`Permintaan dari Sektor: ${sectorRequest}`);

// 1. Logika Prioritas (if...else)
console.log("\n[Langkah 1: Verifikasi Kapasitas]");
if (availableEnergy >= 100) {
    console.log(">>> Kapasitas Melimpah: Semua Sektor Diaktifkan.");
} else if (availableEnergy >= 30) {
    console.log(">>> Kapasitas Terbatas: Hanya Sektor Prioritas yang Diaktifkan.");
} else {
    console.log(">>> KRITIS: Beralih ke Sistem Penunjang Hidup Saja.");
}

// 2. Pengalihan Jalur Spesifik (switch case)
console.log("\n[Langkah 2: Mengalihkan Sirkuit]");
switch (sectorRequest) {
    case "HOSPITAL":
        console.log("ALUR: Jalur Medis - Prioritas Tertinggi (Locked).");
        break;
    case "INDUSTRIAL":
        if (availableEnergy > 80) {
            console.log("ALUR: Jalur Industri - Aktif.");
        } else {
            console.log("ALUR: Jalur Industri - Penolakan (Energi Tidak Cukup).");
        }
        break;
    case "RESIDENTIAL":
        console.log("ALUR: Jalur Residensial - Aktif dengan Pembatasan Daya.");
        break;
    default:
        console.log("ALUR: Jalur Tidak Dikenal.");
}

console.log("\n--- Distribusi Selesai ---");
