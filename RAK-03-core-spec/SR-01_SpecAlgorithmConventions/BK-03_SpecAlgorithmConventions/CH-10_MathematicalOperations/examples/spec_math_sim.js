/**
 * SIMULASI: Mathematical Operations (Clause 5.2.6)
 * 
 * Spec membedakan antara "Mathematical Value" (MV) yang ideal 
 * dan "Number/BigInt" yang terbatas.
 */

// Simulasi MV: Mengasumsikan presisi tak hingga menggunakan BigInt+Decimal emulator
function simulateSpecMath(a, b) {
  console.log(`Input: a=${a}, b=${b}`);

  // 1. Level Spec: Mathematical Value (MV)
  // MV tidak punya batas 64-bit.
  const logicalSum = BigInt(a) + BigInt(b);
  console.log("-> Spec Level (MV):", logicalSum.toString());

  // 2. Level Implementation: Number (float64)
  // Terjadi distorsi jika angka terlalu besar
  const jsNumberSum = Number(a) + Number(b);
  console.log("-> JS Number Level:", jsNumberSum);

  if (logicalSum.toString() !== jsNumberSum.toString()) {
    console.warn("⚠️ PERINGATAN: Terjadi perbedaan presisi antara Spec MV dan JS Number!");
  }
}

// Eksperimen
const largeNum = "9007199254740991"; // Number.MAX_SAFE_INTEGER
simulateSpecMath(largeNum, "10");
simulateSpecMath(largeNum, "2");
