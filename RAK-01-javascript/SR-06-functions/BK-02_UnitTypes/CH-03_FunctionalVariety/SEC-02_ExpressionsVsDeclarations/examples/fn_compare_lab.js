/**
 * LAB: Expressions vs Declarations (Stationary vs Mobile Stations)
 * Mental Model: "Stationary vs Mobile"
 */

// 1. Testing Stationary Hoisting (Declaration)
console.log("--- Menara Permanen Test ---");
try {
    activateTower(); // Berhasil dipanggil meski didefinisikan di bawah
} catch (e) {
    console.log("Error: Menara tidak ditemukan.");
}

function activateTower() {
    console.log("Status: Menara Permanen AKTIF (Hoisted).");
}


// 2. Testing Mobile Activation (Expression)
console.log("\n--- Generator Portabel Test ---");
try {
    startGenerator(); // AKAN ERROR karena belum diinisialisasi
} catch (e) {
    console.log("[!] System Error: Generator portabel belum diletakkan di slotnya.");
}

const startGenerator = function() {
    console.log("Status: Generator Portabel MULAI BERPUTAR.");
};

// Setelah diletakkan baru bisa dipanggil
startGenerator();


// 3. Named Expressions (Debugging help)
const complexAlgorithm = function calculateSafetyFactor(load) {
    // Memberi nama 'calculateSafetyFactor' membantu di Stack Trace
    return load * 0.85;
};

console.log("\nSafety Factor Calculation:", complexAlgorithm(1000));
