/**
 * CH-12: Internal Method Invariants (Spec Lab)
 * 
 * Lab ini menunjukkan bagaimana spesifikasi menjaga 
 * integritas objek melalui "Invariants" (Aturan Baku).
 */

const core = { status: "stable" };
Object.preventExtensions(core); // Menutup objek

console.log('--- Invariant Check: Extensibility ---');
console.log(`Is extensible: ${Object.isExtensible(core)}`);

// Mencoba melanggar invariant (menambah properti ke objek non-extensible)
try {
    Object.defineProperty(core, 'newEnergy', { value: 1000 });
} catch (e) {
    console.log(`Caught Violation: ${e.message}`); // TypeError
}

/**
 * MENTAL MODEL:
 * Invariants adalah "Konstitusi" bahasa. 
 * Mesin boleh dioptimalkan, tapi tidak boleh melanggar konstitusi.
 */
