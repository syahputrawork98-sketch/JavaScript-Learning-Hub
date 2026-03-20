/**
 * packet_transmission_demo.js
 * 
 * Simulasi pengiriman data status reaktor melalui format JSON.
 */

// 1. DATA ASLI DI HUB (Object)
const reactorStatus = {
    id: "R-FUSION-01",
    temperature: 15.6,
    isCoreStable: true,
    modules: ["Cooler", "Igniter", "Shield"],
    // Metode (Ini tidak akan ikut terkirim di JSON!)
    emergencyShutdown: function() {
        console.log("Shutting down...");
    }
};

console.log("--- 1. Data Asli di Hub (Object) ---");
console.log(reactorStatus);

// 2. PROSES PENGEMASAN (Stringify)
console.log("\n--- 2. Mengemas Data ke Paket Kurir (JSON.stringify) ---");
const packedData = JSON.stringify(reactorStatus);

console.log("Teks Paket (String):");
console.log(packedData);

// 3. PROSES PENERIMAAN (Parse)
console.log("\n--- 3. Membongkar Paket di Hub Penerima (JSON.parse) ---");
const receivedData = JSON.parse(packedData);

console.log("Data Kembali Menjadi Objek:");
console.log(receivedData);
console.log(`ID Reaktor : ${receivedData.id}`);
console.log(`Cek Stabilitas: ${receivedData.isCoreStable ? 'AMAN' : 'BAHAYA'}`);

// 4. VERIFIKASI KEHILANGAN METODE
console.log("\n--- 4. Verifikasi Keamanan Paket ---");
if (receivedData.emergencyShutdown === undefined) {
    console.log("[INFO] Metode 'emergencyShutdown' tidak ikut dalam paket (JSON hanya membawa DATA, bukan FUNGSI).");
}
