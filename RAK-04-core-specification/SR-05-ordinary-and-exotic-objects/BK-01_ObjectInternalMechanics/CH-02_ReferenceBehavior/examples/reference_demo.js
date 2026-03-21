/**
 * Pembuktian Reference Behavior (Alamat vs Nilai)
 * Menunjukkan bagaimana mutasi terjadi dan cara mengatasinya.
 */

// 1. Jebakan Reference (The Same House)
console.log("=== 1. Mutasi Referensi ===");
const userAsli = { name: "Budi", roles: ["admin"] };
const userHacker = userAsli; // Menyalin ALAMAT, bukan NILAI

userHacker.name = "Hacker Jahat";

console.log("Nama di User Asli:", userAsli.name); // Ikut berubah!

// 2. Masalah Deep Reference (Shallow Clone trap)
console.log("\n=== 2. Jebakan Shallow Clone ({...obj}) ===");
const userAman = { ...userAsli }; // Salinan Lapis 1
userAman.name = "Budi Lagi";
userAman.roles.push("super-user"); // Mutasi lapis ke-2 (Array)

console.log("Nama Asli aman? :", userAsli.name === "Budi Lagi"); // false (Aman)
console.log("Role Asli aman? :", userAsli.roles.includes("super-user")); // true (Bocor/Tercemar!)
// Kenapa? Karena [...userAsli.roles] tidak disalin, hanya alamat array-nya saja.

// 3. Solusi Modern: structuredClone
console.log("\n=== 3. Solusi: Deep Clone (structuredClone) ===");
const userTotalAman = structuredClone(userAsli);
userTotalAman.roles.push("extra-safe");

console.log("Role Asli tercemar? :", userAsli.roles.includes("extra-safe")); // false (Benar-benar aman!)
