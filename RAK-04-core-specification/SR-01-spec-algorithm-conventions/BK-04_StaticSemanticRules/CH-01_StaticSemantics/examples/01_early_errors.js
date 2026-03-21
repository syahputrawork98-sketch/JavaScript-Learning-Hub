/**
 * PILLAR 1: Early Errors (Syntax Validation)
 * Simulasi kesalahan yang dideteksi SEBELUM kode dijalankan.
 */

// Rule: A function cannot have duplicate parameter names in strict mode.
function simulateEarlyError(code) {
    console.log(`--- Checking Code: [${code}] ---`);
    try {
        new Function(code);
    } catch (e) {
        console.log(`Static Semantic Error Caught: ${e.message}`);
        return;
    }
    console.log("No early errors found.");
}

simulateEarlyError("function x(a, a) { 'use strict'; }");
simulateEarlyError("const x = 10; const x = 20;"); // Redeclaration
