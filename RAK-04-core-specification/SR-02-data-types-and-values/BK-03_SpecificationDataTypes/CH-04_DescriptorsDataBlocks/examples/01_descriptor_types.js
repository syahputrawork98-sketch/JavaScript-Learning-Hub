/**
 * PILLAR 1: Accessor vs Data Descriptors
 * Eksperimen terhadap izin akses properti di level record.
 */

const hub = {};

// Data Descriptor
Object.defineProperty(hub, "vitals", {
    value: "STABLE",
    writable: false,
    configurable: true
});

// Accessor Descriptor
let internalLog = "";
Object.defineProperty(hub, "telemetry", {
    get() { return `LOG: ${internalLog}`; },
    set(v) { internalLog = v; },
    enumerable: true
});

console.log(`Data: ${hub.vitals}`);
hub.telemetry = "INIT_COMPLETE";
console.log(`Accessor: ${hub.telemetry}`);

// Constraint: Cannot have both [[Value]] and [[Get]]
try {
    Object.defineProperty(hub, "err", { value: 1, get() { return 2; } });
} catch (e) {
    console.log(`Constraint Check: ${e.message}`);
}
