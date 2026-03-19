/**
 * LAB: Micro-Scheduler (Agents & Jobs)
 */

console.log("--- Mengetes Penjadwal Mikro (Job Queue) ---");

// 1. Aliran Arus Utama (Synchronous)
console.log("[1] Arus Utama Mulai");

// 2. Task (Macrotask) - Seperti pesan dari luar Hub
setTimeout(() => {
    console.log("[5] Task Selesai (Macrotask - setTimeout)");
}, 0);

// 3. Job (Microtask) - Seperti perbaikan kecil internal di baki
Promise.resolve().then(() => {
    console.log("[3] Job Selesai (Microtask - Promise)");
}).then(() => {
    console.log("[4] Job Berantai Selesai (Microtask 2)");
});

console.log("[2] Arus Utama Selesai");


// 4. Perbedaan Identity Cross-Context (Simulation)
console.log("\n--- Mengetes Identitas Cross-Realm ---");
const localArray = [];
const fakeRealmArray = Object.create(Array.prototype); // Masih satu Realm

console.log(`Berasal dari Array Lokal? ${Array.isArray(localArray)}`);
// Di level spec, Array.isArray mengecek [[NativeBrand]] atau struktur internal, 
// bukan sekadar instanceof, untuk memastikan keamanan lintas zona.
