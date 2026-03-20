/**
 * LAB: for...of & Spread (Automatic Conveyors)
 * Mental Model: "Automatic Conveyors"
 */

// 1. Data Source (Iterable)
const pulseFrequencies = [10, 20, 30, 40, 50];

console.log("--- Menjalankan Loop for...of ---");
for (const freq of pulseFrequencies) {
    console.log(`Frekuensi terdeteksi: ${freq}Hz`);
}


// 2. Menggunakan Spread Operator (Aliran Gabungan)
const backupFreq = [90, 100];
const fullGrid = [...pulseFrequencies, ...backupFreq];

console.log("\nGrid Tergabung (Spread):", fullGrid);


// 3. Iterasi pada String (Pulse Mapping)
const signal = "SOS";
console.log("\nMembedah Sinyal:");
const signalArray = [...signal]; // Spread string menjadi array
signalArray.forEach(char => console.log(`Karakter Pulse: ${char}`));


// 4. Bonus: Destructuring pada Iterable
const [mainOne, mainTwo, ...others] = fullGrid;
console.log("\nExtract Utama:", mainOne, mainTwo);
console.log("Sisa di Buffer:", others);
