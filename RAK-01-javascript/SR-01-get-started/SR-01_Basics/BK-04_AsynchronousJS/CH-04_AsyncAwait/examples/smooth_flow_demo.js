/**
 * smooth_flow_demo.js
 * 
 * Refactoring alur energi dari gaya Promise 
 * menjadi gaya Async/Await yang lebih bersih.
 */

// 1. FUNGSI ASINKRON DASAR (Mengembalikan Promise)
function getEnergySupply() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isOk = Math.random() > 0.1; // 90% sukses
            isOk ? resolve(5000) : reject("TRANSFORMER MELEDAK!");
        }, 2000);
    });
}

// 2. PROSES UTAMA (Style: Async/Await)
async function bootUpSequence() {
    console.log("--- START: MEMULAI PROSEDUR BOOTING ---");

    try {
        console.log("[WAIT] Menunggu pasokan energi utama...");
        
        // Menunggu tanpa memblokir seluruh HUB
        const totalEnergy = await getEnergySupply();
        
        console.log(`[OK] Energi Diterima: ${totalEnergy}kW`);
        console.log("[EXEC] Melakukan kalibrasi grid...");
        console.log("[SUCCESS] Sistem HUB sekarang ONLINE.");

    } catch (error) {
        // Menangkap gangguan dengan gaya Try/Catch yang natural
        console.error(`[CRITICAL ERROR] Terjadi kegagalan: ${error}`);
        console.log("[SHUTDOWN] Mengaktifkan protokol darurat.");
    } finally {
        console.log("--- END: Prosedur Selesai. ---");
    }
}

// Menjalankan urutan booting
bootUpSequence();

console.log("\n[LOG SINKRON]: Hub tetap bisa melacak inventaris saat booting berjalan...");
