/**
 * CH-05: Ordinary vs Exotic Objects
 * 
 * Demonstrasi perilaku default vs perilaku khusus (Exotic).
 */

// 1. Ordinary Object Behavior
const ordinary = { a: 1 };
ordinary.b = 2; // Menggunakan default [[DefineOwnProperty]]
console.log("Ordinary object properties:", Object.keys(ordinary));

// 2. Array: The most common Exotic Object
const arr = [10, 20];
console.log("Array length awal:", arr.length);

// 'length' pada Array bersifat eksotik karena otomatis 
// terikat pada indeks numerik tertinggi.
arr[5] = 60;
console.log("Array length setelah lompat indeks:", arr.length); // Jadi 6, bukan 2!

// 3. String: String Exotic Object
// String primitif jika dirangkai menjadi objek menjadi eksotik 
// karena properti indeksnya READ-ONLY dan otomatis mencerminkan karakter.
const strObj = new String("ABC");
strObj[0] = "Z"; // Mencoba mengganti karakter secara ilegal
console.log("String exotic object index 0 (tetap A):", strObj[0]); 

// 4. Proxy: The ultimate Exotic Object
// Proxy didesain untuk membungkus objek lain dan mencegat (trap) 
// metode internalnya, menjadikannya eksotik secara definisi.
const target = { x: 10 };
const proxy = new Proxy(target, {
    get(target, prop) {
        return prop in target ? target[prop] : "Properti tidak ada!";
    }
});

console.log("Proxy behavior (Exotic):", proxy.x);
console.log("Proxy behavior (Interception):", proxy.y);

console.log("Ordinary vs Exotic Verified: Exotic objects menangani 'magic' internal spesifikasi.");
