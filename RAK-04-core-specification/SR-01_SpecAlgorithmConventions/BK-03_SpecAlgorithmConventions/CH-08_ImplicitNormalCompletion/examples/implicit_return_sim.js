/**
 * SIMULASI: Implicit Normal Completion (Clause 5.2.4.4)
 * 
 * Jika sebuah algoritma spec tidak diakhiri dengan instruksi return,
 * spec mengasumsikan adanya 'Return NormalCompletion(undefined)'.
 */

function simulateImplicitSpecAlgorithm(input) {
  console.log("Menjalankan langkah-langkah...");
  
  // Step 1
  console.log("Step 1: Done.");

  // Step 2
  console.log("Step 2: Done.");

  // DI SINI TEKS SPEC BERAKHIR.
  // Tapi spec engine tetap harus mereturn sesuatu.
  
  console.log("-> Teks berakhir. Mekanisme IMPLICIT dipicu.");
  return { Type: "normal", Value: undefined };
}

// Bandingkan dengan Explicit
function simulateExplicitSpecAlgorithm() {
  console.log("Menjalankan langkah...");
  return { Type: "normal", Value: "Explicit Value" };
}

// Demo
const result = simulateImplicitSpecAlgorithm();
console.log("\nHasil Akhir Algoritma (Implicit):", result);
