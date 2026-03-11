// C07 - Example 02: parsing angka aman

function toFiniteNumber(input) {
  const n = Number(input);
  return Number.isFinite(n) ? n : null;
}

console.log(toFiniteNumber('120'));
console.log(toFiniteNumber('120.5'));
console.log(toFiniteNumber('120px'));
console.log(toFiniteNumber(undefined));
