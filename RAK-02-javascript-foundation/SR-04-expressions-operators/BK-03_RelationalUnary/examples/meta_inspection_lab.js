/**
 * LAB: System Meta Inspection
 * Level: Gold Standard Implementation
 */

// 1. Dasar: Type Discovery
const sensors = [
    { id: "S1", active: true },
    500,
    "ALARM",
    null
];

console.log("--- DISCOVERY SCAN ---");
sensors.forEach(s => {
    console.log(`Component: ${s} -> Type: ${typeof s}`);
});

console.log("---");

// 2. Lanjutan: Relation Check (in & instanceof)
class Reactor {}
const coreA = new Reactor();
const settings = { voltage: 220 };

console.log("--- INTEGRITY CHECK ---");
console.log(`Is coreA a Reactor? ${coreA instanceof Reactor}`);
console.log(`Has voltage settings? ${"voltage" in settings}`);
console.log(`Has temperature settings? ${"temperature" in settings}`);

console.log("---");

// 3. Arsitektur: The Delete Risk
const unit = { name: "HUB-01", sector: "Alpha" };
console.log("Initial Unit:", unit);

// Menghapus properti
delete unit.sector;
console.log("After Deletion (sector):", unit);

// 4. Architect Drill: typeof null Trap
const gridValue = null;
if (typeof gridValue === "object" && gridValue === null) {
    console.warn("[CHECK] Menangani keanehan 'typeof null' yang mengembalikan 'object'.");
}
