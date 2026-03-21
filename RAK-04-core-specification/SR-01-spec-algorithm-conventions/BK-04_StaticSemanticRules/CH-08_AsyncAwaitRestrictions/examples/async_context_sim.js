/**
 * SIMULASI: Async/Await Context Restrictions
 *
 * Demonstrasi bagaimana parameter grammar [Await]
 * menentukan validitas 'await' secara statis.
 */

class AsyncContextChecker {
  checkNode(node, context) {
    console.log(`\nChecking: ${node.type} | Context: ${context.type}`);
    
    if (node.type === "AwaitExpression") {
      if (!context.hasAwaitParam) {
        this.error("SyntaxError: 'await' is only valid inside an async function or at the top level of a module");
        return false;
      }
      console.log("✅ AwaitExpression valid dalam konteks async.");
      return true;
    }

    if (node.type === "AsyncGetter") {
      this.error("SyntaxError: Getter tidak boleh bersifat async");
      return false;
    }

    if (node.type === "AsyncConstructor") {
      this.error("SyntaxError: Constructor tidak boleh bersifat async");
      return false;
    }

    return true;
  }

  error(msg) {
    console.error(`🚨 [ASYNC-AUDIT]: ${msg}`);
  }
}

const checker = new AsyncContextChecker();

// Konteks Reguler Function (Await = false)
const regularCtx = { type: "Function", hasAwaitParam: false };

// Konteks Async Function (Await = true)
const asyncCtx = { type: "AsyncFunction", hasAwaitParam: true };

// Konteks Module Top-Level (Await = true)
const moduleCtx = { type: "Module", hasAwaitParam: true };

// Skenario 1: await di regular function
checker.checkNode({ type: "AwaitExpression" }, regularCtx);

// Skenario 2: await di async function
checker.checkNode({ type: "AwaitExpression" }, asyncCtx);

// Skenario 3: await di top-level module
checker.checkNode({ type: "AwaitExpression" }, moduleCtx);

// Skenario 4: async getter (selalu error)
checker.checkNode({ type: "AsyncGetter" }, asyncCtx);

// Skenario 5: async constructor (selalu error)
checker.checkNode({ type: "AsyncConstructor" }, asyncCtx);
