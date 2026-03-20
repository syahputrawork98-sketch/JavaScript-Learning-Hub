/**
 * LAB: Object Property Attributes (Locksmiths)
 * Mental Model: "The Property Locksmith"
 */

const essentialGate = {
    gateID: "GATE-ALPHA",
    systemStatus: "STABLE"
};

// 1. Mengunci Properti agar tidak bisa dihapus atau diubah konfigurasinya
Object.defineProperty(essentialGate, 'gateID', {
    writable: false,
    configurable: false
});

// 2. Menyembunyikan Properti dari iterasi (loop)
Object.defineProperty(essentialGate, 'secretAuth', {
    value: "X-999-SECRET",
    enumerable: false // Tidak akan muncul di for...in atau Object.keys
});

console.log("--- Scanning Gate Properties ---");
console.log("Keys found:", Object.keys(essentialGate)); // secretAuth tidak ada
console.log("Secret Access:", essentialGate.secretAuth); // Tapi masih bisa diakses langsung

// 3. Mencoba menulis ulang gateID (akan gagal diam-diam atau error di strict mode)
essentialGate.gateID = "HACKED-ID";
console.log("Gate ID after hack attempt:", essentialGate.gateID); // Tetap GATE-ALPHA

// 4. Mencoba menghapus gateID (akan gagal)
delete essentialGate.gateID;
console.log("Gate ID after delete attempt:", essentialGate.gateID); // Tetap ADA
