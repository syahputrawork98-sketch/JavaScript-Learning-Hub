/**
 * PILLAR 1: Identity & Singleton Comparison
 * Membedah perbedaan fundamental antara null dan undefined di level bit.
 */

const u = undefined;
const n = null;

console.log("--- Identity Matrix ---");
console.log(`1. Equality (==): ${u == n}`);   // true
console.log(`2. Identity (===): ${u === n}`); // false

// Null as an Intentional Absence
let energyCore = null; 
console.log(`Initial state: ${energyCore}`);

energyCore = "ACTIVE";
console.log(`Current state: ${energyCore}`);

// Undefined as Uninitialized
let backupCore;
console.log(`Backup state: ${backupCore}`);
