/**
 * Pembuktian Comma & Void Operators
 * Menunjukkan perilaku evaluasi ekspresi dan nilai kembalian.
 */

// 1. Comma Operator (Eksperesi Beruntun)
console.log("=== 1. Uji Comma Operator (,) ===");
let x = 0;
const hasilKoma = (x += 1, x += 2, x + 10); 
// x=1 -> x=3 -> return 3+10

console.log(`Nilai x akhir :`, x);          // 3
console.log(`Hasil Koma    :`, hasilKoma);   // 13

// 2. Void Operator (Penghancur Nilai)
console.log("\n=== 2. Uji Void Operator (void) ===");
const hasilVoid = void (x + 100); 

console.log(`Operasi (x+100) dijalankan, tapi hasilnya:`, hasilVoid); 
// Output: undefined

// 3. Penggunaan Praktis: For Loop dengan 2 Variable
console.log("\n=== 3. Penggunaan Praktis Comma di For Loop ===");
for (let i = 0, j = 5; i <= 5; i++, j--) {
    console.log(`i: ${i}, j: ${j}`);
}

// 4. Void untuk IIFE
console.log("\n=== 4. Void untuk IIFE Segera ===");
void function() {
    console.log("IIFE ini berjalan tanpa butuh kurung luar berkat 'void'");
}();
