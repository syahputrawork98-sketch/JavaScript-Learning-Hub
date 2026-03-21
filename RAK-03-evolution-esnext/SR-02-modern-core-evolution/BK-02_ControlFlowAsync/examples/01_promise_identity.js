/**
 * PILLAR 1: Promise Identity & State
 * Membedah slot internal [[PromiseState]] yang tidak bisa dimutasi dua kali.
 */

const p = new Promise((resolve, reject) => {
    resolve("Transmission Success");
    resolve("Double Resolve Attempt"); // Ignored by engine
});

p.then(val => {
    console.log("--- Promise State Integrity ---");
    console.log(`Resolved Value: ${val}`);
});

// Observation: The microtask will run after this synchronous block
console.log("Synchronous flow finished.");
