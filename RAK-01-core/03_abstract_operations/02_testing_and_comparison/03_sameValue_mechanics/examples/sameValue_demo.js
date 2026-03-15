/**
 * Pembuktian SameValue dan SameValueZero berdasarkan ECMA-262
 * Menonjolkan perbedaan dengan === pada kasus NaN dan -0
 */

console.log("=== 1. Kasus NaN (Not-a-Number) ===");
console.log(`NaN === NaN:`, NaN === NaN);               // false (Aturan lama)
console.log(`Object.is(NaN, NaN):`, Object.is(NaN, NaN)); // true (SameValue)

const list = [1, NaN, 5];
console.log(`[1, NaN, 5].includes(NaN):`, list.includes(NaN)); // true (SameValueZero)

console.log("\n=== 2. Kasus Nol Positif & Negatif (+0 vs -0) ===");
console.log(`+0 === -0:`, +0 === -0);                   // true
console.log(`Object.is(+0, -0):`, Object.is(+0, -0));   // false (SameValue membedakan arah nol)

// SameValueZero (digunakan Map/Set/includes) menganggap +0 dan -0 sama
console.log(`[+0].includes(-0):`, [+0].includes(-0));   // true

console.log("\n=== 3. Perilaku pada Object & Reference ===");
// Pada objek, semua algoritma ini (===, Object.is) tetap mengecek referensi memori
const a = {};
const b = {};
console.log(`Object.is({}, {}):`, Object.is(a, b));     // false (Referensi berbeda)
console.log(`Object.is(a, a):`, Object.is(a, a));       // true (Referensi sama)
