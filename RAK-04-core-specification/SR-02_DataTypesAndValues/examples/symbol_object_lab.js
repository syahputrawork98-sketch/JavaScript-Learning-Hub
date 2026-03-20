/**
 * LAB: Symbols & Objects (Exclusive Tags & Machines)
 */

console.log("--- Mengetes Identifier Eksklusif (Symbol) ---");

// 1. Simbol Unik
const TAG_A = Symbol("GEN_SET");
const TAG_B = Symbol("GEN_SET");

console.log(`Tag A === Tag B: ${TAG_A === TAG_B}`); // false (Pasti unik)

const sensor = {
    id: "S-99",
    [TAG_A]: "INTERNAL_TEMP_LIMIT"
};

console.log(`Akses Tag: ${sensor[TAG_A]}`);
console.log(`Key Metadata: ${Object.keys(sensor)}`); // ["id"] (Symbol tersembunyi dari enumerasi standar)


// 2. Mesin Referensi (Object)
console.log("\n--- Mengetes Referensi Grid (Object) ---");

const hubCenter = { load: 500 };
const technicianTerminal = hubCenter; // Menyerahkan alamat, bukan mesin baru

technicianTerminal.load = 800; // Ubah di terminal

console.log(`Beban Hub Pusat: ${hubCenter.load}`); // 800 (Berubah!)
console.log(`HubCenter === Terminal: ${hubCenter === technicianTerminal}`);


// 3. Internal Method Sniffing (Proxy as a window)
console.log("\n--- Mengetes Skematik Rahasia ([[Get]]) ---");

const secretMachine = new Proxy({ energy: 100 }, {
    get(target, prop) {
        console.log(`[SYS] Memicu [[Get]] untuk pipa: ${prop}`);
        return target[prop];
    }
});

const val = secretMachine.energy;
