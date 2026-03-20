/**
 * CH-01: Language Types Overview (Spec Lab)
 * 
 * Lab ini menunjukkan 7 tipe data Language yang didefinisikan 
 * dalam spesifikasi (Clause 6.1).
 */

const values = [
    undefined,              // Undefined
    null,                   // Null
    true,                   // Boolean
    "ECMAScript",           // String
    Symbol("id"),           // Symbol
    42,                     // Number
    100n,                   // BigInt
    { name: "Object" }      // Object
];

console.log('--- Identifikasi Tipe via typeof ---');
values.forEach(v => {
    console.log(`Value: ${String(v).padEnd(12)} | typeof: ${typeof v}`);
});

/**
 * CATATAN PENTING:
 * 1. 'typeof null' adalah 'object' - Ini adalah bug sejarah (historical bug).
 * 2. Object adalah satu-satunya tipe non-primitive.
 * 3. Fungsi ('function') dianggap 'object' oleh spek, meskipun typeof mengembalikan 'function'.
 */
