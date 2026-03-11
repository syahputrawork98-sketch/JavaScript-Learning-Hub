// C07 - Coercion ke Number

const rawValues = ['42', '', '12px', '10.5', true, null, undefined];

for (const raw of rawValues) {
  const converted = Number(raw);
  console.log(String(raw), '=>', converted, '| isNaN:', Number.isNaN(converted));
}

console.log("'8' - 3 =>", '8' - 3);
console.log("'8' * 2 =>", '8' * 2);
console.log("parseInt('10.5px') =>", parseInt('10.5px', 10));
console.log("parseFloat('10.5px') =>", parseFloat('10.5px'));
