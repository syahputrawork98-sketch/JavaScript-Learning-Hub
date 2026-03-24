console.log("=== Dynamic Routing Lab ===");

const loadConfig = async () => {
  const moduleNamespace = await import("../../../../docs/examples/config.mjs");
  console.log("Loaded dynamically:", moduleNamespace.version);
};

await loadConfig();
