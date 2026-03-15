/**
 * Pembuktian Script vs Module Semantics
 * Menunjukkan isolasi scope dan perilaku strict mode otomatis.
 */

// Catatan: File ini dirancang untuk dipahami perilakunya 
// jika dijalankan sebagai <script> vs <script type="module">

console.log("=== 1. Uji Top-level 'this' ===");
console.log("this di tingkat atas adalah:", this); 
// SCRIPT: window/global
// MODULE: undefined

console.log("\n=== 2. Uji Isolasi Scope ===");
var rahasiaLoker = "Isi Loker Global";
// SCRIPT: Variabel ini akan bocor ke window.rahasiaLoker
// MODULE: Variabel ini tetap terkunci di dalam modul ini.

if (typeof window !== "undefined") {
    console.log("Apakah bocor ke window?", window.rahasiaLoker !== undefined);
} else {
    console.log("Isolasi scope Module aktif (node/env)");
}

console.log("\n=== 3. Uji Strict Mode Otomatis ===");
try {
    variabelTanpaDeklarasi = "Bahaya!"; // Penulisan tanpa let/var/const
} catch (e) {
    console.log("Eksekusi Gagal: Strict mode otomatis aktif di Module! (ReferenceError)");
}

// 4. Pembuktian Caching (Mental Model)
// Jika module ini di-import oleh 5 file berbeda, 
// teks "Eksekusi Module..." hanya akan muncul 1 KALI saja.
console.log("\n[INFO] Eksekusi Module System Selesai.");
