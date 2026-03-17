/**
 * SIMULASI: GlobalDeclarationInstantiation (Clause 16.1.7)
 * 
 * Mendemonstrasikan proses "setup panggung" yang terjadi
 * SEBELUM satu baris kode dieksekusi.
 */

class GlobalDeclarationInstantiator {
  constructor() {
    this.globalEnvRecord = new Map();
    this.log = [];
  }

  // Fase 1: Scan (Statis)
  runVarScan(declarations) {
    console.log("=== FASE 1: VarDeclaredNames Scan ===");
    for (const decl of declarations) {
      if (decl.type === "var") {
        if (!this.globalEnvRecord.has(decl.name)) {
          this.globalEnvRecord.set(decl.name, { kind: "var", value: undefined });
          console.log(`[VAR BINDING]   '${decl.name}' → undefined (hoisted)`);
        }
      }
    }
  }

  // Fase 2: Lexical Binding (Statis - Terkunci)
  runLexicalScan(declarations) {
    console.log("\n=== FASE 2: LexicallyDeclaredNames Scan ===");
    for (const decl of declarations) {
      if (decl.type === "let" || decl.type === "const") {
        if (this.globalEnvRecord.has(decl.name)) {
          console.error(`🚨 SyntaxError: '${decl.name}' sudah ada sebagai 'var'. Konflik!`);
          return false;
        }
        this.globalEnvRecord.set(decl.name, { kind: decl.type, value: "🔒 TDZ" });
        console.log(`[LET/CONST BIND] '${decl.name}' → 🔒 TDZ`);
      } else if (decl.type === "function") {
        this.globalEnvRecord.set(decl.name, { kind: "function", value: `[Function: ${decl.name}]` });
        console.log(`[FUNC BINDING]  '${decl.name}' → [Function] (hoisted fully)`);
      }
    }
    return true;
  }

  // Fase 3: Eksekusi
  executeRuntime(declarations) {
    console.log("\n=== FASE 3: Runtime Eksekusi ===");
    for (const decl of declarations) {
      if (decl.type === "let" || decl.type === "const") {
        const binding = this.globalEnvRecord.get(decl.name);
        if (binding) {
          binding.value = decl.value;
          console.log(`[INITIALIZE]   '${decl.name}' ← ${JSON.stringify(decl.value)} (TDZ lifted)`);
        }
      }
    }
  }

  showEnvRecord() {
    console.log("\n=== Global Environment Record ===");
    for (const [name, entry] of this.globalEnvRecord) {
      console.log(`  ${name} (${entry.kind}) = ${JSON.stringify(entry.value)}`);
    }
  }
}

// Simulasikan sebuah script sederhana
const declarations = [
  { type: "var", name: "globalX" },
  { type: "function", name: "greet" },
  { type: "let", name: "userName", value: "Alice" },
  { type: "const", name: "MAX_SIZE", value: 100 },
];

const instantiator = new GlobalDeclarationInstantiator();
instantiator.runVarScan(declarations);
instantiator.runLexicalScan(declarations);
instantiator.executeRuntime(declarations);
instantiator.showEnvRecord();
