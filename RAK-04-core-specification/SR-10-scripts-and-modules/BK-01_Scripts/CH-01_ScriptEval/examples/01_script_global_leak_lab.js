console.log("=== Script Global Leak Lab ===");

var voltage = 220;
console.log("Global voltage via var:", globalThis.voltage);

{
  let sealedSignal = "LOCAL_ONLY";
  console.log("Inside block:", sealedSignal);
}

console.log("Has sealedSignal on globalThis:", "sealedSignal" in globalThis);
