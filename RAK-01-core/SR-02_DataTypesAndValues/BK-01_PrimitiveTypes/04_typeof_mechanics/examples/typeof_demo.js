/**
 * Pembuktian Operator typeof (Deteksi Tipe)
 * Menampilkan hasil deteksi untuk setiap tipe data dan mengungkap bug 'null'.
 */

console.log("=== 1. Deteksi Primitif ===");
console.log(`typeof undefined :`, typeof undefined); // "undefined"
console.log(`typeof true      :`, typeof true);      // "boolean"
console.log(`typeof 42        :`, typeof 42);        // "number"
console.log(`typeof 42n       :`, typeof 42n);       // "bigint"
console.log(`typeof "Hello"   :`, typeof "Hello");   // "string"
console.log(`typeof Symbol()  :`, typeof Symbol());  // "symbol"

console.log("\n=== 2. Deteksi Objek & Fungsi ===");
console.log(`typeof { id: 1 } :`, typeof { id: 1 }); // "object"
console.log(`typeof [1, 2]    :`, typeof [1, 2]);    // "object" (Array adalah objek)
console.log(`typeof function(){}:`, typeof function(){}); // "function" (Kecualian khusus)

console.log("\n=== 3. Jebakan Sejarah (null) ===");
const data = null;
console.log(`Nilai data       :`, data);
console.log(`typeof data      :`, typeof data); // "object" (HATI-HATI!)

// Cara cek null yang benar (bukan dengan typeof)
if (data === null) {
    console.log("Konfirmasi: Ini benar-benar null.");
}

// Mengecek 'object' yang sesungguhnya
const myObj = {};
const myNull = null;

const checkObject = (v) => v !== null && typeof v === "object";

console.log(`Apakah myObj objek asli?  :`, checkObject(myObj));  // true
console.log(`Apakah myNull objek asli? :`, checkObject(myNull)); // false
