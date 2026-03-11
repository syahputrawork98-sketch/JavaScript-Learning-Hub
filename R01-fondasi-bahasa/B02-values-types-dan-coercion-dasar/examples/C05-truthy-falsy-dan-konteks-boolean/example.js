// C05 - Truthy Falsy dan Konteks Boolean

const values = [false, 0, -0, 0n, '', null, undefined, NaN, [], {}, '0', 'false'];

for (const value of values) {
  console.log(String(value), '=>', Boolean(value));
}

const qty = 0;
console.log('qty || 10 =>', qty || 10);
console.log('qty ?? 10 =>', qty ?? 10);
