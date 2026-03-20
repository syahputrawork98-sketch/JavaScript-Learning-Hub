/**
 * LAB: Object Grouping (ES2024)
 * Note: Node.js 21+ required for Object.groupBy
 */

const sensorUnits = [
    { id: "S1", sector: "ALPHA", load: 200 },
    { id: "S2", sector: "BETA",  load: 500 },
    { id: "S3", sector: "ALPHA", load: 150 },
    { id: "S4", sector: "GAMMA", load: 800 },
    { id: "S5", sector: "BETA",  load: 300 }
];

console.log("--- Automatisasi Klasifikasi Sektor ---");

// 1. Mengelompokkan berdasarkan Sektor
const bySector = Object.groupBy(sensorUnits, (u) => u.sector);

console.log("Sektor ALPHA Units:");
console.table(bySector.ALPHA);

// 2. Mengelompokkan berdasarkan Level Beban
const byLoadLevel = Object.groupBy(sensorUnits, (u) => {
    return u.load > 400 ? "CRITICAL" : "STABLE";
});

console.log("\nStatus Beban Grid:");
console.log(`Unit Stabil: ${byLoadLevel.STABLE.length}`);
console.log(`Unit Kritis: ${byLoadLevel.CRITICAL.length}`);
