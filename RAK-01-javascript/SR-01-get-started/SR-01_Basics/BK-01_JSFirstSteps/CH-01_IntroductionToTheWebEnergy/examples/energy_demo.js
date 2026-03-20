/**
 * energy_demo.js
 * 
 * Sebuah demonstrasi sederhana tentang bagaimana JavaScript
 * mengubah data statis menjadi interaksi dinamis.
 */

// 1. Data Statis (Structure)
const webHub = {
    name: "JavaScript Knowledge Base",
    status: "Offline",
    energyLevel: 0
};

console.log("--- Keadaan Awal (Statis) ---");
console.log(`Nama Hub: ${webHub.name}`);
console.log(`Status: ${webHub.status}`);

// 2. Fungsi untuk Mengaktifkan Energi (Kinetic Energy)
function activateEnergy() {
    console.log("\n>>> Mengaktifkan Arus Listrik JavaScript...");
    webHub.status = "ONLINE";
    webHub.energyLevel = 100;
    
    console.log("--- Keadaan Sekarang (Dinamis) ---");
    console.log(`Status: ${webHub.status}`);
    console.log(`Level Energi: ${webHub.energyLevel}%`);
    console.log("Hub sekarang siap menerima interaksi!");
}

// Jalankan fungsi
setTimeout(activateEnergy, 2000);
