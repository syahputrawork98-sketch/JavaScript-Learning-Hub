// C02 - Example 02: immutable string

const name = 'Arta';
name[0] = 'B';

console.log('setelah dicoba ubah index 0:', name);
console.log('hasil operasi menghasilkan value baru:', name.toUpperCase());
console.log('value awal tetap:', name);
