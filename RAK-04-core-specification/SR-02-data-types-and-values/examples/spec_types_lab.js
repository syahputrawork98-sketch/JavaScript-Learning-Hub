/**
 * LAB: Specification Visualization (Descriptors & Records)
 * This lab demonstrates how spec 'Records' manifest in JS.
 */

console.log("--- Mengetes Proyeksi Internal Record (Property Descriptors) ---");

const hubUnit = { id: "ALPHA-1" };

// Object.getOwnPropertyDescriptor mengembalikan representasi JS dari Internal Record
const descriptor = Object.getOwnPropertyDescriptor(hubUnit, "id");

console.log("Property Record [[Property Descriptor]]:");
console.table(descriptor); 
/* Menampilkan:
   [[Value]]: "ALPHA-1"
   [[Writable]]: true
   [[Enumerable]]: true
   [[Configurable]]: true
*/


// 2. Simulasi Abrupt Completion vs Normal
console.log("\n--- Mengetes Aliran Sinyal Completion ---");

function testCompletion(triggerError) {
    try {
        if (triggerError) {
            console.log("[ACTION] Memicu Sinyal Abrupt ([[Type]]: throw)");
            throw new Error("GRID_OVERLOAD");
        }
        console.log("[ACTION] Sinyal Normal ([[Type]]: normal)");
        return "SUCCESS";
    } catch (e) {
        console.log(`[CATCH] Sinyal dialihkan. Error: ${e.message}`);
        return "RECOVERED";
    } finally {
        console.log("[FINALLY] Protokol wajib dijalankan sebelum sinyal final dikirim.");
    }
}

console.log(`\nCase 1: ${testCompletion(false)}`);
console.log(`\nCase 2: ${testCompletion(true)}`);
