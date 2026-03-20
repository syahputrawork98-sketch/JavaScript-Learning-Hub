/**
 * LAB: RegExp Methods (Scanner Operations)
 * Mental Model: "Scanner Operations"
 */

// 1. Tipe Operasi: .test() (Lampu Indikator)
const emailPattern = /^[a-z0-9.]+@hub\.io$/i;
const userEmail = "core.access@hub.io";

console.log("--- Menjalankan Indikator Test ---");
if (emailPattern.test(userEmail)) {
    console.log("[PASS] Format Email Terdeteksi dengan Benar.");
}


// 2. Tipe Operasi: .exec() (Pembedahan Mendalam)
const complexLog = "FAULT:E01 at 400. FAULT:E02 at 500.";
const faultScanner = /FAULT:(?<code>\w\d{2}) at (?<val>\d+)/g;

console.log("\n--- Menjalankan Forensik exec() ---");

let report;
while ((report = faultScanner.exec(complexLog)) !== null) {
    console.log(`[EXTRACTED] Error: ${report.groups.code}, Level: ${report.groups.val}`);
    console.log(`[META] Posisi kursor scanner selanjutnya: ${faultScanner.lastIndex}`);
}


// 3. Jebakan lastIndex (Stateful Scanner)
const reuseScanner = /alpha/g;
console.log("\n--- Resetting States ---");
reuseScanner.test("alpha one"); // state bertambah
console.log(`Current Index: ${reuseScanner.lastIndex}`);
reuseScanner.lastIndex = 0; // Manual reset
console.log(`Resetted Index: ${reuseScanner.lastIndex}`);
