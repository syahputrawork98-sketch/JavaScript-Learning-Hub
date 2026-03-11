// C02 - Primitive Types Dasar

const samples = [
  ['string', 'Halo'],
  ['number', 42],
  ['boolean', true],
  ['null', null],
  ['undefined', undefined],
  ['symbol', Symbol('id')],
  ['bigint', 9007199254740993n],
];

for (const [label, value] of samples) {
  console.log(label, '=>', typeof value, '|', String(value));
}

let a = 10;
let b = a;
b = 99;
console.log('copy-by-value primitive:', { a, b });
