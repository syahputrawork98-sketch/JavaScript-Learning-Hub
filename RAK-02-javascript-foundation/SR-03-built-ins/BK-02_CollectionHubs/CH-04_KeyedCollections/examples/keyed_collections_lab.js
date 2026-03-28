/**
 * LAB: The Logistics Hub (Map & WeakMap)
 * --------------------------------------
 * Dalam lab ini, kita akan mengelola asosiasi data kompleks di Hub.
 * Pelajari bagaimana Map memungkinkan kunci dalam bentuk apa pun,
 * dan bagaimana WeakMap menjaga kebersihan memori.
 */

// --- BAGIAN 1: MAP (Omni-Typed Key-Value) ---
console.log("--- Bagian 1: Penggunaan Map ---");

const energyLog = new Map();

// Menggunakan berbagai tipe data sebagai kunci
const coreID = { name: "Main-Reactor" };
energyLog.set("status", "Stable");
energyLog.set(100, "Full Capacity");
energyLog.set(coreID, "Critical Alert: Coolant Leak");

console.log(`Status via String: ${energyLog.get("status")}`);
console.log(`Status via Object Key: ${energyLog.get(coreID)}`);
console.log(`Jumlah Entri di Hub: ${energyLog.size}`);

// --- BAGIAN 2: ITERASI MAP ---
console.log("\n--- Bagian 2: Iterasi Log Hub ---");
for (const [key, value] of energyLog) {
    const keyLabel = typeof key === 'object' ? 'OBJECT' : key;
    console.log(`> [${keyLabel}]: ${value}`);
}

// --- BAGIAN 3: WEAKMAP (Memory Sensitive) ---
console.log("\n--- Bagian 3: Proteksi Memori WeakMap ---");

/**
 * WeakMap hanya menerima OBJEK sebagai kunci.
 * Jika objek kunci dihapus dari memori (nullified),
 * entri di WeakMap akan otomatis dihapus oleh Garbage Collector.
 */
const metadataStore = new WeakMap();
let activeSensor = { id: "S-55" };

metadataStore.set(activeSensor, "Sensitive Auth Token 12345");
console.log(`Token Sensor: ${metadataStore.get(activeSensor)}`);

// Simulasi Sensor Rusak/Dibuang
activeSensor = null; 
// Sekarang entri di metadataStore tidak bisa diakses dan siap dibersihkan memori.
console.log("Sensor telah dibuang (set to null). Memori akan dibersihkan otomatis.");

// --- BAGIAN 4: MAP VS OBJECT ---
console.log("\n--- Bagian 4: Arsitek Mindset (Map vs Object) ---");
console.log("1. Map menjaga urutan penyisipan (insertion order).");
console.log("2. Map memiliki properti .size yang instan.");
console.log("3. Map lebih efisien untuk penambahan/penghapusan data yang sering.");
