/**
 * SIMULASI: Script vs Module Static Semantics
 * 
 * Mendemonstrasikan perbedaan aturan yang aktif
 * berdasarkan "mode pembungkus" (Script atau Module).
 */

class ContextAnalyzer {
  analyzeNode(node, context) {
    const mode = context.type; // "Script" atau "Module"
    const isModule = mode === "Module";
    const errors = [];

    console.log(`\nChecking: ${node.type} in [${mode}]`);

    if (node.type === "ImportDeclaration" && !isModule) {
      errors.push("SyntaxError: 'import' only valid in Module context");
    }

    if (node.type === "ExportDeclaration" && !isModule) {
      errors.push("SyntaxError: 'export' only valid in Module context");
    }

    if (node.type === "TopLevelAwait" && !isModule) {
      errors.push("SyntaxError: Top-level 'await' only valid in Module context");
    }

    if (node.type === "WithStatement" && isModule) {
      // Module implicitly strict, so 'with' is always forbidden
      errors.push("SyntaxError: 'with' statement not allowed in strict mode (Module)");
    }

    if (errors.length === 0) {
      console.log(`✅ OK dalam ${mode} context.`);
    } else {
      errors.forEach(e => console.error(`🚨 ${e}`));
    }
  }
}

const analyzer = new ContextAnalyzer();

const Script = { type: "Script" };
const Module = { type: "Module" };

// import di Script
analyzer.analyzeNode({ type: "ImportDeclaration" }, Script);  // ERROR

// import di Module
analyzer.analyzeNode({ type: "ImportDeclaration" }, Module);  // OK

// top-level await di Script
analyzer.analyzeNode({ type: "TopLevelAwait" }, Script);      // ERROR

// top-level await di Module
analyzer.analyzeNode({ type: "TopLevelAwait" }, Module);      // OK

// with di Module (implicit strict)
analyzer.analyzeNode({ type: "WithStatement" }, Module);       // ERROR

// with di Script (non-strict)
analyzer.analyzeNode({ type: "WithStatement" }, Script);       // Warning (non-error)
