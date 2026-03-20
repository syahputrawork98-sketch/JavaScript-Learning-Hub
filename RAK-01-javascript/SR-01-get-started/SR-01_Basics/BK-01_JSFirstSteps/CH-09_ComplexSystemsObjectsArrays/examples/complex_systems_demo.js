/**
 * complex_systems_demo.js
 * 
 * Demonstrasi penggunaan Object dan Array untuk 
 * merepresentasikan sistem infrastruktur Hub yang kompleks.
 */

// 1. Mendefinisikan Objek Hub (Multi-Component Device)
const energyStation = {
    id: "HUB-01",
    location: "Jakarta Digital Sector",
    maxOutput: 10000,
    currentLoad: 4500,
    isOperational: true,
    
    // Objek bersarang (Nested Object)
    specs: {
        manufacturer: "Antigravity Power",
        model: "X-2026",
        warranty: 2030
    }
};

// 2. Mendefinisikan Daftar Sektor (Battery Rack / Array)
const activeSectors = ["Industrial-A", "Residential-B", "Data-Center-C"];

// 3. Menggabungkan Semuanya (Array of Objects - Preview)
const batteryLogs = [
    { cellId: 1, charge: 85, status: "GOOD" },
    { cellId: 2, charge: 20, status: "LOW" },
    { cellId: 3, charge: 0,  status: "FAIL" }
];

console.log("--- Meninjau Infrastruktur Complex System ---");

// Akses Objek
console.log(`Nama Station : ${energyStation.location}`);
console.log(`Model Perangkat: ${energyStation.specs.model}`);

// Akses Array
console.log(`\nSektor Aktif Utama: ${activeSectors[0]}`);
console.log(`Total Sektor Terkoneksi: ${activeSectors.length}`);

// Akses Data Log (Array of Objects)
console.log(`\nStatus Sel Baterai Kritis (ID ${batteryLogs[2].cellId}): ${batteryLogs[2].status}`);

// 4. Modifikasi Ringan
energyStation.currentLoad += 500;
console.log(`\nUpdate Beban Terbaru: ${energyStation.currentLoad}kW`);
