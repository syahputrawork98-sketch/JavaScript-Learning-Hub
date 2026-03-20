/**
 * logic_demo.js
 * 
 * Simulasi sistem manajemen energi otomatis menggunakan
 * Comparison dan Logical Operators.
 */

const batteryLevel = 15;      // Persentase baterai
const isSunlightAvailable = false; 
const isEmergencyMode = false;

console.log("--- Memindai Status Sistem Hub ---");
console.log(`Baterai: ${batteryLevel}%`);
console.log(`Cahaya Matahari: ${isSunlightAvailable ? "Ada" : "Tidak Ada"}`);

// 1. Logika Penghematan Daya (Logic Gates)
// Syarat Mode Hemat: Baterai < 20% DAN Tidak ada sinar matahari
const shouldActivateSavingMode = (batteryLevel < 20) && !isSunlightAvailable;

// 2. Logika Aktivasi Generator Cadangan
// Syarat Generator: Mode Hemat aktif ATAU sedang Mode Darurat
const shouldStartGenerator = shouldActivateSavingMode || isEmergencyMode;

console.log("\n--- Hasil Analisis Logika ---");
console.log(`Aktifkan Mode Hemat: ${shouldActivateSavingMode}`);
console.log(`Mulai Generator Cadangan: ${shouldStartGenerator}`);

// 3. Penggunaan Ternary Operator (Quick Switch)
const systemIndicator = shouldStartGenerator ? "🔴 WARNING: GENERATOR RUNNING" : "🟢 SYSTEM STABLE";
console.log(`\nIndikator: ${systemIndicator}`);

// 4. Strict Comparison Check
const requiredVoltage = "220";
const currentVoltage = 220;

console.log("\n--- Pemeriksaan Voltase (Strict Check) ---");
if (currentVoltage === requiredVoltage) {
    console.log("Voltase Identik (Tipe & Nilai)");
} else {
    console.log("Peringatan: Voltase mungkin sama nilainya tapi tipe data berbeda!");
}
