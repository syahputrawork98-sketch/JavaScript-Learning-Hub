/**
 * LAB: Quantifiers (Pulse Frequency)
 * Mental Model: "Pulse Frequency"
 */

const sensorData = "ID123, ID9999, ID2, SERIAL007-X, ENERGY: 500MW";

console.log("--- Mengetes Frekuensi Scanner ---");

// 1. Mencari ID dengan 3 Digit (Tepat)
const exactID = sensorData.match(/ID\d{3}/g);
console.log("ID 3-Digit (Fixed):", exactID); // ["ID123"]

// 2. Mencari ID dengan Digit yang bervariasi (1 atau lebih)
const genericID = sensorData.match(/ID\d+/g);
console.log("Semua ID (Generic):", genericID); // ["ID123", "ID9999", "ID2"]

// 3. Opsional: Mencari SERIAL yang mungkin memiliki suffix -X
const serialScanner = /SERIAL\d{3}(-X)?/g;
console.log("Serial Trace:", sensorData.match(serialScanner));


// 4. Greedy vs Lazy (Kasus: ENERGY Data)
const text = "DATA: [100MW] --- [200MW]";

// Greedy: Mengambil dari '[' pertama ke ']' terakhir
console.log("\nGreedy Find:", text.match(/\[.*\]/g)); // ["[100MW] --- [200MW]"]

// Lazy: Berhenti di ']' terdekat
console.log("Lazy Find:", text.match(/\[.*?\]/g));  // ["[100MW]", "[200MW]"]
