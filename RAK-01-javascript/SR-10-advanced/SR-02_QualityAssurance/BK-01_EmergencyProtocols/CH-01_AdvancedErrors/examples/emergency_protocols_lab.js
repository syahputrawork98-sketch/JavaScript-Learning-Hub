/**
 * LAB: Advanced Errors (Emergency Protocols)
 * Mental Model: "The Containment Box"
 */

// 1. Definisi Alert Kustom (Custom Error)
class GridFailureError extends Error {
    constructor(sector, message) {
        super(`[${sector}] ${message}`);
        this.name = "GridFailureError";
        this.sector = sector;
        this.timestamp = new Date();
    }
}

// 2. Simulasi Operasi Berisiko
function processEnergyFlow(amount) {
    if (typeof amount !== 'number') {
        throw new TypeError("Payload energi harus berupa numeric!");
    }
    if (amount > 1000) {
        throw new GridFailureError("SECTOR-7", "Overload terdeteksi saat transmisi.");
    }
    return `Aliran ${amount}MW stabil.`;
}

// 3. Eksekusi dalam Kotak Kontaminasi
console.log("--- Menjalankan Protokol Keamanan ---");

function runGridTest(amount) {
    try {
        console.log(`[START] Memproses ${amount}MW...`);
        const result = processEnergyFlow(amount);
        console.log(`[SUCCESS] ${result}`);
    } catch (error) {
        // Penanganan spesifik berdasarkan tipe
        if (error instanceof GridFailureError) {
            console.error(`[CRITICAL ALERT] Sektor ${error.sector} Bermasalah! Detail: ${error.message}`);
        } else {
            console.error(`[SYSTEM ERROR] Kesalahan tidak terduga: ${error.name} - ${error.message}`);
        }
    } finally {
        console.log("[FINALLY] Mematikan sensor sementara untuk pendinginan.\n");
    }
}

runGridTest(500);   // Sukses
runGridTest(1500);  // GridFailureError
runGridTest("MAX"); // TypeError
