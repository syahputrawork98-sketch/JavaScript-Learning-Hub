/**
 * modern_reactor.js
 * 
 * Implementasi hierarki reaktor energi menggunakan 
 * sintaks Modern ES6 Class.
 */

// 1. KELAS INDUK (Base Class)
class EnergyCore {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        this.status = "STABLE";
    }

    logStatus() {
        console.log(`[CORE] ${this.name}: Status ${this.status} | Kapasitas: ${this.capacity}kWh`);
    }
}

// 2. KELAS ANAK (Subclass - Spesialisasi)
class NuclearReactor extends EnergyCore {
    constructor(name, capacity, radiationLevel) {
        // PENTING: Panggil konstruktor induk dulu!
        super(name, capacity);
        this.radiationLevel = radiationLevel;
    }

    // Override Metode (Modifikasi fitur induk)
    logStatus() {
        super.logStatus(); // Panggil log standar
        console.log(`[RAD-SENSOR] Level Radiasi: ${this.radiationLevel} uSv/h`);
    }

    scram() {
        this.status = "EMERGENCY SHUTDOWN";
        console.log(`\n!!! SCRAM DIAKTIFKAN PADA ${this.name} !!!`);
    }
}

// 3. OPERASI UNIT
console.log("--- Mengaktifkan Reaktor Generasi Terbaru ---");
const mainReactor = new NuclearReactor("Reactor-Alpha", 1000000, 0.05);

mainReactor.logStatus();

// Simulasi Keadaan Darurat
mainReactor.scram();
mainReactor.logStatus();

// Verifikasi Prototipe (Di bawah kap mesin tetap sama)
console.log("\n--- Verifikasi Teknis ---");
console.log(`Apakah mainReactor adalah instansi dari NuclearReactor? : ${mainReactor instanceof NuclearReactor}`);
console.log(`Apakah mainReactor adalah instansi dari EnergyCore?    : ${mainReactor instanceof EnergyCore}`);
