/**
 * LAB: Storage Scope & Allotment
 * Level: Gold Standard Implementation
 */

// 1. Dasar: Const vs Let
const HUB_ID = "CORE-01";
let currentLoad = 400;

try {
    HUB_ID = "CORE-02"; // ERROR!
} catch (e) {
    console.warn(`[WATCHMAN] Const Lock Active: Tidak bisa mengubah HUB_ID.`);
}

currentLoad += 50; // OK
console.log(`[SYS] ${HUB_ID} Load: ${currentLoad}MW`);

console.log("---");

// 2. Lanjutan: Block Scope (The Isolation Zone)
if (true) {
    let internalSecret = "SHIELD-ACTIVE";
    var globalLeak = "EXPOSED";
    console.log(`Inside Block: ${internalSecret}`);
}

try {
    console.log(internalSecret); // ReferenceError
} catch (e) {
    console.error("[SYS] Akses Ditolak: 'internalSecret' terisolasi di dalam blok.");
}

console.warn(`[!] Var Leak: globalLeak tetap dapat diakses di luar: ${globalLeak}`);

console.log("---");

// 3. Arsitektur: Hoisting (The Detection Circuit)
console.log(`Checking hoisted value: ${hoistedVar}`); // undefined (tapi tidak error!)
var hoistedVar = "Detected early";

try {
    console.log(notHoistedLet);
} catch (e) {
    console.log("[SYS] Let/Const Safe: Tidak bisa diakses sebelum deklarasi (TDZ).");
}
let notHoistedLet = "Safe execution";
