// C09 - Coercion ke Boolean

const candidates = [1, 0, 'text', '', null, undefined, [], {}];

for (const value of candidates) {
  console.log(String(value), '=> Boolean:', Boolean(value), '| !!:', !!value);
}

console.log("'' || 'fallback' =>", '' || 'fallback');
console.log("'A' && 'B' =>", 'A' && 'B');

const qty = 0;
console.log('qty || 10 =>', qty || 10);
console.log('qty ?? 10 =>', qty ?? 10);
