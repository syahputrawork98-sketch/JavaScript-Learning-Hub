/**
 * SIMULASI: Completion Records (Clause 5.2.4.1)
 * 
 * Di level spec, fungsi tidak hanya mereturn nilai, tapi mereturn 
 * sebuah Record berisi status eksekusi.
 */

class CompletionRecord {
  constructor(type, value, target = null) {
    this.Type = type;     // "normal", "break", "continue", "return", "throw"
    this.Value = value;   // Hasil komputasi atau objek error
    this.Target = target; // Untuk label break/continue
  }

  isAbrupt() {
    return this.Type !== "normal";
  }
}

function simulateAlgorithmStep(x) {
  console.log(`Mengevaluasi x = ${x}...`);

  // Simulasi Throw
  if (x < 0) {
    console.log("-> Eksekusi gagal (Ganjil/Negatif)!");
    return new CompletionRecord("throw", new Error("Value must be positive"));
  }

  // Simulasi Normal Completion
  console.log("-> Eksekusi normal.");
  return new CompletionRecord("normal", x * 2);
}

// Eksperimen 1: Normal
const rec1 = simulateAlgorithmStep(10);
console.log("Record 1:", rec1);

console.log("\n" + "=".repeat(30) + "\n");

// Eksperimen 2: Abrupt (Throw)
const rec2 = simulateAlgorithmStep(-5);
console.log("Record 2:", rec2);

if (rec2.isAbrupt()) {
  console.log("ALERTI: Terdeteksi Abrupt Completion bertipe:", rec2.Type);
}
