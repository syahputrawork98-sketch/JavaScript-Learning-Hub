/**
 * CH-04: Boolean Type (Spec Lab)
 * 
 * Lab ini menunjukkan 2 nilai logika murni (true/false) 
 * dan konsep falsy values.
 */

const isActive = true;
const isTerminated = false;

console.log(`Active: ${isActive} (${typeof isActive})`);

// Pembuktian Falsy (Hanya ada 8 nilai falsy di JS)
const falsyList = [false, 0, -0, 0n, "", null, undefined, NaN];

console.log('\n--- Evaluating Falsy Values ---');
falsyList.forEach(v => {
    if (!v) {
        console.log(`Value [${String(v)}] is interpreted as FALSE`);
    }
});

/**
 * MENTAL MODEL:
 * Boolean adalah saklar lampu. Hanya ada dua kemungkinan 
 * posisi fisik: HIDUP atau MATI.
 */
