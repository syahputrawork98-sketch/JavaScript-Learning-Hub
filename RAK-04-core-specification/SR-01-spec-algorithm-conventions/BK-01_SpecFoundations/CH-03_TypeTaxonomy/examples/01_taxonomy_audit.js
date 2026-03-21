/**
 * PILLAR 1: Language Type vs Specification Type
 * Membedah perbedaan antara nilai yang bisa diakses kode (Language) 
 * dan nilai internal (Spec).
 */

// Language Types are concrete values
const u = undefined;
const s = "Hub";

console.log("--- Language Type Detection ---");
console.log(`Type: ${typeof u}`);
console.log(`Type: ${typeof s}`);

// Spec Types are conceptual (Record, List, Completion)
// We simulate them using descriptive objects
const completionRecord = {
    "[[Type]]": "normal",
    "[[Value]]": 42,
    "[[Target]]": "empty"
};

console.log("\n--- Specification Record Simulation ---");
console.dir(completionRecord);
