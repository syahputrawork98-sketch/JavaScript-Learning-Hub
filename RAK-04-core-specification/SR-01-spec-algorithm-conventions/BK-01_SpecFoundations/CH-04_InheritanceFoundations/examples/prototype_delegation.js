/**
 * CH-04: Inheritance Foundations
 * 
 * Demonstrasi mekanisme delegasi Prototype Chain.
 */

// 1. Membuat Blueprint sederhana (Prototype Provider)
const machineProto = {
    brand: "Generic",
    work: function() {
        return `Mesin ${this.brand} sedang bekerja...`;
    }
};

// 2. Membuat Instance yang mewarisi dari machineProto
// Secara spek: Instance.[[Prototype]] -> machineProto
const robot = Object.create(machineProto);

// Instance bisa punya properti sendiri (Own Property)
robot.brand = "Antigravity-X"; 

// 3. Demonstrasi Look-up Delegative
console.log("Akses Own Property (robot.brand):", robot.brand);
console.log("Akses Inherited Method (robot.work):", robot.work());

// 4. Membuktikan Rantai (Prototype Chain)
console.log("Prototype dari robot:", Object.getPrototypeOf(robot) === machineProto);
console.log("Prototype dari machineProto:", Object.getPrototypeOf(machineProto) === Object.prototype);
console.log("Akhir dari rantai:", Object.getPrototypeOf(Object.prototype)); // null

// 5. Dinamisme Pewarisan
// Jika kita menambah fitur di prototype 'setelah' instance dibuat
machineProto.upgrade = function() {
    return "Versi 2.0 Ready!";
};

// Robot otomatis punya akses karena ini adalah DELEGASI, bukan COPY.
console.log("Akses fitur baru dari prototype:", robot.upgrade());

console.log("Inheritance Foundations Verified: Delegasi menjaga efisiensi memori.");
