/**
 * Contoh: Host-Defined vs Implementation-Defined
 * 
 * - Implementation-Defined: Perilaku yang ditentukan oleh Engine (V8, SpiderMonkey).
 * - Host-Defined: Perilaku yang ditentukan oleh lingkungan tempat Engine berjalan (Browser, Node.js).
 */

console.log("--- Host-Defined Objects Check ---");

// Host Object: console
// Spec ECMA-262 tidak mendefinisikan 'console'. Ini adalah Host Object.
if (typeof console !== 'undefined') {
    console.log("Host menyediakan object 'console'.");
}

// Host-Defined Global: window vs global
const globalObj = typeof window !== 'undefined' ? 'Browser (window)' : (typeof global !== 'undefined' ? 'Node.js (global)' : 'Unknown Host');
console.log(`Lingkungan saat ini (Host): ${globalObj}`);

// Implementation-Defined: Urutan properti di object (Historis)
// Dulu, urutan for...in bersifat implementation-defined. 
// Sekarang sudah lebih distandarisasi, namun detail internal 
// seperti batas memori tetap bersifat implementation-defined.
const obj = { a: 1, b: 2, c: 3 };
console.log("Iterasi properti:");
for (let key in obj) {
    console.log(`- ${key}`);
}

/**
 * Kesimpulan:
 * Sebagai pengembang, kita harus tahu mana fitur 'Core JS' (Spec) 
 * dan mana fitur 'Host' agar kode kita bisa portable.
 */
