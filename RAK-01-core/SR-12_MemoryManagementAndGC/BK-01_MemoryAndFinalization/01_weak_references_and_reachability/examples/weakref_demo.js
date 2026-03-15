/**
 * Pembuktian WeakRef & Reachability
 * Menunjukkan penggunaan deref() dan bagaimana referensi hilang saat GC bekerja.
 */

// 1. Objek Target (Objek Besar/Penting)
let kapal = { nama: "Black Pearl", tipe: "Galley" };

// 2. Membuat WeakRef (Tali Tipis)
const taliTipis = new WeakRef(kapal);

console.log("=== 1. Kondisi Awal ===");
console.log("Apakah kapal bisa dijangkau via WeakRef?", taliTipis.deref() !== undefined);
console.log("Nama Kapal:", taliTipis.deref().nama);

// 3. Menghapus referensi kuat tunggal
console.log("\n=== 2. Referensi Kuat Dihapus ===");
kapal = null; // Kapal sekarang tidak punya 'tali tambang'

// CATATAN UNTUK PENGEMBANG:
// Kita tidak bisa memaksa GC berjalan di kode JS standar.
// Namun, secara semantik, Engine diperbolehkan menghapus 'kapal' kapan saja.

if (taliTipis.deref()) {
    console.log("[STATUS] Kapal masih ada di perairan (belum dihapus GC).");
} else {
    console.log("[STATUS] Kapal sudah hanyut (dihapus GC).");
}

/**
 * Tips Arsitek:
 * Jangan pernah mengandalkan keberadaan objek di dalam WeakRef 
 * untuk logika bisnis yang kritis. Selalu sediakan fallback 
 * jika deref() mengembalikan undefined.
 */
console.log("\n[INFO] Pembuktian WeakRef selesai.");
