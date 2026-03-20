/**
 * LAB: Generator Functions (The Pulse Origin)
 * Mental Model: "The Pulse Generator"
 */

function* stepByStepGenerator() {
    console.log("[GEN] Menyiapkan Energi...");
    yield "EN-STABLE"; // Berhenti di sini
    
    console.log("[GEN] Mengaktifkan Booster...");
    yield "EN-BOOSTED"; // Berhenti di sini
    
    console.log("[GEN] Prosedur Selesai.");
    return "EN-FINAL"; // Done: true
}

console.log("--- Inisialisasi Mesin ---");
const factory = stepByStepGenerator();

// 1. Jalankan langkah pertama
console.log("\nSinyal 1:", factory.next());

// 2. Jalankan langkah kedua
console.log("\nSinyal 2:", factory.next());

// 3. Jalankan sampai selesai
console.log("\nSinyal Akhir:", factory.next());

// 4. Setelah return, generator padam
console.log("\nSinyal Padam:", factory.next());
