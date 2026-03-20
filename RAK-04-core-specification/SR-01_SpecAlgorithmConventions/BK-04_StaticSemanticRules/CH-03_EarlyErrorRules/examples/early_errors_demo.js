/**
 * CH-03: Early Error Rules
 * 
 * Demonstrasi bagaimana Early Error menghentikan SELURUH script
 * sebelum dieksekusi.
 */

// CASE 1: Runtime Error (Contoh: ReferenceError)
// Script ini akan berjalan sampai baris console.log pertama.
/*
console.log("Runtime Demo: Script dimulai...");
console.log(b x y z); // Error sintaksis ini akan memicu SyntaxError (Parsing)
*/

// CASE 2: Early Error (Static Semantic Error)
// Meskipun baris log ini diletakkan di paling atas, ia tidak akan pernah muncul
// jika ada Early Error di bagian bawah file yang sama.

console.log("Saringan Keamanan: Harusnya script ini TIDAK berjalan jika ada Early Error.");

/**
 * Pelanggaran: Static Semantics: Early Errors
 * Klausul: LexicalBinding : BindingIdentifier Initializer
 * Aturan: 'destructuring' tanpa inisialisasi pada const adalah dilarang secara statis.
 */

// const { prop }; // <--- UNCOMMENT baris ini untuk melihat script mati total.

/**
 * Pelanggaran: Early Error - Label Duplikat
 */
/*
label1: {
    label1: {
        console.log("Duplicate label detected statically!");
    }
}
*/

// Jika script berhasil sampai di sini, artinya tidak ada Early Error.
console.log("Sertifikasi Lulus: Tidak ada barang terlarang (Early Errors) dalam koper kode ini.");
