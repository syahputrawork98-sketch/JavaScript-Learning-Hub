/**
 * traffic_jam_demo.js
 * 
 * Demonstrasi bagaimana kode Sinkron yang berat 
 * dapat menyebabkan kemacetan (blocking) pada sistem.
 */

console.log("--- HUB HUBUR: MEMULAI BOOTING ---");

// 1. Tugas Ringan (Instan)
console.log("[1] Memeriksa Voltase Utama...");

// 2. TUGAS BERAT (Simulasi Blocking secara Sinkron)
// Jangan gunakan pola ini di aplikasi nyata!
function heavyMaintenance() {
    console.log("[2] SEDANG MELAKUKAN PEMELIHARAAN BERAT (BLOCKING)...");
    const start = Date.now();
    while (Date.now() - start < 3000) {
        // Melakukan putaran kosong selama 3 detik
    }
    console.log("[OK] Pemeliharaan Berat Selesai.");
}

heavyMaintenance();

// 3. Tugas Selanjutnya
// Tugas ini tidak bisa jalan sebelum nomor 2 selesai.
console.log("[3] Menyalakan Lampu Kota.");
console.log("--- BOOTING SELESAI ---");

/**
 * ANALISIS:
 * Jika urutan [2] memakan waktu 10 detik, 
 * maka lampu kota [3] akan terlambat menyala selama 10 detik.
 * Sistem benar-benar mati/freeze selama proses nomor [2].
 */
