console.log("=== Collection Performance Lab ===");

const entryCount = 10000;
const keys = Array.from({ length: entryCount }, (_, index) => `node-${index}`);

console.time("Map insert");
const nodeMap = new Map();
for (const key of keys) {
  nodeMap.set(key, { active: true });
}
console.timeEnd("Map insert");

console.time("Object insert");
const nodeObject = {};
for (const key of keys) {
  nodeObject[key] = { active: true };
}
console.timeEnd("Object insert");

console.log("Map has node-42:", nodeMap.has("node-42"));
console.log("Object has node-42:", Object.hasOwn(nodeObject, "node-42"));
