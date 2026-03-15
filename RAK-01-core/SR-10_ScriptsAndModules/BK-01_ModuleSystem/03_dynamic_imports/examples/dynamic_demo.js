/**
 * Pembuktian Dynamic Import
 * Menunjukkan pemuatan modul secara asinkron dan kondisional.
 */

async function muatFiturPremium(isPremium) {
    console.log(`Status User Premium: ${isPremium}`);
    
    if (isPremium) {
        console.log("Memesan kurir untuk fitur premium...");
        try {
            // Memuat modul secara dinamis
            const modulPremium = await import('../../02_esm_mechanics/examples/esm_demo.js');
            
            console.log("Fitur Premium Tiba!");
            // console.log(modulPremium.namaToko);
        } catch (e) {
            console.error("Kurir gagal mengantar: ", e.message);
        }
    } else {
        console.log("Fitur premium tidak dipesan. Hemat memori!");
    }
}

console.log("=== 1. Menjalankan Aplikasi Sederhana ===");
muatFiturPremium(false); // Tidak memuat apa-apa

setTimeout(() => {
    console.log("\n=== 2. User Membeli Premium ===");
    muatFiturPremium(true); // Baru memuat saat dibutuhkan
}, 1000);

console.log("\n[LOG] Kode utama tetap berjalan tanpa menunggu modul premium...");
