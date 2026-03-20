/**
 * CH-01: CommonJS (Module Lab)
 * 
 * Lab ini menunjukkan cara kerja module sistem tradisional Node.js.
 */

// math_utils.js (Simulasi)
const math = {
    add: (a, b) => a + b,
    secret: 42
};

console.log('--- CommonJS Exporting ---');
module.exports = math;

/**
 * MENTAL MODEL:
 * require() adalah fungsi sinkronus. 
 * Saat dipanggil, Node.js akan:
 * 1. Resolving: Mencari path file.
 * 2. Loading: Membaca file.
 * 3. Wrapping: Membungkus dalam fungsi (exports, require, module, __filename, __dirname).
 * 4. Evaluating: Menjalankan kode.
 * 5. Caching: Menyimpan hasil ekspor untuk pemanggilan berikutnya.
 */

console.log('CJS Module Loaded.');
