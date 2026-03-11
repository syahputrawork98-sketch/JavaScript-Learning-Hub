// C11 - Example 03: deteksi -0

function direction(value) {
  if (Object.is(value, -0)) return 'negative-zero';
  if (value === 0) return 'zero';
  return value > 0 ? 'positive' : 'negative';
}

console.log(direction(-0));
console.log(direction(0));
console.log(direction(5));
console.log(direction(-5));
