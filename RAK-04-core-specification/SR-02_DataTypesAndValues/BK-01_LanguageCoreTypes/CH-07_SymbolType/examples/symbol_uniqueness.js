/**
 * CH-07: Symbol Type (Spec Lab)
 * 
 * Lab ini menunjukkan sifat unik Symbol sebagai 
 * 'Unique ID' yang tidak bisa bertabrakan.
 */

const sym1 = Symbol("energy");
const sym2 = Symbol("energy");

console.log(`sym1 === sym2: ${sym1 === sym2}`); // false!

// Penggunaan sebagai Kunci Properti Tersembunyi
const core = {
    id: "CORE-01",
    [sym1]: "Hidden Plasma Value"
};

console.log('\n--- Object Keys Audit ---');
console.log(Object.keys(core)); // ['id'] (Symbol tidak muncul!)
console.log(core[sym1]); // 'Hidden Plasma Value'

/**
 * MENTAL MODEL:
 * Symbol adalah "Kunci Privat" yang Anda buat sendiri. 
 * Meskipun namanya sama, geriginya berbeda.
 */
