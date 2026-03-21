/**
 * SIMULASI: Static Semantics (Clause 5.2.5)
 * 
 * Aturan statis dicek oleh spec 'sebelum' program berjalan.
 * Jika melanggar, program bahkan tidak akan mulai.
 */

function simulateStaticAudit(codeStructure) {
  console.log("--- Memulai Audit Statis Spesifikasi ---");

  const declaredVariables = new Set();
  
  for (const statement of codeStructure) {
    console.log(`Auditing: ${statement.type} (${statement.name})...`);

    // Simulasi Rule: Early Error for Duplicate Declarations
    // Spec: "It is a Syntax Error if the LexicallyDeclaredNames of StatementList contains any duplicate entries."
    if (statement.type === "Declaration") {
      if (declaredVariables.has(statement.name)) {
        console.error(`-> 🚨 EARLY ERROR: Identitas "${statement.name}" sudah dideklarasikan sebelumnya!`);
        return { status: "SyntaxError", message: `Duplicate declaration: ${statement.name}` };
      }
      declaredVariables.add(statement.name);
    }
  }

  console.log("-> ✅ Audit Selesai: Kode valid secara statis.");
  return { status: "Success" };
}

// Simulasi Kode yang GAGAL (Static Violation)
const badCode = [
  { type: "Declaration", name: "x" },
  { type: "Assignment", name: "x", value: 10 },
  { type: "Declaration", name: "x" } // Error di sini!
];

const auditResult = simulateStaticAudit(badCode);
console.log("\nHasil Akhir:", auditResult);
