const secretId = Symbol("secretId");

const config = {
  mode: "stable",
  retries: 3,
  [secretId]: "INTERNAL-ONLY",
};

console.log("=== Fundamental Intrinsics Lab ===");
console.log("Object.keys:", Object.keys(config));
console.log("Reflect.ownKeys:", Reflect.ownKeys(config));
console.log("Frozen before:", Object.isFrozen(config));

Object.freeze(config);

console.log("Frozen after:", Object.isFrozen(config));
console.log("Secret symbol value:", config[secretId]);
