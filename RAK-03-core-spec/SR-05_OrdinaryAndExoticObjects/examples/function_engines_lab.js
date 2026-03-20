/**
 * LAB: Function Engines (Ordinary & Specialized)
 */

console.log("--- Mengetes Mesin Pabrik (Construct) ---");

function Machine(type) {
    this.type = type;
    this.status = "READY";
}

const unit = new Machine("GENERATOR");
console.log(`Unit Baru: ${unit.type} | Status: ${unit.status}`);


// 2. Specialized Engine (Async)
console.log("\n--- Mengetes Mesin Spesialis (Async Delay) ---");

async function pullEnergy() {
    console.log("[SCAN] Memulai penarikan energi...");
    await new Promise(r => setTimeout(r, 100)); // Simulasi delay Hub
    console.log("[FINISH] Energi Berhasil Ditarik.");
}

pullEnergy();


// 3. String Immutability (Read-Only Sequence)
console.log("\n--- Mengetes Unit Baca-Saja (String Exotic) ---");
const label = "GRID";
try {
    label[0] = "X"; // Gagal
} catch (e) {} 
console.log(`Label Asli: ${label} (Shadowing Gagal)`);
