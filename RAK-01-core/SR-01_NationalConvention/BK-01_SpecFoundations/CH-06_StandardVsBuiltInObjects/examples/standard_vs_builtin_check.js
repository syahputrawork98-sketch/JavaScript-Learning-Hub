/**
 * CH-06: Standard vs Built-in Objects
 * 
 * Demonstrasi identifikasi asal-usul objek di runtime.
 */

// 1. Standard Built-in Objects (Core ECMAScript)
// Dijamin ada di setiap lingkungan JavaScript standar.
const coreObjects = [Object, Array, Function, Promise, Map, Set];
coreObjects.forEach(obj => {
    console.log(`[Standard] ${obj.name} tersedia.`);
});

// 2. Host Built-in Objects (Environment Specific)
// Bergantung pada tempat JS dijalankan (Browser, Node, Deno, dll).
const isBrowser = typeof window !== "undefined";
const isNode = typeof process !== "undefined";

if (isBrowser) {
    console.log("[Host] window & document tersedia (Browser).");
} else if (isNode) {
    console.log("[Host] process & global tersedia (Node.js).");
}

// 3. Verifikasi Keberadaan Early-start
// Built-in objects ada bahkan tanpa import/deklarasi apa pun.
console.log("JSON adalah built-in:", typeof JSON !== "undefined");
console.log("Math adalah built-in:", typeof Math !== "undefined");

// 4. Architect Check: Portability Test
function isStandard(objName) {
    // Daftar ini hanya ilustrasi
    const standardList = ["Object", "Array", "String", "Number", "Boolean", "Symbol", "BigInt", "Promise"];
    return standardList.includes(objName) ? "YES (Portable)" : "NO (Might be Platform Specific)";
}

console.log("Is 'Promise' standard?", isStandard("Promise"));
console.log("Is 'window' standard?", isStandard("window"));

console.log("Standard vs Built-in Verified: Kenali batasan platform Anda.");
