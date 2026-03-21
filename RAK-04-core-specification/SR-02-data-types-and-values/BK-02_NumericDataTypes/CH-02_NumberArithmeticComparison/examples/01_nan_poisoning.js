/**
 * PILLAR 1: Arithmetic & NaN Poisoning
 * Melacak bagaimana NaN merambat melalui operasi matematika.
 */

console.log("--- NaN Pathogen ---");
let health = 100;
health -= NaN; 
console.log(`Health after NaN: ${health}`);

let damage = 50 * health;
console.log(`Damage: ${damage}`);

console.log("\n--- Zero Polarization ---");
console.log(`1 / +0: ${1 / +0}`);
console.log(`1 / -0: ${1 / -0}`);
console.log(`+0 === -0: ${+0 === -0}`);
console.log(`Object.is(+0, -0): ${Object.is(+0, -0)}`);
