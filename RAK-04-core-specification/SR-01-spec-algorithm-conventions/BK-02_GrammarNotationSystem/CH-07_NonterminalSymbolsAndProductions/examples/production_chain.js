/**
 * CH-07: Nonterminal Symbols and Productions Simulation
 * 
 * Mental Model:
 * Relasi ":" berarti "berubah menjadi" atau "mengandung".
 */

// 1. Database Produksi (Spec Rules)
const SPEC_PRODUCTIONS = {
  "Script": ["StatementList"],
  "StatementList": ["Statement", "StatementList_opt"],
  "Statement": ["VariableStatement", "EmptyStatement"],
  "VariableStatement": ["let", "BindingList", ";"],
  "EmptyStatement": [";"]
};

// 2. Mesin Produksi (Recursive Expansion)
function expand(symbol, depth = 0) {
  const indent = "  ".repeat(depth);
  
  // Jika simbol tidak ada di SPEC_PRODUCTIONS -> Ini adalah Terminal!
  if (!SPEC_PRODUCTIONS[symbol]) {
    console.log(`${indent}💎 Terminal: [${symbol}]`);
    return symbol;
  }

  console.log(`${indent}🖇️ Expanding Nonterminal: <${symbol}>`);
  
  // Pilih alternatif pertama untuk demo sederhana
  const alternatives = SPEC_PRODUCTIONS[symbol];
  return alternatives.map(s => expand(s, depth + 1)).join(" ");
}

console.log("--- Production Chain Simulation ---");
console.log("Goal: Expand <Script> into Terminals\n");

expand("Script");

/**
 * ARCHITECT INSIGHT:
 * Non-terminal adalah "logika" (blueprint), sedangkan Terminal adalah "fisik" (bata).
 * Di dalam spesifikasi, spasi antar simbol dalam sebuah produksi berarti "diikuti oleh".
 * Misal: 'let BindingList ;' berarti token 'let' HARUS diikuti oleh isi dari BindingList, 
 * lalu diakhiri oleh token ';'.
 */
