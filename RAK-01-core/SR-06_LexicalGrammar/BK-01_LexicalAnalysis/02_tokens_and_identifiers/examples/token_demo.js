/**
 * Pembuktian Tokens & Identifier Rules
 * Menguji mana yang legal dan mana yang dilarang oleh Lexer.
 */

console.log("=== 1. Valid Identifiers ===");
const _pribadi = "Sangat Rahasia";
const $harga = 1000;
const user2 = "Budi";

console.log(`_pribadi :`, _pribadi);
console.log(`$harga   :`, $harga);
console.log(`user2    :`, user2);

console.log("\n=== 2. Invalid Identifiers (Akan SyntaxError) ===");
// const 2user = "Gagal";  // Tidak boleh diawali angka
// const my-var = 10;     // Tidak boleh pakai dash (dianggap minus)
// const if = true;       // Tidak boleh pakai Reserved Word

console.log(`Dilarang: 2user, my-var, if, while, class, dll.`);

console.log("\n=== 3. Reserved Words Contextual ===");
// Beberapa kata hanya dilarang di konteks tertentu (misal: await di module)
let await = "Ini legal di skrip biasa, tapi dilarang di ES Module/Async function";
console.log(`await as variable:`, await);

console.log("\n=== 4. Tokenization Visualization ===");
const kode = "const a = 1;";
console.log(`Kode asli: "${kode}"`);
console.log(`Hasil Token: [Keyword: const], [Identifier: a], [Punctuator: =], [Literal: 1], [Punctuator: ;]`);
