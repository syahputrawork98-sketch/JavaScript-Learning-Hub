// C11 - NaN, Infinity, dan Negative Zero

const invalid = Number('abc');
console.log('invalid:', invalid);
console.log('Number.isNaN(invalid):', Number.isNaN(invalid));

const inf = 1 / 0;
const negInf = -1 / 0;
console.log('Infinity:', inf);
console.log('-Infinity:', negInf);
console.log('Number.isFinite(inf):', Number.isFinite(inf));

const negZero = -0;
console.log('negZero === 0:', negZero === 0);
console.log('Object.is(negZero, -0):', Object.is(negZero, -0));
console.log('Object.is(negZero, 0):', Object.is(negZero, 0));
