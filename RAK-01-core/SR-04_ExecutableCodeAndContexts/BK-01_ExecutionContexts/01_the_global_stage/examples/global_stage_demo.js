/**
 * Pembuktian Global Stage (Realm & Global Context)
 * Menampilkan perbedaan Global Object vs Global Scope (let/const vs var)
 */

console.log("=== 1. Properti Bawaan Realm (Intrinsics) ===");
console.log(`Array ada?    :`, typeof Array);
console.log(`Math ada?     :`, typeof Math);
console.log(`Object ada?   :`, typeof Object);

console.log("\n=== 2. Global Object vs Global Scope ===");

var globalVar = "Saya masuk ke window/global";
let globalLet = "Saya hanya di Global Scope";

// Cek di browser (window) atau Node.js (global/this)
const isBrowser = typeof window !== "undefined";
const globalRef = isBrowser ? window : global;

console.log(`globalVar via referensi:`, globalRef.globalVar); // "Saya masuk ke window/global"
console.log(`globalLet via referensi:`, globalRef.globalLet); // undefined (let tidak masuk ke Global Object!)

console.log("\n=== 3. Global Context adalah Fondasi ===");
// window/global sebenarnya adalah 'this' di tingkat global
console.log(`this === globalRef? :`, this === globalRef || (isBrowser && this === undefined)); 
// Catatan: di ES Module, 'this' di top level adalah undefined. Di script biasa, 'this' adalah global object.
