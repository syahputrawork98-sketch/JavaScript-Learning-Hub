/**
 * Pembuktian Konversi ToBoolean berdasarkan ECMA-262 (Clause 7.1.2)
 * Menampilkan 6 nilai Falsy, sifat kurir pemalas dari && / ||, dan kegunaan ??
 */

// 1. Pembuktian 6 Daftar Blacklist (Falsy) vs Truthy
console.log("=== 1. Evaluasi Falsy vs Truthy ===");
console.log(`Boolean(undefined):`, Boolean(undefined)); // false
console.log(`Boolean(null):`, Boolean(null));           // false
console.log(`Boolean(0):`, Boolean(0));                 // false
console.log(`Boolean(NaN):`, Boolean(NaN));             // false
console.log(`Boolean(""):`, Boolean(""));               // false
// TRUTHY (The Trap!)
console.log(`Boolean(" "):`, Boolean(" "));             // true (String berisi spasi)
console.log(`Boolean([]):`, Boolean([]));               // true (Array kosong)
console.log(`Boolean({}):`, Boolean({}));               // true (Object kosong)

// 2. Double Bang (!!) Explicit Coercion
console.log("\n=== 2. Double Negation (!!) ===");
console.log(`!!1:`, !!1);                 // true
console.log(`!!'hello':`, !!'hello');     // true

// 3. Sifat Asli && dan || (Kurir Pemalas yang me-return Operand Asli, BUKAN Boolean)
console.log("\n=== 3. Sifat Asli Operator Logika (&& / ||) ===");
console.log(`'Apel' || 'Jeruk':`, 'Apel' || 'Jeruk');   // Mengembalikan 'Apel' (Berhenti di Truthy pertama)
console.log(`'' || 'Fallback':`, '' || 'Fallback');     // Mengembalikan 'Fallback' (Melewati falsy string kosong)
console.log(`'A' && 'B':`, 'A' && 'B');                 // Mengembalikan 'B' (Jalan sampai akhir jika truthy semua)
console.log(`0 && 'Data':`, 0 && 'Data');               // Mengembalikan 0 (Langsung pulang di falsy pertama)

// 4. Bahaya || vs Keamanan ?? (Nullish Coalescing)
console.log("\n=== 4. Trap || vs ?? (Default Parameters) ===");
const currentLevel = 0; // Level game user adalah 0
const fallbackLevel1 = currentLevel || 1; // 0 dianggap falsy -> BUG! User restart level 1
const fallbackLevel2 = currentLevel ?? 1; // Menghormati 0. Hanya bereaksi pada null/undefined -> AMAN!

console.log(`Menggunakan || pada Level=0 :`, fallbackLevel1); // 1 (Salah)
console.log(`Menggunakan ?? pada Level=0 :`, fallbackLevel2); // 0 (Benar)
