/**
 * LAB: Reference Record Logic
 */
const ref = { base: { x: 10 }, name: "x" };
function getValue(r) { return r.base[r.name]; }
console.log(`Resolving ref: ${getValue(ref)}`);
