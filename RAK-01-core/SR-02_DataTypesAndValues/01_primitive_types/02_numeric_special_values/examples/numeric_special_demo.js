/**
 * Pembuktian Anomali Angka (NaN, Infinity, -0)
 * Menunjukkan perilaku unik yang tidak ditemui pada angka normal.
 */

// 1. Misteri NaN
console.log("=== 1. Deteksi NaN ===");
const result = "Kucing" / 2;
console.log(`Hasil "Kucing" / 2 :`, result); 
console.log(`Apakah NaN === NaN? :`, result === NaN); // false
console.log(`Cara Benar (Number.isNaN) :`, Number.isNaN(result)); // true

// 2. Batas Tak Terhingga (Infinity)
console.log("\n=== 2. Perilaku Infinity ===");
console.log(`1 / 0 :`, 1 / 0);
console.log(`Infinity + 1 :`, Infinity + 1); // Tetap Infinity
console.log(`Infinity - Infinity :`, Infinity - Infinity); // NaN (Hancur)

// 3. Nol Negatif (-0)
console.log("\n=== 3. Nol Negatif vs Positif ===");
const posZero = 0;
const negZero = -1 * 0;

console.log(`Apakah 0 === -0? :`, posZero === negZero); // true (Matematis sama)
console.log(`Object.is(0, -0) :`, Object.is(posZero, negZero)); // false (Secara fisik berbeda)

// Kenapa -0 penting? (Dampak pada operasi lain)
console.log(`1 / 0  :`, 1 / posZero); // Infinity
console.log(`1 / -0 :`, 1 / negZero); // -Infinity (Arahnya berbeda!)
