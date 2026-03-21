/**
 * LAB: String Immutability and Unicode Complexity
 * 
 * Eksperimen ini membedah bagaimana Hub mengelola memori String (UTF-16) 
 * sesuai Clause 6.1.4.
 */

// 1. String Immutability
console.log("--- 1. Immutability Check ---");
let hubName = "JS-HUB";
hubName[0] = "X"; // Silently fails (non-strict) or Error (strict)
console.log(`hubName after direct mutation attempt: ${hubName}`); // Still "JS-HUB"

// 2. Surrogate Pairs (Unicode Complexity)
console.log("\n--- 2. UTF-16 Surrogate Pairs ---");
const rocket = "🚀"; // Emoji outside BMP
console.log(`Text: ${rocket}`);
console.log(`Length (Code Units): ${rocket.length}`); // 2 (Surrogate Pair)

// 3. Proper Iteration (Grapheme Awareness)
console.log("\n--- 3. Iterator vs Array Access ---");
const s = "A🚀B";
console.log("Using Index Access:");
for (let i = 0; i < s.length; i++) {
    console.log(`Index ${i}: ${s[i]}`); // Index 1 & 2 are broken pieces of the emoji
}

console.log("\nUsing Iterator (for...of):");
for (const char of s) {
    console.log(`Char: ${char}`); // Correctly identifies the Rocket as 1 unit
}

// 4. String Interning Simulation (Conceptual)
const s1 = "Hub";
const s2 = "Hub";
console.log(`\n'Hub' === 'Hub': ${s1 === s2}`); // true (Interned)
