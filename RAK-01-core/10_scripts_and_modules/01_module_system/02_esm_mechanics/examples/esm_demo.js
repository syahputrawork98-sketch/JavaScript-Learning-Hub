/**
 * Pembuktian ESM Mechanics
 * Menunjukkan Named/Default Export dan perilaku Live Binding.
 */

// Simulasi Internal Modul (asumsikan ini file: lib.js)
// --------------------------------------------------
export let stokGudang = 10;
export const namaToko = "Toko JavaScript";

export function kurangiStok() {
    stokGudang -= 1;
}

export default function sapa() {
    console.log(`Selamat datang di ${namaToko}`);
}
// --------------------------------------------------

// Simulasi Penggunaan (asumsikan ini file: main.js)
// --------------------------------------------------
/*
import sapa, { stokGudang, kurangiStok } from './lib.js';

console.log("=== 1. Uji Import Default & Named ===");
sapa();
console.log("Stok Awal:", stokGudang);

console.log("\n=== 2. Uji Live Binding ===");
kurangiStok(); 
console.log("Stok setelah dikurangi via fungsi:", stokGudang); 
// Output: 9 (Bukan 10!). Membuktikan ini koneksi langsung, bukan copy nilai.

console.log("\n=== 3. Kontrak Read-Only ===");
try {
    stokGudang = 100; // Mencoba ubah variabel import secara langsung
} catch (e) {
    console.log("Gagal: Variabel import bersifat read-only bagi pengimpor! (TypeError)");
}
*/

console.log("[DEBUG] Skrip pembuktian ESM siap di-link.");
