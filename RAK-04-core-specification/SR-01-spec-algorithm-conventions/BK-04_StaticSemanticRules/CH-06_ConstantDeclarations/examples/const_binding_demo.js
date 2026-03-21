/**
 * CH-06: Constant Declarations
 * 
 * Demonstrasi Immutable Binding vs Immutable Value.
 */

// 1. Wajib Inisialisasi (Early Error)
// Jika di-uncomment, script ini akan memicu SyntaxError saat parsing.
// const ERROR_VALUE; 

// 2. Immutable Binding (The "const" Promise)
const FONT_SIZE = 16;
try {
    // Penugasan ulang akan memicu TypeError di runtime,
    // tapi linter/IDE mendeteksinya secara statis.
    // FONT_SIZE = 20; 
} catch (e) {
    console.log("Binding Error:", e.name, "-", e.message);
}

// 3. Immutable Value (The "Object" Exception)
const THEME = {
    color: "dark",
    enabled: true
};

// Binding 'THEME' tetap (tidak bisa THEME = {}),
// tapi object yang dirujuknya MUTABLE.
THEME.color = "light"; 
console.log("Value setelah perubahan (Binding tetap):", THEME.color);

// Untuk membuat VALUE immutable, gunakan runtime operation:
Object.freeze(THEME);
try {
    THEME.color = "neon"; // Gagal di strict mode (atau diabaikan)
} catch (e) {
    console.log("Freeze Error:", e.message);
}

console.log("Constant Declaration Analysis: Binding Aman.");
