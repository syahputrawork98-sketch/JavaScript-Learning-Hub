/**
 * LAB: Static Initialization (Core Startup)
 * Mental Model: "Core Lockdown" - Setup Phase
 */

class HubRegistry {
    static db;
    static initializedAt;

    // Static block memungkinkan logika kompleks (seperti try-catch)
    static {
        try {
            console.log("[SETUP] Mengoneksikan ke Database Registry...");
            // Simulasi koneksi
            this.db = { connection: "OK", nodes: 15 };
            this.initializedAt = Date.now();
            
            if (this.db.nodes > 10) {
                console.log("[SETUP] Grid Kapasitas Tinggi Terdeteksi.");
            }
        } catch (e) {
            console.error("[SETUP] Gagal inisialisasi registry statis.");
        }
    }
}

console.log(`Hub diinisialisasi pada timestamp: ${HubRegistry.initializedAt}`);
console.log(`Status DB: ${HubRegistry.db.connection}`);
