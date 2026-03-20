/**
 * CH-08: Optional Symbols (opt) Simulation
 * 
 * Mental Model: 
 * Simbol bertanda 'opt' boleh hadir satu kali atau tidak hadir sama sekali.
 */

const parserRules = {
  // VariableDeclaration : BindingIdentifier Initializer_opt
  "VariableDeclaration": ["BindingIdentifier", "Initializer_opt"],
  "Initializer": ["=", "AssignmentExpression"]
};

function parse(ruleName, inputTokens) {
  console.log(`\nParsing rule: ${ruleName}`);
  console.log(`Remaining Tokens: [${inputTokens.join(", ")}]`);

  if (ruleName === "BindingIdentifier") {
    // Sederhananya, anggap token pertama selalu identifier jika bukan keyword
    const token = inputTokens.shift();
    console.log(`  Identified: ${token} as BindingIdentifier`);
    return true;
  }

  if (ruleName === "Initializer_opt") {
    if (inputTokens[0] === "=") {
      console.log("  🔍 Option found! Expanding 'Initializer'");
      inputTokens.shift(); // consume '='
      console.log("  Consuming assignment expression...");
      inputTokens.shift(); // consume value
      return true;
    } else {
      console.log("  ⏭️ Option absent (opt). Continuing without Initializer.");
      return true;
    }
  }
}

// Case 1: Dengan Initializer (let x = 10)
const tokens1 = ["x", "=", "10"];
console.log("--- CASE 1: OPTIONAL PRESENT ---");
parse("VariableDeclaration", tokens1);
parse("BindingIdentifier", tokens1);
parse("Initializer_opt", tokens1);

// Case 2: Tanpa Initializer (let x;)
const tokens2 = ["x", ";"];
console.log("\n--- CASE 2: OPTIONAL ABSENT ---");
parse("VariableDeclaration", tokens2);
parse("BindingIdentifier", tokens2);
parse("Initializer_opt", tokens2);

/**
 * ARCHITECT INSIGHT:
 * Notasi 'opt' adalah cara spesifikasi menangani fleksibilitas tanpa harus
 * menulis ribuan aturan duplikat.
 * Bayangkan jika tidak ada 'opt', kita harus menulis aturan terpisah untuk
 * variabel yang punya nilai dan yang tidak punya nilai. 'opt' membuatnya ringkas.
 */
