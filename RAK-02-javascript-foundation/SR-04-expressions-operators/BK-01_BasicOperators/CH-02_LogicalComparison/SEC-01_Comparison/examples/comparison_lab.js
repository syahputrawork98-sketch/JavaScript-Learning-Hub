/**
 * LAB: Integrity Check (Comparison)
 * Mental Model: "Integrity Check"
 */

const standardVoltage = 220;
const measuredVoltageString = "220";
const measuredVoltageNumber = 220;

// 1. Pengecekan Standar (Equality)
console.log("--- Pengecekan Standar (==) ---");
console.log("Apakah Nilai Sama?", measuredVoltageString == standardVoltage); // true (Coercion)

// 2. Pengecekan Ketat (Strict Equality) - GOLD STANDARD
console.log("\n--- Pengecekan Ketat (===) ---");
console.log("Apakah Nilai & Tipe Sama?", measuredVoltageString === standardVoltage); // false
console.log("Apakah Nilai & Tipe Sama (Number)?", measuredVoltageNumber === standardVoltage); // true

// 3. Pengecekan Ambang Batas (Relational)
const criticalLimit = 250;
let currentLoad = 260;

console.log("\n--- Deteksi Bahaya ---");
if (currentLoad > criticalLimit) {
    console.log("ALARM: Beban melebihi batas kritis!");
}

console.log("Apakah beban aman (<= 250)?", currentLoad <= criticalLimit);
