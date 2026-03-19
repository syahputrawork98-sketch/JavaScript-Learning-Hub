/**
 * LAB: Assertions (Grid Boundaries)
 * Mental Model: "Grid Boundaries"
 */

// 1. Validasi Awal & Akhir (Unit Header)
const unitID = "S-992-01";
const validIDScanner = /^S-\d{3}-\d{2}$/;

console.log("--- Validasi Struktur Unit ---");
console.log(`ID ${unitID} Valid? ${validIDScanner.test(unitID)}`);
console.log(`ID "S-992-01-X" Valid? ${validIDScanner.test("S-992-01-X")}`); // False: Ada data tambahan di akhir


// 2. Batas Kata (Word Boundaries)
const manual = "Instructions for the grid. There is no error.";
const wordScanner = /\bthe\b/; // Cari kata 'the' saja

console.log("\n--- Pencarian Kata Spesifik ---");
console.log(`Terdapat kata 'the'? ${wordScanner.test(manual)}`); // True
console.log(`Terdapat kata 'there' melalui scanner ini? ${wordScanner.test("there")}`); // False


// 3. Positive Lookahead (Input Validation)
// Cari angka hanya jika diikuti oleh unit 'KW'
const energyText = "Current usage: 450MW, Target: 100KW, Limit: 200MW";
const searchKW = /\d+(?=KW)/g;

console.log("\n--- Lookahead Scanner (Mencari nilai KW saja) ---");
console.log("Power dalam KW:", energyText.match(searchKW)); // ["100"] (MW diabaikan)
