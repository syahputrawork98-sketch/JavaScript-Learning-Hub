// C03 - Non-Primitive dan Reference Intro

const original = { profile: { name: 'Arta' } };
const alias = original;
alias.profile.name = 'Syahputra';

console.log('original berubah lewat alias:', original.profile.name);

const x = { id: 1 };
const y = { id: 1 };
const z = x;

console.log('x === y:', x === y);
console.log('x === z:', x === z);

const shallowCopy = { ...original };
shallowCopy.profile.name = 'Nested masih shared';
console.log('nested shared setelah shallow copy:', original.profile.name);
