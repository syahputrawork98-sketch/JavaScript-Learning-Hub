/**
 * CH-12: Data Blocks (Spec Lab)
 * 
 * Lab ini menunjukkan penggunaan ArrayBuffer sebagai 
 * realisasi dari "Data Block" (Blok Memori Mentah).
 */

// Membuat Data Block sebesar 8 byte
const block = new ArrayBuffer(8); 
const view = new Uint8Array(block);

// Menulis ke baris memori mentah
view[0] = 0xFF; // 11111111
view[1] = 0xAA; // 10101010

console.log('--- Raw Data Block View ---');
console.log(view);

/**
 * MENTAL MODEL:
 * Data Block adalah "Deretan Loker" di memori. 
 * Setiap loker hanya bisa menampung 8 saklar (bit). 
 * Spek menggunakan ini untuk Buffer dan WebAssembly.
 */
