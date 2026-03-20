/**
 * LAB: Unit Kontrol (SR-08 Statements & Declarations)
 * 
 * Eksperimen ini menguji mekanisme pengambilan keputusan, siklus energi, 
 * dan jaring pengaman malfungsi di dalam Hub.
 */

console.log("--- Mengetes Lab Kontrol (Control Units) ---\n");

// 1. Uji Coba Hoisting Paradox (BK-03)
function testHoisting() {
    console.log("Status Sinyal Var (Pre-load):", oldCable); // undefined
    var oldCable = "LEGACY_ACTIVE";
}
testHoisting();

// 2. Uji Coba Safety Vault (BK-02)
function runSafeProtocol() {
    try {
        console.log("Mencoba Injeksi Energi...");
        throw new Error("MALFUNCTION_DETECTED");
    } catch (e) {
        console.log("Peringatan Ditangkap:", e.message);
        return "ERROR_HANDLED";
    } finally {
        console.log("Protokol Pembersihan: DONE");
    }
}
console.log("Hasil Protokol:", runSafeProtocol());

// 3. Uji Coba Labeled Loop (BK-04)
console.log("\n--- Mengetes Keluar dari Sirkuit Bersarang ---");
MainGenerator: 
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            console.log(`EMERGENCY: Breaking from MainGenerator at (${i}, ${j})`);
            break MainGenerator;
        }
        console.log(`Processing Cell [${i},${j}]`);
    }
}

console.log("\n--- Lab Selesai ---");
