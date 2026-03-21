/**
 * CH-03: Primitive Values & Objects
 * 
 * Demonstrasi perbedaan Immutability vs Mutability
 * dan fenomena Autoboxing.
 */

// 1. Primitive: Immutability & Pass-by-Value
let a = "hello";
let b = a; // Duplikasi nilai
b = "world";

console.log("Primitive a:", a); // "hello" (Tetap)
console.log("Primitive b:", b); // "world" (Berubah secara independen)

// 2. Object: Mutability & Pass-by-Reference
let objA = { name: "Alice" };
let objB = objA; // Duplikasi referensi (alamat)
objB.name = "Bob";

console.log("Object A name:", objA.name); // "Bob" (Ikut berubah karena satu alamat)
console.log("Object B name:", objB.name); // "Bob"

// 3. Autoboxing (Magic wrapping)
let str = "antigravity";
// 'str' adalah primitif, tapi kita bisa akses method seperti objek.
// Mesin JS melakukan: ToObject(str).toUpperCase()
console.log("Autoboxed string:", str.toUpperCase()); 

// 4. Verifikasi Immutability Primitif
let num = 100;
num.property = "secret"; // Mesin membuat pembungkus, pasang properti, lalu buang pembungkusnya.
console.log("Property on primitive:", num.property); // undefined (karena pembungkus aslinya sudah hilang)

console.log("Primitive vs Object Verified: Pilih primitif untuk efisiensi, objek untuk kompleksitas.");
