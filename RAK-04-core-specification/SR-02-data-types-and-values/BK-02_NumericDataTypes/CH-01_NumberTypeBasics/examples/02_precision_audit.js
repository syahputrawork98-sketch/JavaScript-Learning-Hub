/**
 * PILLAR 2: Precision Audit & Safe Integers
 * Simulasi hilangnya presisi pada 52-bit mantissa.
 */

console.log("--- Precision Trap ---");
console.log(`0.1 + 0.2: ${0.1 + 0.2}`);
console.log(`Is 0.3? ${0.1 + 0.2 === 0.3}`);

console.log("\n--- Safe Integer Limit ---");
const max = Number.MAX_SAFE_INTEGER;
console.log(`MAX_SAFE: ${max}`);
console.log(`MAX + 1: ${max + 1}`);
console.log(`MAX + 2: ${max + 2}`);
console.log(`MAX + 1 === MAX + 2: ${(max + 1) === (max + 2)}`); // true (Precision loss!)
