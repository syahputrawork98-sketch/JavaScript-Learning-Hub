/**
 * Pembuktian Call Stack (Execution Context Stack)
 * Menampilkan alur masuk-keluar konteks dan simulasi Stack Overflow.
 */

function cekSuhu() {
    console.log("  -> [3] Mengecek Suhu Oven...");
    console.trace("Lacak Tumpukan (Stack Trace)"); // Melihat isi stack saat ini
    return "200 Derajat";
}

function masakSteak() {
    console.log(" -> [2] Mulai Masak Steak...");
    const suhu = cekSuhu();
    console.log(" -> [2] Steak Matang dengan suhu", suhu);
}

console.log("[1] Program Utama (GEC) Dimulai");
masakSteak();
console.log("[1] Program Utama Selesai. Stack Kosong (kembali ke Global)");

// --- Simulasi Stack Overflow ---
/*
console.log("\n=== Menjatuhkan Tumpukan (Stack Overflow) ===");
function rekursiHancur() {
    return rekursiHancur();
}
rekursiHancur(); // Hapus komentar untuk mencoba (Hati-hati: akan Crash!)
*/
