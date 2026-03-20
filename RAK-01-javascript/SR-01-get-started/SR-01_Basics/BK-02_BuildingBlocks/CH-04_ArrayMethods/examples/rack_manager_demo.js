/**
 * rack_manager_demo.js
 * 
 * Simulasi manajemen rak baterai otomatis menggunakan
 * metode-metode Array JavaScript.
 */

let rack = ["Baterai-A", "Baterai-B", "Baterai-C"];
console.log("--- Status Rak Awal ---");
console.log(rack);

// 1. Menambah ke belakang (push)
rack.push("Baterai-D");
console.log("\n[Robot]: Menambah unit baru ke akhir rak...");
console.log(rack);

// 2. Mengambil dari depan (shift)
const firstOut = rack.shift();
console.log(`\n[Robot]: Mengambil unit tertua (${firstOut}) dari depan...`);
console.log(rack);

// 3. Menemukan dan Mengganti (indexOf & splice)
const searchTag = "Baterai-B";
const pos = rack.indexOf(searchTag);

if (pos !== -1) {
    console.log(`\n[Robot]: Menemukan ${searchTag} di slot ${pos}. Melakukan penggantian...`);
    // Hapus 1 di posisi 'pos', ganti dengan 'Super-Battery'
    rack.splice(pos, 1, "Super-Battery");
}
console.log(rack);

// 4. Menambah ke depan (unshift)
rack.unshift("Primary-Unit");
console.log("\n[Robot]: Menyisipkan unit primer ke posisi terdepan...");
console.log(rack);

// 5. Total unit
console.log(`\n--- Laporan Akhir: Total ${rack.length} unit aktif di dalam rak. ---`);
