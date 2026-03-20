/**
 * LAB: The Iterator Protocol (The Moving Unit)
 * Mental Model: "The Moving Unit"
 */

function createEnergyStream(limit) {
    let current = 0;
    
    // Mengembalikan objek Iterator
    return {
        next() {
            if (current < limit) {
                current += 10;
                return { value: `${current}MW`, done: false };
            }
            return { value: undefined, done: true };
        }
    };
}

console.log("--- Menyalakan Aliran Energi Manual ---");

const stream = createEnergyStream(30);

// Klik tombol next() satu per satu
console.log("Klik 1:", stream.next()); // { value: '10MW', done: false }
console.log("Klik 2:", stream.next()); // { value: '20MW', done: false }
console.log("Klik 3:", stream.next()); // { value: '30MW', done: false }
console.log("Klik 4:", stream.next()); // { value: undefined, done: true }

// Setelah 'done: true', iterator biasanya tidak menghasilkan apa-apa lagi
console.log("Klik 5 (Exhausted):", stream.next());
