/**
 * CH-14: Properties & Methods
 * 
 * Demonstrasi bahwa method adalah properti yang berisi fungsi.
 */

// 1. Objek dengan Properti Data dan Method
const person = {
    // Data Property
    name: "Syahputra",
    age: 25,

    // Method (Property with Function value)
    greet: function() {
        return `Halo, nama saya ${this.name}`;
    }
};

console.log("Akses Data Property:", person.name);
console.log("Akses Method:", person.greet());

// 2. Membuktikan Method hanyalah Properti
console.log("Tipe greet:", typeof person.greet); // "function"
console.log("Apakah greet ada di Keys?", Object.keys(person).includes("greet")); // true

// 3. Dynamic Method Assignment
// Kita bisa menambah "kemampuan" pada objek di runtime
person.walk = function(steps) {
    return `${this.name} berjalan ${steps} langkah.`;
};

console.log(person.walk(100));

// 4. Method Swapping (Monkey Patching simulation)
const originalGreet = person.greet;
person.greet = function() {
    return `[MODIFIED] ${originalGreet.call(this)}!`;
};

console.log("Modified Greet:", person.greet());

// 5. Built-in Method Reflection
console.log("Array.prototype.push is a method:", typeof Array.prototype.push === "function");

console.log("Property & Method Concept Verified: Semua adalah properti.");
