/**
 * LAB: Throwing Errors (Triggering Alarms)
 * Mental Model: "Triggering Alarms"
 */

function initiateCoreMeltDown(password) {
    const correctPass = "ADMIN-99";
    
    console.log("System: Menghitung otorisasi keamanan...");
    
    if (password !== correctPass) {
        // Memicu Alarm Manual
        throw new Error("AKSES ILEGAL: Password Salah! Mengunci seluruh ruang kontrol...");
    }

    return "AKSES DITERIMA. Prosedur Meltdown Dimulai...";
}

// Skenario 1: Penyusup mencoba masuk
console.log("--- SKENARIO 1: AKSES PENYUSUP ---");
try {
    console.log(initiateCoreMeltDown("HACKER-123"));
} catch (alarm) {
    console.log(`[ALARM] ${alarm.message}`);
}

// Skenario 2: Administrator masuk
console.log("\n--- SKENARIO 2: AKSES ADMIN ---");
try {
    const result = initiateCoreMeltDown("ADMIN-99");
    console.log(result);
} catch (alarm) {
    console.log("Ini tidak akan dieksekusi.");
}

console.log("\nSystem: Protokol selesai.");
