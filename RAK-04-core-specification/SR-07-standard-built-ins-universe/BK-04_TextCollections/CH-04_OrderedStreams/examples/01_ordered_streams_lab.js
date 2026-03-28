console.log("=== Ordered Streams Lab ===");

const powerNodes = [100, 200, 300];
const boostedNodes = powerNodes.map((value) => value * 1.1);
console.log("Boosted nodes:", boostedNodes);

const buffer = new ArrayBuffer(8);
const view = new Int16Array(buffer);
view[0] = 42;
view[1] = 84;
console.log("TypedArray view:", Array.from(view));
