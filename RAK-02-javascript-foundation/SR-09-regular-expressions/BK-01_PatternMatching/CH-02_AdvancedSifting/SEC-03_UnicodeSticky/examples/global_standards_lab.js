/**
 * LAB: Unicode & Sticky (Global Grid Standards)
 * Mental Model: "Global Grid Standards"
 */

// 1. Unicode Test: Memindai Simbol Energi
// Tanpa 'u', mencocokkan karakter multi-byte seringkali gagal
const energyEmoji = "⚡🔋🔌";
const emojiScanner = /[\u{26A1}-\u{1F50C}]/u; // Range Unicode

console.log("--- Mengetes Scanner Global (Unicode) ---");
console.log(`Emoji Terdeteksi? ${emojiScanner.test(energyEmoji)}`);


// 2. Sticky Test: Scanner yang Patuh Posisi
const buffer = "HEADER:ENERGY_DATA:500";
const stickyScanner = /\w+/y;

console.log("\n--- Mengetes Scanner Patuh (Sticky) ---");

stickyScanner.lastIndex = 7; // Mulai di 'ENERGY'
let match = stickyScanner.exec(buffer);
console.log(`Posisi 7 ditemukan: ${match ? match[0] : "Null"}`); // ENERGY_DATA

match = stickyScanner.exec(buffer); // lastIndex sekarang di 18 (titik dua)
console.log(`Posisi selanjutnya (Sticky): ${match ? match[0] : "Null"}`); // Null (karena terhalang :)
