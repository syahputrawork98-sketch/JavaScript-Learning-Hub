const text = 'cat bat rat';
const out = text.match(/[a-z]at/g);
const re = /js/i;

console.log('match:', out);
console.log('test JavaScript:', re.test('JavaScript'));
console.log('test Python:', re.test('Python'));
