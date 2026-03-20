/**
 * LAB: Energy Routing (Assignment)
 * Mental Model: "Energy Routing"
 */

// 1. Inisialisasi Terminal
let storage_A = 100;
let storage_B = 200;

console.log("Isi Awal Storage A:", storage_A);

// 2. Perutean Agresif (Compound Assignment)
storage_A += 50; // storage_A = storage_A + 50
console.log("Setelah Re-routing (+50):", storage_A);

storage_B *= 0.5; // storage_B = storage_B * 0.5
console.log("Setelah Penyesuaian Kapasitas (x0.5):", storage_B);

// 3. Logical Routing
console.log("\n--- Logical Routing ---");
let isMainGeneratorActive = true;
let backupGeneratorStatus = "OFF";

// "Hanya nyalakan cadangan jika generator utama AKTIF (Simulasi &&=)"
backupGeneratorStatus &&= "STANDBY"; 
console.log("Status Cadangan (&&=):", backupGeneratorStatus); // STANDBY

let tempConfig = null;
// "Hanya isi konfigurasi jika benar-benar kosong (Simulasi ??=)"
tempConfig ??= "DEFAULT_VOLTAGE_220";
console.log("Konfigurasi (??=):", tempConfig);
