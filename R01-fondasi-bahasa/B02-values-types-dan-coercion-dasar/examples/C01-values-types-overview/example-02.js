// C01 - Example 02: kelompok nilai

const values = [
  42,
  '42',
  true,
  null,
  undefined,
  Symbol('id'),
  42n,
  { id: 1 },
  [1, 2, 3],
];

for (const value of values) {
  const group =
    value !== null && (typeof value === 'object' || typeof value === 'function')
      ? 'non-primitive'
      : 'primitive';
  console.log(String(value), '=>', typeof value, '|', group);
}
