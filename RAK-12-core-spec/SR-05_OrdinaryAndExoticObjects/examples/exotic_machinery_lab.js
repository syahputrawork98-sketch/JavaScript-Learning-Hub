/**
 * LAB: Exotic Machinery (Arrays & Proxies)
 */

console.log("--- Mengetes Unit Piston Panjang (Array) ---");

const grid = ["ALPHA"];
console.log(`Kapasitas Awal: ${grid.length}`);

// 1. Piston terdorong otomatis (Sparse Array)
grid[100] = "ZETA";
console.log(`Kapasitas Setelah Push Jauh: ${grid.length}`); // 101

// 2. Piston ditarik paksa (Destructive Length)
grid.length = 0;
console.log(`Cek Indeks 100: ${grid[100]} (Data Terbuang)`);


console.log("\n--- Mengetes Perisai Pencegat (Proxy) ---");

const vault = {
    core_id: "X-99",
    secret_key: "RED_LEVEL"
};

const secureProxy = new Proxy(vault, {
    get(target, prop) {
        if (prop === "secret_key") {
            console.log("[SECURITY] Akses kunci rahasia dicegat!");
            return "*******";
        }
        return target[prop];
    },
    set(target, prop, value) {
        console.log(`[LOG] Mencoba mengubah ${prop} menjadi ${value}`);
        if (prop === "core_id") {
            console.log("[DENIED] ID Inti bersifat Read-Only via Proxy!");
            return false;
        }
        target[prop] = value;
        return true;
    }
});

console.log(`Key: ${secureProxy.secret_key}`);
secureProxy.core_id = "NEW_ID"; // Ditolak
console.log(`Core ID: ${secureProxy.core_id}`); // Tetap X-99
