/**
 * LAB: Primitive Identity and Type Coercion
 * 
 * Eksperimen ini membedah perilaku internal Hub dalam menangani tipe data 
 * Undefined, Null, dan Boolean sesuai Clause 6.1.1 - 6.1.3.
 */

// 1. The Null Typeof Anomaly (Legacy Bug)
console.log("--- 1. Null Identity ---");
const nullVal = null;
console.log(`typeof null: ${typeof nullVal}`); // "object" (Legacy)
console.log(`Is null an object? ${nullVal instanceof Object}`); // false

// 2. Undefined vs Null in Comparisons
console.log("\n--- 2. Comparisons ---");
console.log(`null == undefined: ${null == undefined}`); // true (Loose)
console.log(`null === undefined: ${null === undefined}`); // false (Strict)

// 3. ToBoolean Conversion (Clause 7.1.2)
console.log("\n--- 3. ToBoolean Conversion ---");
const falsyCheck = (val) => Boolean(val);

console.log(`Boolean(undefined): ${falsyCheck(undefined)}`);
console.log(`Boolean(null): ${falsyCheck(null)}`);
console.log(`Boolean(false): ${falsyCheck(false)}`);
console.log(`Boolean(0): ${falsyCheck(0)}`);
console.log(`Boolean(""): ${falsyCheck("")}`);

// 4. Default Parameter Behavior
console.log("\n--- 4. Uninitialized Signals ---");
function checkEnergy(level = 100) {
    console.log(`Energy Level: ${level}`);
}

checkEnergy(undefined); // 100 (Triggers default)
checkEnergy(null);      // null (Does NOT trigger default)
