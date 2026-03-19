/**
 * LAB: The Iterable Protocol (The Standard Track)
 * Mental Model: "The Standard Track"
 */

// 1. Verifikasi Unit Bawaan (Standard Units)
const dataStack = [100, 200, 300];
const signal = "PULSE";

console.log("--- Memeriksa Sertifikasi Iterable ---");

console.log(`Array memiliki pintu iterator? ${typeof dataStack[Symbol.iterator] === 'function'}`);
console.log(`String memiliki pintu iterator? ${typeof signal[Symbol.iterator] === 'function'}`);

// 2. Unit Non-Iterable (Manual Access Only)
const config = { power: 500, status: "OK" };
console.log(`Object biasa memiliki pintu iterator? ${typeof config[Symbol.iterator] === 'function'}`);


// 3. Eksperimen: Membuat Pintu Kustom (Custom Entry)
const customVault = {
    items: ["Gold", "Silver", "Bronze"],
    [Symbol.iterator]: function() {
        let index = 0;
        return {
            next: () => {
                if (index < this.items.length) {
                    return { value: this.items[index++], done: false };
                }
                return { value: undefined, done: true };
            }
        };
    }
};

console.log("\n--- Mengetes Jalur Kustom ---");
for (const item of customVault) {
    console.log(`Mengambil dari Vault: ${item}`);
}
