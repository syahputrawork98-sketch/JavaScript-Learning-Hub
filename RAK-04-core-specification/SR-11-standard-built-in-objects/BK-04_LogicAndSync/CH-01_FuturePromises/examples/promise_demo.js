/**
 * Pembuktian Promise Mechanics & Microtask Timing
 * Menunjukkan alur perubahan state dan prioritas eksekusi.
 */

console.log("=== 1. Mulai Eksekusi Sinkron ===");

const janjiMakan = new Promise((resolve, reject) => {
    console.log("[INTERNAL] Menyiapkan makanan..."); // Berjalan sinkron di dalam constructor
    
    const stokTersedia = true;
    
    setTimeout(() => {
        if (stokTersedia) {
            resolve("Burger Keju Spesial");
        } else {
            reject("Maaf, burger habis.");
        }
    }, 1000);
});

console.log("Status Promise saat ini: (Pending)");

// 2. Menangani Hasil via .then()
janjiMakan
    .then((menu) => {
        console.log(`\n=== 2. Hasil Promise (Fulfilled) ===`);
        console.log("Yummy! Mendapatkan:", menu);
    })
    .catch((error) => {
        console.log("\n=== 2. Hasil Promise (Rejected) ===");
        console.log("Galau: ", error);
    })
    .finally(() => {
        console.log("Proses Selesai. Cuci tangan.");
    });

// 3. Bukti Microtask Priority
Promise.resolve().then(() => console.log("\n[SPEED] Microtask (Promise) dijalankan sebelum Macrotask!"));

setTimeout(() => {
    console.log("[SPEED] Macrotask (setTimeout) dijalankan terakhir.");
}, 0);

console.log("=== 3. Selesai Baris Kode Sinkron ===\n");
