/**
 * types_demo.js
 * 
 * Demonstrasi penggunaan operator typeof 
 * untuk memindai berbagai bentuk energi (tipe data).
 */

// 1. Mendefinisikan berbagai bentuk energi
const wattage = 2500;                // Number
const hubMessage = "Arus Stabil";     // String
const isPowerOn = true;              // Boolean
let unknownSource;                   // Undefined
const emptyCell = null;              // Null (Scanner says 'object' - historical quirk)
const ultraPower = 9999999999n;      // BigInt
const secretKey = Symbol("key");     // Symbol

// 2. Memindai Energi
console.log("--- Laporan Pemindaian Energi Hub ---");

console.log(`Wattage Utama: ${wattage} -> [${typeof wattage}]`);
console.log(`Pesan Sistem : "${hubMessage}" -> [${typeof hubMessage}]`);
console.log(`Status Power  : ${isPowerOn} -> [${typeof isPowerOn}]`);
console.log(`Sumber Tak Dikenal: ${unknownSource} -> [${typeof unknownSource}]`);
console.log(`Sel Kosong    : ${emptyCell} -> [${typeof emptyCell}] (Catatan: Ini adalah Quirk JS)`);
console.log(`Ultra Power   : ${ultraPower} -> [${typeof ultraPower}]`);
console.log(`Secret Key    : Symbol(...) -> [${typeof secretKey}]`);

// 3. Kompleksitas (Preview)
const complexUnit = { type: "Battery", capacity: "1000mAh" };
console.log(`Unit Kompleks : {..} -> [${typeof complexUnit}] (Akan dibahas di Bab selanjutnya)`);
