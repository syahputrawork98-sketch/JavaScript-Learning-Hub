/**
 * LAB: Probing ECMAScript Language Types
 * -------------------------------------
 * Membuktikan bahwa tipe di JS adalah 'Himpunan Nilai' (Set of Values)
 * sesuai ECMA-262 Clause 6.
 */

// 1. Mengidentifikasi Tipe tanpa 'typeof' (lebih akurat ke Spec)
function IdentifySpecType(v) {
    if (v === undefined) return "Undefined Type";
    if (v === null) return "Null Type";
    
    // Menggunakan [Object.prototype.toString] untuk melihat Internal Class
    return Object.prototype.toString.call(v);
}

const samples = [
    undefined,              // Undefined
    null,                   // Null
    true,                   // Boolean
    "Engine",               // String
    42,                     // Number (IEEE 754)
    Symbol("ID"),           // Symbol
    100n,                   // BigInt
    {},                     // Object
    []                      // Array Object (Exotic)
];

console.log("--- Lab: Probing Internal Types ---");
samples.forEach(s => {
    console.log(`Value: ${String(s).padEnd(10)} | Internal Spec Identity: ${IdentifySpecType(s)}`);
});

// 2. Demonstrasi Internal Slots (Melalui Proxy)
// Meskipun kita tidak bisa melihat slot [[Prototype]] secara langsung, 
// kita bisa melihat interaksi Abstract Operations melalu Proxy Traps.
const target = { atomic: true };
const observer = new Proxy(target, {
    get(obj, prop) {
        console.log(`\n[SPEC-INSIGHT] Abstract Op 'Get(O, P)' dipicu untuk properti: ${prop}`);
        return obj[prop];
    }
});

console.log("\n--- Lab: Observing Abstract Operations ---");
console.log(`Access result: ${observer.atomic}`);

// 3. Edge Case: Null-Type Paradox
console.log("\n--- Lab: The Null Paradox ---");
console.log(`Typeof null: ${typeof null} (JS Engine Legacy Bug)`);
console.log(`Internal Identity: ${IdentifySpecType(null)} (Spec Truth)`);
