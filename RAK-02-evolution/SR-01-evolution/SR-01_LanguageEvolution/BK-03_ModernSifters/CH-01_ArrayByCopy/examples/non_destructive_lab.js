/**
 * LAB: Change Array by Copy (ES2023)
 */

const originalLoad = [100, 500, 200, 800];

console.log("--- Mengetes Saringan Data Aman ---");

// 1. toSorted (Tanpa merusak mutasi)
const sortedLoad = originalLoad.toSorted((a, b) => a - b);
console.log(`Original Tetap: [${originalLoad}]`);
console.log(`Sorted Copy:   [${sortedLoad}]`);

// 2. with (Update satu titik secara imutabel)
const upgradedLoad = originalLoad.with(1, 999); // Ubah 500 jadi 999
console.log(`Update Copy:   [${upgradedLoad}]`);


// 3. Find from Last (ES2023 Bonus)
const criticalSignals = [10, 85, 95, 40, 100];
const lastCritical = criticalSignals.findLast(s => s > 90);
const lastCriticalIdx = criticalSignals.findLastIndex(s => s > 90);

console.log(`\nSinyal Kritis Terakhir: ${lastCritical} (Posisi: ${lastCriticalIdx})`);
