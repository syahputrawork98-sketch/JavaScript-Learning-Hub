import * as configNamespace from "../../../../docs/examples/config.mjs";

console.log("=== Module Namespace Lab ===");
console.log("Namespace keys:", Object.keys(configNamespace));
console.log("Version:", configNamespace.version);
console.log("Transmission:", configNamespace.settings.transmission);
