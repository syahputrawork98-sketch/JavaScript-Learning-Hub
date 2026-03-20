/**
 * LAB: Groups & Ranges (Sub-Signature Sorting)
 * Mental Model: "Sub-Signature Sorting"
 */

const dataBundle = "ALPHA:800MW, BETA:1200MW, GAMMA:500MW";

console.log("--- Memilah Data Sektor ---");

// 1. Mengambil Nama Sektor & Nilainya (Capturing Groups)
const sectorScanner = /(\w+):(\d+)MW/g;
let match;

while ((match = sectorScanner.exec(dataBundle)) !== null) {
    // index 0 = Full match
    // index 1 = Nama Sektor
    // index 2 = Nilai Energi
    console.log(`[FOUND] Sektor: ${match[1]}, Power: ${match[2]} MegaWatts`);
}


// 2. Named Groups (Sintaks Modern ES2018+)
const logEntry = "2026-03-19 EVENT:CRITICAL";
const logScanner = /(?<date>\d{4}-\d{2}-\d{2}) EVENT:(?<level>\w+)/;
const logResult = logEntry.match(logScanner);

if (logResult && logResult.groups) {
    console.log("\n--- Log Analysis (Named) ---");
    console.log(`Date tracked: ${logResult.groups.date}`);
    console.log(`Alert level: ${logResult.groups.level}`);
}


// 3. Alternation & Ranges (Unit Model)
const modelCheck = /Model (A|B)-\d{2}/;
console.log("\n--- Model Validation ---");
console.log(`Model A-10 Valid? ${modelCheck.test("Model A-10")}`);
console.log(`Model C-10 Valid? ${modelCheck.test("Model C-10")}`); // False: Bukan A atau B
