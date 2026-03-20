/**
 * LAB: Super (Parent Link)
 * Mental Model: "Parent Link"
 */

// Model Dasar: Blueprint Keamanan
class SecureUnit {
    constructor(id) {
        this.id = id;
        this.isSecured = true;
        console.log(`[Base] Menetapkan ID Keamanan: ${id}`);
    }

    shutdown() {
        console.log(`[Base] Mematikan Arus Utama di ${this.id}...`);
    }
}

// Upgrade: Advanced Safety Unit
class AdvancedSafety extends SecureUnit {
    constructor(id, alarmCode) {
        // Wajib panggil super sebelum menyentuh 'this'
        super(id); 
        this.alarmCode = alarmCode;
        console.log(`[Advanced] Memasang Modul Alarm dengan kode: ${alarmCode}`);
    }

    // Overriding: Memodifikasi perilaku shutdown
    shutdown() {
        console.log("[Advanced] Mengaktifkan Alarm Protokol...");
        super.shutdown(); // Memanggil kemampuan asli dari Parent
        console.log("[Advanced] Seluruh sektor terkunci.");
    }
}

console.log("--- Merakit Unit Keamanan Lanjut ---");
const safetyUnit = new AdvancedSafety("SEC-MAX-01", "X-99");

console.log("\n--- Menjalankan Prosedur Shutdown ---");
safetyUnit.shutdown();
