// C01 - Example 03: perilaku operator berbeda

const pairs = [
  ['5', 1],
  ['10', '2'],
  [true, 1],
  [null, 1],
];

for (const [a, b] of pairs) {
  console.log(`(${String(a)} + ${String(b)}) =>`, a + b);
  console.log(`(${String(a)} - ${String(b)}) =>`, a - b);
}
