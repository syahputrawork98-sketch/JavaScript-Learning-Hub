/**
 * Pembuktian Short-Circuit Evaluation
 * Menunjukkan bagaimana sisa ekspresi tidak dijalankan jika hasil sudah pasti.
 */

function fungsiBerat() {
    console.log("!!! [LOG] Fungsi berat dijalankan...");
    return "Data Penting";
}

// 1. Uji && (Sekring AND)
console.log("=== 1. Uji Logika AND (&&) ===");
const bypassAND = false && fungsiBerat(); 
console.log(`Hasil false && fungsiBerat:`, bypassAND); 
// Output: false (Fungsi berat tidak pernah dipanggil!)

const jalankanAND = true && fungsiBerat();
console.log(`Hasil true && fungsiBerat :`, jalankanAND);

// 2. Uji || (Sekring OR)
console.log("\n=== 2. Uji Logika OR (||) ===");
const bypassOR = "Sudah Ada" || fungsiBerat();
console.log(`Hasil "Sudah Ada" || fungsiBerat:`, bypassOR);
// Output: Sudah Ada (Fungsi berat tidak pernah dipanggil!)

// 3. Jebakan Falsy pada OR vs Nullish
console.log("\n=== 3. Jebakan || vs ?? ===");
const skor = 0;

const hasilOR = skor || 10;
const hasilNullish = skor ?? 10;

console.log(`skor || 10 (Skor 0 dianggap Falsy) :`, hasilOR);       // 10 (Mungkin salah!)
console.log(`skor ?? 10 (Hanya null/undefined)  :`, hasilNullish);  // 0  (Benar)

// 4. Perlindungan Properti (Guard Operator)
console.log("\n=== 4. Guard Operator ===");
const user = null;
const profil = user && user.name;
console.log(`Profil user (user && user.name):`, profil); // null (Tidak error!)
