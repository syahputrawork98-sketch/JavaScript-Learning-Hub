console.log("=== String Surrogate Lab ===");

const rocket = "🚀";
console.log("Rendered character:", rocket);
console.log("String length:", rocket.length);
console.log("Code point count:", Array.from(rocket).length);
console.log("First UTF-16 unit:", rocket.charCodeAt(0).toString(16));
console.log("Second UTF-16 unit:", rocket.charCodeAt(1).toString(16));

const combined = "Cafe\u0301";
console.log("Raw combined length:", combined.length);
console.log("Normalized NFC equals precomposed:", combined.normalize("NFC") === "Café");
