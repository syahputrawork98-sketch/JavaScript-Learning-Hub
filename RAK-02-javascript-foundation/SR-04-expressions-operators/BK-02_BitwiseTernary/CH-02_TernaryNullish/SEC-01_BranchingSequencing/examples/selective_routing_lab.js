/**
 * LAB: Selective Routing (Ternary & Nullish)
 * Mental Model: "Selective Routing"
 */

// 1. Ternary Switch (Quick Choice)
const currentVoltage = 230;
const status = currentVoltage > 250 ? "OVERLOAD" : "NORMAL";

console.log("--- Status Hub ---");
console.log(`Voltase: ${currentVoltage}V -> Status: ${status}`);

// 2. Nullish Coalescing (Backup Line)
const userConfig = null;
const backupConfig = "ECO_MODE";

const activeConfig = userConfig ?? backupConfig;
console.log("\n--- Konfigurasi Aktif ---");
console.log("Config Terpilih:", activeConfig); // ECO_MODE karena userConfig null

// 3. Comma Operator (Sequencing)
console.log("\n--- Eksekusi Berurutan (Comma) ---");
let step = 0;
const result = (step++, step++, "FINAL_SIGNAL");

console.log("Total Step yang Berjalan:", step); // 2
console.log("Sinyal yang Diterima:", result); // FINAL_SIGNAL
