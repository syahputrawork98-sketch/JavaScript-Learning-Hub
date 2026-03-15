/**
 * Pembuktian Prototypes & Inheritance
 * Menunjukkan bagaimana delegasi properti bekerja melalui Prototype Chain.
 */

// 1. Constructor Function (Pabrik)
function Kendaraan(merek) {
    this.merek = merek; // Own Property
}

// 2. Menambahkan Method ke Prototype (DNA Bersama)
Kendaraan.prototype.jalan = function() {
    console.log(`${this.merek} sedang melaju...`);
};

const mobil = new Kendaraan("Toyota");
const motor = new Kendaraan("Honda");

console.log("=== 1. Uji Properti & Method ===");
console.log("Merek Mobil :", mobil.merek); // Punya sendiri
motor.jalan(); // Delegasi ke Kendaraan.prototype

// 3. Bukti Berbagi Memori
console.log("\n=== 2. Bukti Delegasi Bersama ===");
console.log("Apakah mobil & motor berbagi method yang sama?", mobil.jalan === motor.jalan); // true

// 4. Menjelajahi Prototype Chain
console.log("\n=== 3. Penjelajahan Chain ===");
console.log("Prototype mobil adalah Kendaraan.prototype:", Object.getPrototypeOf(mobil) === Kendaraan.prototype);
console.log("Prototype Kendaraan.prototype adalah Object.prototype:", Object.getPrototypeOf(Kendaraan.prototype) === Object.prototype);
console.log("Ujung dari Chain adalah:", Object.getPrototypeOf(Object.prototype)); // null

// 5. Override (Shadowing)
console.log("\n=== 4. Shadowing Test ===");
mobil.jalan = function() {
    console.log(`${this.merek} melaju dengan mode TURBO!`);
};
mobil.jalan(); // Menggunakan property milik sendiri
motor.jalan(); // Masih menggunakan property milik prototype
