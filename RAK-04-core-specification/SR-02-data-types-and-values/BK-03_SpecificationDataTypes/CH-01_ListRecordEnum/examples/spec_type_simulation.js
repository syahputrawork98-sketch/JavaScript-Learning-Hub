/**
 * LAB: Specification Data Structures Simulation
 * 
 * Eksperimen ini mensimulasikan penggunaan Record dan List internal 
 * sesuai Clause 6.2.1 - 6.2.2 untuk mengelola data argumen.
 */

// 1. Record Simulation (Internal Dictionary)
console.log("--- 1. Record Simulation: Property Descriptor ---");
const createRecord = (fields) => Object.freeze({ ...fields });

const propRecord = createRecord({
    "[[Value]]": 100,
    "[[Writable]]": true,
    "[[Enumerable]]": true,
    "[[Configurable]]": false
});

console.log("Internal Record Fields:");
console.log(`Value: ${propRecord["[[Value]]"]}`);
console.log(`Configurable: ${propRecord["[[Configurable]]"]}`);

// 2. List Simulation (Ordered Sequence)
console.log("\n--- 2. List Simulation: Argument List ---");
const argList = ["JS", "Expert", 2024]; // Simulating « "JS", "Expert", 2024 »

console.log(`Number of elements in List: ${argList.length}`);
argList.forEach((el, i) => console.log(`Element ${i}: ${el}`));

// 3. Enum Simulation (Fixed Symbols)
console.log("\n--- 3. Enum Simulation: Status Flag ---");
const COMP_TYPE = Object.freeze({
    NORMAL: Symbol("normal"),
    THROW: Symbol("throw"),
    RETURN: Symbol("return")
});

console.log(`Current Status Enum: ${COMP_TYPE.NORMAL.description}`);
console.log(`Is it a Throw? ${COMP_TYPE.NORMAL === COMP_TYPE.THROW}`);
