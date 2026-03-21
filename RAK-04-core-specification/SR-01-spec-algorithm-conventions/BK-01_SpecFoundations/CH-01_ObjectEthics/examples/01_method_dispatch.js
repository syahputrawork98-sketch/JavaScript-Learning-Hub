/**
 * PILLAR 1: Essential Internal Methods Dispatch
 * Membedah perbedaan fundamental antara Ordinary dan Exotic Objects.
 */

const ordinary = { key: "value" };

const exoticProxy = new Proxy(ordinary, {
    get(target, prop) {
        console.log(`[[Get]] intercept for: ${prop}`);
        return target[prop];
    }
});

console.log("--- Internal Method Dispatch ---");
console.log(`Ordinary access: ${ordinary.key}`);
console.log(`Exotic access: ${exoticProxy.key}`);

// Array is also exotic (modified [[DefineOwnProperty]])
const arr = [];
arr[10] = "Gap";
console.log(`Array Exotic 'length' sync: ${arr.length}`); // 11
