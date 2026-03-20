/**
 * CH-03: Interoperability (The Bridge Lab)
 * 
 * Lab ini menunjukkan cara memanggil module CJS dari ESM.
 */

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Memuat CJS lama
const cjsModule = require('./cjs_util.js');

async function run() {
    console.log('--- Bridge Lab Active ---');
    console.log('Trying to use CJS from ESM context...');
    
    // Sukses: ESM bisa mengimpor CJS
    console.log(`CJS Result: ${cjsModule.data}`);
    
    // Catatan: CJS tidak bisa menggunakan 'import' (kecuali dynamic import())
}

run();

// cjs_util.js (simulasi di file yang sama untuk demo)
// module.exports = { data: 'Shared Energy' };
