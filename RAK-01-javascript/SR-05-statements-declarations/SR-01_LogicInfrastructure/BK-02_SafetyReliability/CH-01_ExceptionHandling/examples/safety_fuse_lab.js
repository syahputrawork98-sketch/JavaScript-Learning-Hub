/**
 * LAB: Exception Handling (The Safety Fuse Box)
 * Mental Model: "The Safety Fuse Box"
 */

function processEnergyUnit(id) {
    if (id === null) {
        throw new Error("ID UNIT TIDAK DITEMUKAN (NULL)");
    }
    return `Tenaga untuk Unit ${id} disalurkan.`;
}

console.log("--- Inisialisasi Sistem Distribusi Cadangan ---");

try {
    console.log("System: Menghubungkan ke Unit-7...");
    console.log(processEnergyUnit(7));

    console.log("\nSystem: Menghubungkan ke Unit Tanpa Nama (Kritis)...");
    console.log(processEnergyUnit(null)); // Ini akan melempar error

    console.log("System: Langkah ini tidak akan pernah dieksekusi.");
} catch (err) {
    console.log("\n[!!!] KOTAK SEKERING PUTUS [!!!]");
    console.log(`Laporan Kerusakan: ${err.name} - ${err.message}`);
    console.log("Prosedur: Berpindah ke Mode Standby Otomatis.");
} finally {
    console.log("\n--- Protokol Keamanan Akhir ---");
    console.log("Status: Ruang Mesin dikarantina dan dibersihkan.");
}

console.log("\n--- Sistem tetap berjalan (Aplikasi tidak CRASH) ---");
