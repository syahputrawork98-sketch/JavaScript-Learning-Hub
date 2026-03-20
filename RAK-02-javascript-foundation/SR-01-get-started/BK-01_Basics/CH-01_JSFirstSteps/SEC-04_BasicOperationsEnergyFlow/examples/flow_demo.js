/**
 * flow_demo.js
 * 
 * Simulasi kalkulasi daya dan penggabungan pesan 
 * menggunakan operator dasar JavaScript.
 */

// 1. Data Input (Energi Awal)
const solarOutput = 1200; // Watt
const windOutput = 800;   // Watt
const systemLoss = 50;    // Watt
const machinesCount = 3;

// 2. Kalkulasi Aliran Energi (Arithmetic)
const grossCapacity = solarOutput + windOutput;
const netCapacity = grossCapacity - systemLoss;
const powerPerMachine = netCapacity / machinesCount;

console.log("--- Laporan Efisiensi Energi ---");
console.log(`Input Matahari : ${solarOutput}W`);
console.log(`Input Angin    : ${windOutput}W`);
console.log(`Total Kapasitas: ${grossCapacity}W`);
console.log(`Kehilangan Daya: ${systemLoss}W`);
console.log(`Daya Bersih    : ${netCapacity}W`);
console.log(`Beban per Mesin: ${powerPerMachine.toFixed(2)}W`);

// 3. Penggabungan Informasi (String Ops)
const hubStatus = "STABLE";
const version = "v1.0.4";

// Menggunakan Template Literals (Modern Way)
const fullReport = `[HUB REPORT] Status: ${hubStatus} | System: ${version} | Net: ${netCapacity}W`;

console.log("\n--- Pesan Sistem Hub ---");
console.log(fullReport);

// 4. Modulo (Energy Distribution Check)
const leftoverEnergy = netCapacity % machinesCount;
console.log(`\nSisa daya yang tidak terdistribusi: ${leftoverEnergy}W`);
