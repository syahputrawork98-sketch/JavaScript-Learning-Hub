/**
 * Pembuktian Conditional & Iteration
 * Menunjukkan perilaku switch, for-in, dan for-of.
 */

// 1. Jebakan Switch (Fall-through)
console.log("=== 1. Jebakan Switch ===");
const level = 1;
switch (level) {
    case 1:
        console.log("Level 1 Terdeteksi");
        // Tanpa break!
    case 2:
        console.log("Level 2 Terikut (Fall-through!)");
        break;
    default:
        console.log("Level Default");
}

// 2. Perbandingan Iterasi Array
console.log("\n=== 2. for...in vs for...of pada Array ===");
const data = ["A", "B", "C"];
data.info = "Data Tambahan"; // Properti non-indeks

console.log("-- Menggunakan for...in (Key/Index) --");
for (let key in data) {
    console.log(`Index: ${key}`); // info akan ikut terprint!
}

console.log("\n-- Menggunakan for...of (Value) --");
for (let val of data) {
    console.log(`Value: ${val}`); // info diabaikan, hanya elemen array saja.
}

// 3. Continue vs Break
console.log("\n=== 3. Continue vs Break ===");
console.log("Mencari angka genap 1-6, lewati 4, berhenti di 6:");
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) continue; // Lewati yang ganjil
    if (i === 4) {
        console.log("Jump 4!");
        continue;
    }
    console.log("Angka: ", i);
    if (i === 6) break; // Berhenti di 6
}
