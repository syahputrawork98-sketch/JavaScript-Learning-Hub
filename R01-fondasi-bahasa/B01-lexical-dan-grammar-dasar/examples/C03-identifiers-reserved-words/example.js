const userName = 'Arta';
const _internalId = 'A1';
const cache = { hit: true };

function greetUser(name) {
  return `Hello, ${name}`;
}

console.log(userName, _internalId, cache.hit);
console.log(greetUser(userName));
