/**
 * LAB: Sub-atomic Control (Bitwise)
 * Mental Model: "Sub-atomic Control"
 */

// Representasi Biner:
// 5  = 00000000000000000000000000000101
// 3  = 00000000000000000000000000000011

let a = 5;
let b = 3;

// 1. Bitwise AND (&) -> Hanya bit yang sama-sama 1 yang jadi 1
// Result: 00000001 (1)
console.log("5 & 3 (AND):", a & b);

// 2. Bitwise OR (|) -> Jika salah satu 1, maka 1
// Result: 00000111 (7)
console.log("5 | 3 (OR):", a | b);

// 3. Bitwise XOR (^) -> Hanya jika berbeda yang jadi 1
// Result: 00000110 (6)
console.log("5 ^ 3 (XOR):", a ^ b);

// 4. Bitwise NOT (~) -> Membalikkan seluruh bit
console.log("~5 (NOT):", ~a); // -6 (Karena representasi Two's Complement)

// 5. Bitwise Shift
let val = 2; // 0010
console.log("\n--- Pergeseran Bit ---");
console.log("2 << 1 (Geser Kiri):", val << 1); // 4 (0100) -> x2
console.log("2 >> 1 (Geser Kanan):", val >> 1); // 1 (0001) -> /2
