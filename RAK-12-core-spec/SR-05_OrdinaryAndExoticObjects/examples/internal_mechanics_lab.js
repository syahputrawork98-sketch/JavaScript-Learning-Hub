/**
 * LAB: Object Machinery (Internal Methods & Slots)
 */

console.log("--- Mengetes Proteksi Internal Unit (Extensibility) ---");

const hubUnit = {
    id: "UNIT_A_7",
    status: "READY"
};

console.log(`Unit Extensible? ${Object.isExtensible(hubUnit)}`);

// 1. Memicu [[PreventExtensions]]
Object.preventExtensions(hubUnit);
console.log(`Unit Extensible Sekarang? ${Object.isExtensible(hubUnit)}`);

// Percobaan menambah slot baru (Memicu [[DefineOwnProperty]])
try {
    Object.defineProperty(hubUnit, "newCore", { value: 1 });
} catch (e) {
    console.log(`[ALERT] Pasang Slot Gagal: ${e.message}`);
}


// 2. Membedah [[Prototype]] sirkuit
console.log("\n--- Mengetes Sirkuit Arsitek (Prototype) ---");
const proto = Object.getPrototypeOf(hubUnit);
console.log(`Arsitek Induk: ${proto === Object.prototype ? "Object Dasar Hub" : "Kustom"}`);


// 3. Simpel Shadowing melalui Internal Methods
const proxy = new Proxy(hubUnit, {
    get(target, prop) {
        console.log(`[SENSOR] Mendeteksi akses ke slot: ${prop}`);
        return target[prop];
    }
});

console.log(`Nilai dari Proxy: ${proxy.id}`);
