/**
 * PILLAR 1: Modulo Wrapping (Uint8)
 * Membedah perilaku overflow pada TypedArrays.
 */

const u8 = new Uint8Array(2);
u8[0] = 255;
u8[1] = 256; // 256 % 256 = 0

console.log("--- Uint8 Wrapping ---");
console.log(`Index 0 (255): ${u8[0]}`);
console.log(`Index 1 (256): ${u8[1]}`);

u8[0] = 257; // 257 % 256 = 1
console.log(`Value 257 becomes: ${u8[0]}`);

const i32 = new Int32Array(1);
i32[0] = 2147483647 + 1; // Overflow to min negative
console.log(`Int32 Overflow: ${i32[0]}`);
