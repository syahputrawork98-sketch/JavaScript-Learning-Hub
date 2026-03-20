/**
 * CH-02: Undefined Type (Spec Lab)
 * 
 * Lab ini membuktikan keberadaan nilai 'undefined' 
 * sebagai default state dalam spesifikasi.
 */

// 1. Variabel tanpa inisialisasi
let power;
console.log(`Uninitialized: ${power}`); // undefined

// 2. Properti objek yang tidak ada
const core = {};
console.log(`Missing Property: ${core.energy}`); // undefined

// 3. Fungsi tanpa return explicit
function noReturn() {}
console.log(`Function Return: ${noReturn()}`); // undefined

/**
 * MENTAL MODEL:
 * 'undefined' artinya "Nilai ini belum pernah diberikan" 
 * atau "Saya tidak tahu apa ini".
 */
