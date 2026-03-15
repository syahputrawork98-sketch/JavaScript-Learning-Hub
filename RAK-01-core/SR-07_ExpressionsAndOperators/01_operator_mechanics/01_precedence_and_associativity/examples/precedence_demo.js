/**
 * Pembuktian Precedence & Associativity
 * Menunjukkan bagaimana JavaScript menentukan urutan eksekusi.
 */

// 1. Kasta Matematika (Precedence)
console.log("=== 1. Uji Kasta Matematika ===");
const hasil1 = 10 + 5 * 2; // Perkalian (12) menang atas Pertambahan (11)
console.log(`10 + 5 * 2 =`, hasil1); // 20

const hasil2 = (10 + 5) * 2; // Kurung (18) menang atas segalanya
console.log(`(10 + 5) * 2 =`, hasil2); // 30

// 2. Arah Antrean (Associativity)
console.log("\n=== 2. Uji Arah Antrean (Left-to-Right) ===");
const pengurangan = 10 - 5 - 2; // (10-5) dulu, baru - 2
console.log(`10 - 5 - 2 =`, pengurangan); // 3

console.log("\n=== 3. Uji Arah Antrean (Right-to-Left) ===");
let a, b, c;
a = b = c = 100; // c=100, lalu b=c, lalu a=b
console.log(`a: ${a}, b: ${b}, c: ${c}`);

// 4. Jebakan Logika & Perbandingan
console.log("\n=== 4. Jebakan Logika vs Perbandingan ===");
const cek = 10 > 5 && 5 < 2; 
// Perbandingan (10) menang atas Logika (5)
// Jadi: (10 > 5) && (5 < 2) -> true && false -> false
console.log(`10 > 5 && 5 < 2 :`, cek);
