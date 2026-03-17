/**
 * CH-09: The String Type & Objects
 * 
 * Demonstrasi Immutability dan pemahaman 16-bit Code Units.
 */

// 1. Immutability Verification
let message = "JavaScript";
message[0] = "Y"; // Gagal secara diam-diam (atau error di strict mode)
console.log("Immutability test (tetap J):", message); 

// 2. String Primitif vs String Object
const strPrim = "hello";
const strObj = new String("hello");

console.log("Type of primitive:", typeof strPrim);
console.log("Type of object:", typeof strObj);
console.log("Equality test (loose):", strPrim == strObj);  // true
console.log("Equality test (strict):", strPrim === strObj); // false

// 3. Masalah 16-bit (Surrogate Pairs)
// Sebuah emoji biasanya terdiri dari DUA unit 16-bit.
const emoji = "🚀"; 
console.log(`String: ${emoji}`);
console.log("Length (Code Units):", emoji.length); // 2, bukan 1!

// Cara mengakses Code Point (Karakter Visual) yang benar:
const points = Array.from(emoji);
console.log("Length (Actual Characters):", points.length); // 1

// 4. Transformasi selalu menghasilkan String baru
const upper = message.toUpperCase();
console.log("Original message:", message); // Tetap "JavaScript"
console.log("Transformed message:", upper); // "JAVASCRIPT"

console.log("String Concept Verified: Pahami UTF-16 untuk manipulasi teks tingkat lanjut.");
