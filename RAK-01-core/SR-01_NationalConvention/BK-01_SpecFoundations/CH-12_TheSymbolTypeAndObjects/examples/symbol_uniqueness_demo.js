/**
 * CH-12: The Symbol Type & Objects
 * 
 * Demonstrasi keunikan Symbol dan penggunaannya sebagai kunci properti.
 */

// 1. Keunikan Mutlak
const sym1 = Symbol("id");
const sym2 = Symbol("id");

console.log("Symbol 1:", sym1.toString());
console.log("Symbol 2:", sym2.toString());
console.log("Apakah sym1 === sym2?", sym1 === sym2); // false (Meskipun deskripsinya sama!)

// 2. Symbol sebagai Kunci Properti (Hidden/Defensive)
const SECRET_KEY = Symbol("internalSecret");
const user = {
    name: "Syahputra",
    [SECRET_KEY]: "SUPER-CONFIDENTIAL-DATA"
};

console.log("Akses via Symbol:", user[SECRET_KEY]);

// 3. Karakteristik Iterasi (Semi-Private)
console.log("Object Keys:", Object.keys(user)); // Symbol tidak muncul!
console.log("JSON Stringify:", JSON.stringify(user)); // Symbol tidak muncul!

// Masih bisa diambil jika memang benar-benar dicari
const symbols = Object.getOwnPropertySymbols(user);
console.log("Detected Symbols:", symbols);
console.log("Data Rahasia:", user[symbols[0]]);

// 4. Global Symbol Registry
const globalSym1 = Symbol.for("app.config");
const globalSym2 = Symbol.for("app.config");
console.log("Apakah Global Symbols identik?", globalSym1 === globalSym2); // true

console.log("Symbol Concept Verified: Gunakan Symbol untuk integritas kunci properti.");
