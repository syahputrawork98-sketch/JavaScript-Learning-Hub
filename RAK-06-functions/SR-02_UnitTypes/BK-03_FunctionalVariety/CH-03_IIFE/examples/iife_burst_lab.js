/**
 * LAB: IIFE (The Quick Burst Units)
 * Mental Model: "The Quick Burst"
 */

console.log("--- Memulai Sistem Hub Utama ---");

// IIFE: Inisialisasi Rahasia
(function() {
    const adminToken = "MASTER-KEY-888"; // Terisolasi
    console.log("[IIFE] Sistem Keamanan Terpasang.");
    console.log(`[IIFE] Token Internal Teraktifkan: ${adminToken.substring(0,6)}...`);
})();

// Mencoba akses token dari luar
try {
    console.log(adminToken);
} catch (e) {
    console.log("[OUTSIDE] Akses GAGAL: Token Admin tidak ditemukan di Grid Global.");
}

// IIFE dengan parameter
(function(version) {
    console.log(`\n[INIT] Menyiapkan Protokol Hub Versi: ${version}`);
})("6.0.Alpha");
