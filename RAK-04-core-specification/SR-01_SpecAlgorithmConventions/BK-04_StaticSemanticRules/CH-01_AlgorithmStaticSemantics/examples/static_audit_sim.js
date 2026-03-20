/**
 * SIMULASI: Algorithm Static Semantics (Clause 5.2.4)
 * 
 * Aturan statis dicek oleh "Inspektur" (Parser/Auditor) 
 * sebelum program dijalankan.
 */

class StaticInspector {
  constructor() {
    this.errors = [];
  }

  // Simulasi Syntax-Directed Operation: BoundNames
  getBoundNames(statement) {
    if (statement.type === "VariableDeclaration") {
      return [statement.name];
    }
    return [];
  }

  // Simulasi Audit: Mencari Variable Let yang diduplikasi dalam scope yang sama
  auditScope(statements) {
    const boundNames = new Set();
    
    for (const stmt of statements) {
      const names = this.getBoundNames(stmt);
      for (const name of names) {
        if (boundNames.has(name)) {
          this.reportError(`SyntaxError: Identifier '${name}' has already been declared`);
        }
        boundNames.add(name);
      }
    }
  }

  reportError(msg) {
    console.error(`🚨 [INSPEKTUR]: ${msg}`);
    this.errors.push(msg);
  }
}

// --- EKSPERIMEN ---

const inspector = new StaticInspector();

// Simulasi AST sederhana
const myCode = [
  { type: "VariableDeclaration", mode: "let", name: "x" },
  { type: "Expression", content: "x = 10" },
  { type: "VariableDeclaration", mode: "let", name: "x" } // DUPLIKAT!
];

console.log("Memulai audit statis...");
inspector.auditScope(myCode);

if (inspector.errors.length > 0) {
  console.log("\nKesimpulan: Kode cacat secara statis. Tidak boleh dijalankan.");
} else {
  console.log("\nKesimpulan: Kode aman. Siap dieksekusi di Runtime.");
}
