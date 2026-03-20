/**
 * LAB: Proxy Basics (The Interceptor)
 * Mental Model: "The Interceptor"
 */

// 1. Target: Unit Kontrol Energi asli
const energyUnit = {
    level: 100,
    status: "STABLE",
    sector: "ALPHA-1"
};

// 2. Handler: Protokol Pengawasan (Watchman Protocol)
const validatorHandler = {
    // Trap untuk pembacaan data
    get(target, prop) {
        if (!(prop in target)) {
            console.warn(`[ALERT] Akses ilegal ke properti yang tidak ada: ${prop}`);
            return "ACCESS_DENIED";
        }
        return target[prop];
    },

    // Trap untuk penulisan data
    set(target, prop, value) {
        if (prop === 'level') {
            if (typeof value !== 'number') throw new Error("Level energi harus berupa angka!");
            if (value < 0 || value > 1000) throw new Error("Level energi di luar kapasitas (0-1000)!");
            
            console.log(`[LOG] Mengubah Energy Level dari ${target[prop]} ke ${value}`);
        }
        
        target[prop] = value;
        return true; // Menandakan operasi sukses
    }
};

// 3. Inisialisasi Proxy
const secureUnit = new Proxy(energyUnit, validatorHandler);

console.log("--- Operasi Grid Terpantau ---");

// Test Get
console.log(`Status Unit: ${secureUnit.status}`);
console.log(`Akses Ilegal: ${secureUnit.vaultCode}`); // Memicu warning

// Test Set (Valid)
secureUnit.level = 450;

// Test Set (Invalid)
try {
    secureUnit.level = "HIGH"; // Memicu error tipe data
} catch (e) {
    console.error(`[ERROR] ${e.message}`);
}

try {
    secureUnit.level = 5000; // Memicu error kapasitas
} catch (e) {
    console.error(`[ERROR] ${e.message}`);
}
