/**
 * LAB: Logical Assignment (Efficient Relays)
 * Mental Model: "Efficient Relays"
 */

// 1. Inisialisasi Default (OR Assignment)
const sectorConfig = {
    id: "SEC-X",
    active: false
};

// Aktifkan jika belum aktif (Inaccurate if 'false' was intentional)
sectorConfig.active ||= true; 
console.log(`Sector Status (||=): ${sectorConfig.active}`);

// 2. Nullish Assignment (The Precise Way)
const hubSettings = {
    timeout: 0,
    retries: null
};

// Hanya isi jika null/undefined
hubSettings.timeout ??= 3000; // Tidak berubah karena 0 bukan nullish
hubSettings.retries ??= 5;    // Berubah jadi 5

console.log("\n--- Precise Initialization ---");
console.log(`Timeout: ${hubSettings.timeout}ms`);
console.log(`Retries: ${hubSettings.retries}`);


// 3. Numeric Separators (Audit Visual)
const energyLimit = 1_500_000; // 1.5 Million
console.log(`\nReadable Limit: ${energyLimit.toLocaleString()} units`);
