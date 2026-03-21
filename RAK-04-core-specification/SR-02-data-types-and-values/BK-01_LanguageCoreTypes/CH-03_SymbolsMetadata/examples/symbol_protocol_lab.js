/**
 * LAB: Symbol Protocols and Global Registry
 * 
 * Eksperimen ini membedah penggunaan Symbol untuk meta-programming dan 
 * identitas unik sesuai Clause 6.1.5.
 */

// 1. Symbol Uniqueness
console.log("--- 1. Uniqueness Guarantee ---");
const id1 = Symbol("hub");
const id2 = Symbol("hub");
console.log(`id1 === id2: ${id1 === id2}`); // false

// 2. Global Registry (Cross-File Identity)
console.log("\n--- 2. Global Symbol Registry ---");
const sharedId = Symbol.for("energy_core");
const secondShared = Symbol.for("energy_core");
console.log(`sharedId === secondShared: ${sharedId === secondShared}`); // true
console.log(`Key for sharedId: ${Symbol.keyFor(sharedId)}`); // "energy_core"

// 3. Well-known Symbols (Meta-Programming)
console.log("\n--- 3. Well-known Symbol Protocol ---");
const hubModule = {
    core: "V1",
    [Symbol.toPrimitive](hint) {
        if (hint === "number") return 1;
        if (hint === "string") return "Hub Core V1";
        return null;
    }
};

console.log(`Number(hubModule): ${Number(hubModule)}`); // 1
console.log(`String(hubModule): ${String(hubModule)}`); // "Hub Core V1"

// 4. Hidden Properties
console.log("\n--- 4. Enumerability ---");
const obj = { visible: true };
obj[Symbol("secret")] = "Hidden Energy";

console.log("Object.keys:", Object.keys(obj)); // Only ["visible"]
console.log("Object.getOwnPropertySymbols:", Object.getOwnPropertySymbols(obj)); // [Symbol(secret)]
