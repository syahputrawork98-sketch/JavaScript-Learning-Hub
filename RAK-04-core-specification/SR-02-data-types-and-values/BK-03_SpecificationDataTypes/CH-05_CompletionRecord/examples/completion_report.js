/**
 * CH-05: Completion Record (Spec Lab)
 * 
 * Lab ini mensimulasikan bagaimana "Abrupt Completion" 
 * (Error/Break/Return) ditangani oleh engine.
 */

function executeSafe(fn) {
    try {
        const result = fn();
        // Simulasi [[Type]]: normal
        return { "[[Type]]": "normal", "[[Value]]": result };
    } catch (e) {
        // Simulasi [[Type]]: throw
        return { "[[Type]]": "throw", "[[Value]]": e.message };
    }
}

const normalResult = executeSafe(() => 42);
console.log(`Normal Completion:`, normalResult);

const abruptResult = executeSafe(() => { throw new Error("CRITICAL_FAILURE"); });
console.log(`Abrupt Completion:`, abruptResult);

/**
 * MENTAL MODEL:
 * Completion Record adalah "Laporan Status" setelah 
 * setiap baris kode dijalankan. Isinya: 
 * "Apa hasilnya?" (Value) dan "Apa yang terjadi?" (Type).
 */
