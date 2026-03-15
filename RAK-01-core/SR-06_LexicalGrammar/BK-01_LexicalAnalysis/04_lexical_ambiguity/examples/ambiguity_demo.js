/**
 * Pembuktian Lexical Ambiguity
 * Bagaimana satu simbol memiliki makna berbeda tergantung konteks.
 */

console.log("=== 1. Ambiguitas Garis Miring (/) ===");

// Konteks Pembagian (DivPunctuator)
const x = 10 / 2;
console.log(`10 / 2 adalah       :`, x);

// Konteks Regular Expression
const regex = /[a-z]/;
console.log(`/[a-z]/ adalah      :`, typeof regex, "(RegExp)");

// Kasus Menarik:
const hasil = [10].map(n => n / 2); 
console.log(`[10] / 2 via map    :`, hasil);

console.log("\n=== 2. Ambiguitas Kurung Kurawal ({}) ===");

// Dianggap Object Literal karena ada di sisi kanan assignment
const obj = { id: 1 }; 
console.log(`Objek:`, obj);

// Dianggap Block Statement jika berdiri sendiri
{
   const pesan = "Ini sebuah Block";
   console.log(pesan);
}

// Paksa Block menjadi Object (JSON-like expression)
// { x: 1 } // SyntaxError if standalone in some contexts
const paksaObj = ({ x: 1 });
console.log(`Dipaksa jadi objek:`, paksaObj);
