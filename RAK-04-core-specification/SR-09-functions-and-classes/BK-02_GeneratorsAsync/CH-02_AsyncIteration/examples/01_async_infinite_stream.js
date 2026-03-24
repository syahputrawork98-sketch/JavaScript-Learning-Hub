async function* pulseStream(limit = 3) {
  for (let index = 1; index <= limit; index += 1) {
    await Promise.resolve();
    yield `pulse-${index}`;
  }
}

console.log("=== Async Infinite Stream Lab ===");

for await (const pulse of pulseStream()) {
  console.log(pulse);
}
