/**
 * CH-02: Inline Caches (Performance Benchmark)
 * 
 * Lab ini menunjukkan perbedaan kecepatan antara fungsi yang 
 * menerima satu jenis objek (Monomorphic) vs banyak jenis (Polymorphic).
 */

function getName(obj) {
    return obj.name;
}

// 1. Persiapan Data
const mono1 = { name: 'Alpha' };
const mono2 = { name: 'Beta' };

const poly1 = { name: 'Gamma', age: 25 };
const poly2 = { name: 'Delta', id: 123 };

const ITERATIONS = 100000000;

console.log('--- Benchmarking Inline Caches ---');

// CASE A: Monomorphic (Selalu jenis yang sama)
console.time('Monomorphic');
for (let i = 0; i < ITERATIONS; i++) {
    getName(mono1);
    getName(mono2);
}
console.timeEnd('Monomorphic');

// CASE B: Polymorphic (Jenis objek berganti-ganti)
console.time('Polymorphic');
for (let i = 0; i < ITERATIONS; i++) {
    getName(mono1);
    getName(poly1);
    getName(poly2);
}
console.timeEnd('Polymorphic');

/**
 * HASIL OBSERVASI:
 * Monomorphic akan JAUH lebih cepat karena V8 "mengingat" 
 * offset properti 'name' di Hidden Class tersebut.
 * 
 * Jika objek berganti-ganti jenis, V8 harus mencari ulang 
 * di "cache table" yang lebih besar (Polymorphic/Megamorphic).
 */
