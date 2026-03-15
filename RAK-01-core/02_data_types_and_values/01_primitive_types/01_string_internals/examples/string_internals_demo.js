/**
 * Pembuktian Immutability & UTF-16 surrogate pairs
 */

// 1. Pembuktian Immutability
let name = "Syahputra";
name[0] = "Z"; // Tidak akan error, tapi tidak akan mengubah 'S' menjadi 'Z'
console.log("Original:", name); // Tetap "Syahputra"

// 2. Pembuktian UTF-16 (Surrogate Pairs)
const emoji = "🔥";
console.log(`Emoji: ${emoji}`);
console.log(`Length: ${emoji.length}`); // Hasilnya 2, bukan 1!

const charCode1 = emoji.charCodeAt(0).toString(16);
const charCode2 = emoji.charCodeAt(1).toString(16);
console.log(`Hex Code Units: \\u${charCode1} \\u${charCode2}`);
