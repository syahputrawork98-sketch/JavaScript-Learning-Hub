/**
 * CH-01: File System (Sync vs Async Lab)
 * 
 * Lab ini membuktikan mengapa kita tidak boleh menggunakan 
 * versi Sync di dalam server Node.js.
 */

const fs = require('fs');

console.log('--- Phase 1: Reading Async (Non-blocking) ---');
fs.readFile(__filename, (err, data) => {
    console.log('Async Read Finished.');
});
console.log('I am executed BEFORE async read finishes!');

console.log('\n--- Phase 2: Reading Sync (Blocking) ---');
const data = fs.readFileSync(__filename);
console.log('Sync Read Finished.');
console.log('I am forced to wait UNTIL sync read finishes.');

/**
 * PELAJARAN:
 * sync version memblokir Event Loop. 
 * Jika file berukuran 1GB, server Anda akan "hang" selama 
 * proses pembacaan berlangsung.
 */
