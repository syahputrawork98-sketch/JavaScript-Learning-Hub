// C08 - Coercion ke String

const values = [42, null, undefined, true, { id: 1 }, [1, 2, 3]];

for (const value of values) {
  console.log('String(...) =>', String(value));
}

console.log("'Nilai: ' + 10 =>", 'Nilai: ' + 10);
console.log("10 + '5' =>", 10 + '5');

const score = 88;
console.log(`Template literal => Skor akhir: ${score}`);
