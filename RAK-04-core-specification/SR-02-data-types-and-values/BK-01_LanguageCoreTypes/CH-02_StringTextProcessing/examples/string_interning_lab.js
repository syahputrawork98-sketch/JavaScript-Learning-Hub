/**
 * LAB: String Immutability and Unicode Complexity
 */
let hubName = "JS-HUB";
hubName[0] = "X";
console.log(`hubName: ${hubName}`);
const rocket = "🚀";
console.log(`Rocket length: ${rocket.length}`);
const s = "A🚀B";
for (const char of s) { console.log(`Char: ${char}`); }
const s1 = "Hub";
const s2 = "Hub";
console.log(`String Interning: ${s1 === s2}`);
