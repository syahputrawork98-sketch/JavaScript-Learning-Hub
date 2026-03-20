/**
 * CH-08: Well-known Symbols (Spec Lab)
 * 
 * Lab ini menunjukkan cara memodifikasi perilaku dasar 
 * objek menggunakan "Hook" internal spesifikasi.
 */

const customObject = {
  [Symbol.toStringTag]: "EnergyCore",
  [Symbol.iterator]: function* () {
      yield "Pulse 1";
      yield "Pulse 2";
      yield "Pulse 3";
  }
};

// 1. Kustomisasi Output String
console.log(`ToString: ${Object.prototype.toString.call(customObject)}`); 

// 2. Kustomisasi Iterasi (for...of)
console.log('\n--- Iterating over custom object ---');
for (let p of customObject) {
    console.log(p);
}

/**
 * MENTAL MODEL:
 * Well-known symbols adalah "Pintu Rahasia" yang disediakan 
 * oleh JS bagi Anda untuk mengatur ulang cara kerja batin objek.
 */
