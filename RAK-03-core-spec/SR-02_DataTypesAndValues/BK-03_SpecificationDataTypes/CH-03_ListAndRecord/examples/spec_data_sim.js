/**
 * CH-03: List and Record (Spec Lab)
 * 
 * Lab ini mensimulasikan bagaimana spesifikasi menggunakan 
 * "Record" secara internal untuk menyimpan state.
 */

// Simulasi Record [[PropertyDescriptor]]
const internalRecord = {
    "[[Value]]": 42,
    "[[Writable]]": true,
    "[[Enumerable]]": false,
    "[[Configurable]]": true
};

// Simulasi List (Urutan elemen spec)
const argumentList = [internalRecord, "Another Value", null];

console.log('--- Accessing Internal Record ---');
console.log(`Value: ${internalRecord["[[Value]]"]}`);

/**
 * MENTAL MODEL:
 * Record adalah "Kertas Formulir" internal spek. 
 * List adalah "Tumpukan Formulir" tersebut. 
 * Keduanya tidak terlihat oleh user JS, hanya 
 * digunakan oleh Engine untuk menaati aturan spek.
 */
