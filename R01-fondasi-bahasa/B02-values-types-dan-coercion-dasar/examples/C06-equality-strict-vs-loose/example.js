// C06 - Equality Strict vs Loose

console.log("5 == '5':", 5 == '5');
console.log("5 === '5':", 5 === '5');
console.log('0 == false:', 0 == false);
console.log('0 === false:', 0 === false);
console.log('null == undefined:', null == undefined);
console.log('null === undefined:', null === undefined);

const score = Number('abc');
console.log('NaN === NaN:', score === score);
console.log('Number.isNaN(score):', Number.isNaN(score));
