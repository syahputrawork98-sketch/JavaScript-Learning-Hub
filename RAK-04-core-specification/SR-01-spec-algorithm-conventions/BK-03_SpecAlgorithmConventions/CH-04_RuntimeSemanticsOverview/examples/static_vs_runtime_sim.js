/**
 * SIMULASI: Static vs Runtime Semantics (Clause 5.2.4)
 * 
 * Spesifikasi membedakan antara aturan yang dicek "sebelum" jalan (Static)
 * dan apa yang terjadi "saat" jalan (Runtime).
 */

function processCode(codeString) {
  console.log(`--- Memproses Kode: "${codeString}" ---`);

  // 1. SIMULASI: Static Semantics (Audition)
  console.log("Stage 1: Static Semantics Check...");
  if (codeString.includes("forbidden")) {
    console.error("-> ERROR: Static Semantic Violation! Kode dilarang.");
    return;
  }
  console.log("-> PASS: Kode valid secara statis.");

  // 2. SIMULASI: Runtime Semantics (The Performance)
  console.log("\nStage 2: Runtime Semantics Execution...");
  try {
    const result = eval(codeString); // Simulasi mesin mengeksekusi
    console.log("-> RESULT:", result);
    console.log("-> SIDE EFFECT: Perubahan state terjadi di sini.");
  } catch (e) {
    console.error("-> RUNTIME ERROR:", e.message);
  }
}

// Eksperimen 1: Lolos audit, jalan lancar
processCode("1 + 1");

console.log("\n" + "=".repeat(30) + "\n");

// Eksperimen 2: Gagal di audit (Static)
processCode("forbidden_variable = 10");
