// C06 - Example 03: cek nullish idiom

function isMissing(value) {
  return value == null;
}

console.log('isMissing(null):', isMissing(null));
console.log('isMissing(undefined):', isMissing(undefined));
console.log('isMissing(0):', isMissing(0));
console.log("isMissing(''):", isMissing(''));
