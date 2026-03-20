/**
 * CH-11: Internal Methods & Slots (Spec Lab)
 * 
 * Lab ini menunjukkan cara kerja "Internal Methods" 
 * menggunakan Proxy sebagai jembatan observasi.
 */

const target = {
    energy: 100
};

const sentinel = new Proxy(target, {
    get(obj, prop) {
        console.log(`[Sentintel] Intercepting [[Get]] for property: ${prop}`);
        return obj[prop];
    },
    set(obj, prop, value) {
        console.log(`[Sentintel] Intercepting [[Set]] for property: ${prop} with value: ${value}`);
        obj[prop] = value;
        return true;
    }
});

console.log('Reading energy...');
const val = sentinel.energy;

console.log('\nWriting energy...');
sentinel.energy = 200;

/**
 * MENTAL MODEL:
 * Internal methods adalah "Sirkuit Bawah Tanah" yang menghubungkan 
 * sintaks JS Anda (obj.prop) ke manipulasi memori aktual.
 */
