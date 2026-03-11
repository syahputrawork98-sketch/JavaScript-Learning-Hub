// C10 - null vs undefined

let token;
const profile = { name: null };

console.log('token:', token);
console.log('profile.name:', profile.name);
console.log('profile.age:', profile.age);

function greet(name) {
  console.log('name parameter:', name);
}

greet();

console.log('null == undefined:', null == undefined);
console.log('null === undefined:', null === undefined);

const qty = 0;
console.log('qty ?? 99 =>', qty ?? 99);
console.log('token ?? "default-token" =>', token ?? 'default-token');
