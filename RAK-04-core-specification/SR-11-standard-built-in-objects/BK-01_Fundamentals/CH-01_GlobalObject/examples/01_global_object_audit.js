console.log("=== Global Object Audit ===");

const sampleKeys = ["globalThis", "Infinity", "NaN", "undefined", "parseInt", "JSON", "Math", "Reflect"];

for (const key of sampleKeys) {
  console.log(`${key}:`, key in globalThis);
}

const ownNames = Object.getOwnPropertyNames(globalThis);
console.log("Own property count:", ownNames.length);
console.log("First 10 properties:", ownNames.slice(0, 10));
