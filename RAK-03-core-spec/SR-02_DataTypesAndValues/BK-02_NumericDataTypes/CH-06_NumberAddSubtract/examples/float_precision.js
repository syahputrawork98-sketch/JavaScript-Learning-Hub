/**
 * CH-06: Number Add & Subtract (Spec Lab)
 * 
 * Lab ini menunjukkan anomali presisi saat melakukan 
 * penjumlahan pada angka desimal.
 */

const a = 0.1;
const b = 0.2;
const result = a + b;

console.log(`0.1 + 0.2 = ${result}`);
console.log(`Is exactly 0.3? ${result === 0.3}`);

// Solusi Arsitek: Fixed Precision
const fixedResult = (a + b).toFixed(1);
console.log(`Fixed (1 dec): ${fixedResult}`);

/**
 * MENTAL MODEL:
 * Menjumlahkan float di JS seperti mencoba menyambungkan 
 * dua potong kayu yang ujungnya sudah dibulatkan. 
 * Hasilnya seringkali tidak pas 100%.
 */
