/**
 * LAB: ES Modules (The Inter-Hub Relays)
 * Level: Gold Standard Implementation
 */

// 1. Dasar: Static Component Docking
import Generator, { UNIT_NAME, getStatus } from './SubHub_Unit.mjs';

console.log("--- STATIC RELAY ACTIVE ---");
console.log(`Connection established with: ${UNIT_NAME}`);
console.log(getStatus());

const gen = new Generator();
gen.ignite();

console.log("---");

// 2. Lanjutan: Top-Level Await (ES2022)
// Tidak perlu lagi membungkus dalam async function
console.log("Waiting for network handshake...");
await new Promise(resolve => setTimeout(resolve, 500));
console.log("Handshake Complete.");

console.log("---");

// 3. Arsitektur: Dynamic Logistics (Lazy Loading)
const loadEmergencyUnit = async () => {
    console.log("Deploying Emergency Unit...");
    
    // Memuat modul secara dinamis hanya saat dibutuhkan
    const { CORE_VOLTAGE } = await import('./SubHub_Unit.mjs');
    console.log(`Emergency Voltage detected: ${CORE_VOLTAGE}V`);
};

await loadEmergencyUnit();

console.log("---");

// 4. Architect Drill: Metadata Inspection
console.log("Relay Metadata:", import.meta.url);
