/**
 * Pembuktian Exception Handling
 * Menunjukkan alur try, catch, finally, dan throw.
 */

function prosesData(input) {
    console.log(`[START] Memproses input: ${input}`);
    try {
        if (!input) {
            throw new Error("Input Kosong!"); // Manual Exception
        }
        console.log("Hasil: ", input.toUpperCase());
        return "SUKSES";
    } catch (e) {
        console.error("!!! [CATCH] Terjadi Masalah:", e.message);
        return "GAGAL";
    } finally {
        console.log("[FINALLY] Protokol pembersihan dijalankan...");
        // Finally akan tetap jalan meskipun ada return di try/catch di atas!
    }
}

console.log("--- Uji Kasus 1: Input Valid ---");
const r1 = prosesData("halo world");
console.log("Status Fungsi:", r1);

console.log("\n--- Uji Kasus 2: Input Invalid (Error) ---");
const r2 = prosesData(null);
console.log("Status Fungsi:", r2);

console.log("\n--- Uji Kasus 3: Error Tipetipe (Reference) ---");
try {
    const x = variabelYangTidakAda;
} catch (e) {
    console.log("Menangkap Native Error:", e.name); // ReferenceError
}
