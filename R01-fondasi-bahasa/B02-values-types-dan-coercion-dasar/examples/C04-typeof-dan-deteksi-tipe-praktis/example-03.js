// C04 - Example 03: runtime guard input

function parseQty(input) {
  if (typeof input !== 'string') return null;
  const n = Number(input);
  return Number.isFinite(n) ? n : null;
}

console.log(parseQty('12'));
console.log(parseQty('12px'));
console.log(parseQty(12));
