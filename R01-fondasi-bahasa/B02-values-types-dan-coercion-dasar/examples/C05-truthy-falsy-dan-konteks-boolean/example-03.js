// C05 - Example 03: perbaikan dengan ??

function displayQty(qty) {
  return qty ?? 100;
}

console.log('qty 0 ->', displayQty(0));
console.log('qty null ->', displayQty(null));
console.log('qty undefined ->', displayQty(undefined));
