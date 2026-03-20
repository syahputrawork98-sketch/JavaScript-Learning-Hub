/**
 * LAB: Loops (The Energy Cycles)
 * Mental Model: "The Energy Cycle"
 */

// 1. For Loop: Pemindaian Sensor Berurutan
console.log("--- Memulai Pemindaian Massal (For Loop) ---");
for (let id = 101; id <= 105; id++) {
    console.log(`Sensor SEC-ID-${id}: [SCANNING...] -> Status: CLEAR`);
}

// 2. While Loop: Pengurasan Baterai Dinamis
console.log("\n--- Discharge Sequence (While Loop) ---");
let batteryCharge = 40;

while (batteryCharge >= 10) {
    console.log(`Mengalirkan Daya. Muatan saat ini: ${batteryCharge}MW`);
    batteryCharge -= 10; // Arus keluar
}
console.log("System: Baterai mencapai ambang batas minimum.");

// 3. Do...While: Verifikasi Sistem Minimal Sekali
console.log("\n--- Forced Self-Test (Do...While) ---");
let systemError = false;

do {
    console.log("Menjalankan prosedur diagnostik...");
    // Simulasi pengecekan tunggal
    systemError = false; 
} while (systemError);

console.log("Diagnostik Selesai.");
