/**
 * LAB: The Transport Rail (Array Foundations)
 * ------------------------------------------
 * Dalam lab ini, kita akan merakit rel transportasi data (Array)
 * dan memahami bagaimana indeks 0 mengelola kargo kita.
 */

// --- BAGIAN 1: PERAKITAN REL (Creation) ---
console.log("--- Bagian 1: Perakitan Rel ---");

const energyGrid = ["Alpha", "Beta", "Gamma"]; // Array Literal
const backupGrid = new Array("Zeta", "Omega"); // Array Constructor

console.log(`Rel Utama: ${energyGrid}`);
console.log(`Rel Cadangan: ${backupGrid}`);

// --- BAGIAN 2: AKSES KARGO (Indexing) ---
console.log("\n--- Bagian 2: Akses Kargo ---");

console.log(`Kargo di Indeks 0: ${energyGrid[0]}`); // Alpha
console.log(`Kargo di Indeks 2: ${energyGrid[2]}`); // Gamma
console.log(`Kargo Terakhir: ${energyGrid[energyGrid.length - 1]}`);

// --- BAGIAN 3: DINAMIKA PANJANG (Length) ---
console.log("\n--- Bagian 3: Dinamika Panjang ---");

console.log(`Panjang Awal: ${energyGrid.length}`);
energyGrid[3] = "Delta"; // Menambah kargo baru
console.log(`Panjang Sekarang: ${energyGrid.length}`);

// --- BAGIAN 4: KARGO CAMPURAN (Mixed Types) ---
console.log("\n--- Bagian 4: Kargo Campuran ---");

const mixedCargo = [
    "Core-1", 
    5000, 
    true, 
    { id: "X" }, 
    [1, 2]
];

console.log(`Tipe Data di Indeks 1: ${typeof mixedCargo[1]}`);
console.log(`Metode di Indeks 3: ${mixedCargo[3].id}`);

// --- BAGIAN 5: JEBAKAN KONSTRUKTOR (Sparse Arrays) ---
console.log("\n--- Bagian 5: Jebakan Konstruktor ---");

const emptySlots = new Array(5); // Membuat 5 slot kosong, bukan angka 5!
console.log(`Slots: ${emptySlots.length}`);
console.log(`Isi Slot 0: ${emptySlots[0]}`); // undefined
