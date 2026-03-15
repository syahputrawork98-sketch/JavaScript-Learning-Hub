/**
 * Pembuktian WeakMap & Garbage Collection
 * Menunjukkan perilaku 'lemah' referensi kunci pada WeakMap.
 */

// 1. Inisialisasi WeakMap
const metadata = new WeakMap();

// Buat sebuah objek (Tamu)
let tamu = { nama: "Budi", id: "001" };

// Simpan info rahasia tentang tamu di WeakMap
metadata.set(tamu, { catatan: "Tamu VIP, berikan layanan terbaik." });

console.log("=== 1. Akses Awal ===");
console.log("Catatan Tamu:", metadata.get(tamu).catatan);

// 2. Simulasi Tamu Pulang (Hapus Referensi)
console.log("\n=== 2. Referensi Tamu Dihapus ===");
tamu = null; // Objek asli sekarang bebas untuk diambil oleh Garbage Collector

// CATATAN PENTING:
// Di dunia nyata, Engine JavaScript tidak langsung menghapus data di memori. 
// Ia menunggu saat yang tepat (GC Cycle). 
// Namun, secara semantik, kita tidak punya cara lagi untuk mengambil data tersebut 
// dari WeakMap karena kuncinya (objek tamu) sudah hilang selamanya.

try {
    // Kita tidak bisa melakukan ini:
    // metadata.forEach(...) -> Error karena WeakMap tidak bisa di-loop
    console.log("Data di WeakMap sekarang tidak mungkin dijangkau lagi.");
} catch (e) {
    console.log("Terbukti: WeakMap melindungi privasi dan memori.");
}

// 3. Perbandingan dengan Map Biasa
console.log("\n=== 3. Perbandingan dengan Map Biasa ===");
const listKuat = new Map();
let tamuKuat = { nama: "Ani" };
listKuat.set(tamuKuat, "Data Penting");

tamuKuat = null; // Menghapus referensi luar

// Meskipun tamuKuat sudah null, objek aslinya MASIH HIDUP di dalam Map!
// Map memegang referensi kuat, mencegah objek tersebut dihapus dari memori.
console.log("Map Biasa masih menyimpan datanya:", listKuat.size); // 1
// Ini adalah potensi kebocoran memori (Memory Leak).
