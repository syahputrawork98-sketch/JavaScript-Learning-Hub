/**
 * LAB: The Energy Core (Object Fundamentals)
 * -----------------------------------------
 * Dalam lab ini, kita akan membangun sebuah 'Energy Hub' menggunakan objek.
 * Kita akan belajar cara mendifinisikan properti (data) dan metode (perilaku).
 */

// 1. Inisialisasi Hub Utama (Object Literal)
const energyHub = {
    name: "Alpha-Core",
    location: "Sector-7",
    capacity: 5000,
    status: "Active",
    
    // Metode untuk mengecek sisa kapasitas
    checkStatus() {
        return `Hub ${this.name} di ${this.location} saat ini ${this.status}.`;
    }
};

console.log("--- Tahap 1: Inisialisasi Hub ---");
console.log(energyHub.checkStatus());

// 2. Manipulasi Properti (Dot & Bracket Notation)
energyHub.lastMaintenance = "2026-03-20"; // Dot notation
energyHub["emergency-lock"] = false;      // Bracket notation (untuk key dengan simbol khusus)

console.log("\n--- Tahap 2: Menambah Metadata ---");
console.log(`Maintenance terakhir: ${energyHub.lastMaintenance}`);
console.log(`Emergency Lock: ${energyHub["emergency-lock"]}`);

// 3. Inspeksi Hub (Object Methods)
console.log("\n--- Tahap 3: Inspeksi Objek ---");
console.log("Daftar Kunci (Keys):", Object.keys(energyHub));
console.log("Jumlah Properti:", Object.keys(energyHub).length);

// 4. Iterasi Data Hub (Object.entries)
console.log("\n--- Tahap 4: Log Detail ---");
for (const [key, value] of Object.entries(energyHub)) {
    if (typeof value !== "function") {
        console.log(`> ${key.toUpperCase()}: ${value}`);
    }
}

// 5. Menghapus Properti
delete energyHub["emergency-lock"];
console.log("\n--- Tahap 5: Setelah Delet ---");
console.log("Emergency Lock Ada?", "emergency-lock" in energyHub);
