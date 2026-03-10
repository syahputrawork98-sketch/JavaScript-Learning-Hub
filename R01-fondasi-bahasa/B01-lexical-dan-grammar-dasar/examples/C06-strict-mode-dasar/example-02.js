'use strict';

function createTotal(price, qty) {
  const total = price * qty;
  return total;
}

console.log(createTotal(100, 3));
