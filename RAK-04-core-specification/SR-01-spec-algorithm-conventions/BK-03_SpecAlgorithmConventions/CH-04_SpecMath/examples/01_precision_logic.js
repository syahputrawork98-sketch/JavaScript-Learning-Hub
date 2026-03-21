/**
 * PILLAR 1: Mathematical Value Precision
 * Menunjukkan perbedaan antara matematika ideal (Spec) 
 * dan realita bit (Language).
 */

// Simulation: MV is infinite precision
// In spec, '0.1 + 0.2' as MV is exactly 0.3
const mvResult = 0.3; 

// In Language (IEEE 754), it is NOT exactly 0.3
const languageResult = 0.1 + 0.2;

console.log("--- Spec Math vs Language Type ---");
console.log(`Math Value (Ideal): ${mvResult}`);
console.log(`Language Type (IEEE): ${languageResult}`);
console.log(`Is equal? ${mvResult === languageResult}`); // false
