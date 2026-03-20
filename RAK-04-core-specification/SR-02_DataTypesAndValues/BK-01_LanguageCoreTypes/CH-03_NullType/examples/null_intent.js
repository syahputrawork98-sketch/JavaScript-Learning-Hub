/**
 * CH-03: Null Type (Spec Lab)
 * 
 * Lab ini menunjukkan penggunaan 'null' sebagai 
 * sinyal kekosongan yang disengaja.
 */

// 1. Inisialisasi sengaja kosong
let session = null;
console.log(`Session: ${session}`); 

// 2. Memutus rantai objek
const user = { name: "Architect", boss: null };
console.log(`Boss check: ${user.boss}`);

// 3. The historical bug
console.log(`Type of null: ${typeof null}`); // object (Warning!)

/**
 * MENTAL MODEL:
 * 'null' artinya "Saya tahu variabel ini ada, tapi saya 
 * secara eksplisit menyatakan bahwa isinya KOSONG".
 */
