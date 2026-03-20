/**
 * LAB: Nested Error Handling (Containment Layers)
 * Mental Model: "The Containment Box" - Multi-Layer
 */

function sectorOperation() {
    console.log("  [Sector] Menjalankan operasi internal...");
    throw new Error("Pipa Energi Pecah!");
}

function regionalController() {
    try {
        console.log("[Regional] Mengawasi operasi sektor...");
        sectorOperation();
    } catch (e) {
        console.log(`[Regional] Menangkap Error: ${e.message}`);
        console.log("[Regional] Melakukan mitigasi lokal...");
        // Melempar kembali (Rethrow) agar Hub Pusat tahu
        throw new Error(`Kegagalan Regional akibat: ${e.message}`);
    }
}

console.log("--- Simulasi Kegagalan Berlapis ---");

try {
    regionalController();
} catch (mainError) {
    console.error(`[MAIN HUB] Menerima Alarm Kritis: ${mainError.message}`);
    console.error("[MAIN HUB] Mengaktifkan Prosedur Karantina Total.");
} finally {
    console.log("[MAIN HUB] Status: Karantina Aktif.");
}
