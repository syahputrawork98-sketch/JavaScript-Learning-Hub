/**
 * SIMULASI: Parameter Validation Static Semantics (Clause 15.1)
 * 
 * Mendeteksi parameter yang tidak valid sebelum fungsi bisa dieksekusi.
 */

class ParameterValidator {
  validate(functionNode) {
    const { name, params, isStrict, isArrow, isGenerator, isAsync } = functionNode;
    const errors = [];

    console.log(`\nValidating: ${name || "anonymous"}() | strict:${isStrict} | arrow:${isArrow}`);

    // 1. Cek duplikasi parameter
    const paramNames = params.filter(p => typeof p === "string");
    const paramSet = new Set(paramNames);
    if (paramNames.length !== paramSet.size) {
      // Arrow, Generator, Async selalu strict → selalu error jika duplikat
      if (isStrict || isArrow || isGenerator || isAsync) {
        errors.push(`SyntaxError: '${name}' has duplicate parameter names in strict/special context`);
      }
      // Non-strict biasa: diizinkan tetapi tidak direkomendasikan
    }

    // 2. Cek 'arguments' sebagai nama param di generator/async
    if ((isGenerator || isAsync) && params.includes("arguments")) {
      errors.push(`SyntaxError: 'arguments' dilarang sebagai nama parameter di Generator/Async`);
    }

    // 3. Cek "use strict" di function dengan complex params (destructured)
    const hasComplexParams = params.some(p => typeof p === "object");
    if (hasComplexParams && isStrict) {
      errors.push(`SyntaxError: Fungsi dengan destructured params tidak boleh menggunakan 'use strict' di body`);
    }

    if (errors.length === 0) {
      console.log(`✅ Parameter valid. Fungsi boleh dieksekusi.`);
    } else {
      errors.forEach(e => console.error(`🚨 ${e}`));
    }
  }
}

const v = new ParameterValidator();

// Skenario 1: Non-strict dengan duplikat (diizinkan tapi buruk)
v.validate({ name: "foo", params: ["a", "a"], isStrict: false });

// Skenario 2: Strict mode dengan duplikat (EARLY ERROR)
v.validate({ name: "bar", params: ["a", "a"], isStrict: true });

// Skenario 3: Arrow function dengan duplikat (EARLY ERROR – selalu strict-like)
v.validate({ name: "arrow", params: ["x", "x"], isStrict: false, isArrow: true });

// Skenario 4: Async dengan 'arguments' sebagai nama param (EARLY ERROR)
v.validate({ name: "asyncFn", params: ["arguments"], isAsync: true });

// Skenario 5: Destructured params + strict (EARLY ERROR)
v.validate({ name: "complex", params: [{ x: 1 }, "y"], isStrict: true });
