function* steps() {
  yield "step-1";
  yield "step-2";
}

async function fetchStep() {
  return "async-step";
}

console.log("=== Async vs Generator Foundations ===");
console.log("Generator:", [...steps()]);
fetchStep().then((value) => console.log("Async:", value));
