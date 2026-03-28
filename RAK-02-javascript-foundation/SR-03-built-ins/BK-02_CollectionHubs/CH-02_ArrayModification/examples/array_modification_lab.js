/**
 * LAB: The Dynamic Platform (Array Modification)
 * ---------------------------------------------
 * Dalam lab ini, kita akan melakukan operasi bedah pada rel kargo kita.
 * Pelajari mana metode yang mengubah data asli (mutasi) dan mana yang tidak.
 */

let transportRail = ["Fuel", "Iron", "Oxygen"];

// --- BAGIAN 1: OPERASI UJUNG (Ends) ---
console.log("--- Bagian 1: Manipulasi Ujung ---");
transportRail.push("Water");    // Tambah di akhir
transportRail.unshift("Food"); // Tambah di awal
console.log(`Setelah Push & Unshift: ${transportRail}`);

transportRail.pop();   // Hapus di akhir
transportRail.shift(); // Hapus di awal
console.log(`Setelah Pop & Shift (Kembali semula): ${transportRail}`);

// --- BAGIAN 2: BEDAH TENGAH (Splice) ---
console.log("\n--- Bagian 2: Operasi Splice (Mutasi) ---");
// Hapus 1 kargo di index 1, dan ganti dengan "Steel" & "Glass"
transportRail.splice(1, 1, "Steel", "Glass");
console.log(`Setelah Splice: ${transportRail}`);

// --- BAGIAN 3: PENCARIAN (Searching) ---
console.log("\n--- Bagian 3: Pelacakan Kargo ---");
console.log(`Apakah ada 'Iron'?`, transportRail.includes("Iron")); // false (sudah diganti)
console.log(`Indeks 'Glass':`, transportRail.indexOf("Glass"));

// --- BAGIAN 4: PENGURUTAN (Sort & Reverse) ---
console.log("\n--- Bagian 4: Re-organisasi ---");
transportRail.sort();
console.log(`Setelah Sort: ${transportRail}`);
transportRail.reverse();
console.log(`Setelah Reverse: ${transportRail}`);

// --- BAGIAN 5: OPERASI AMAN (Non-Mutating) ---
console.log("\n--- Bagian 5: Slice & Concat (Copy) ---");
const subRail = transportRail.slice(0, 2); // Mengambil 2 kargo pertama tanpa mengubah asal
const combinedRail = transportRail.concat(["Titanium", "Gold"]);

console.log(`Sub-Rail (Copy): ${subRail}`);
console.log(`Combined Rail: ${combinedRail}`);
console.log(`Rail Asli (Tetap Perkasa): ${transportRail}`);
