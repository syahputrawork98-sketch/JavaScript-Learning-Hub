/**
 * CH-02: Grammar Static Semantics
 * 
 * Demonstrasi bagaimana konteks Grammar (Flags) mempengaruhi
 * Validasi Semantik Statis.
 */

// 1. Konteks [Await] Parameter
// Secara grammar, kode di bawah valid sebagai struktur teks.
// Namun, secara semantik statis, 'await' melempar error jika berada di luar 
// produksi grammar yang memiliki parameter [Await].

async function exampleAsync() {
    // Di sini parameter [Await] aktif
    await Promise.resolve(); 
    console.log("Await diizinkan di sini.");
}

// 2. Konteks Strict Mode Semantics
// Identitas 'arguments' berubah secara semantik tergantung flag Strict.
function checkStrict() {
    // Non-strict: valid
    var arguments = 10; 
    console.log("Arguments diizinkan sebagai nama variabel di non-strict.");
}

function checkStrictReal() {
    'use strict';
    // Jika baris di bawah di-uncomment, akan terjadi SyntaxError SEBELUM eksekusi.
    // Static Semantics: Early Errors for 'eval' or 'arguments' in strict mode.
    // var arguments = 20; 
}

// 3. Recursive Semantic Check (BoundNames)
function bindingCheck() {
    // Mesin JS melakukan rekursi statis untuk menemukan nama-nama yang dibinding
    const [a, {b, c: [d]}] = [1, {b: 2, c: [3]}];
    // Langkah Statis (BoundNames): a, b, d.
    console.log("Variabel yang terdeteksi secara statis:", a, b, d);
}

bindingCheck();
checkStrict();
exampleAsync();
