/**
 * CH-02: Lexical Grammar - Tokenizer Demo
 * 
 * Melakukan "Scanning" karakter demi karakter untuk menemukan unit atomik (Tokens).
 */

const sourceCode = "let total = 500 + 12;";

// 1. Definisikan Pola (Lexical Grammar Rules)
const grammarRules = [
  { type: "KEYWORD", regex: /^let\b/ },
  { type: "IDENTIFIER", regex: /^[a-zA-Z_]\w*/ },
  { type: "OPERATOR", regex: /^[=+*/-]/ },
  { type: "NUMBER", regex: /^\d+/ },
  { type: "PUNCTUATION", regex: /^;/ },
  { type: "WHITESPACE", regex: /^\s+/ }
];

function tokenize(input) {
  let tokens = [];
  let remaining = input;

  while (remaining.length > 0) {
    let matched = false;

    for (const rule of grammarRules) {
      const match = remaining.match(rule.regex);
      if (match) {
        if (rule.type !== "WHITESPACE") {
          tokens.push({ type: rule.type, value: match[0] });
        }
        remaining = remaining.slice(match[0].length);
        matched = true;
        break;
      }
    }

    if (!matched) {
      throw new Error(`Lexical Error: Unexpected character at "${remaining[0]}"`);
    }
  }

  return tokens;
}

// Eksekusi: Merubah string menjadi array of tokens
console.log("--- Lexer Simulation ---");
console.log(`Input: "${sourceCode}"`);
try {
  const result = tokenize(sourceCode);
  console.table(result);
} catch (e) {
  console.error(e.message);
}

/**
 * ARCHITECT INSIGHT:
 * Inilah alasan kenapa Anda tidak bisa memulai nama variabel dengan angka.
 * Aturan Lexical (RegExp) di spec mendefinisikan Identifier tidak boleh cocok dengan pola angka di posisi awal.
 */
