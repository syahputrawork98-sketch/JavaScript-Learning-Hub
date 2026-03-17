/**
 * CH-02: The Concept of Type
 * 
 * Demonstrasi bahwa tipe melekat pada NILAI, bukan VARIABEL.
 */

// 1. Tipe Melekat pada Nilai
let data = 42;        // Nilai 42 berasal dari himpunan 'Number'
console.log("Tipe data (Number):", typeof data);

data = "JavaScript";  // Nilai ini berasal dari himpunan 'String'
console.log("Tipe data berubah (String):", typeof data);

// 2. Definisi "Set of Values"
// Boolean hanya memiliki dua anggota set: true & false.
const boolValues = [true, false];
boolValues.forEach(val => {
    console.log(`Nilai: ${val}, Masuk ke Himpunan: ${typeof val}`);
});

// 3. Objek sebagai "Set of Properties"
// Berbeda dengan primitif, objek adalah tipe yang anggotanya adalah koleksi properti.
const obj = { 
    type: "Object",
    concept: "Set of Properties"
};
console.log("Tipe obj:", typeof obj);

// 4. Identifikasi Tipe (Runtime)
function identifyType(value) {
    // Mesin JS mengecek ke kasta mana nilai ini berasal
    return `Nilai [${value}] adalah anggota dari Type: ${typeof value}`;
}

console.log(identifyType(100n)); // BigInt
console.log(identifyType(Symbol("id"))); // Symbol

console.log("Type Concept Verified: JavaScript adalah dinamis karena variabel tidak mengikat tipe.");
