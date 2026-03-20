/**
 * LAB: Constructors (The Assembly Line)
 * Mental Model: "The Assembly Line"
 */

class BatteryUnit {
    constructor(serial, health = 100) {
        console.log(`[PABRIK] Merakit Unit: ${serial}`);
        
        // Inisialisasi State
        this.serial = serial;
        this.health = health;
        this.createdAt = new Date().toLocaleDateString();
        
        // Validasi Sederhana
        if (this.health < 0) {
            console.warn(`[!] Peringatan: Unit ${serial} memiliki kesehatan rendah saat perakitan.`);
        }
    }
}

console.log("--- Memulai Shift Perakitan ---");

const b1 = new BatteryUnit("BATT-001");
const b2 = new BatteryUnit("BATT-002", 45);
const b3 = new BatteryUnit("BATT-DAMAGED", -10);

console.log("\nHasil Inspeksi Gudang:");
console.log(b1);
console.log(b2);
console.log(b3);
