/**
 * CH-11: The [empty] Notation Simulation
 * 
 * Mental Model:
 * [empty] adalah cara spesifikasi mengatakan: 
 * "Tidak ada apa-apa di sini, dan itu OKE."
 */

function parseArgumentList(tokens) {
  console.log(`Current Tokens: [${tokens.join(", ")}]`);

  // Produksi: ArgumentList : [empty]
  if (tokens.length === 0) {
    console.log("🕳️ [empty] match found. Arguments are absent but valid.");
    return { type: "ArgumentList", value: null };
  }

  // Produksi: ArgumentList : AssignmentExpression
  console.log("📦 Non-empty match. Parsing AssignmentExpression...");
  const value = tokens.shift();
  return { type: "ArgumentList", value: value };
}

console.log("--- CASE 1: EMPTY INPUT (func()) ---");
const result1 = parseArgumentList([]);
console.log("Result:", result1);

console.log("\n--- CASE 2: WITH ARGUMENT (func(10)) ---");
const result2 = parseArgumentList(["10"]);
console.log("Result:", result2);

/**
 * ARCHITECT INSIGHT:
 * [empty] sering digunakan sebagai dasar untuk elemen opsional dalam daftar rekursif.
 * Dalam teori bahasa, ini sering dilambangkan dengan simbol Yunani Epsilon (ε).
 * Memahami [empty] membantu Anda memahami 'base case' dari aturan-aturan 
 * yang sangat kompleks di dalam spesifikasi.
 */
