/**
 * LAB: Reference Record Resolution Logic
 * 
 * Eksperimen ini mensimulasikan mekanisme 'GetBase' dan 'GetValue' 
 * pada Reference Records sesuai Clause 6.2.5.
 */

// 1. Reference Record Structure
const createReference = (base, name, strict) => ({
    base,
    name,
    strict
});

// 2. Simulated Environment Record
const envRecord = {
    storage: { "x": 100, "y": 200 },
    hasBinding(n) { return n in this.storage; },
    getBindingValue(n) { return this.storage[n]; }
};

// 3. Simulated GetValue Algorithm
function getValue(ref) {
    if (ref.base === null) {
        throw new ReferenceError(`${ref.name} is not defined`);
    }
    
    if (typeof ref.base === "object" && ref.base.hasBinding(ref.name)) {
        return ref.base.getBindingValue(ref.name);
    }
    
    return undefined;
}

// 4. Execution Tests
console.log("--- 1. Valid Reference ---");
const refX = createReference(envRecord, "x", false);
console.log(`Resolving 'x': ${getValue(refX)}`);

console.log("\n--- 2. Unresolvable Reference ---");
const refVoid = createReference(null, "voidEnergy", true);
try {
    getValue(refVoid);
} catch (e) {
    console.log(`Caught: ${e.message}`);
}
