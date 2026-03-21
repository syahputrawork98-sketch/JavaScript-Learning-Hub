/**
 * Pembuktian IsLooselyEqual (==) berdasarkan ECMA-262 (Clause 7.2.13)
 * Menunjukkan bagaimana Coercion bekerja sebelum perbandingan.
 */

console.log("=== 1. Keajaiban Null & Undefined ===");
console.log(`null == undefined:`, null == undefined);   // true (Spesifikasi khusus)
console.log(`null == false:`, null == false);           // false (Jangan terkecoh!)

console.log("\n=== 2. String vs Number (Negotiation) ===");
console.log(`'42' == 42:`, '42' == 42);   // true (ToNumber('42') -> 42)
console.log(`'' == 0:`, '' == 0);         // true (ToNumber('') -> 0)

console.log("\n=== 3. Boolean vs Yang Lain ===");
console.log(`true == 1:`, true == 1);     // true (ToNumber(true) -> 1)
console.log(`false == '0':`, false == '0'); // true (false jadi 0, '0' jadi 0)

console.log("\n=== 4. Object & Primitive ===");
console.log(`[ ] == 0:`, [] == 0);       // true ( [ ] -> "" -> 0 )
console.log(`[10] == 10:`, [10] == 10);   // true ( [10] -> "10" -> 10 )

console.log("\n=== 5. Falsy Trap ===");
// Semua ini mengembalikan true karena rantai coercion berakhir di Number 0
if (0 == false && "" == 0 && "" == false) {
    console.log("Selamat datang di Falsy Trap!");
}
