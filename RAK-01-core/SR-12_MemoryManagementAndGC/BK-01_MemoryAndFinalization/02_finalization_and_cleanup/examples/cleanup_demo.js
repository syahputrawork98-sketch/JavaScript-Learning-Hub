/**
 * Pembuktian FinalizationRegistry
 * Menunjukkan cara mendaftarkan objek untuk pembersihan otomatis.
 */

// 1. Membuat Registry (Tukang Bersih-bersih)
const satpamMemori = new FinalizationRegistry((namaObjek) => {
    console.log(`\n[CLEANUP] Notifikasi: Objek "${namaObjek}" telah dihancurkan oleh GC!`);
    console.log("Melakukan pembersihan sisa resource...");
});

// 2. Membuat Objek Target
let filePenting = { judul: "Rahasia Negara", isi: "..." };

// 3. Mendaftarkan ke Registry
// Argumen ke-2 ('Held Value') akan dikirim ke callback saat objek mati.
satpamMemori.register(filePenting, "File Rahasia Negara");

console.log("=== 1. Objek Terdaftar ===");
console.log("Status: Menunggu filePenting dihapus dari memori.");

// 4. Hapus referensi
filePenting = null;
console.log("\n=== 2. Referensi Dihapus ===");
console.log("Diperlukan siklus Garbage Collection untuk memicu callback.");

/**
 * Catatan Arsitek:
 * Anda mungkin tidak melihat log [CLEANUP] muncul segera (atau sama sekali) 
 * saat menjalankan skrip ini di lingkungan Node.js/Browser biasa 
 * karena GC berjalan secara tidak terduga. 
 * Namun, pendaftarannya sudah sesuai spesifikasi ECMA-262.
 */
console.log("\n[INFO] Simulasi FinalizationRegistry selesai.");
