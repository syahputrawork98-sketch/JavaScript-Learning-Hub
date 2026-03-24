console.log("=== Character Mapping Lab ===");

const rocket = "🚀";
console.log("Rocket length:", rocket.length);
console.log("Code point count:", Array.from(rocket).length);

const combined = "Cafe\u0301";
console.log("Normalized equals Café:", combined.normalize("NFC") === "Café");

const pattern = /HUB-\d+/;
console.log("Pattern match:", pattern.test("Signal from HUB-402 received."));
