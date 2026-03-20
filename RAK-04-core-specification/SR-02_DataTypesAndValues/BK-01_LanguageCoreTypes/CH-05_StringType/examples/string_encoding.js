/**
 * CH-05: String Type (Spec Lab)
 * 
 * Lab ini menunjukkan bagaimana ECMAScript menangani 
 * karakter via UTF-16 (16-bit code units).
 */

const simple = "ABC";
console.log(`'${simple}' length: ${simple.length}`); // 3

// Karakter di luar BMP (Basic Multilingual Plane) - Surrogate Pairs
const emoji = "🚀"; 
console.log(`'${emoji}' length: ${emoji.length}`); // 2! (Bukan 1)

// Pembuktian Code Units
console.log('Hex code units:');
for (let i = 0; i < emoji.length; i++) {
    console.log(`Unit ${i}: \\u${emoji.charCodeAt(i).toString(16).toUpperCase()}`);
}

/**
 * MENTAL MODEL:
 * String di JS bukanlah urutan karakter, 
 * melainkan urutan 16-bit integers (UTF-16). 
 * Satu karakter "mahal" (emoji) butuh dua slot.
 */
