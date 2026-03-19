/**
 * LAB: Labeled Statements (The Sector Overrides)
 * Mental Model: "Sector Overrides"
 */

const powerGrid = [
    [10, 15, 20],
    [5, -1, 30], // -1 adalah nilai anomali
    [50, 60, 70]
];

console.log("--- Memulai Pemindaian Grid 3x3 ---");

// Tanpa label, kita hanya bisa break loop terdalam
ScanGrid: for (let row = 0; row < powerGrid.length; row++) {
    console.log(`Memasuki Sektor ${row}...`);
    
    for (let col = 0; col < powerGrid[row].length; col++) {
        const energy = powerGrid[row][col];
        
        if (energy < 0) {
            console.log(`  [!] ANOMALI KRITIS ditemukan pada posisi [${row}, ${col}]: ${energy} MW`);
            console.log("  [!] Mengaktifkan Protokol EMERGENCY SHUTDOWN untuk SELURUH GRID...");
            break ScanGrid; // LANGSUNG berhenti di SektorUtama, bukan cuma loop kolom
        }
        
        console.log(`  Unit [${row}, ${col}]: ${energy} MW - Stabil`);
    }
}

console.log("--- Grid Shutdown Selesai. Teknisi sedang menuju lokasi. ---");
