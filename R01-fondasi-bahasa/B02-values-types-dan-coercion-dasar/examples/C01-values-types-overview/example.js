// C01 - Values dan Types Overview

const age = 21;
const name = 'Arta';
const active = true;
const empty = null;
const user = { id: 1 };

console.log('age =>', age, '| type:', typeof age);
console.log('name =>', name, '| type:', typeof name);
console.log('active =>', active, '| type:', typeof active);
console.log('empty =>', empty, '| type:', typeof empty);
console.log('user =>', user, '| type:', typeof user);

let a = 10;
let b = a;
b = 99;
console.log('primitive copy:', { a, b });

const original = { score: 10 };
const alias = original;
alias.score = 20;
console.log('object reference share:', original.score);

console.log("'5' + 1 =>", '5' + 1);
console.log("'5' - 1 =>", '5' - 1);
