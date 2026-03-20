/**
 * LAB: The Engine Room (Expressions & Operators)
 */

console.log("--- Mengetes Prioritas (Precedence) ---");

// Tanpa isolator ( ): 10 * 2 dievaluasi dulu
const rawLoad = 100 + 10 * 2; 
// Dengan isolator ( ): pertambahan dievaluasi dulu
const filteredLoad = (100 + 10) * 2;

console.log(`Beban Mentah: ${rawLoad}`);      // 120
console.log(`Beban Terfilter: ${filteredLoad}`); // 220


console.log("\n--- Mengetes Rute Aman (Optional Chaining) ---");

const grid = {
    sectorA: { capacity: 1000 },
    sectorB: null
};

// Mencoba mengakses rute yang mati
const capA = grid.sectorA?.capacity ?? 0;
const capB = grid.sectorB?.capacity ?? 0;

console.log(`Kapasitas A: ${capA}`);
console.log(`Kapasitas B: ${capB}`);


console.log("\n--- Mengetes Penyimpanan Cerdas (Logical Assignment) ---");

let activeUnit = "UNIT_01";
let standbyUnit = null;

// Hanya isi jika null/undefined
activeUnit ??= "BACKUP_01";
standbyUnit ??= "BACKUP_02";

console.log(`Unit Aktif: ${activeUnit}`);   // UNIT_01
console.log(`Unit Standby: ${standbyUnit}`); // BACKUP_02


console.log("\n--- Mengetes Turbo Generator (Exponentiation) ---");
// Right-associative: 2 ** (3 ** 2) = 2 ** 9 = 512
const turbo = 2 ** 3 ** 2;
console.log(`Turbo Power: ${turbo}`);
