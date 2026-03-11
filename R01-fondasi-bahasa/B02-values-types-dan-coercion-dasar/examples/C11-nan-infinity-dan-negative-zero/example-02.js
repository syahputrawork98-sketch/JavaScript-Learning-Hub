// C11 - Example 02: validasi angka finite

function divide(a, b) {
  const result = a / b;
  if (!Number.isFinite(result)) return null;
  return result;
}

console.log(divide(10, 2));
console.log(divide(10, 0));
console.log(divide(0, 0));
