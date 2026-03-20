/**
 * CH-09: Object Type Overview (Spec Lab)
 * 
 * Lab ini menunjukkan sifat dasar objek sebagai 
 * kumpulan properti dan identitas unik.
 */

// 1. Identitas vs Nilai
const obj1 = {};
const obj2 = {};
console.log(`obj1 === obj2: ${obj1 === obj2}`); // false (Identitas berbeda)

// 2. Objek sebagai Map Properti
const reactor = {
    status: "active",
    output: 5000
};

console.log('\n--- Atomic Property Access ---');
console.log(`Reactor Status: ${reactor['status']}`);

/**
 * MENTAL MODEL:
 * Objek adalah "Kantong" yang berisi label (Keys) 
 * dan nilai (Values). Setiap kantong memiliki nomor 
 * seri (Identity) yang unik di memori.
 */
