/**
 * LAB: Primitive Identity and Type Coercion
 */
const nullVal = null;
console.log(`typeof null: ${typeof nullVal}`);
console.log(`null == undefined: ${null == undefined}`);
console.log(`null === undefined: ${null === undefined}`);
const falsyCheck = (val) => Boolean(val);
console.log(`Boolean(undefined): ${falsyCheck(undefined)}`);
console.log(`Boolean(null): ${falsyCheck(null)}`);
function checkEnergy(level = 100) { console.log(`Energy Level: ${level}`); }
checkEnergy(undefined);
checkEnergy(null);
