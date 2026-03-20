/**
 * Pembuktian Automatic Semicolon Insertion (ASI)
 * Menampilkan jebakan-jebakan umum saat mengandalkan ASI.
 */

console.log("=== 1. Jebakan Return (Restricted Production) ===");

function testReturn() {
    return 
    {
        pesan: "Halo"
    };
}

const hasil = testReturn();
console.log(`Hasil return:`, hasil); // undefined! 
// Karena ASI menyisipkan ';' tepat setelah kata 'return'.

// 2. Bahaya IIFE tanpa Semicolon
console.log("\n=== 2. Bahaya IIFE tanpa Semicolon ===");

const a = 1
// (function() {
//    console.log("IIFE Berjalan");
// })()

console.log("Catatan: Baris di atas jika tidak dikomen akan Error:");
console.log("TypeError: 1 is not a function.");
// Karena tanpa ';', baris 17-19 dianggap sebagai: 1(function(){...})()

// 3. ASI yang Berhasil Mendukung Gaya Tanpa Semicolon
console.log("\n=== 3. ASI yang Bekerja dengan Benar ===");
let x = 10
let y = 20
console.log(`x + y =`, x + y); // Berhasil karena ASI menyisipkan ';' di tiap baris.
