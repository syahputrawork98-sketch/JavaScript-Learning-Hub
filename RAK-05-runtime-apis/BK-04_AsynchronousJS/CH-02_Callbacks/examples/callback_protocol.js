/**
 * callback_protocol.js
 * 
 * Demonstrasi pola pendelegasian tugas menggunakan Callback.
 */

// 1. FUNGSI DENGAN CALLBACK
function fetchSectorData(sectorId, callback) {
    console.log(`[NETWORK] Menghubungi Sektor ${sectorId}...`);
    
    // Simulasi delay jaringan (2 detik)
    setTimeout(() => {
        const data = { id: sectorId, voltage: 220, temp: 35 };
        console.log(`[DONE] Data Sektor ${sectorId} telah diterima.`);
        callback(data); // "Memanggil kembali" dengan membawa data
    }, 2000);
}

// 2. PENGGUNAAN (Happy Path)
console.log("--- MEMULAI OPERASI HUB ---");
fetchSectorData("ALPHA-01", (status) => {
    console.log(`[ARSIREK] Voltase: ${status.voltage}V | Suhu: ${status.temp}C`);
    if (status.temp > 30) console.log(">>> NOTIFIKASI: Aktifkan pendingin sektor.");
});

console.log("--- LOG SINKRON: MASIH BISA BERJALAN (NON-BLOCKING) ---");


// 3. SIMULASI CALLBACK HELL (Pyramid of Doom)
// Jangan tiru struktur ini di masa depan!
setTimeout(() => {
    console.log("\n--- SIMULASI CALLBACK HELL ---");
    fetchSectorData("S-1", (d1) => {
        fetchSectorData("S-2", (d2) => {
            fetchSectorData("S-3", (d3) => {
                console.log(`[TOTAL] Rata-rata Suhu: ${(d1.temp + d2.temp + d3.temp) / 3}C`);
            });
        });
    });
}, 5000);
