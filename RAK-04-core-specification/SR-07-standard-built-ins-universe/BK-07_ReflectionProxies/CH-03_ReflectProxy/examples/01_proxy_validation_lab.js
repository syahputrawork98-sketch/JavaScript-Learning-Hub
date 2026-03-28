console.log("=== Proxy Validation Lab ===");

const target = { voltage: 220, status: "stable" };

const audited = new Proxy(target, {
  get(source, property, receiver) {
    console.log("[GET]", String(property));
    return Reflect.get(source, property, receiver);
  },
  set(source, property, value, receiver) {
    if (property === "voltage" && (typeof value !== "number" || value < 0)) {
      console.log("[BLOCKED] invalid voltage");
      return false;
    }

    console.log("[SET]", String(property), "=>", value);
    return Reflect.set(source, property, value, receiver);
  },
});

console.log("Initial voltage:", audited.voltage);
audited.voltage = 230;
console.log("Updated target:", target);
