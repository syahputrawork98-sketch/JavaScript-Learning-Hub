/**
 * CH-04: Static Scope Rules
 * 
 * Demonstrasi pemetaan scope statis dan konflik deklarasi.
 */

// 1. Static Shadowing
const domain = "Global";

function scopeTest() {
    const domain = "Local"; // Shadowing terjadi secara statis
    console.log("Akses domain di sini akan selalu merujuk ke:", domain);
}

// 2. Konflik Deklarasi (Early Error)
// Mesin JS melakukan pengecekan Statis: LexicallyDeclaredNames vs VarDeclaredNames.
// Jika di-uncomment, script ini akan mati total (SyntaxError).
/*
{
    let user = "Alice";
    var user = "Bob"; // ERROR: 'user' has already been declared
}
*/

// 3. Hoisting vs Lexical Scope (Static Mapping)
function hoistingStatic() {
    // Secara statis, 'a' sudah terdaftar di 'VarDeclaredNames' untuk fungsi ini.
    // 'b' terdaftar di 'LexicallyDeclaredNames' untuk blok ini saja.
    
    console.log("Nilai a (hoisted):", a); // undefined
    // console.log("Nilai b:", b); // ReferenceError (Temporal Dead Zone) - Ini aturan Statis!

    var a = 1;
    let b = 2;
}

hoistingStatic();
scopeTest();

console.log("Scope Rules Verified Secara Statis.");
