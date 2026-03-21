/**
 * LAB: Symbol Protocols and Global Registry
 */
const id1 = Symbol("hub");
const id2 = Symbol("hub");
console.log(`id1 === id2: ${id1 === id2}`);
const sharedId = Symbol.for("energy_core");
console.log(`Symbol.keyFor: ${Symbol.keyFor(sharedId)}`);
const hubModule = {
    [Symbol.toPrimitive](hint) {
        return hint === "number" ? 1 : "Hub Core";
    }
};
console.log(`Coercion: ${+hubModule}`);
const obj = { visible: true };
obj[Symbol("secret")] = "Hidden";
console.log("Keys:", Object.keys(obj));
