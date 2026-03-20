/**
 * energy_promise_demo.js
 * 
 * Implementasi "Kontrak Digital" menggunakan Promise 
 * untuk mengelola proses asinkron pengisian baterai.
 */

// 1. MEMBUAT KONTRAK (Simulasi tugas asinkron)
function chargeBattery(level) {
    return new Promise((resolve, reject) => {
        console.log(`\n[PROSES] Memulai pengisian daya hingga ${level}%...`);
        
        // Simulasi waktu proses (3 detik)
        setTimeout(() => {
            const isPowerStable = Math.random() > 0.2; // 80% kemungkinan sukses

            if (isPowerStable) {
                resolve({ status: "FULL", energy: level });
            } else {
                reject("GANGGUAN TRANSMISI: Voltase tidak stabil!");
            }
        }, 3000);
    });
}

// 2. MENGGUNAKAN KONTRAK (Consuming)
console.log("--- HUB TERKONEKSI: MEMULAI PERMINTAAN ENERGI ---");

chargeBattery(100)
    .then((result) => {
        console.log(`[SUKSES] ${result.status}! Kapasitas mencapai ${result.energy}%`);
        return "Notifikasi Pengguna Terkirim"; // Mengirim data ke .then berikutnya
    })
    .then((msg) => {
        console.log(`[UPDATE] ${msg}`);
    })
    .catch((error) => {
        console.error(`[GAGAL] Alasan: ${error}`);
    })
    .finally(() => {
        console.log("--- LOG: Pembersihan sirkuit selesai. ---");
    });

console.log("[LOG SINKRON] Petugas Hub bisa tetap melakukan tugas lain...");
