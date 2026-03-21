/**
 * CH-04: The Syntactic Grammar
 * 
 * Melakukan validasi struktur (Syntax) dari urutan token.
 */

// Simulasi list token dari Lexer: "let x = 10;"
const validTokens = ["KEYWORD", "IDENTIFIER", "OPERATOR", "NUMBER", "PUNCTUATION"];

// Simulasi list token salah: "let = 10;"
const invalidTokens = ["KEYWORD", "OPERATOR", "NUMBER", "PUNCTUATION"];

function validateSyntax(tokens) {
  console.log(`\nValidating Token Stream: [${tokens.join(", ")}]`);
  
  let current = 0;

  // Aturan Sederhana: VariableDeclaration -> KEYWORD + IDENTIFIER + OPERATOR + NUMBER + PUNCTUATION
  try {
    if (tokens[current++] !== "KEYWORD") throw new Error("Expected keyword 'let' or 'const'");
    if (tokens[current++] !== "IDENTIFIER") throw new Error("Expected variable name (Identifier)");
    if (tokens[current++] !== "OPERATOR") throw new Error("Expected assignment operator '='");
    if (tokens[current++] !== "NUMBER") throw new Error("Expected value (Number)");
    if (tokens[current++] !== "PUNCTUATION") throw new Error("Expected semicolon ';'");
    
    console.log("✅ Syntax Valid: Matches VariableDeclaration structure.");
  } catch (e) {
    console.log(`❌ Syntax Error: ${e.message}`);
  }
}

console.log("--- Syntactic Grammar Validation ---");
validateSyntax(validTokens);
validateSyntax(invalidTokens);

/**
 * ARCHITECT INSIGHT:
 * Inilah tahap penentuan Abstract Syntax Tree (AST).
 * Jika Lexical Grammar melihat "huruf", maka Syntactic Grammar melihat "pola kalimat".
 * Tanpa struktur ini, kode JS tidak akan bisa dipahami alur logikanya.
 */
