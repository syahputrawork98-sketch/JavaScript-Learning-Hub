/**
 * SIMULASI: Abstract Operations (Clause 5.2.2)
 * 
 * Abstract Operations (AO) adalah prosedur yang tidak langsung terekspos ke user,
 * tapi digunakan sebagai dasar logic bagi banyak fitur bahasa.
 */

// Simulasi AO: ToBoolean (Versi Sederhana)
// Spec: "The abstract operation ToBoolean takes argument argument..."
function Abstract_ToBoolean(argument) {
  if (argument === true || argument === false) return argument;
  if (argument === undefined || argument === null) return false;
  if (typeof argument === "number") {
    if (argument === 0 || isNaN(argument)) return false;
    return true;
  }
  if (typeof argument === "string") {
    return argument.length > 0;
  }
  return true;
}

// Simulasi Penggunaan AO di algoritma yang berbeda
function spec_LogicalNot_Algorithm(value) {
  console.log("Menjalankan Logical Not Algorithm...");
  const bool = Abstract_ToBoolean(value); // Menggunakan AO
  return !bool;
}

function spec_IfStatement_Algorithm(condition) {
  console.log("Menjalankan If Statement Algorithm...");
  const bool = Abstract_ToBoolean(condition); // Menggunakan AO yang sama
  if (bool === true) {
    console.log("-> Branch True dieksekusi.");
  } else {
    console.log("-> Branch False dieksekusi.");
  }
}

// Eksperimen
spec_IfStatement_Algorithm("");
console.log("---");
spec_IfStatement_Algorithm("Halo");
console.log("---");
console.log("Logical Not (1):", spec_LogicalNot_Algorithm(1));
