/**
 * SIMULASI: Advanced Semantic Puzzles
 *
 * Mendemonstrasikan interaksi beberapa aturan statis secara bersamaan.
 * Cocok sebagai review sintesis dari seluruh BK-04.
 */

console.log("=".repeat(60));
console.log("PUZZLE 1: TDZ vs Hoisting Bertabrakan");
console.log("=".repeat(60));

// Simulasikan scope analysis secara manual
const scopeFn = {
  outer: { x: 1 }, // x dari scope luar
  inner: {
    bindings: { x: { kind: "let", initialized: false } } // x di scope dalam (TDZ)
  }
};

function resolveName(name, scope) {
  if (scope.bindings && scope.bindings[name]) {
    const b = scope.bindings[name];
    if (!b.initialized) {
      console.error(`🚨 ReferenceError: Cannot access '${name}' before initialization (TDZ)`);
      return null;
    }
    return b.value;
  }
  // Cari ke scope luar
  if (scope.outer && scope.outer[name] !== undefined) {
    return scope.outer[name];
  }
  return undefined;
}

const result = resolveName("x", scopeFn.inner);
console.log("Hasil akses 'x' sebelum inisialisasi:", result ?? "(error)");

console.log("\n" + "=".repeat(60));
console.log("PUZZLE 2: Konflik var vs let di Scope Sama");
console.log("=".repeat(60));

function detectScopeConflict(scope) {
  const varNames = new Set(scope.varDecls);
  const lexNames = new Set(scope.letDecls);
  
  for (const name of varNames) {
    if (lexNames.has(name)) {
      console.error(`🚨 SyntaxError: '${name}' tidak bisa dideklarasikan sebagai var dan let di scope yang sama`);
      return;
    }
  }
  console.log("✅ Scope clear, tidak ada konflik.");
}

detectScopeConflict({ varDecls: ["a", "b"], letDecls: ["c"] }); // OK
detectScopeConflict({ varDecls: ["a"],      letDecls: ["a", "b"] }); // CONFLICT!

console.log("\n" + "=".repeat(60));
console.log("PUZZLE 3: Private Names Antar Class (Valid)");
console.log("=".repeat(60));

class PrivateNameRegistry {
  constructor() {
    this.classPrivateNames = new Map();
  }

  validateClassPrivates(className, privates) {
    const seen = new Set();
    for (const p of privates) {
      if (seen.has(p)) {
        console.error(`🚨 SyntaxError: class ${className}: Private '${p}' sudah ada di kelas ini`);
        return false;
      }
      seen.add(p);
    }
    this.classPrivateNames.set(className, new Set(privates));
    console.log(`✅ Class [${className}] OK: privates [${privates.join(", ")}] unik.`);
    return true;
  }
}

const registry = new PrivateNameRegistry();
registry.validateClassPrivates("A", ["#x"]);           // OK
registry.validateClassPrivates("B", ["#x"]);           // OK – berbeda kelas!
registry.validateClassPrivates("C", ["#y", "#y"]);     // DUPLICATE di kelas C!
