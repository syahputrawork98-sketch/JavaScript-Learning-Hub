/**
 * LAB: Hub Operating System (Stack & Hoisting)
 */

console.log("--- Mengetes Pemindaian Awal (Hoisting) ---");

// 1. var hoisting
console.log(`Status Generator (var): ${generatorStatus}`); // undefined
var generatorStatus = "ONLINE";

// 2. function hoisting
activateShields(); // Bekerja meskipun dipanggil sebelum deklarasi!
function activateShields() {
    console.log("[SYS] Perisai Hub Diaktifkan.");
}

// 3. let TDZ (Proteksi Baterai)
try {
    console.log(powerCell); 
} catch (e) {
    console.log(`[ALERT] Akses Gagal: ${e.message} (Temporal Dead Zone)`);
}
let powerCell = "PLUTONIUM_99";


// 4. Call Stack Visualization
console.log("\n--- Mengetes Tumpukan Terminal (Stack) ---");

function levelThree() {
    console.log("  Level 3 Active. Membuat Stack Trace...");
    console.trace(); // Menampilkan isi baki di rak Hub
}

function levelTwo() {
    console.log(" Level 2 Calling Level 3");
    levelThree();
    console.log(" Level 2 Finished.");
}

function levelOne() {
    console.log("Level 1 Calling Level 2");
    levelTwo();
    console.log("Level 1 Finished.");
}

levelOne();
