// C10 - Example 02: properti tidak ada vs null

const user = {
  nickname: null,
};

console.log('nickname in user:', 'nickname' in user);
console.log('age in user:', 'age' in user);
console.log('user.nickname:', user.nickname);
console.log('user.age:', user.age);
