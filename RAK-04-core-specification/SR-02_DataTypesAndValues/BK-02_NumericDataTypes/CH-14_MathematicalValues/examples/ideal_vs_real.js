/**
 * CH-14: Mathematical Values (Spec Lab)
 * 
 * Lab ini menunjukkan perbedaan antara Nilai Ideal (Spec) 
 * dan Realisasi Bit (Number).
 */

const idealSum = 0.1 + 0.2; // Nilai Matematika Ideal: 0.3
const actualValue = 0.30000000000000004; // Realisasi Mesin

console.log(`Mathematical Ideal: 0.3`);
console.log(`Machine Realization: ${idealSum}`);
console.log(`误差 (Error): ${idealSum - 0.3}`);

/**
 * MENTAL MODEL:
 * Mathematical Value adalah "Bayangan Sempurna" (Platonic Ideal). 
 * Number/BigInt adalah "Bayangan di Dinding Gua" yang 
 * terkadang sedikit distorsi karena cahaya (keterbatasan mesin).
 */
