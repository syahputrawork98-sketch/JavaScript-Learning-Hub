/**
 * Pembuktian IsStrictlyEqual (===) berdasarkan ECMA-262 (Clause 7.2.14)
 * Menunjukkan bahwa tipe data harus sama dan tidak ada coercion.
 */

console.log("=== 1. Tipe Data Berbeda ===");
console.log(`'42' === 42:`, '42' === 42); // false (String vs Number)
console.log(`null === undefined:`, null === undefined); // false

console.log("\n=== 2. Kasus Khusus Number ===");
console.log(`NaN === NaN:`, NaN === NaN); // false (Satu-satunya nilai yang tidak sama dengan dirinya sendiri)
console.log(`+0 === -0:`, +0 === -0);     // true

console.log("\n=== 3. Perbandingan Referensi (Object/Array) ===");
const arr1 = [1, 2];
const arr2 = [1, 2];
const arr3 = arr1;

console.log(`arr1 === arr2:`, arr1 === arr2); // false (Isi sama, tapi referensi memori berbeda)
console.log(`arr1 === arr3:`, arr1 === arr3); // true (Merujuk ke memori yang sama)

console.log("\n=== 4. String & Boolean ===");
console.log(`'JS' === 'JS':`, 'JS' === 'JS'); // true
console.log(`true === 1:`, true === 1);       // false (Beda dengan ==)
