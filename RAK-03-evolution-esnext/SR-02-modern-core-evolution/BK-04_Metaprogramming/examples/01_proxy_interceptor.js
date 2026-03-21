/**
 * PILLAR 1: Proxy Interceptor (Validation Trap)
 * Membangun perisai digital yang memvalidasi data sebelum menyentuh objek.
 */

const node = { id: "HUB-01", energy: 100 };

const validator = new Proxy(node, {
    set(target, prop, value) {
        if (prop === "energy") {
            if (value < 0) throw new Error("Safety Violation: Energy cannot be negative");
            if (value > 1000) console.log("Warning: Overload detected!");
        }
        target[prop] = value;
        return true;
    }
});

console.log("--- Proxy Interceptor ---");
validator.energy = 500;
console.log(`Energy set to: ${node.energy}`);

try {
    validator.energy = -10;
} catch (e) {
    console.log(`Intercepted ERROR: ${e.message}`);
}
