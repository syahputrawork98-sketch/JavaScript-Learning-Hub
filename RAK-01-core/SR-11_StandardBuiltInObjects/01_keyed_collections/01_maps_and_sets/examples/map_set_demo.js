/**
 * Pembuktian Map & Set
 * Menunjukkan keunggulan Map dalam tipe kunci dan keunikan nilai pada Set.
 */

// 1. Map (Kunci Objek)
console.log("=== 1. Uji Map (Kunci Objek) ===");

const db = new Map();
const user1 = { id: 1, nama: "Ardi" };
const user2 = { id: 1, nama: "Ardi" }; // Objek berbeda dengan isi sama

db.set(user1, "Admin");
db.set(user2, "Editor");

console.log(`Jumlah entri di Map:`, db.size); // 2 (Karena user1 !== user2 secara referensi)
console.log(`Role User 1:`, db.get(user1));

// Bandingkan dengan Object biasa
const objDB = {};
objDB[user1] = "Admin";
objDB[user2] = "Editor";
console.log(`Isi Object biasa:`, objDB); 
// Output: {[object Object]: "Editor"}. Kunci tertimpa karena keduanya dikonversi jadi string "[object Object]"

// 2. Set (Uniqueness)
console.log("\n=== 2. Uji Set (Filtering Duplikasi) ===");

const antrean = new Set();
antrean.add("Budi");
antrean.add("Ani");
antrean.add("Budi"); // Mencoba masuk lagi

console.log(`Isi Antrean:`, [...antrean]); // ["Budi", "Ani"]
console.log(`Apakah Ani ada?`, antrean.has("Ani"));

// 3. Konversi Array ke Set (Sering dipakai untuk Unique Array)
const angkaDuplikat = [1, 2, 2, 3, 4, 4, 5];
const angkaUnik = [...new Set(angkaDuplikat)];
console.log("\nUnique Array:", angkaUnik); // [1, 2, 3, 4, 5]
