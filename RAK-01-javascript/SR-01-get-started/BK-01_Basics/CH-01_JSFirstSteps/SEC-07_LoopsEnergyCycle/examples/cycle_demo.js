/**
 * cycle_demo.js
 * 
 * Simulasi pengisian daya baterai massal dan 
 * pengecekan kesehatan sirkuit menggunakan loops.
 */

// 1. Pengisian Terencana (for loop)
console.log("--- Memulai Siklus Pengisian Baterai Utama ---");
const totalBatteries = 5;

for (let id = 1; id <= totalBatteries; id++) {
    console.log(`[ID: ${id}] Sedang mengisi... [====    ] 50%`);
}
console.log("Siklus for Selesai.\n");

// 2. Monitoring Daya (while loop)
let powerLevel = 100;
console.log("--- Monitoring Konsumsi Daya Sektor ---");

while (powerLevel > 20) {
    console.log(`Status: OK (${powerLevel}kW) | Mengalirkan Energi...`);
    powerLevel -= 25; // Konsumsi daya
}
console.log(`Peringatan: Daya Rendah (${powerLevel}kW). Menghentikan aliran non-esensial.\n`);

// 3. Pengecekan dengan Interupsi (break/continue)
console.log("--- Pengecekan Kesehatan 10 Sel Panel Surya ---");
for (let cell = 1; cell <= 10; cell++) {
    if (cell === 3) {
        console.log(`[Sel ${cell}] RUSAK! Melewati sel ini... (continue)`);
        continue;
    }
    
    if (cell === 8) {
        console.log(`[Sel ${cell}] KORSLETIING KRITIS! Menghentikan semua pengecekan... (break)`);
        break;
    }

    console.log(`[Sel ${cell}] Berfungsi Normal.`);
}
