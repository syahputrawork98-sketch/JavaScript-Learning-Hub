/**
 * PILLAR 2: Immutability & Interning
 * Membuktikan bahwa String di Hub adalah immutable.
 */

let msg = "JavaScript";
msg[0] = "X"; // Silently ignored in non-strict, Error in strict

console.log(`Is immutable? ${msg === "JavaScript"}`);

// Interning (Engine Optimization)
const s1 = "HubCore";
const s2 = "Hub" + "Core"; // Evaluated at compile-time/jit

console.log(`Shared reference: ${s1 === s2}`);
