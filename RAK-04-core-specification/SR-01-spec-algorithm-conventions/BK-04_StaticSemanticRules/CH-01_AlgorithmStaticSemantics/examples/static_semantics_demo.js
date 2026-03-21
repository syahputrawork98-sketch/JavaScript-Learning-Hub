/**
 * CH-01: Algorithm Static Semantics
 * 
 * Demonstrasi perbedaan antara aturan statis (Static Semantics) 
 * dan eksekusi (Runtime).
 */

console.log("--- Tahap 1: Parsing & Static Semantics ---");

// 1. Contoh Early Error (Terdeteksi oleh Static Semantics)
// Jika Anda menghapus komentar kode di bawah, seluruh script TIDAK AKAN berjalan
// karena terjadi SyntaxError pada fase parsing, sebelum console.log di atas dieksekusi.

/*
function checkEarlyError(a, a) { // Duplicate parameter name in non-strict mode is sometimes allowed, 
                                 // but 'use strict' makes it a Static Semantic error.
    'use strict';
    return a;
}
*/

// 2. Contoh Aturan Constant (Static Semantics dalam Binding)
const arsitek = "Polyglot Senior";
try {
    // Mesin tahu secara statis bahwa 'arsitek' adalah konstanta.
    // Namun, beberapa pelanggaran baru terdeteksi di runtime (TypeError).
    // Arsitek Mindset: Static Semantics membantu linter (ESLint) memberi tahu Anda SEBELUM runtime.
    // arsitek = "Junior"; 
} catch (e) {
    console.log("Runtime Error:", e.name);
}

// 3. HasDirectEval (Implicit Static Analysis)
function scopeCheck() {
    let x = 10;
    // Keberadaan eval secara statis memaksa mesin untuk tidak melakukan 
    // optimasi pencarian variabel (deoptimization).
    eval("var x = 20;");
    console.log("Nilai x setelah eval:", x);
}

scopeCheck();

console.log("--- Selesai: Integritas Terjaga ---");
