/**
 * Pembuktian Perbedaan Perilaku Null vs Undefined
 * Menunjukkan kapan masing-masing muncul dan bagaimana perilaku konversinya.
 */

// 1. Kemunculan Otomatis (Undefined)
console.log("=== 1. Kemunculan Undefined (Otomatis) ===");
let a;
console.log(`Variabel tanpa nilai :`, a); // undefined

function test() {}
console.log(`Hasil fungsi tanpa return :`, test()); // undefined

const obj = { name: "JS" };
console.log(`Properti tidak ada :`, obj.age); // undefined

// 2. Pemberian Manual (Null)
console.log("\n=== 2. Pemberian Null (Manual) ===");
let b = null;
console.log(`Sengaja dikosongkan :`, b); // null

// 3. Perbandingan (== vs ===)
console.log("\n=== 3. Perbandingan ===");
console.log(`null == undefined :`, null == undefined);   // true (Equality longgar)
console.log(`null === undefined :`, null === undefined); // false (Tipe berbeda)

// 4. Perilaku Konversi Tipe (ToNumber)
console.log("\n=== 4. Dampak pada Matematika ===");
console.log(`1 + undefined :`, 1 + undefined); // NaN (Hancur)
console.log(`1 + null :`, 1 + null);           // 1 (Null dianggap 0 dalam matematika)

// 5. Jebakan typeof (Akan dibahas di Bab 04)
console.log("\n=== 5. typeof Check ===");
console.log(`typeof undefined :`, typeof undefined); // "undefined"
console.log(`typeof null :`, typeof null);           // "object" (Bug legendaris!)
