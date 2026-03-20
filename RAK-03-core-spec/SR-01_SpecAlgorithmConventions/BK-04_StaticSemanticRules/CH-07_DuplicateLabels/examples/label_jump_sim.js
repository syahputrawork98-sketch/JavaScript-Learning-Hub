/**
 * SIMULASI: Duplicate Labels & Jump Target Validation
 * 
 * Mengaudit penggunaan label secara statis untuk mendeteksi
 * duplikasi dan target yang tidak valid.
 */

class LabelAuditor {
  constructor() {
    this.errors = [];
  }

  // Simulasi ContainsDuplicateLabels
  checkDuplicateLabels(labeledBlocks) {
    const seen = new Set();
    for (const block of labeledBlocks) {
      if (seen.has(block.label)) {
        this.error(`SyntaxError: Label '${block.label}' sudah digunakan dalam scope ini`);
      }
      seen.add(block.label);
    }
  }

  // Simulasi ContainsUndefinedBreakTarget
  checkBreakTarget(breakLabel, availableLabels) {
    if (breakLabel && !availableLabels.has(breakLabel)) {
      this.error(`SyntaxError: Undefined break target: '${breakLabel}'`);
    } else {
      console.log(`✅ break${breakLabel ? ` ${breakLabel}` : ""}: target valid.`);
    }
  }

  // Simulasi ContainsUndefinedContinueTarget
  checkContinueTarget(continueLabel, iterationLabels) {
    if (continueLabel && !iterationLabels.has(continueLabel)) {
      this.error(`SyntaxError: continue hanya boleh menargetkan iterasi. '${continueLabel}' bukan perulangan.`);
    } else {
      console.log(`✅ continue${continueLabel ? ` ${continueLabel}` : ""}: target valid (iterasi).`);
    }
  }

  error(msg) {
    console.error(`🚨 [LABEL-AUDIT]: ${msg}`);
    this.errors.push(msg);
  }
}

const auditor = new LabelAuditor();

// --- EKSPERIMEN 1: Label Duplikat ---
console.log("=== Cek Duplikasi Label ===");
auditor.checkDuplicateLabels([
  { label: "outer" },
  { label: "inner" },
  { label: "outer" } // ← Duplikat!
]);

// --- EKSPERIMEN 2: Break ke label tidak ada ---
console.log("\n=== Cek Break Target ===");
const knownLabels = new Set(["outer", "inner"]);
auditor.checkBreakTarget("outer",  knownLabels); // Valid
auditor.checkBreakTarget("ghost",  knownLabels); // Error!

// --- EKSPERIMEN 3: Continue ke label non-iterasi ---
console.log("\n=== Cek Continue Target ===");
const iterationLabels = new Set(["outerLoop"]); // Hanya perulangan
auditor.checkContinueTarget("outerLoop", iterationLabels); // Valid
auditor.checkContinueTarget("myBlock",   iterationLabels); // Error!
