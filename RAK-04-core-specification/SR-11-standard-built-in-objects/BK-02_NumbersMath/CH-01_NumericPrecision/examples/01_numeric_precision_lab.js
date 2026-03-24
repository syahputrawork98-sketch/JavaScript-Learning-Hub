console.log("=== Numeric Precision Lab ===");

const decimalTrap = 0.1 + 0.2;
console.log("0.1 + 0.2 =", decimalTrap);
console.log("Is close to 0.3:", Math.abs(decimalTrap - 0.3) < Number.EPSILON);

const maxSafe = Number.MAX_SAFE_INTEGER;
console.log("MAX_SAFE_INTEGER:", maxSafe);
console.log("MAX_SAFE_INTEGER + 1 === MAX_SAFE_INTEGER + 2:", maxSafe + 1 === maxSafe + 2);

const factorial20 = Array.from({ length: 20 }, (_, index) => BigInt(index + 1)).reduce(
  (accumulator, value) => accumulator * value,
  1n
);

console.log("20! as BigInt:", factorial20.toString());
