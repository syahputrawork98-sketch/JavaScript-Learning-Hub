/**
 * PILLAR 1: UTF-16 & Surrogate Pairs
 * Membedah bagaimana Hub menangani karakter di luar Basic Multilingual Plane (BMP).
 */

const text = "A🚀Z"; // 🚀 is a surrogate pair

console.log(`--- String: ${text} ---`);
console.log(`Length (Code Units): ${text.length}`); // 4, because rocket = 2 code units

// Index access vs Iteration
console.log(`Index [1]: ${text[1]}`); // Broken emoji half
console.log(`Index [2]: ${text[2]}`); // Broken emoji half

console.log("\n--- Proper Iteration (Code Point aware) ---");
for (const char of text) {
    console.log(`Character: ${char}`); // Works for 🚀
}
