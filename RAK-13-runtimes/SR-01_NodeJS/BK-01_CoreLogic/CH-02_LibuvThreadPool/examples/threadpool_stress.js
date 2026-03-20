/**
 * CH-02: Libuv Thread Pool (Stress Test)
 * 
 * Lab ini menunjukkan bagaimana operasi berat (pbkdf2)
 * dijalankan secara paralel di thread pool.
 * 
 * Jalankan dan perhatikan durasinya:
 * node threadpool_stress.js
 * 
 * Lalu coba ganti ukuran pool dan jalankan lagi:
 * SET UV_THREADPOOL_SIZE=8 && node threadpool_stress.js (Windows)
 * UV_THREADPOOL_SIZE=8 node threadpool_stress.js (Linux/Mac)
 */

const crypto = require('crypto');
const start = Date.now();

function doHash(id) {
    crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
        console.log(`Task ${id}: Done in ${Date.now() - start}ms`);
    });
}

// Secara default, Thread Pool Libuv memiliki 4 thread.
// Jika kita menjalankan 4 task, mereka selesai hampir bersamaan.
// Task ke-5 akan menunggu salah satu thread kosong.

console.log('--- Launching 5 Heavy Tasks ---');
doHash(1);
doHash(2);
doHash(3);
doHash(4);
doHash(5);

/**
 * ANALISA:
 * Anda akan melihat task 1-4 selesai dalam waktu yang mirip.
 * Task 5 biasanya akan memakan waktu 2x lipat karena harus 
 * mengantre giliran thread.
 */
