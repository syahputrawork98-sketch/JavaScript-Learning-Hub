/**
 * PILLAR 2: Reflect Toolkit
 * Menggunakan Reflect untuk memanggil metode internal secara bersih.
 */

const admin = {
    role: "Architect",
    [Symbol("secret")]: "12345"
};

console.log("--- Reflect Toolkit ---");

// Mengecek properti secara dinamis
console.log(`Has role? ${Reflect.has(admin, "role")}`);

// Mengambil kunci rahasia (Symbols)
const symbols = Reflect.ownKeys(admin);
console.log(`Object Keys (including symbols):`, symbols);

// Definisi properti yang aman
Reflect.defineProperty(admin, "isVerified", {
    value: true,
    writable: false
});

console.log(`New property added: ${admin.isVerified}`);
