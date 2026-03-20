/**
 * CH-01: Hidden Classes (Hidden Class Transition)
 * 
 * Lab ini menunjukkan bagaimana V8 membuat "Hidden Class" 
 * berdasarkan urutan penambahan properti.
 */

// 1. Dua objek dengan properti yang sama, urutan yang sama
const obj1 = {};
obj1.a = 1;
obj1.b = 2;

const obj2 = {};
obj2.a = 100;
obj2.b = 200;
// obj1 dan obj2 BERBAGI Hidden Class yang sama (Optimized)

// 2. Satu objek dengan urutan berbeda
const obj3 = {};
obj3.b = 1;
obj3.a = 2;
// obj3 memiliki Hidden Class yang BERBEDA dari obj1/obj2 (Less Optimized)

console.log('--- Benchmarking Property Access ---');

function access(obj) {
    let sum = 0;
    for (let i = 0; i < 100000000; i++) {
        sum += obj.a + obj.b;
    }
    return sum;
}

console.time('Same Order (obj1)');
access(obj1);
console.timeEnd('Same Order (obj1)');

console.time('Different Order (obj3)');
access(obj3);
console.timeEnd('Different Order (obj3)');

/**
 * MENTAL MODEL:
 * Bayangkan Hidden Class sebagai "Template Cetakan".
 * Jika Anda membuat patung (objek) dengan urutan langkah yang sama, 
 * V8 bisa menggunakan cetakan yang sama. Jika langkahnya berbeda, 
 * V8 harus membuat cetakan baru yang memakan lebih banyak waktu dan memori.
 */
