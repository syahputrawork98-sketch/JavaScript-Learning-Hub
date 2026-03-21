/**
 * PUZZLE: Sintesis Final BK-03
 * 
 * Sanggupkah Anda menebak hasil akhir algoritma spec "Hybrid" ini?
 * Petunjuk: Ingat urutan evaluasi, shorthands, dan completion records.
 */

// 1. Definisikan AO (Abstract Operation)
function AO_MasterFilter(val) {
  if (val === "crash") return { Type: "throw", Value: "System Panic" };
  return { Type: "normal", Value: val.toUpperCase() };
}

// 2. Definisikan SDO (Syntax-Directed Operation)
const SDO_FinalEvaluation = {
  process: (data) => {
    // Simulasi Langkah Spec:
    // a. Let result be ? AO_MasterFilter(data).
    const stepA = AO_MasterFilter(data);
    if (stepA.Type === "throw") return stepA; // ? Handled

    // b. If result is "SECRET", return ! AO_MasterFilter("unlocked").
    if (stepA.Value === "SECRET") {
      return AO_MasterFilter("unlocked"); // ! Handled
    }

    // c. Implicit Normal Completion
    return { Type: "normal", Value: "Final: " + stepA.Value };
  }
};

// --- PUZZLE TIME ---
console.log("--- Menjalankan Teka-Teki Spec ---");

const test1 = SDO_FinalEvaluation.process("hello");
console.log("Kasus 1:", test1);

const test2 = SDO_FinalEvaluation.process("crash");
console.log("Kasus 2:", test2);

const test3 = SDO_FinalEvaluation.process("secret");
console.log("Kasus 3:", test3);

/**
 * TANTANGAN: 
 * Mengapa Kasus 3 mengembalikan "UNLOCKED" dan bukan "Final: SECRET"?
 * Tinjau kembali Bab 07 (Shorthands) dan Bab 08 (Implicit).
 */
