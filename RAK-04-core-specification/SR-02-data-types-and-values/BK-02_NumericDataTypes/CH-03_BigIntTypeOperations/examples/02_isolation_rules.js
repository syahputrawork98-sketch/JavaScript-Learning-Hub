/**
 * PILLAR 2: BigInt Isolation Rules
 * Eksperimen aturan pencampuran tipe data numerik.
 */

console.log("--- Isolation Audit ---");

try {
    10n + 5;
} catch (e) {
    console.log(`Mixed Op: ${e.message}`);
}

try {
    +10n;
} catch (e) {
    console.log(`Unary Plus: ${e.message}`);
}

console.log(`Division (Integral): ${5n / 2n}`); // 2n (Truncated)
