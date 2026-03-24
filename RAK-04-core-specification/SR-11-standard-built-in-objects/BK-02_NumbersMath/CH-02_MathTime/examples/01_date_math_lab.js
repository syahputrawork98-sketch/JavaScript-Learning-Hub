console.log("=== Date and Math Lab ===");

const values = [4.2, 4.8, -4.2];
for (const value of values) {
  console.log(`value=${value}`, {
    floor: Math.floor(value),
    ceil: Math.ceil(value),
    round: Math.round(value),
    trunc: Math.trunc(value),
  });
}

const startedAt = Date.now();
const simulatedWork = Array.from({ length: 10000 }, (_, index) => index).reduce((sum, value) => sum + value, 0);
const finishedAt = Date.now();

console.log("Simulated work result:", simulatedWork);
console.log("Duration (ms):", finishedAt - startedAt);
console.log("ISO timestamp:", new Date(finishedAt).toISOString());
