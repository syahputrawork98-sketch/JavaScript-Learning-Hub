/**
 * SIMULASI: Early Error Rules
 * 
 * Mendemonstrasikan bagaimana "Saringan Keamanan" menghentikan
 * program sebelum satu baris pun dieksekusi.
 */

class EarlyErrorScanner {
  constructor(isStrictMode = false) {
    this.isStrictMode = isStrictMode;
    this.errors = [];
  }

  // Simulasi: Cek duplikasi deklarasi dalam scope yang sama
  checkDuplicateBindings(declarations) {
    const seen = new Set();
    for (const decl of declarations) {
      if (seen.has(decl.name)) {
        this.triggerEarlyError(
          `SyntaxError: Identifier '${decl.name}' has already been declared`
        );
      }
      seen.add(decl.name);
    }
  }

  // Simulasi: Cek penggunaan 'with' di strict mode
  checkWithStatement(hasWithStatement) {
    if (this.isStrictMode && hasWithStatement) {
      this.triggerEarlyError(
        "SyntaxError: 'with' statement not allowed in strict mode"
      );
    }
  }

  // Simulasi: Cek await di luar async context
  checkAwaitExpression(node, isInAsyncContext) {
    if (node.type === "AwaitExpression" && !isInAsyncContext) {
      this.triggerEarlyError(
        "SyntaxError: 'await' is not valid in non-async context"
      );
    }
  }

  triggerEarlyError(msg) {
    console.error(`🚨 [SCANNER BERBUNYI]: ${msg}`);
    this.errors.push(msg);
  }

  runScan(program) {
    console.log("=".repeat(50));
    console.log(`Scanning program (strictMode: ${this.isStrictMode})...`);
    console.log("=".repeat(50));

    this.checkDuplicateBindings(program.declarations || []);
    this.checkWithStatement(program.hasWithStatement || false);
    for (const node of (program.nodes || [])) {
      this.checkAwaitExpression(node, program.isAsync || false);
    }

    if (this.errors.length === 0) {
      console.log("\n✅ Scan Clear! Kode aman, siap dikirim ke Runtime.");
    } else {
      console.log(`\n❌ Ditemukan ${this.errors.length} Early Error(s). Program DITOLAK.`);
    }
  }
}

// --- EKSPERIMEN 1: Duplikasi const ---
const scanner1 = new EarlyErrorScanner();
scanner1.runScan({
  declarations: [
    { name: "userName" },
    { name: "password" },
    { name: "userName" } // Duplikat!
  ]
});

// --- EKSPERIMEN 2: 'with' di strict mode ---
console.log("\n");
const scanner2 = new EarlyErrorScanner(true);
scanner2.runScan({ hasWithStatement: true, declarations: [] });

// --- EKSPERIMEN 3: await di luar async ---
console.log("\n");
const scanner3 = new EarlyErrorScanner();
scanner3.runScan({
  declarations: [],
  nodes: [{ type: "AwaitExpression" }],
  isAsync: false // Bukan fungsi async!
});
