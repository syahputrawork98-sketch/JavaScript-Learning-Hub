/**
 * Pembuktian Proxy & Reflect
 * Menunjukkan penggunaan Proxy sebagai validasi dan logging layer.
 */

// 1. Objek Asli (Target)
const user = {
    username: "syahputra",
    umur: 25
};

// 2. Handler (The Gatekeeper)
const handler = {
    // Pencegat pembacaan (GET)
    get(target, prop, receiver) {
        console.log(`[LOG] Mengakses properti: ${prop}`);
        // Menggunakan Reflect untuk meneruskan aksi standar
        return Reflect.get(target, prop, receiver);
    },

    // Pencegat penulisan (SET) + Validasi
    set(target, prop, value, receiver) {
        if (prop === "umur") {
            if (typeof value !== "number" || value < 0) {
                console.error("[ERROR] Umur tidak valid! Harus angka positif.");
                return false; // Menandakan kegagalan
            }
        }
        console.log(`[LOG] Mengubah ${prop} menjadi ${value}`);
        return Reflect.set(target, prop, value, receiver);
    }
};

// 3. Inisialisasi Proxy
const proxyUser = new Proxy(user, handler);

console.log("=== 1. Uji Akses (GET) ===");
console.log("Username:", proxyUser.username); // Triggers 'get' trap

console.log("\n=== 2. Uji Pengetikan (SET) Valid ===");
proxyUser.umur = 30; // Triggers 'set' trap

console.log("\n=== 3. Uji Pengetikan (SET) Ilegal ===");
proxyUser.umur = "Tua"; // Gagal validasi

console.log("\n=== 4. Bukti Nilai Akhir ===");
console.log("Data user asli:", user);
