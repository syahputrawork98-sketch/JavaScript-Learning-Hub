/**
 * CH-12: Lookahead Restrictions Simulation
 * 
 * Mental Model:
 * Lookahead adalah cara parser "mengintip" jendela sebelum melangkah.
 * Jika simbol di jendela dilarang, parser akan menolak instruksi tersebut.
 */

function parseStatement(tokens) {
  console.log(`\nIncoming Tokens: [${tokens.join(", ")}]`);

  // Simulasi Aturan: ExpressionStatement : [lookahead ∉ { {, function }] Expression
  const nextToken = tokens[0];

  console.log(`🛡️ Lookahead check: Is '${nextToken}' in { '{', 'function' }?`);

  if (nextToken === "{" || nextToken === "function") {
    console.log("❌ Lookahead REJECTED! Cannot start ExpressionStatement with this token.");
    return false;
  }

  console.log("✅ Lookahead PASSED. Proceeding to parse Expression...");
  return true;
}

// Case 1: Valid Expression (10 + 20)
console.log("--- CASE 1: LITERAL EXPRESSION ---");
parseStatement(["10", "+", "20"]);

// Case 2: Forbidden Start ({ x: 1 }) -> Ini akan dianggap Object, bukan Statement
console.log("\n--- CASE 2: FORBIDDEN START (Object Literal) ---");
parseStatement(["{", "x:", "1", "}"]);

/**
 * ARCHITECT INSIGHT:
 * Lookahead adalah kunci untuk menyelesaikan ambiguitas dalam grammar.
 * Tanpa lookahead, parser tidak akan tahu apakah '{' memulai sebuah 
 * Block Statement atau sebuah Object Literal.
 * Notasi '∉' (bukan elemen dari) dan '∈' (elemen dari) adalah simbol 
 * matematika formal yang digunakan spesifikasi untuk menjaga presisi ini.
 */
