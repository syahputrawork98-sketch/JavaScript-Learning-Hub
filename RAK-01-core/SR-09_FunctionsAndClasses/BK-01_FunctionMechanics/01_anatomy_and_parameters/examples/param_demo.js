/**
 * Pembuktian Function Anatomy & Parameters
 * Menunjukkan fleksibilitas parameter dan perilaku hoisting.
 */

console.log("=== 1. Uji Hoisting Declaration vs Expression ===");

haloDeclaration(); // Berhasil! (Hoisted)
try {
    haloExpression(); // Error! (Not Hoisted)
} catch (e) {
    console.log("Expression Call: Gagal! (ReferenceError/TypeError)");
}

function haloDeclaration() {
    console.log("Halo dari Function Declaration!");
}

const haloExpression = function() {
    console.log("Halo dari Function Expression!");
};

console.log("\n=== 2. Evolusi Parameter ===");

function masak(menu, porsi = 1, ...bumbu) {
    console.log(`Memasak ${porsi} porsi ${menu}`);
    console.log(`Bumbu tambahan: `, bumbu.length > 0 ? bumbu : "Tanpa bumbu tambahan");
}

masak("Nasi Goreng"); // Mengandalkan default porsi 1
masak("Sate", 10, "Kecap", "Bawang", "Cabai"); // Menggunakan Rest Parameters

console.log("\n=== 3. Sifat Parameter (Flexibility) ===");

function hitung(a, b) {
    console.log(`a: ${a}, b: ${b}`);
    return a + (b || 0);
}

console.log("Input Kurang  :", hitung(5));       // b jadi undefined
console.log("Input Lebih   :", hitung(5, 10, 15)); // 15 diabaikan (kecuali pakai rest)

console.log("\n=== 4. Return Value ===");

function tanpaReturn() {
    const x = 10;
}
console.log("Fungsi tanpa return mengembalikan: ", tanpaReturn()); // undefined
