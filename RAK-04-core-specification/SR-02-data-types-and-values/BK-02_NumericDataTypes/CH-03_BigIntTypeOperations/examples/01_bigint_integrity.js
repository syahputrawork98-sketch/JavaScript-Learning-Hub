/**
 * PILLAR 1: BigInt Integrity
 * Menangani angka bulat raksasa yang gagal diproses oleh Number.
 */

const huge = 12345678901234567890n;
const hugeNext = 12345678901234567891n;

console.log("--- BigInt Integrity ---");
console.log(`ID 1: ${huge}`);
console.log(`ID 2: ${hugeNext}`);
console.log(`Is Unique? ${huge !== hugeNext}`);

console.log("\n--- Number Failure Simulation ---");
const n1 = 12345678901234567890;
const n2 = 12345678901234567891;
console.log(`Number ID 1: ${n1}`);
console.log(`Number ID 2: ${n2}`);
console.log(`Is Unique in Number? ${n1 !== n2}`); // false (Collision!)
