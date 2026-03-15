/**
 * Pembuktian Scoping & Hoisting (var, let, const)
 * Menunjukkan perilaku variabel di dalam dan di luar blok.
 */

console.log("=== 1. Kebocoran var (Function vs Block Scope) ===");

if (true) {
    var namaAula = "Budi (var)";
    let namaRuangan = "Ani (let)";
    console.log("Di dalam blok: ", namaAula, namaRuangan);
}

console.log("Di luar blok : ", namaAula); // Budi (var) tetap bisa diakses!
try {
    console.log(namaRuangan); // Ani (let) akan ERROR
} catch (e) {
    console.log("Di luar blok : [let/const] Tidak terjangkau! (ReferenceError)");
}

console.log("\n=== 2. Jebakan Hoisting & TDZ ===");

console.log("Akses var sebelum barisnya: ", statusVar); // undefined
var statusVar = "Sudah siap";

try {
    console.log(statusLet);
} catch (e) {
    console.log("Akses let sebelum barisnya: [TDZ] Gagal! (ReferenceError)");
}
let statusLet = "Sudah siap juga";

console.log("\n=== 3. Kontrak const (Immutability Referensi) ===");
const arsir = { id: 1 };
arsir.id = 2; // Referensi tetap sama, isi properti boleh berubah
console.log("Update properti const object: Berhasil!", arsir.id);

try {
    arsir = { id: 3 }; // Ganti label ke objek baru
} catch (e) {
    console.log("Update total label const  : Gagal! (TypeError)");
}
