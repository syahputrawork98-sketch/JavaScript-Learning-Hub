/**
 * LAB: Deep Access Safety (Optional Chaining)
 * Mental Model: "Safety Valves" - Deep Inspection
 */

const remoteHub = {
    metadata: {
        lastUpdate: "2026-03-19",
        owner: { name: "Syahputra" }
    },
    grid: {
        active: true
        // sectors data is missing
    }
};

console.log("--- Mengetes Keamanan Akses Mendalam ---");

// Tanpa ?. ini akan meledak saat mengakses .load
const sectorLoad = remoteHub.grid.sectors?.[0]?.load ?? "UNDEFINED_SECTOR";
const ownerContact = remoteHub.metadata.owner.contact?.email ?? "CONTACT_HIDDEN";

console.log(`Beban Sektor: ${sectorLoad}`);
console.log(`Kontak Owner: ${ownerContact}`);

// Menjalankan fungsi opasional
const diagnostics = remoteHub.runDiagnostics?.() ?? "DIAGNOSTICS_NOT_SUPPORTED";
console.log(`Hasil Diagnostik: ${diagnostics}`);
