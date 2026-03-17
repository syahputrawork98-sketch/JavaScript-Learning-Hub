/**
 * CH-18: Internal Methods
 * 
 * Demonstrasi bagaimana kita bisa "mengintip" dan mencegat (intercept) Metode Internal
 * menggunakan Proxy API.
 */

const targetObj = {
    message: "Hello System",
    secret: "Access Denied"
};

/**
 * Handler Proxy bertindak sebagai pengganti untuk Metode Internal.
 * 'get' di sini mencegat metode internal [[Get]] dari spesifikasi.
 */
const proxyHandler = {
    get: function(target, prop, receiver) {
        console.log(`--- Intercepting [[Get]] for property: ${prop} ---`);
        
        if (prop === 'secret') {
            return "KONTEN DISEGEL"; // Mengganti perilaku default
        }
        
        return Reflect.get(...arguments); // Memanggil perilaku default [[Get]]
    }
};

const secureObject = new Proxy(targetObj, proxyHandler);

console.log("Membaca message:", secureObject.message);
console.log("Membaca secret:", secureObject.secret);

/**
 * Analogi Ordinary vs Exotic:
 * - targetObj adalah Ordinary Object (perilaku insting standar).
 * - secureObject adalah Exotic Object (instingnya sudah dimodifikasi oleh Proxy).
 */
console.log("\nKesimpulan: Metode internal adalah 'jiwa' objek yang menentukan bagaimana ia bereaksi terhadap operasi.");
