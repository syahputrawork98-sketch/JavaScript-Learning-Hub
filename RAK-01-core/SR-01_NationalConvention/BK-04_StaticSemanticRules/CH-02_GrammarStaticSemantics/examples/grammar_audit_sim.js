/**
 * SIMULASI: Grammar Static Semantics (Parameterized Productions)
 * 
 * Demonstrasi bagaimana parameter grammar ([Await])
 * mengubah aturan validasi secara statis.
 */

class GrammarAuditor {
  // Simulasi produksi grammar: Expression[Await]
  auditExpression(node, hasAwaitParameter) {
    console.log(`Checking Node: ${node.type} | Grammar Param Await: ${hasAwaitParameter}`);

    if (node.type === "AwaitExpression") {
      // Aturan Statis: AwaitExpression hanya legal jika parameter [Await] aktif
      if (!hasAwaitParameter) {
        this.reportError("SyntaxError: 'await' is only valid in async functions and top-level bodies");
        return false;
      }
    }
    return true;
  }

  reportError(msg) {
    console.error(`🚨 [GRAMMAR-AUDIT]: ${msg}`);
  }
}

// --- EKSPERIMEN ---

const auditor = new GrammarAuditor();

// Skenario 1: Di dalam Fungsi Biasa (Grammar Parameter [Await] = false)
console.log("--- Skenario 1: Regular Function ---");
const node1 = { type: "AwaitExpression", content: "await p" };
auditor.auditExpression(node1, false);

console.log("\n" + "=".repeat(40) + "\n");

// Skenario 2: Di dalam Fungsi Async (Grammar Parameter [Await] = true)
console.log("--- Skenario 2: Async Function ---");
const node2 = { type: "AwaitExpression", content: "await p" };
const isValid = auditor.auditExpression(node2, true);

if (isValid) {
  console.log("✅ Node valid secara statis dalam konteks async.");
}
