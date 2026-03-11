// C05 - Example 02: bug default dengan ||

function displayQty(qty) {
  return qty || 100;
}

console.log('qty 0 ->', displayQty(0));
console.log('qty 5 ->', displayQty(5));
