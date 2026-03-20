/**
 * LAB: Sistem Daur Ulang (SR-12 Memory Management & GC)
 * 
 * Eksperimen ini menguji alokasi memori, pendeteksian jangkauan (Reachability),
 * dan pembersihan pasca-kematian (FinalizationRegistry).
 */

console.log("--- Mengetes Lab Sistem Daur Ulang (Recycling System) ---\n");

// 1. Simulasi Registri Finalisasi
const cleanupRegistry = new FinalizationRegistry((id) => {
    console.log(`[CLEANUP] Unit '${id}' telah didaur ulang dari Warehouse.`);
});

// 2. Sirkuit Pendek (Short-lived Object)
{
    let tempUnit = { id: "GEN_TEMP_01", type: "PULSAR" };
    cleanupRegistry.register(tempUnit, tempUnit.id);
    console.log("-> Unit Sementara Terdaftar di Warehouse.");
    tempUnit = null; // Memutus kabel keras (Strong Reference)
}

// 3. WeakRef (Ghost Link) Test
let coreEnergy = { level: "STABLE" };
const ghostLink = new WeakRef(coreEnergy);

console.log("Ghost Link Scan Initial:", ghostLink.deref() ? "DETECTED" : "VACANT");

// 4. Strong Reference Prevention
let protector = coreEnergy; 
coreEnergy = null; // Masih ada 'protector', jadi tidak akan di-GC
console.log("Ghost Link Scan (after nulling master):", ghostLink.deref() ? "STILL_PRESENT (via protector)" : "VACANT");

protector = null; // Sekarang benar-benar terisolasi!

console.log("\n--- Menunggu Siklus Pembersihan Otomatis (Simulasi) ---");
console.log("Catatan: FinalizationCallback mungkin muncul terlambat atau tidak muncul");
console.log("tergantung pada kebijakan otonom GC mesin Node.js.");

// Simulasi beban agar GC tertarik untuk bergerak
const workload = new Array(100000).fill({ data: "BURST" });

console.log("\n--- Lab Inisialisasi Selesai ---");
