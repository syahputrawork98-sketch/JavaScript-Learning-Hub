// C09 - Example 03: normalisasi flag

function toFlag(input) {
  if (input === 'true') return true;
  if (input === 'false') return false;
  return Boolean(input);
}

console.log(toFlag('true'));
console.log(toFlag('false'));
console.log(toFlag(''));
console.log(toFlag('hello'));
