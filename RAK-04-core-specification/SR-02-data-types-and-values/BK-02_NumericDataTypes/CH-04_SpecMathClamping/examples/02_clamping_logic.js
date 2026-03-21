/**
 * PILLAR 2: Clamping Logic (Uint8ClampedArray)
 * Perbedaan antara Wrapping dan Clamping (saturasi).
 */

const wrap = new Uint8Array(1);
const clamp = new Uint8ClampedArray(1);

wrap[0] = 300;  // 300 % 256 = 44
clamp[0] = 300; // Saturated to 255

console.log("--- Wrap vs Clamp ---");
console.log(`Uint8 (Wrap): ${wrap[0]}`);
console.log(`Uint8Clamped (Clamp): ${clamp[0]}`);

clamp[0] = -50; // Saturated to 0
console.log(`Negative Clamp: ${clamp[0]}`);
