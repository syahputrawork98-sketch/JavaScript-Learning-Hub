/**
 * LAB: BigInt Integrity and Isolation
 */
const hugeID = 12345678901234567890n;
console.log(`BigInt ID: ${hugeID}`);
try { 10n + 5; } catch (e) { console.log(`Mixed types: ${e.message}`); }
console.log(`BigInt division: ${5n / 2n}`);
