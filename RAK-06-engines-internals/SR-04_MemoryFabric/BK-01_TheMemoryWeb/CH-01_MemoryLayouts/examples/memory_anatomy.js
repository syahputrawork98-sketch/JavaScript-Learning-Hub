/**
 * CH-01: Memory Layout (Heap Anatomy)
 * 
 * Lab ini menunjukkan pembagian memori (Stack vs Heap) 
 * dan bagaimana kita bisa memantau penggunaan heap di Node.js.
 */

function observeMemory() {
    const memory = process.memoryUsage();
    console.log('--- Memory Status ---');
    console.log(`rss:        ${(memory.rss / 1024 / 1024).toFixed(2)} MB (Resident Set Size)`);
    console.log(`heapTotal:  ${(memory.heapTotal / 1024 / 1024).toFixed(2)} MB`);
    console.log(`heapUsed:   ${(memory.heapUsed / 1024 / 1024).toFixed(2)} MB`);
    console.log(`external:   ${(memory.external / 1024 / 1024).toFixed(2)} MB (C++ Objects)`);
    console.log('---------------------\n');
}

// 1. Awal (Empty)
observeMemory();

// 2. Alokasi besar di Heap
console.log('Allocating 1,000,000 objects...');
const storage = [];
for (let i = 0; i < 1000000; i++) {
    storage.push({ id: i, data: new Array(10).fill(i) });
}

observeMemory();

// 3. Menghapus referensi agar bisa di-cleanup
console.log('Clearing references...');
storage.length = 0;

// Menyarankan GC (perlu flag --expose-gc)
if (global.gc) {
    console.log('Manual GC Triggered...');
    global.gc();
}

observeMemory();

/**
 * MENTAL MODEL:
 * Stack adalah "Meja Kerja" (Cepat, terbatas).
 * Heap adalah "Gudang Belakang" (Besar, butuh pengelola/GC).
 */
