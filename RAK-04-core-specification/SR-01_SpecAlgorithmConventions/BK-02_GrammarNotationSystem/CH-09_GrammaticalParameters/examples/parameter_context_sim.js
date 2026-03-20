/**
 * CH-09: Grammatical Parameters Simulation
 * 
 * Mental Model:
 * Parameter [In, Yield, Await] menentukan apakah suatu syntax 'legal' 
 * di konteks tertentu.
 */

function parseExpression(context = { yieldAllowed: false, awaitAllowed: false }) {
  console.log(`\nParsing Expression in Context:`, context);

  // Simulasi simulasi parsing token 'yield'
  const simulateToken = "yield";

  if (simulateToken === "yield") {
    if (context.yieldAllowed) {
      console.log("✅ Keyword 'yield' identified (Inside Generator). Valid.");
    } else {
      console.log("❌ SyntaxError: 'yield' cannot be used here (Normal context).");
    }
  }
}

// Scenario 1: Context Normal [~Yield, ~Await]
console.log("--- SCENARIO 1: NORMAL CONTEXT ---");
parseExpression({ yieldAllowed: false, awaitAllowed: false });

// Scenario 2: Generator Context [+Yield]
console.log("\n--- SCENARIO 2: GENERATOR CONTEXT ---");
parseExpression({ yieldAllowed: true, awaitAllowed: false });

/**
 * ARCHITECT INSIGHT:
 * Spesifikasi menggunakan parameter untuk 'mewariskan' izin/larangan 
 * dari parent ke child production.
 * Jika sebuah FunctionBody memiliki parameter [+Yield], maka semua 
 * Expression di dalamnya juga akan mewarisi [+Yield].
 * Inilah alasan kenapa Anda tidak bisa menggunakan 'await' 
 * di luar 'async function' (sampai adanya Top-level await).
 */
