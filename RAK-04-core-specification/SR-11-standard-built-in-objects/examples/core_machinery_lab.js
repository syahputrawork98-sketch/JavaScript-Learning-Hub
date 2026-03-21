/**
 * LAB: Mesin Inti Hub (SR-11 Standard Built-in Objects)
 * 
 * Eksperimen ini menguji unit pemrosesan data (Map/Set), 
 * unit matematika (BigInt), dan unit kontrol (Proxy/Promise).
 */

console.log("--- Mengetes Lab Mesin Inti (Core Machinery) ---\n");

// 1. Uji Coba Structural Units: Set & Map (ES2025 style logic)
const signals = new Set(["ALPHA", "BETA", "GAMMA"]);
console.log("Transmission Signals:", [...signals].join(", "));

const registry = new Map();
registry.set("NODE_01", { status: "ONLINE" });
console.log("Node Status:", registry.get("NODE_01").status);

// 2. Uji Coba Mathematical Processors: BigInt
const massiveEnergy = 2n ** 64n;
console.log("Massive Energy (BigInt):", massiveEnergy.toString(), "W");

// 3. Uji Coba Logic & Sync: Proxy Shield
const hubCore = { voltage: 220 };
const shieldedHub = new Proxy(hubCore, {
    set(target, prop, value) {
        console.log(`[SHIELD] Intercepted attempt to set ${prop} to ${value}`);
        if (value > 400) {
            console.error("[ALARM] Overvoltage detected! Suppression active.");
            return false;
        }
        return Reflect.set(target, prop, value);
    }
});

shieldedHub.voltage = 230; // Success
shieldedHub.voltage = 500; // Blocked

// 4. Uji Coba Promise Lifecycle
const asyncProbe = new Promise((resolve) => {
    setTimeout(() => resolve("PROBE_COMPLETE"), 100);
});
asyncProbe.then(res => console.log("Final Report:", res));

console.log("\n--- Lab Inisialisasi Selesai ---");
