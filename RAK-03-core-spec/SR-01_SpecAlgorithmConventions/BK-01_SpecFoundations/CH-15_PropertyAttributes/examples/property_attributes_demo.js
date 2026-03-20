/**
 * CH-15: Property Attributes
 * 
 * Demonstrasi Property Descriptors (Writable, Enumerable, Configurable)
 * dan Accessor Properties (Getter/Setter).
 */

// 1. Data Property dengan Atribut Kustom
const config = {};
Object.defineProperty(config, "API_KEY", {
    value: "SECRET-12345",
    writable: false,      // Tidak bisa diubah
    enumerable: true,     // Muncul di loop
    configurable: false   // Tidak bisa dihapus/diredefinisi
});

console.log("Initial Key:", config.API_KEY);

// Mencoba mengubah (Gagal di strict mode)
config.API_KEY = "HACKED";
console.log("After Hack Attempt (Tetap):", config.API_KEY);

// 2. Enumerable vs Non-Enumerable
const obj = { public: "tampil" };
Object.defineProperty(obj, "hidden", {
    value: "senyap",
    enumerable: false
});

console.log("Keys in loop:");
for (let key in obj) {
    console.log("-", key); // Hanya 'public' yang muncul
}

// 3. Accessor Property (Getter/Setter)
const user = {
    _age: 25
};

Object.defineProperty(user, "age", {
    get() {
        console.log("Membaca umur...");
        return this._age;
    },
    set(value) {
        if (value < 0) throw new Error("Umur tidak valid!");
        console.log("Mengupdate umur...");
        this._age = value;
    },
    enumerable: true,
    configurable: true
});

console.log("User Age:", user.age);
user.age = 26;

// 4. Object.getOwnPropertyDescriptor
console.log("\nDescriptor Detail (API_KEY):", Object.getOwnPropertyDescriptor(config, "API_KEY"));

console.log("\nProperty Attributes Verified: Kendalikan perilaku properti dengan meta-data.");
