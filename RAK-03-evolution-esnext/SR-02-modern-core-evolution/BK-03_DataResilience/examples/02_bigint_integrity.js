/**
 * PILLAR 2: BigInt Integrity
 * Membuktikan presisi angka besar pada koordinat sistem Hub.
 */

const maxSafe = Number.MAX_SAFE_INTEGER; // 9007199254740991

console.log("--- BigInt Integrity Test ---");
console.log(`Max Safe Integer: ${maxSafe}`);

// Number Precision Loss
console.log(`Number (max + 1): ${maxSafe + 1}`);
console.log(`Number (max + 2): ${maxSafe + 2}`); // Sama dengan atas! (Precision lost)

// BigInt Precision
const bigMax = BigInt(maxSafe);
console.log(`BigInt (max + 1): ${bigMax + 1n}`);
console.log(`BigInt (max + 2): ${bigMax + 2n}`); // Berbeda! (Accuracy maintained)
