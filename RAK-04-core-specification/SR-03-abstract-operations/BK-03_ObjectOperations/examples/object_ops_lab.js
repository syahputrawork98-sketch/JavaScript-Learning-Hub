/**
 * LAB: Object Operations (Component Assembly & Scanning)
 */

console.log("--- Mengetes Pemindai Komponen (HasProperty) ---");

const standardUnit = {
    version: "V1.0",
    run() { return "OPERATING"; }
};

// Hub Induk (Prototype) untuk unit khusus
const specialHub = Object.create(standardUnit);
specialHub.id = "ALPHA_7";

console.log(`Cek Permukaan (id): ${specialHub.hasOwnProperty("id")}`); // true
console.log(`Cek Arsitektur Induk (version): ${"version" in specialHub}`); // true
console.log(`Cek Permukaan (version): ${specialHub.hasOwnProperty("version")}`); // false


// 2. Set vs CreateDataProperty (Flow Regulators)
console.log("\n--- Mengetes Regulator Aliran (Set vs Define) ---");

const secureCabinet = {};
Object.defineProperty(secureCabinet, "core", {
    value: "SHIELDED",
    writable: false,
    configurable: true
});

console.log(`Status Kabinet: ${secureCabinet.core}`);

// Percobaan ganti via Set (=)
secureCabinet.core = "EXPOSED"; // Gagal diam-diam (non-strict)
console.log(`Setelah 'Set' (=): ${secureCabinet.core} (Tetap Shielded)`);

// Ganti via Redefinition (CreateDataProperty)
Object.defineProperty(secureCabinet, "core", { value: "EXPOSED" });
console.log(`Setelah Redefinisi: ${secureCabinet.core} (Berhasil Ditembus)`);


// 3. GetV (Primitive Access)
console.log("\n--- Mengetes Piston Akses Primitif (GetV) ---");
const signal = "PULSE";
console.log(`Membaca Properti Sinyal: ${signal.toLowerCase().length}`);
// Internal: ToObject("PULSE") -> Get("pulse", "length")
