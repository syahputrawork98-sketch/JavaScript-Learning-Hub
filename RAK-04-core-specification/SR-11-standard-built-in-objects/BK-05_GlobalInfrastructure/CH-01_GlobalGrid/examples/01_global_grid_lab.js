console.log("=== Global Grid Lab ===");

const checkpoints = ["globalThis", "JSON", "Math", "Reflect", "parseInt", "encodeURI"];

for (const name of checkpoints) {
  console.log(`${name}:`, name in globalThis);
}

console.log("globalThis identity check:", globalThis === globalThis.globalThis);
