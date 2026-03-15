/**
 * Pembuktian Hoisting & Environment Records
 * Menampilkan efek Creation Phase pada tipe deklarasi yang berbeda.
 */

console.log("=== 1. Hoisting Fungsi (Akses Penuh) ===");
sapa(); // Berhasil! Karena fungsi terdaftar utuh di Creation Phase.

function sapa() {
    console.log("Halo dari Fungsi yang ter-Hoisting!");
}

console.log("\n=== 2. Hoisting var (Akses Setengah/Undefined) ===");
console.log(`Nilai recordVar:`, recordVar); // undefined (Bukan error!)
var recordVar = "Data Tersimpan";

console.log("\n=== 3. let/const & TDZ (Akses Terlarang) ===");
try {
    console.log(bintangTamu); // ReferenceError!
} catch (e) {
    console.log(`[TERDETEKSI TDZ]:`, e.message);
}

let bintangTamu = "Susi"; // Baru bisa diakses setelah baris ini.
console.log(`Akses aman:`, bintangTamu);

console.log("\n=== 4. Function Expression vs Declaration ===");
try {
    ekspresi(); // Akan error
} catch (e) {
    console.log(`[GAGAL]: Expression dianggap variabel biasa (var/let/const)`);
}

var ekspresi = function() {
    console.log("Saya tidak ter-hoisting sebagai fungsi!");
};
