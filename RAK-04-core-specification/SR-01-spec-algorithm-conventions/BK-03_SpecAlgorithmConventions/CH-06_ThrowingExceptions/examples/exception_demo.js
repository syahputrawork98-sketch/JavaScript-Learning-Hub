/**
 * SIMULASI: Throwing Exceptions (Clause 5.2.4.2)
 * 
 * Di level spec, "melempar exception" berarti membuat 
 * Completion Record dengan [[Type]] 'throw'.
 */

function internalSpecOperation(val) {
  console.log(`Internal: Memproses nilai ${val}...`);
  
  if (val === "magic") {
    // Spec: "Throw a TypeError exception."
    console.log("-> 🚨 INSIDEN: Melempar Exception!");
    return { Type: "throw", Value: new TypeError("Magic value not allowed") };
  }

  return { Type: "normal", Value: "Success: " + val };
}

function callerAlgorithm(input) {
  console.log("Caller: Menjalankan algoritma pemanggil...");
  
  const result = internalSpecOperation(input);

  // Mekanisme Spec Penanganan Abrupt Completion
  if (result.Type === "throw") {
    console.log("Caller: Mendeteksi 'throw', menghentikan eksekusi dan meneruskan error.");
    return result; // Propagasi ke atas
  }

  console.log("Caller: Eksekusi lanjut, hasil =", result.Value);
  return result;
}

// Demo
const finalStatus = callerAlgorithm("magic");
console.log("\nHasil Akhir di Host:", finalStatus);
