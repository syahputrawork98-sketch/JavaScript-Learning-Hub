/**
 * SIMULASI: Class Static Semantics (Clause 15.7)
 * 
 * Memvalidasi aturan statis pada class body:
 * - Private field duplikat
 * - Constructor ganda
 * - static prototype (dilarang)
 */

class ClassBodyValidator {
  validate(classNode) {
    console.log(`\n=== Validating class: ${classNode.name || "anonymous"} ===`);
    const errors = [];

    this.checkDuplicatePrivateNames(classNode.members, errors);
    this.checkDuplicateConstructor(classNode.members, errors);
    this.checkStaticPrototype(classNode.members, errors);

    if (errors.length === 0) {
      console.log("✅ Class definition valid. Dapat digunakan untuk membuat instance.");
    } else {
      errors.forEach(e => console.error(`🚨 ${e}`));
      console.log(`\n❌ ${errors.length} Early Error(s) ditemukan. Class GAGAL didefinisikan.`);
    }
  }

  checkDuplicatePrivateNames(members, errors) {
    const privateNames = new Set();
    for (const m of members) {
      if (m.name?.startsWith("#")) {
        if (privateNames.has(m.name)) {
          errors.push(`SyntaxError: Private field '${m.name}' already declared`);
        }
        privateNames.add(m.name);
      }
    }
  }

  checkDuplicateConstructor(members, errors) {
    const ctors = members.filter(m => m.name === "constructor");
    if (ctors.length > 1) {
      errors.push("SyntaxError: A class may only have one constructor");
    }
  }

  checkStaticPrototype(members, errors) {
    const hasStaticProto = members.some(m => m.isStatic && m.name === "prototype");
    if (hasStaticProto) {
      errors.push("SyntaxError: Classes may not have a static property named 'prototype'");
    }
  }
}

const validator = new ClassBodyValidator();

// Kelas yang valid
validator.validate({
  name: "Person",
  members: [
    { name: "constructor" },
    { name: "#age" },
    { name: "#name" },
    { name: "greet", isStatic: false }
  ]
});

// Kelas dengan private field duplikat
validator.validate({
  name: "Broken",
  members: [
    { name: "constructor" },
    { name: "#x" },
    { name: "#x" }, // DUPLIKAT!
    { name: "constructor" }, // DUPLIKAT!
    { name: "prototype", isStatic: true } // DILARANG!
  ]
});
