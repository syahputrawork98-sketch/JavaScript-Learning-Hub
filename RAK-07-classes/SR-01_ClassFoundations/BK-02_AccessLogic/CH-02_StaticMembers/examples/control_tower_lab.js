/**
 * LAB: Static Members (Control Tower Tools)
 * Mental Model: "Control Tower Tools"
 */

class HubRegistry {
    static #totalUnitsCreated = 0; // Private Static Field
    static MASTER_VOLTAGE = 220;   // Public Static Field

    constructor(name) {
        this.name = name;
        HubRegistry.#totalUnitsCreated++;
        console.log(`[Registry] Unit '${name}' terdaftar.`);
    }

    // Static Method: Alat bantu global
    static getGlobalInventoryCount() {
        return `Total Unit terdaftar di seluruh Hub: ${HubRegistry.#totalUnitsCreated}`;
    }

    // Static Method: Konversi Energi
    static convertToKilowatts(watts) {
        return watts / 1000;
    }
}

console.log("--- Mengakses Alat Menara Kontrol ---");
console.log(`Standar Voltase: ${HubRegistry.MASTER_VOLTAGE}V`);

// Membuat unit
const u1 = new HubRegistry("ALPHA");
const u2 = new HubRegistry("BETA");

console.log(`\n${HubRegistry.getGlobalInventoryCount()}`);
console.log(`Konversi: ${HubRegistry.convertToKilowatts(5000)} KW`);

// Mencoba panggil method static dari instansi (AKAN ERROR)
try {
    u1.getGlobalInventoryCount();
} catch (e) {
    console.log("\n[!] Error: Unit individu tidak memiliki alat Menara Kontrol.");
}
