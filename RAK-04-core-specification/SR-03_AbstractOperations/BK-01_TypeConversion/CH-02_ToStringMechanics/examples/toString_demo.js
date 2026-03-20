/**
 * Pembuktian Konversi ToString berdasarkan ECMA-262 (Clause 7.1.17)
 * Menampilkan bahaya operator '+', perbedaan String() vs .toString()
 */

// 1. ECMA-262 ToString Rules (Konversi Tipe Primitif)
console.log("=== 1. ToString Rules (Primitives) ===");
console.log(`String(undefined):`, String(undefined)); // "undefined"
console.log(`String(null):`, String(null));           // "null"
console.log(`String(true):`, String(true));           // "true"
console.log(`String(42.5):`, String(42.5));           // "42.5"

// 2. Bahaya Lem Ambigu (Operator '+')
console.log("\n=== 2. Implicit Coercion (Operator +) ===");
console.log(`10 + 5:`, 10 + 5);             // 15 (Math)
console.log(`'10' + 5:`, '10' + 5);         // "105" (Concatenation string wins)
console.log(`10 + '5':`, 10 + '5');         // "105" (Concatenation string wins)
console.log(`10 + 5 + 'px':`, 10 + 5 + 'px'); // "15px" (Evaluasi kiri ke kanan: Math dulu, lalu Concat)
console.log(`'px' + 10 + 5:`, 'px' + 10 + 5); // "px105" (Kiri sudah String, semua lanjut Concat)

// 3. Konversi Object Kompleks
console.log("\n=== 3. Complex Objects to String ===");
console.log(`String([]):`, String([]));           // "" (String Kosong)
console.log(`String([1, 2]):`, String([1, 2]));   // "1,2" (Default Array toString memanggil join(','))
console.log(`String({}):`, String({}));           // "[object Object]" 

// 4. String() vs .toString() (Keamanan)
console.log("\n=== 4. Keamanan Konversi Eksplisit ===");
const dataAman = null;
console.log(`Menggunakan String():`, String(dataAman)); // "null" (Berhasil tanpa error)

try {
    console.log(`Menggunakan .toString():`, dataAman.toString()); // TypeError Crash
} catch (error) {
    console.log(`[ERROR TERCEGAH]:`, error.message);
}
