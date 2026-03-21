/**
 * PILLAR 1: Internal Slots ([[]])
 * Membuktikan keberadaan status internal yang tidak bisa diakses langsung via string.
 */

const map = new Map();
map.set("key", "secret");

console.log("--- Internal Slot Evidence ---");
console.log(`Normal property access: ${map["[[MapData]]"]}`); // undefined

// How do we know it's there? Only via specific internal methods (get/set)
console.log(`Value via Method: ${map.get("key")}`);

// Comparison with ordinary objects which don't have these specific slots
const obj = {};
try {
    Map.prototype.get.call(obj, "key");
} catch (e) {
    console.log(`Incompatibility Proof: ${e.message}`); // Method Map.prototype.get called on incompatible receiver
}
