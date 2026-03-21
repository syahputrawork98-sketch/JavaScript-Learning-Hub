/**
 * PILLAR 2: Prototypal Ethics & Delegation Flow
 * Melacak alur rekursif metode internal [[Get]] pada rantai prototipe.
 */

const proto = { dna: "Cyber-Core" };
const instance = Object.create(proto);

console.log("--- Prototypal Delegation ---");
console.log(`Direct property: ${instance.dna}`); // Found in proto

// Shadowing
instance.dna = "Biological-Matrix";
console.log(`Shadowed property: ${instance.dna}`);
console.log(`Proto property remains: ${proto.dna}`);

// Recursive search fail
console.log(`Unknown property: ${instance.unknown}`); // undefined (reached null prototype)
