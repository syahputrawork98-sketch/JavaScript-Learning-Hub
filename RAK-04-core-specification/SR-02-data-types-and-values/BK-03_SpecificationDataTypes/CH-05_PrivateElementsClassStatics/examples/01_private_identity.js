/**
 * PILLAR 1: Private Name Uniqueness
 * Membuktikan identitas unik #field meskipun namanya sama di kelas berbeda.
 */

class EngineA {
    #id = "A-1";
    getID() { return this.#id; }
}

class EngineB {
    #id = "B-2";
    getID() { return this.#id; }
}

const a = new EngineA();
const b = new EngineB();

console.log(`Engine A ID: ${a.getID()}`);
console.log(`Engine B ID: ${b.getID()}`);

// Attempt cross-access (Simulation)
try {
    console.log(a.#id); // Syntax Error at compile time
} catch (e) {
    console.log("Direct access blocked by syntax engine.");
}
