/**
 * Pembuktian Internal Methods (Melalui Getters & Setters)
 * Menunjukkan bahwa akses properti sebenarnya memicu algoritma internal [[Get]] dan [[Put]].
 */

const botStore = {
    _stok: 10,

    // Mengambil alih perilaku [[Get]] untuk properti 'stok'
    get stok() {
        console.log("[LOG INTERNAL [[Get]]]: Seseorang sedang mengecek stok...");
        return this._stok;
    },

    // Mengambil alih perilaku [[Put]] untuk properti 'stok'
    set stok(nilaiBaru) {
        console.log(`[LOG INTERNAL [[Put]]]: Mencoba mengubah stok menjadi ${nilaiBaru}`);
        if (nilaiBaru < 0) {
            console.error("Gagal: Stok tidak boleh negatif!");
        } else {
            this._stok = nilaiBaru;
            console.log("Berhasil diperbarui.");
        }
    }
};

console.log("=== 1. Menguji [[Get]] ===");
console.log("Stok saat ini:", botStore.stok); // Memicu 'get'

console.log("\n=== 2. Menguji [[Put]] dengan Validasi ===");
botStore.stok = 15;   // Memicu 'set' (Berhasil)
botStore.stok = -5;   // Memicu 'set' (Gagal karena logika internal)

console.log("\n=== 3. Properti Biasa ===");
// Objek biasa tanpa getter/setter tetap menjalankan [[Get]]/[[Put]] bawaan engine.
const normalObj = { a: 1 };
console.log(normalObj.a); // Engine menjalankan [[Get]] default tanpa kita sadari.
