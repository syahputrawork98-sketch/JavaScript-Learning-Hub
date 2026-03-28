/**
 * LAB: Logic & Identity (Boolean & Symbol)
 * ----------------------------------------
 * Dalam lab ini, kita akan mengeksplorasi gerbang logika Boolean
 * dan identitas unik Symbol untuk mengamankan data Hub.
 */

// --- BAGIAN 1: BOOLEAN & TRUTHY/FALSY ---
console.log("--- Bagian 1: Gerbang Logika ---");

const checkSystem = (value) => {
    if (value) {
        console.log(`> Akses DIBUKA untuk: ${JSON.stringify(value)} (Truthy)`);
    } else {
        console.log(`> Akses DITUTUP untuk: ${JSON.stringify(value)} (Falsy)`);
    }
};

checkSystem(true);      // Truthy
checkSystem(0);         // Falsy
checkSystem("Energy");  // Truthy
checkSystem("");        // Falsy
checkSystem([]);        // Truthy (Hati-hati: array kosong adalah truthy!)

// --- BAGIAN 2: SYMBOL (Udentitas Unik) ---
console.log("\n--- Bagian 2: Kunci Rahasia Symbol ---");

const KEY_A = Symbol("energy_id");
const KEY_B = Symbol("energy_id");

console.log("Apakah Kunci A === Kunci B?", KEY_A === KEY_B); // false
console.log("Deskripsi Kunci A:", KEY_A.description);

// --- BAGIAN 3: MENGUNCI PROPERTI OBJEK ---
const energyUnit = {
    name: "Reactor-1",
    status: "Stable",
    [KEY_A]: "SECRET-DATA-99" // Properti menggunakan Symbol sebagai key
};

console.log("\n--- Bagian 3: Inspeksi Unit Terkunci ---");
console.log("Akses via Symbol:", energyUnit[KEY_A]);
console.log("Akses via String Biasa:", energyUnit["energy_id"]); // undefined

// Bukti: Symbol tidak muncul dalam pengulangan biasa (hidden-ish)
console.log("Daftar Properti (Object.keys):", Object.keys(energyUnit)); 
for (let key in energyUnit) {
    console.log(`Iterasi key: ${key}`); // KEY_A tidak akan muncul di sini
}

// --- BAGIAN 4: GLOBAL SYMBOL REGISTRY ---
console.log("\n--- Bagian 4: Global Symbol Registry ---");

const globalKey = Symbol.for("app.hub.id"); // Membuat jika belum ada
const sameGlobalKey = Symbol.for("app.hub.id"); // Mengambil yang sudah ada

console.log("Apakah Global Key Sama?", globalKey === sameGlobalKey); // true
console.log("Nama Kunci Global:", Symbol.keyFor(globalKey));
