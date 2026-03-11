// C04 - typeof dan Deteksi Tipe Praktis

function detectType(value) {
  if (value === null) return 'null';
  if (Array.isArray(value)) return 'array';
  return typeof value;
}

const values = ['text', 123, true, undefined, null, [1, 2], { a: 1 }, () => {}];

for (const value of values) {
  console.log(String(value), '=> typeof:', typeof value, '| detectType:', detectType(value));
}
