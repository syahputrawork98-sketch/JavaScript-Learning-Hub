/**
 * LAB: Number Precision and Specialized Values
 */
console.log(`0.1 + 0.2 === 0.3: ${0.1 + 0.2 === 0.3}`);
const maxSafe = Number.MAX_SAFE_INTEGER;
console.log(`Safe boundary broken: ${(maxSafe + 1) === (maxSafe + 2)}`);
console.log(`1 / -0: ${1 / -0}`);
console.log(`NaN === NaN: ${NaN === NaN}`);
