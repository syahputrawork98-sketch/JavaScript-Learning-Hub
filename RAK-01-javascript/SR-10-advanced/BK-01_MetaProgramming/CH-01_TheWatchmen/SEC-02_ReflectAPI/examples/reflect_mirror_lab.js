/**
 * LAB: Reflect API (The Mirror Protocol)
 * Mental Model: "The Mirror Protocol"
 */

const coreConfig = {
    version: "2.5.0",
    maxLoad: 1000
};

// Membekukan config untuk simulasi proteksi hardware
Object.seal(coreConfig);

console.log("--- Mengetes Operasi Objek Standar ---");

// 1. Reflect vs Operator Biasa (Detection)
const hasVersion = Reflect.has(coreConfig, "version"); // Sama dengan 'version' in coreConfig
console.log(`Properti 'version' tersedia? ${hasVersion}`);


// 2. Reflect untuk Penulisan yang Aman
// Jika kita menggunakan coreConfig.maxLoad = 5000, program mungkin tidak sadar kalau gagal
const isUpdateSuccess = Reflect.set(coreConfig, "maxLoad", 5000);
console.log(`Update 'maxLoad' sukses? ${isUpdateSuccess}`); // True


// 3. Reflect untuk Operasi Ilegal (Sealed Object)
const isDeleteSuccess = Reflect.deleteProperty(coreConfig, "version");
console.log(`Hapus 'version' sukses? ${isDeleteSuccess}`); // False (Karena sealed)


// 4. Sinergi dengan Proxy
const loggerProxy = new Proxy(coreConfig, {
    get(target, prop, receiver) {
        console.log(`[MIRROR-LOG] Membaca ${prop}`);
        // Gunakan Reflect untuk memastikan context 'receiver' benar
        return Reflect.get(target, prop, receiver);
    }
});

console.log(`Value from Proxy: ${loggerProxy.version}`);
