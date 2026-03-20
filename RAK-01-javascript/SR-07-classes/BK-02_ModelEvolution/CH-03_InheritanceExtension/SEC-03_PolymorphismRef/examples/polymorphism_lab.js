/**
 * LAB: Polymorphism (Versatile Output)
 * Mental Model: "Versatile Output"
 */

class GridComponent {
    operate() {
        console.log("Menjalankan Prosedur Standar...");
    }
}

class CoolingSystem extends GridComponent {
    operate() {
        console.log("[Cooling] Memutar kipas pendingin...");
    }
}

class GeneratorUnit extends GridComponent {
    operate() {
        console.log("[Generator] Memutar turbin energi...");
    }
}

class SecurityShield extends GridComponent {
    operate() {
        console.log("[Security] Mengaktifkan perisai laser...");
    }
}

// Koleksi Berbagai Unit
const hubUnits = [
    new CoolingSystem(),
    new GeneratorUnit(),
    new SecurityShield(),
    new GridComponent() // Unit standar
];

console.log("--- Menjalankan Protokol Global: .operate() ---");

// Satu perintah tunggal memicu banyak bentuk respons
hubUnits.forEach(unit => {
    unit.operate();
});

console.log("\nStatus: Seluruh unit merespons sesuai spesifikasi model.");
