/**
 * LAB: Power Gages (Arithmetic)
 * Mental Model: "Arithmetic Power Gages"
 */

// 1. Perhitungan Beban Dasar
let baseLoad = 100;
let additionalLoad = 50;

let totalLoad = baseLoad + additionalLoad;
console.log("Total Beban (Addition):", totalLoad, "MW");

// 2. Efisiensi & Multiplikasi
let efficiencyFactor = 0.85;
let realOutput = totalLoad * efficiencyFactor;
console.log("Output Riil (Multiplication):", realOutput, "MW");

// 3. Sisa Energi (Remainder)
let batteryCapacity = 40;
let fullBatteries = Math.floor(realOutput / batteryCapacity);
let remainingEnergy = realOutput % batteryCapacity;

console.log("\n--- Distribusi Baterai ---");
console.log("Baterai Terisi Penuh:", fullBatteries);
console.log("Energi Sisa (Remainder):", remainingEnergy, "MW");

// 4. Penyesuaian Halus (Inc/Dec)
let coreVoltage = 220;
console.log("\nVoltase Awal:", coreVoltage);
console.log("Meningkatkan Voltase (Postfix):", coreVoltage++); // 220
console.log("Voltase Sekarang:", coreVoltage); // 221
console.log("Meningkatkan Lagi (Prefix):", ++coreVoltage); // 222
