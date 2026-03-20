/**
 * SIMULASI: Shorthand ? dan ! (Clause 5.2.4.3)
 * 
 * Spec menggunakan '?' dan '!' untuk menyingkat penanganan record.
 */

// Simulasi Operasi Spec yang mereturn Record
function Internal_Operation(shouldFail) {
  if (shouldFail) return { Type: "throw", Value: new Error("Zonk!") };
  return { Type: "normal", Value: "Kado Emas" };
}

// 1. Simulasi Shorthand '?' (ReturnIfAbrupt)
function Algorithm_With_QuestionMark(fail) {
  console.log("Menjalankan (?) Shorthand...");
  
  const result = Internal_Operation(fail);

  // LOGIKA ?: "ReturnIfAbrupt(result)"
  if (result.Type !== "normal") {
    console.log("-> ? Mendeteksi Abrupt! Langsung Return ke atas.");
    return result; 
  }

  const value = result.Value; // Unwrapped
  console.log("-> ? Berhasil unwrapping:", value);
  return { Type: "normal", Value: "Proses Lanjut " + value };
}

// 2. Simulasi Shorthand '!' (Assert Normal)
function Algorithm_With_Exclamation() {
  console.log("\nMenjalankan (!) Shorthand...");
  
  // LOGIKA !: "Saya PASTI TAHU ini sukses, jangan cek status lagi."
  const result = Internal_Operation(false); 
  
  // (Di level spec, langkah audit dihilangkan)
  const value = result.Value; 
  console.log("-> ! Membuka paksa kado tanpa cek. Hasil:", value);
}

// Demo
Algorithm_With_QuestionMark(true);
console.log("---");
Algorithm_With_QuestionMark(false);
Algorithm_With_Exclamation();
