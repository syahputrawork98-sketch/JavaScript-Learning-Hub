// C04 - Example 02: helper isPlainObject sederhana

function isPlainObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

console.log('isPlainObject({}):', isPlainObject({}));
console.log('isPlainObject([]):', isPlainObject([]));
console.log('isPlainObject(null):', isPlainObject(null));
