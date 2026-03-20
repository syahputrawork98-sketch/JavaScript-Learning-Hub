/**
 * scope_demo.js
 * 
 * Demonstrasi jangkauan variabel (Scope) 
 * dalam sirkuit JavaScript.
 */

// 1. GLOBAL GRID
const globalEnergy = "10,000kW (Pusat)";

function activateSubstation() {
    // 2. LOCAL GRID (Function Scope)
    const localEnergy = "500kW (Lokal)";
    
    console.log("--- Di dalam Substation ---");
    console.log(`Menarik dari Pusat : ${globalEnergy}`);
    console.log(`Energi Lokal Tersedia : ${localEnergy}`);
    
    if (true) {
        // 3. BLOCK GRID (let/const)
        const emergencyBattery = "50kW (Urgent)";
        console.log(`\nBaterai Darurat Aktif: ${emergencyBattery}`);
    }
    
    // Mencoba akses Block Scope di luar bloknya
    // console.log(emergencyBattery); // Ini akan ERROR jika tidak dikomentar.
}

activateSubstation();

console.log("\n--- Di luar Substation (Main Street) ---");
console.log(`Energi Pusat Masih Terdeteksi: ${globalEnergy}`);

// Mencoba akses Local Scope dari luar
try {
    console.log(localEnergy);
} catch (error) {
    console.log("!!! ERROR: Kabel tidak mencapai Main Street (Local Scope terproteksi).");
}
