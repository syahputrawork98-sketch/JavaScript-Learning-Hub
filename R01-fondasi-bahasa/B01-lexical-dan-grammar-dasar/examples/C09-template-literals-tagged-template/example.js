const name = 'Arta';
const message = `Halo, ${name}!`;

function tag(strings, value) {
  return `${strings[0]}[${value}]`;
}

const tagged = tag`User: ${name}`;
console.log(message);
console.log(tagged);
