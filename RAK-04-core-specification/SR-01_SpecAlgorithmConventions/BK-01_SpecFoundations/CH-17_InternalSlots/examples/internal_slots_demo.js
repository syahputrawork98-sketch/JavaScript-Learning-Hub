/**
 * CH-17: Internal Slots
 * 
 * Demonstrasi konsep Slot Internal menggunakan Map sebagai analogi "Brankas Tersembunyi".
 * Secara spek, slot internal tidak bisa diakses langsung, tapi kita bisa mensimulasikannya
 * untuk memahami kenapa data tersebut "aman" dari manipulasi luar.
 */

// Simulasi Internal Slot menggunakan Map
const internalSlots = new WeakMap();

class SecureCounter {
    constructor() {
        // Objek counter hanya bisa diakses oleh pengelola internal
        internalSlots.set(this, { count: 0 });
    }

    increment() {
        const slots = internalSlots.get(this);
        slots.count++;
        console.log(`Internal Slot [[Count]]: ${slots.count}`);
    }

    getCount() {
        return internalSlots.get(this).count;
    }
}

const myCounter = new SecureCounter();
myCounter.increment(); // 1
myCounter.increment(); // 2

// Mencoba mengakses slot secara ilegal
console.log("Mencoba baca .count langsung:", myCounter.count); // undefined
console.log("Keys dari objek:", Object.keys(myCounter)); // [] (Kosong, brankas tersembunyi)

/**
 * Contoh Slot Internal Nyata di Spec: [[PromiseState]]
 * Anda tidak bisa melakukan: promise.state = "fulfilled"
 * Hanya algoritma internal Promise yang bisa mengubah slot tersebut.
 */
console.log("\nKesimpulan: Slot internal melindungi integritas data dari akses ilegal.");
