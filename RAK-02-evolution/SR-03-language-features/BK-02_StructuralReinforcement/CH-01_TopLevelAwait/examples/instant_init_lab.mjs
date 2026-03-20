/**
 * LAB: Top-Level Await (Instant Initialization)
 * Note: Node.js 14.8+ required.
 */

// Simulasi pengambilan data sensor dari remote Grid
async function fetchSectorStatus() {
    return new Promise(resolve => {
        setTimeout(() => resolve({ active: true, power: 850 }), 100);
    });
}

console.log("[INIT] Memulai inisialisasi sistem Hub...");

// 1. Top-Level Await (Mencegat ekspor sampai data siap)
const status = await fetchSectorStatus();

console.log(`[SUCCESS] Data Sektor Dimuat: Power ${status.power}MW`);

export const currentStatus = status;

// 2. Dynamic Import dengan await
const { performance } = await import("perf_hooks");
console.log(`[META] Sistem aktif pada: ${performance.now().toFixed(2)}ms`);
