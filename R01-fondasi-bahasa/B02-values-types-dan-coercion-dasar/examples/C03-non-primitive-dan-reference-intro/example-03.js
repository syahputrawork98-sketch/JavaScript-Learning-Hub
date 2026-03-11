// C03 - Example 03: copy nested object aman

const source = {
  profile: { name: 'Arta', city: 'Bandung' },
};

const deepCopy = {
  ...source,
  profile: { ...source.profile },
};

deepCopy.profile.city = 'Jakarta';

console.log('source.profile.city:', source.profile.city);
console.log('deepCopy.profile.city:', deepCopy.profile.city);
