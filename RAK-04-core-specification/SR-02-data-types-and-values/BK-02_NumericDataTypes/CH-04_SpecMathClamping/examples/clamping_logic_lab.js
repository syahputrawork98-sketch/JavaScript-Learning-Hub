/**
 * LAB: Mathematical Values and Clamping Logic
 */
const buffer = new Uint8Array(1);
buffer[0] = 257;
console.log(`Uint8 257 wrapping: ${buffer[0]}`);
console.log(`Int32 truncation: ${10.9 | 0}`);
const clamped = new Uint8ClampedArray(1);
clamped[0] = 300;
console.log(`Clamped 300: ${clamped[0]}`);
