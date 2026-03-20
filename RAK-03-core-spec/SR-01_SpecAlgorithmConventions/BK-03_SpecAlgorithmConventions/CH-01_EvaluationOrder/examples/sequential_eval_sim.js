/**
 * SIMULASI: Evaluation Order (Clause 5.2.1)
 * 
 * Di dalam spesifikasi, algoritma dijalankan selangkah demi selangkah.
 * Fungsi ini mendemonstrasikan bagaimana satu "blok" algoritma spec 
 * dipetakan ke dalam logic JavaScript.
 */

function specAlgorithmSimulation(input) {
  console.log("--- Memulai Eksekusi Algoritma Spec ---");

  // Step 1: Initialization
  // Spec: "Let result be 0."
  let result = 0;
  console.log("Step 1: Inisialisasi result =", result);

  // Step 2: Conditional Branching
  // Spec: "If input is greater than 10, set result to result + 1."
  if (input > 10) {
    result += 1;
    console.log("Step 2: Input > 10, result sekarang =", result);
  } else {
    console.log("Step 2: Kondisi tidak terpenuhi, lanjut ke step berikutnya.");
  }

  // Step 3: Final Calculation
  // Spec: "Set result to result * 2."
  result *= 2;
  console.log("Step 3: Kalkulasi akhir, result =", result);

  // Step 4: Return
  // Spec: "Return result."
  console.log("Step 4: Mengembalikan hasil akhir.");
  return result;
}

// Eksekusi
const finalValue = specAlgorithmSimulation(15);
console.log("\nHasil Akhir:", finalValue);
