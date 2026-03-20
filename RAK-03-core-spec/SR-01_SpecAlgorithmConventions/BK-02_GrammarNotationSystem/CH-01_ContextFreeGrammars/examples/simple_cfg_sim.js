/**
 * CH-01: Context-Free Grammars Simulation
 * 
 * Mental Model: 
 * Program (Non-terminal) -> Statement (Non-terminal) -> Keyword (Terminal) + Identifier (Terminal)
 */

// 1. Simbol Terminal (Unit terkecil, tidak bisa dipecah lagi)
const TERMINALS = {
  KEYWORD_LET: "let",
  SEMICOLON: ";",
  ASSIGN: "=",
  VALUE: "42"
};

// 2. Simbol Non-terminal (Abstraksi yang bisa berkembang)
const NON_TERMINALS = {
  PROGRAM: "Program",
  STATEMENT: "VariableDeclaration",
  IDENTIFIER: "userName"
};

// 3. Prosedur "Production" (Aturan Substitusi)
function generateStatement() {
  console.log(`[Expanding] ${NON_TERMINALS.PROGRAM} -> ${NON_TERMINALS.STATEMENT}`);
  
  // Rule: Statement -> KEYWORD_LET + IDENTIFIER + ASSIGN + VALUE + SEMICOLON
  const result = [
    TERMINALS.KEYWORD_LET,
    NON_TERMINALS.IDENTIFIER,
    TERMINALS.ASSIGN,
    TERMINALS.VALUE,
    TERMINALS.SEMICOLON
  ];

  return result.join(" ");
}

// Eksekusi: Merubah abstraksi (CFG) menjadi kode riil
console.log("--- CFG Simulation ---");
const code = generateStatement();
console.log(`Final Generated Code: ${code}`);

/**
 * ARCHITECT INSIGHT:
 * Di dalam spesifikasi ECMA-262, ribuan aturan seperti ini saling bertumpuk.
 * Mesin JS (Parser) melakukan langkah terbalik: 
 * Mereka mengambil 'let userName = 42;' dan mencoba mencocokkannya kembali ke hirarki CFG.
 * Jika GAGAL mencocokkan -> SyntaxError!
 */
