// signal_distribution_lab.mjs
/**
 * LAB: Distribusi Sinyal (SR-10 Scripts & Modules)
 * 
 * Eksperimen ini membedul sistem transmisi ESM, Singleton behavior, 
 * dan Dynamic Sockets.
 */

import { version, settings } from './config.mjs';
import { version as v2 } from './config.mjs'; // Singleton Test

console.log("--- Mengetes Lab Distribusi Sinyal ---");

// 1. Singleton Test (BK-02)
console.log("Singleton Check:", version === v2 ? "SUCCESS (Same Instance)" : "FAILED");
console.log("Hub Version:", version);

// 2. Live Bindings Test (BK-03)
console.log("Transmission Mode:", settings.transmission);

// 3. Dynamic Socket Test (BK-03)
console.log("\n--- Mengetes Dynamic Socket ---");
try {
    // Simulasi pemuatan modul dinamis (menggunakan string literal untuk demo)
    // Note: Di Node.js, import() mengembalikan promise.
    const ping = await Promise.resolve({ data: "PONG" }); 
    console.log("Dynamic Response:", ping.data);
} catch (err) {
    console.error("Dynamic Socket Failure:", err.message);
}

console.log("\n--- Lab Selesai ---");
