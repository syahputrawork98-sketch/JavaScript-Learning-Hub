/**
 * CH-07: Number Bitwise Shift Ops (Spec Lab)
 * 
 * Lab ini menunjukkan bagaimana Number (64-bit) dikonversi 
 * menjadi 32-bit Integer sebelum dilakukan shifting.
 */

const val = 5; // Binary: 000...000101

// 1. Left Shift (<<)
console.log(`5 << 1: ${5 << 1}`); // 10 (1010)

// 2. Sign-propagating Right Shift (>>)
console.log(`-5 >> 1: ${-5 >> 1}`); // -3 (Menjaga bit tanda)

// 3. Zero-fill Right Shift (>>>)
console.log(`-5 >>> 1: ${-5 >>> 1}`); // 2147483645 (Menjadi positif besar!)

/**
 * MENTAL MODEL:
 * Bitwise shift seperti menggeser manik-manik pada 
 * sempoa 32-baris. Hati-hati dengan >>> karena 
 * ia akan selalu menghasilkan angka positif.
 */
