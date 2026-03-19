/**
 * LAB: Conditionals (The Railroad Switches)
 * Mental Model: "The Railroad Switch"
 */

// 1. If...Else (Binary Branching)
function energyRouter(loadPercentage) {
    console.log(`--- Memeriksa Beban: ${loadPercentage}% ---`);
    
    if (loadPercentage >= 100) {
        return "CRITICAL: Segera alihkan arus ke Reservoir!";
    } else if (loadPercentage >= 70) {
        return "WARNING: Beban tinggi, aktifkan pendingin sekunder.";
    } else if (loadPercentage >= 30) {
        return "OPTIMAL: Sistem berjalan normal.";
    } else {
        return "IDLE: Arus sangat rendah, masuk mode hemat energi.";
    }
}

console.log(energyRouter(85));
console.log(energyRouter(110));

// 2. Switch (Multi-Track Routing)
function setModuleProtocol(type) {
    console.log(`\n--- Mengatur Protokol Modul: ${type} ---`);
    
    switch (type) {
        case "THERMAL":
            console.log("Inisialisasi pendingin air...");
            console.log("Status: AKTIF");
            break;
        case "NUCLEAR":
            console.log("Verifikasi protokol keamanan Level-5...");
            console.log("Status: AKTIF");
            break;
        case "HYDRO":
            console.log("Membuka katup bendungan...");
            console.log("Status: AKTIF");
            break;
        default:
            console.log("Tipe modul tidak dikenal. Mode: MANUAL.");
    }
}

setModuleProtocol("NUCLEAR");
setModuleProtocol("UNKNOWN-DRIVE");
