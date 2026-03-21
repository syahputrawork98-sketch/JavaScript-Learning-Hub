/**
 * Pembuktian Array Exotic Behavior (The Magic of Length)
 * Menunjukkan hubungan internal antara indeks elemen dan properti length.
 */

// 1. Ekpansi Otomatis (The Expanding Fence)
console.log("=== 1. Ekspansi length Otomatis ===");
const list = ["A", "B"];
console.log(`Awal:`, list, "| Length:", list.length);

list[5] = "Z"; // Loncat ke indeks 5
console.log(`Setelah list[5] = "Z":`, list);
console.log(`Length Baru:`, list.length); // Menjadi 6! (Bukan 3)

// 2. Penghancuran Massal (Destructive Length)
console.log("\n=== 2. Pemangkasan via length ===");
list.length = 2; // Paksa length menjadi 2
console.log(`Setelah list.length = 2:`, list);
console.log(`Nilai di indeks 5:`, list[5]); // undefined (Telah hancur/dihapus)

// 3. Indeks vs Properti Teks
console.log("\n=== 3. Indeks vs Properti Teks ===");
const arr = [10, 20];
arr.info = "Data Sensor"; // Properti teks biasa
arr["99"] = 100;          // Ini dianggap indeks angka (indeks 99)

console.log(`Properti 'info' :`, arr.info);
console.log(`Length Array    :`, arr.length); // Menjadi 100! (Terpengaruh indeks 99)

// 4. Mengosongkan Array dengan Cepat
console.log("\n=== 4. Cara Tercepat Mengosongkan Array ===");
let dataBesar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
dataBesar.length = 0;
console.log(`Isi dataBesar:`, dataBesar); // []
