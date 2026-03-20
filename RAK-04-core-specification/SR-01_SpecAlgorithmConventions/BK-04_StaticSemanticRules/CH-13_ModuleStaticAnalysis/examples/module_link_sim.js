/**
 * SIMULASI: Module Static Analysis - Import Linking (Clause 16.2)
 * 
 * Mendemonstrasikan bagaimana engine memverifikasi link
 * antara modul (import vs export) secara statis.
 */

class ModuleGraph {
  constructor() {
    // Daftar modul dan export yang mereka sediakan
    this.registry = new Map();
  }

  // Daftarkan modul dan export-nya
  register(moduleName, exports) {
    console.log(`[REGISTRY] Modul '${moduleName}' menyediakan: [${exports.join(", ")}]`);
    this.registry.set(moduleName, new Set(exports));
  }

  // Resolusi import statis
  resolveImport(importerName, moduleName, importedNames) {
    console.log(`\n[LINKER] '${importerName}' mengimpor {${importedNames.join(", ")}} dari '${moduleName}'`);

    const moduleExports = this.registry.get(moduleName);
    if (!moduleExports) {
      console.error(`🚨 SyntaxError: Cannot find module '${moduleName}'`);
      return false;
    }

    let allOk = true;
    for (const name of importedNames) {
      if (!moduleExports.has(name)) {
        console.error(`🚨 SyntaxError: The requested module '${moduleName}' does not provide an export named '${name}'`);
        allOk = false;
      } else {
        console.log(`✅ '${name}' → found in '${moduleName}'`);
      }
    }
    return allOk;
  }
}

// Setup Module Graph
const graph = new ModuleGraph();

graph.register("math.js",   ["add", "subtract", "PI"]);
graph.register("utils.js",  ["formatDate", "slugify"]);
graph.register("config.js", ["apiUrl", "timeout"]);

console.log("\n=== Static Linking Phase ===");

// Import valid
graph.resolveImport("app.js", "math.js",   ["add", "PI"]);

// Import dengan nama yang tidak ada
graph.resolveImport("app.js", "utils.js",  ["formatDate", "encrypt"]); // 'encrypt' tidak ada!

// Import dari modul yang tidak ada
graph.resolveImport("app.js", "ghost.js",  ["secret"]);
