/**
 * LAB: Object Internal Methods and Exotic Behaviors
 * 
 * Eksperimen ini membedah infrastruktur internal objek sesuai Clause 6.1.7.
 */

// 1. Ordinary Object Integrity
console.log("--- 1. Ordinary Internal Dispatch ---");
const hub = { energy: 100 };
console.log("Accessing 'energy' triggers internal [[Get]]");
console.log(`Value: ${hub.energy}`);

// 2. Exotic Object: Proxy (Trap System)
console.log("\n--- 2. Exotic Behavior (Proxy) ---");
const exoticHub = new Proxy(hub, {
    get(target, prop, receiver) {
        console.log(`[[Get]] Trap triggered for: ${prop}`);
        return prop in target ? target[prop] : "Sirkuit Putus";
    }
});

console.log(exoticHub.energy);
console.log(exoticHub.void);

// 3. Property Descriptors (Attribute Locking)
console.log("\n--- 3. Attributes & Integrity ---");
const config = { version: 1.0 };
Object.defineProperty(config, "coreID", {
    value: "0xFFFF",
    writable: false,
    configurable: false
});

console.log(`coreID: ${config.coreID}`);
config.coreID = "0000"; // Silently fails
console.log(`coreID after mutation attempt: ${config.coreID}`); // Still 0xFFFF

// 4. Reference Identity
console.log("\n--- 4. Reference Identity ---");
console.log(`{} === {}: ${{} === {}}`); // false (Different addresses)
const refA = { id: 1 };
const refB = refA;
console.log(`refA === refB: ${refA === refB}`); // true (Same address)
