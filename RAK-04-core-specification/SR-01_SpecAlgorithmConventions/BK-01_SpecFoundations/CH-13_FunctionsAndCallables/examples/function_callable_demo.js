/**
 * CH-13: Functions & Callables
 * 
 * Demonstrasi Internal Methods [[Call]] dan [[Construct]].
 */

// 1. Regular Function: Memiliki [[Call]] & [[Construct]]
function Regular(name) {
    this.name = name;
}

// Call: Dipanggil biasa
Regular("Direct Call"); 

// Construct: Dipanggil dengan 'new'
const instance = new Regular("Constructor Call");
console.log("Instance created:", instance.name);

// 2. Arrow Function: Hanya [[Call]], TIDAK ADA [[Construct]]
const Arrow = (name) => {
    this.name = name;
};

// Call: Sukses
Arrow("Callable only");

// Construct: Gagal!
try {
    new Arrow("Will crash");
} catch (e) {
    console.log("Error Expected (No [[Construct]]):", e.message);
}

// 3. Fungsi sebagai Objek (Function are Objects)
function sayHi() {}
sayHi.version = "1.0.0"; // Menambah properti kustom ke fungsi
sayHi.info = function() { return "I am a function object"; };

console.log("Function Property:", sayHi.version);
console.log("Function Method:", sayHi.info());

// 4. Built-in Function Identification
console.log("parseInt is callable:", typeof parseInt === "function");

console.log("Function Concept Verified: Fungsi adalah objek callable.");
