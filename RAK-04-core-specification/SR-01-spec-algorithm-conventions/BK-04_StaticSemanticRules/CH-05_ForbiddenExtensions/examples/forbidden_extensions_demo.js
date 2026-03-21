/**
 * CH-05: Forbidden Extensions
 * 
 * Demonstrasi konsep fitur yang dilarang (Clause 17) 
 * dan pengecualian (Annex B).
 */

// 1. Host-defined Features (DIZINKAN)
// Host (seperti Browser/Node) boleh menambah objek selama tidak merusak standar.
if (typeof console !== "undefined") {
    console.log("Informasi: 'console' adalah Host-defined, bukan ECMAScript core.");
}

// 2. Annex B: Legacy Extensions (DIZINKAN khusus untuk Web)
// Spesifikasi melarang modifikasi semantik dasar, tapi Annex B memberikan 
// kelonggaran demi kompatibilitas web lama.
var htmlString = "Hello";
console.log("HTML Anchor (Annex B):", htmlString.anchor("top")); 
// 'anchor()' bukan bagian dari core ES yang direkomendasikan, tapi diizinkan.

// 3. Contoh "Forbidden" (Secara Teoretis)
// Bayangkan sebuah engine menambahkan fitur yang mengubah perilaku 'typeof' 
// untuk objek tertentu menjadi sesuatu yang non-standar yang merusak logika library.
// Hal ini dilarang oleh Clause 17.

// 4. Global Object Pollution
// Engine dilarang menambah properti asal-asalan ke 'globalThis'.
globalThis.standardFeature = "Safe";
// globalThis.if = "Dangerous"; // <--- Forbidden: Menambah keyword sebagai properti global.

console.log("Forbidden Extensions Verified: Menjaga integritas bahasa lintas platform.");
