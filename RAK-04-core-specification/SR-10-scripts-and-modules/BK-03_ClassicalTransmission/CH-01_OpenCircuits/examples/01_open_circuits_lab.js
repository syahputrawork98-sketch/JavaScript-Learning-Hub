console.log("=== Open Circuits Lab ===");

var openVoltage = 220;
console.log("Leaked to globalThis:", globalThis.openVoltage);

function legacyHandshake() {
  return "legacy-handshake";
}

console.log("Legacy function on globalThis:", typeof globalThis.legacyHandshake === "function");
