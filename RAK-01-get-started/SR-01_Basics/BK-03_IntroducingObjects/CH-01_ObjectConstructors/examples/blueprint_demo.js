/**
 * blueprint_demo.js
 * 
 * Menggunakan Object Constructor untuk memproduksi 
 * unit-unit sektor energi dalam Hub secara masif.
 */

// 1. CETAK BIRU (Constructor)
function Sector(name, type, energyLevel) {
    this.name = name;
    this.type = type; // misal: 'Industrial', 'Residential'
    this.energyLevel = energyLevel;
    this.isActive = false;

    // Metode internal
    this.reportStatus = function() {
        const state = this.isActive ? "ONLINE 🟢" : "OFFLINE 🔴";
        console.log(`[REPORTER] ${this.name} (${this.type}): ${state} | Daya: ${this.energyLevel}kW`);
    };

    this.togglePower = function() {
        this.isActive = !this.isActive;
        console.log(`\n>>> SAKLAR ${this.name} DIPUTAR. Status: ${this.isActive ? 'HIDUP' : 'MATI'}`);
    };
}

// 2. PRODUKSI UNIT (Producing Instances)
const northSector = new Sector("Sektor Utara", "Residential", 250);
const southSector = new Sector("Sektor Selatan", "Industrial", 1500);
const hubCentral = new Sector("Pusat Kontrol", "Management", 5000);

// 3. OPERASI
console.log("--- Laporan Awal Infrastruktur Hub ---");
northSector.reportStatus();
southSector.reportStatus();
hubCentral.reportStatus();

// Menghidupkan pusat kontrol
hubCentral.togglePower();
hubCentral.reportStatus();

// Membuktikan kemandirian objek
console.log("\n[VERIFIKASI]: Mengubah Sektor Utara tidak mengganggu Sektor Selatan.");
northSector.energyLevel += 100;
northSector.reportStatus();
southSector.reportStatus();
