/**
 * inheritance_chain_demo.js
 * 
 * Demonstrasi efisiensi memori menggunakan Prototype 
 * untuk berbagi metode antar ribuan objek sektor.
 */

// 1. KONSTRUKTOR (Hanya data unik)
function Battery(id, capacity) {
    this.id = id;
    this.capacity = capacity;
}

// 2. PROTOTIPE (Metode bersama)
Battery.prototype.checkHealth = function() {
    console.log(`[SENSOR] Baterai ${this.id}: Kesehatan 100% | Kapasitas: ${this.capacity}mAh`);
};

// 3. PEMBUATAN UNIT
const bat1 = new Battery("B-001", 5000);
const bat2 = new Battery("B-002", 4500);

console.log("--- Menjalankan Metode dari Prototipe ---");
bat1.checkHealth();
bat2.checkHealth();

// 4. PEMBUKTIAN EFISIENSI
console.log("\n--- Verifikasi Rantai Sinyal ---");

// Apakah mereka memiliki salinan fisik metode checkHealth sendiri?
console.log(`Apakah bat1 punya metode checkHealth sendiri? : ${bat1.hasOwnProperty('checkHealth')}`); // false
console.log(`Apakah bat2 punya metode checkHealth sendiri? : ${bat2.hasOwnProperty('checkHealth')}`); // false

// Apakah mereka berbagi metode yang sama dari prototipe?
console.log(`Apakah mereka menggunakan metode yang sama? : ${bat1.checkHealth === bat2.checkHealth}`); // true

// 5. PENGECEKAN RANTAI (Prototype Chain)
console.log("\n--- Garis Keturunan (Chain) ---");
console.log(`Prototipe bat1 adalah Battery.prototype : ${Object.getPrototypeOf(bat1) === Battery.prototype}`);
console.log(`Prototipe Battery.prototype adalah Object.prototype : ${Object.getPrototypeOf(Battery.prototype) === Object.prototype}`);
