/**
 * Pembuktian Class Syntax Sugar
 * Menunjukkan penggunaan class, extends, dan super.
 */

// 1. Parent Class
class Robot {
    constructor(nama) {
        this.nama = nama;
    }

    identity() {
        console.log(`Halo, saya robot ${this.nama}`);
    }

    // Static Method (Hanya ada di Class)
    static spesifikasi() {
        console.log("Hardware: Metal, Software: JavaScript OS");
    }
}

// 2. Child Class (Inheritance)
class RobotTempur extends Robot {
    constructor(nama, senjata) {
        // Harus panggil super() sebelum akses 'this'
        super(nama); 
        this.senjata = senjata;
    }

    serang() {
        super.identity(); // Panggil method induk
        console.log(`Menyerang menggunakan ${this.senjata}!`);
    }
}

console.log("=== 1. Uji Instansiasi ===");
const r1 = new RobotTempur("RX-78", "Beam Rifle");
r1.serang();

console.log("\n=== 2. Uji Static ===");
Robot.spesifikasi();
try {
    r1.spesifikasi(); 
} catch (e) {
    console.log("Static method tidak ada di instans! (TypeError)");
}

console.log("\n=== 3. Bukti Prototype di Balik Class ===");
console.log("Tipe RobotTempur:", typeof RobotTempur); // function
console.log("Apakah identity ada di prototype?", Robot.prototype.hasOwnProperty('identity')); // true
console.log("Apakah r1 instans dari Robot secara Chain?", r1 instanceof Robot); // true
