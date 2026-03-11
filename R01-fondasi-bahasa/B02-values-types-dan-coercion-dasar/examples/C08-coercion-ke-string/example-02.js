// C08 - Example 02: String vs toString

const values = [42, true, null, undefined, [1, 2, 3]];

for (const value of values) {
  const safe = String(value);
  let direct;

  try {
    direct = value.toString();
  } catch (error) {
    direct = error.name;
  }

  console.log(String(value), '=> String:', safe, '| toString:', direct);
}
