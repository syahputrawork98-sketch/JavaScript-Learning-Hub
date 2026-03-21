/**
 * PILLAR 1: Lexical Tokens vs Syntax
 * Simulasi bagaimana Hub memisahkan aliran karakter menjadi Token.
 */

const code = "const x = 10;";

// Simple Tokenizer Simulation
const tokens = code.split(/(\s+|\W+)/).filter(t => t.trim().length > 0);

console.log("--- Lexical Tokenization ---");
console.log(`Source: ${code}`);
console.log(`Tokens: [${tokens.join(" | ")}]`);

// Analysis
tokens.forEach(t => {
    if (["const", "let", "var"].includes(t)) console.log(`Token [${t}] -> Reserved Keyword`);
    else if (/[a-zA-Z_]/.test(t[0])) console.log(`Token [${t}] -> Identifier`);
    else if (/\d+/.test(t)) console.log(`Token [${t}] -> Numeric Literal`);
});
