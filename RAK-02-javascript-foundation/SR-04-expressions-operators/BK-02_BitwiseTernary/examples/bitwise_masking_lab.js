/**
 * LAB: Bitwise Masking & Conditional Circuits
 * Level: Gold Standard Implementation
 */

// 1. Dasar: Bitwise Flags (The Permission System)
const READ    = 0b001; // 1
const WRITE   = 0b010; // 2
const EXECUTE = 0b100; // 4

let userPermissions = READ | WRITE; // 0b011 (3)

console.log("--- PERMISSION CHECK ---");
console.log(`User has Read:    ${(userPermissions & READ) !== 0}`);
console.log(`User has Write:   ${(userPermissions & WRITE) !== 0}`);
console.log(`User has Execute: ${(userPermissions & EXECUTE) !== 0}`);

console.log("---");

// 2. Lanjutan: Bitwise Shifting (Fast Math)
const energyBase = 2;
const powerLevel = energyBase << 3; // Sama dengan 2 * 2^3 = 16
console.log(`Shifted Energy (2 << 3): ${powerLevel}`);

console.log("---");

// 3. Arsitektur: Instant Routing (Ternary)
const energyOutput = 450;
const status = energyOutput > 400 ? "OPTIMAL" : "CRITICAL";

console.log(`Hub Component Status: ${status}`);

// 4. Architect Drill: Bitwise NOT (The Inverter)
// Sering digunakan untuk mengecek index array (-1)
const sectorList = ["A1", "B2", "C3"];
const searchIdx = sectorList.indexOf("D4"); // -1

if (~searchIdx) {
    console.log("Sector found!");
} else {
    console.log("[SYS] Sector NOT found (Using bitwise ~ to check -1)");
}
