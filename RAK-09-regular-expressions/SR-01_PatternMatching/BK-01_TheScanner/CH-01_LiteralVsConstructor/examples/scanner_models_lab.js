/**
 * LAB: Literal vs Constructor (Scanner Models)
 * Mental Model: "Scanner Models"
 */

// 1. Scanner Statis (Literal) - Cepat & Langsung
const staticScanner = /PULSE-\d{3}/;
const testData = "Incoming signal: PULSE-888";

console.log("--- Mengetes Scanner Statis ---");
console.log(`Pola Ditemukan: ${staticScanner.test(testData)}`);


// 2. Scanner Dinamis (Constructor) - Fleksibel
function createScanner(sectorCode) {
    // Merakit pola berdasarkan input
    const pattern = `SECTOR-${sectorCode}`;
    return new RegExp(pattern, "g");
}

const dynamicScanner = createScanner("ALPHA");
const gridLog = "SECTOR-ALPHA: High Voltage, SECTOR-BETA: Stable, SECTOR-ALPHA: Normal";

console.log("\n--- Mengetes Scanner Dinamis (Sektor ALPHA) ---");
const matches = gridLog.match(dynamicScanner);
console.log(`Temuan Sektor ALPHA: ${matches ? matches.length : 0} kali.`);


// 3. Jebakan Constructor (String Escaping)
// Hati-hati: saat menggunakan string di constructor, backslash harus di-double
const escapeScanner = new RegExp("\\d{3}"); // Sama dengan /\d{3}/
console.log(`\nShortcut Digit Found: ${escapeScanner.test("123")}`);
