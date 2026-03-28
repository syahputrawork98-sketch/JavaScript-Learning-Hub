/**
 * LAB: Energy Routing Logic
 * Level: Gold Standard Implementation
 */

// 1. Dasar: Short-circuiting for Efficiency
const gridActive = true;
const reactorStable = false;

// Aliran hanya diteruskan jika GRID dan REACTOR aktif
const systemOnline = gridActive && reactorStable;
console.log(`[SYS] System Online Status: ${systemOnline}`);

// 2. Lanjutan: Nullish Coalescing (The Backup Generator)
let userConfig = {
    energyLimit: 0, // Nilai 0 adalah valid
    timeout: null
};

// Penggunaan || (SALAH): 0 dianggap falsy, sehingga mengacu ke default 100
const limitOld = userConfig.energyLimit || 100; 

// Penggunaan ?? (BENAR): 0 tetap dipertahankan, hanya null/undefined yang diganti
const limitNew = userConfig.energyLimit ?? 100;
const timeout = userConfig.timeout ?? 5000;

console.log(`[CONFIG] Limit Old: ${limitOld}, Limit New: ${limitNew}`);
console.log(`[CONFIG] Timeout: ${timeout}ms`);

// 3. Arsitektur: Complex Logical Routing
const isAdmin = true;
const hasKey = true;
const emergencyOverride = false;

const canAccessVault = (isAdmin && hasKey) || emergencyOverride;
console.log(`[SECURITY] Vault Access: ${canAccessVault ? "GRANTED" : "DENIED"}`);

// 4. Architect Drill: Strict Equality in Grid
const signalA = "500";
const signalB = 500;

console.warn(`Loose (==):   ${signalA == signalB}`);  // true (Risky!)
console.error(`Strict (===): ${signalA === signalB}`); // false (Safe & Recommended)
