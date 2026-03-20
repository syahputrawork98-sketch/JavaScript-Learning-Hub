/**
 * storage_demo.js
 * 
 * Demonstrasi bagaimana menggunakan const dan let 
 * untuk mengelola penyimpanan energi (data).
 */

// 1. Menggunakan const untuk data yang stabil
const HUB_NAME = "Central Web Energy";
const FOUNDATION_YEAR = 2026;

console.log(`--- Menghubungkan ke: ${HUB_NAME} (${FOUNDATION_YEAR}) ---`);

// 2. Menggunakan let untuk data yang dinamis
let currentBattery = 50; 
let isGeneratorActive = false;

console.log(`\nStatus Awal:`);
console.log(`- Daya Baterai: ${currentBattery}%`);
console.log(`- Generator Aktif: ${isGeneratorActive}`);

// 3. Mengubah Nilai (Mutation)
console.log("\n>>> Melakukan Pengisian Daya...");
currentBattery = 85; 
isGeneratorActive = true;

console.log(`\nStatus Terbaru:`);
console.log(`- Daya Baterai: ${currentBattery}%`);
console.log(`- Generator Aktif: ${isGeneratorActive}`);

// 4. Mencoba mengubah const (Akan Error - Un-comment untuk mencoba)
// HUB_NAME = "New Name"; // TypeError: Assignment to constant variable.
