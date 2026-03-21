/**
 * Pembuktian Konversi ToNumber berdasarkan ECMA-262 (Clause 7.1.4)
 * Menampilkan beda konversi eksplisit, implisit, dan perilaku fungsi global.
 */

// 1. ToNumber vs parseInt (Satpam Ketat vs Penjaga Longgar)
console.log("=== 1. ToNumber vs parseInt ===");
console.log(`Number('10px'):`, Number('10px'));     // Ketat: Gagal total seluruh string -> NaN
console.log(`parseInt('10px'):`, parseInt('10px')); // Longgar: Ekstrak awal -> 10

// 2. ECMA-262 ToNumber Rules (Konversi Tipe Primitif)
console.log("\n=== 2. ToNumber Rules (Primitives) ===");
console.log(`Number(undefined):`, Number(undefined)); // NaN
console.log(`Number(null):`, Number(null));           // 0
console.log(`Number(true):`, Number(true));           // 1
console.log(`Number(''):`, Number(''));               // 0 (String kosong jadi nol)
console.log(`Number('    42   '):`, Number('    42   ')); // 42 (Whitespace diabaikan)

// 3. Implicit Coercion (Operasi Matematika)
console.log("\n=== 3. Implicit Coercion ===");
console.log(`'8' - 3:`, '8' - 3);   // String '8' dikonversi menjadi Number 8 -> 5
console.log(`'8' * '2':`, '8' * '2'); // Keduanya dipaksa jadi Number -> 16
console.log(`+'42':`, +'42');       // Unary plus adalah shortcut ToNumber -> 42

// 4. Object ke Number (ToPrimitive Abstract Operation)
console.log("\n=== 4. Object to Number ===");
console.log(`Number([]):`, Number([]));           // Array kosong -> string kosong '' -> 0
console.log(`Number([10]):`, Number([10]));       // Array 1 elemen numerik -> string '10' -> 10
console.log(`Number([10, 20]):`, Number([10, 20])); // Array multi elemen -> string '10,20' -> gagal (NaN)

// 5. Validasi Valid/Tidaknya Konversi
console.log("\n=== 5. Validasi Kegagalan (Number.isNaN) ===");
const convertedValue = Number('Kucing');
console.log(`Nilai hasil:`, convertedValue); 
// Salah: console.log(convertedValue === NaN); // Selalu false
// Benar:
console.log(`Validasi dengan Number.isNaN:`, Number.isNaN(convertedValue)); // true
