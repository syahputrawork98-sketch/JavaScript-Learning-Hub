/**
 * CH-14: Private Element (Spec Lab)
 * 
 * Lab ini menunjukkan implementasi Private Element 
 * menggunakan sintaks # (Hash).
 */

class EnergyCore {
    #plasmaLevel = 5000; // Private Element

    getRating() {
        return this.#plasmaLevel > 1000 ? "HIGH" : "LOW";
    }
}

const core = new EnergyCore();
console.log(`Rating: ${core.getRating()}`);

// Mencoba akses langsung (Melempar error secara statis/dinamis)
try {
    console.log(core.#plasmaLevel);
} catch (e) {
    console.log("Access Denied: Private field is protected by Spec.");
}

/**
 * MENTAL MODEL:
 * Private Element adalah "Ruang Brankas" di dalam rumah (Class). 
 * Orang luar bisa melihat rumahnya, tapi tidak bisa 
 * masuk ke brankas tanpa kunci (method internal).
 */
