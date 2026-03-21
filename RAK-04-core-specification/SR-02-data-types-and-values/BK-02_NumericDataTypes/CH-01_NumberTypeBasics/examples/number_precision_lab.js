/**
 * LAB: Number Precision and Specialized Values
 * 
 * Eksperimen ini membedah perilaku internal Number (IEEE 754) 
 * sesuai Clause 6.1.6.1.
 */

// 1. IEEE 754 Precision Loss
console.log("--- 1. Precision Loss Audit ---");
const sum = 0.1 + 0.2;
console.log(`0.1 + 0.2 = ${sum}`);
console.log(`Is 0.1 + 0.2 === 0.3? ${sum === 0.3}`); // false

// 2. Safe Integer Boundaries
console.log("\n--- 2. Safe Integer Bound ---");
const maxSafe = Number.MAX_SAFE_INTEGER;
console.log(`MAX_SAFE_INTEGER: ${maxSafe}`);
console.log(`MAX_SAFE + 1: ${maxSafe + 1}`);
console.log(`MAX_SAFE + 2: ${maxSafe + 2}`);
console.log(`Is (max+1) === (max+2)? ${ (maxSafe + 1) === (maxSafe + 2) }`); // true! (Precision Lost)

// 3. Signed Zero Behavior
console.log("\n--- 3. Signed Zero Audit ---");
const pZero = +0;
const nZero = -0;
console.log(`+0 === -0: ${pZero === nZero}`); // true
console.log(`1 / +0: ${1 / pZero}`); // Infinity
console.log(`1 / -0: ${1 / nZero}`); // -Infinity

// 4. NaN: The Non-Identical Value
console.log("\n--- 4. NaN Identity ---");
const notANumber = NaN;
console.log(`NaN === NaN: ${notANumber === notANumber}`); // false
console.log(`Number.isNaN(NaN): ${Number.isNaN(notANumber)}`); // true
