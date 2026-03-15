/**
 * Pembuktian Source Text & Unicode
 * Menunjukkan penggunaan karakter internasional dan emoji sebagai identifier.
 */

// 1. Unicode Identifiers (Mulai ES6+)
const π = Math.PI;
const harga_Rp = 50000;
const 变量 = "Variabel Mandarin";

console.log("=== 1. International Identifiers ===");
console.log(`Pi (π)        :`, π);
console.log(`Harga (Rp)   :`, harga_Rp);
console.log(`Variables    :`, 变量);

// 2. Unicode Escape Sequences dalam Identifier
const \u0061 = "Huruf A"; // Sama dengan 'const a'
console.log("\n=== 2. Escape Sequence Identifier ===");
console.log(`Variabel 'a' via escape:`, a);

// 3. Karakter yang Terlihat Sama (Normalisasi)
const nfc_e = "\u00E9";       // é (Satu karakter)
const nfd_e = "\u0065\u0301"; // e + ´ (Dua karakter digabung)

console.log("\n=== 3. Normalisasi Visual ===");
console.log(`é (Satu) vs e´ (Dua) :`, nfc_e === nfd_e); // false!
console.log(`Visual Check:`, nfc_e, "vs", nfd_e);

// 4. Line Terminators (Penting untuk ASI)
const pesan = "Baris 1" 
+ "Baris 2"; // Line terminator di sini akan dianalisis oleh ASI
console.log("\n=== 4. Line Terminator Test ===");
console.log(pesan);
