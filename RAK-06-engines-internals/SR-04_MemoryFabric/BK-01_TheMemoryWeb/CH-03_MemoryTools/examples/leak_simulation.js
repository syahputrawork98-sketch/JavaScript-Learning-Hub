/**
 * CH-03: Memory Tools (Leak Simulation)
 * 
 * Lab ini sengaja membuat "Memory Leak" sederhana untuk 
 * dipelajari menggunakan Memory Profiler.
 */

// Global variable yang terus menumpuk data (Common Leak)
const leakContainer = [];

function produceLeak() {
    const data = {
        timestamp: Date.now(),
        payload: new Array(1000).fill('leak_data'),
        // Closure yang tidak sengaja menahan referensi
        callback: function() {
            return data; 
        }
    };
    leakContainer.push(data);
}

console.log('--- Memory Leak Simulation Started ---');
console.log('Jalankan Chrome DevTools (Inspect) atau Node --inspect untuk melihat grafik heap.');

setInterval(() => {
    produceLeak();
    if (leakContainer.length % 100 === 0) {
        const used = process.memoryUsage().heapUsed / 1024 / 1024;
        console.log(`Heap Used: ${used.toFixed(2)} MB | Objects: ${leakContainer.length}`);
    }
}, 100);

/**
 * CARA DIAGNOSA:
 * 1. Jalankan script: node --inspect leak_simulation.js
 * 2. Buka chrome://inspect di browser.
 * 3. Masuk ke tab "Memory".
 * 4. Berhenti di "Heap Snapshot" pertama.
 * 5. Tunggu 10 detik, ambil snapshot kedua.
 * 6. Bandingkan (Comparison) Snapshot 2 terhadap Snapshot 1.
 * 7. Cari objek "leakContainer" yang ukurannya terus membengkak.
 */
