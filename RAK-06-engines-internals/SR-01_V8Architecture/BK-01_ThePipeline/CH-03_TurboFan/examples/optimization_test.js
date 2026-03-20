/**
 * CH-03: TurboFan (Optimization Test)
 * 
 * Lab ini menunjukkan bagaimana fungsi dioptimasi saat menjadi "Hot"
 * dan bagaimana V8 melakukan deoptimasi jika tipe data berubah.
 * 
 * Jalankan dengan:
 * node --trace-opt --trace-deopt optimization_test.js
 */

function add(a, b) {
    return a + b;
}

// 1. Memanggil berkali-kali dengan tipe yang sama agar menjadi "Hot"
console.log('--- Phase 1: Warming up ---');
for (let i = 0; i < 20000; i++) {
    add(i, i + 1);
}

// 2. Sekarang V8 kemungkinan besar sudah mengoptimasi 'add' untuk Number
console.log('--- Phase 2: Calling with same type ---');
add(10, 20);

// 3. Memberikan tipe data yang berbeda (String)
// Ini akan memicu Deoptimization (Bailout)
console.log('--- Phase 3: Triggering Deoptimization ---');
add("10", "20"); 

/**
 * OBSERVASI:
 * Jika Anda menjalankan dengan --trace-opt, Anda akan melihat pesan:
 * [optimizing 0x... <JSFunction add ...> because interrupt-tick]
 * 
 * Dan dengan --trace-deopt:
 * [deoptimizing: begin 0x... <JSFunction add ...> ... eager]
 */
