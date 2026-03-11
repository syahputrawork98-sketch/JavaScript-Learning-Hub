// C03 - Example 02: shallow copy trap

const user = {
  name: 'Arta',
  settings: { theme: 'light' },
};

const clone = { ...user };
clone.settings.theme = 'dark';

console.log('user.settings.theme:', user.settings.theme);
console.log('clone.settings.theme:', clone.settings.theme);
