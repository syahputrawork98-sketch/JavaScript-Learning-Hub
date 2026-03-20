/**
 * LAB: Recursion (The Re-routing Loop)
 * Mental Model: "The Re-routing Loop"
 */

function countUnitsDown(n) {
    // 1. BASE CASE: Titik keluar agar tidak loop selamanya
    if (n <= 0) {
        console.log("--- Seluruh Unit Telah Diproses ---");
        return;
    }
    
    // 2. RECURSIVE STEP: Melakukan tugas dan memanggil diri sendiri
    console.log(`Memproses Unit ID: HUB-SCAN-${n}... [OK]`);
    countUnitsDown(n - 1);
}

console.log("Memulai Pemindaian Sektoral:");
countUnitsDown(5);

// Contoh: Kalkulasi Faktorial Energi
function calculateTotalEnergyStack(n) {
    if (n === 1) return 1;
    return n + calculateTotalEnergyStack(n - 1);
}

console.log("\nTotal Penumpukan Energi (Stack 5):", calculateTotalEnergyStack(5));
