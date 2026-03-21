/**
 * PILLAR 1: Realm-Specific Intrinsics
 * Membuktikan bahwa setiap Realm memiliki salinan Built-in Object yang berbeda.
 */

// Simulation using node 'vm' to create a new Realm/Context
const vm = require('vm');

const context1 = { Array: Array };
const context2 = vm.createContext({ Array: vm.runInContext('Array', vm.createContext()) });

console.log("--- Intrinsic Identity ---");
console.log(`Is local Array the same as local? ${Array === Array}`);
console.log(`Is local Array the same as VM Array? ${Array === context2.Array}`); // false

// Testing across Realms
const arrInContext2 = vm.runInNewContext('[]', {});
console.log(`Is VM array instance of local Array? ${arrInContext2 instanceof Array}`); // false
