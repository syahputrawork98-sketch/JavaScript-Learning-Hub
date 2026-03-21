/**
 * SIMULASI: Syntax-Directed Operations (Clause 5.2.3)
 * 
 * SDO adalah operasi yang definisinya menempel pada struktur grammar.
 * Contoh klasik: Operasi "Evaluation".
 */

// Simulasi AST (Hasil Parse)
const syntaxTree = {
  type: "Script",
  body: [
    { type: "Literal", value: 42 },
    { type: "BinaryExpression", left: 10, operator: "+", right: 5 }
  ]
};

// Simulasi SDO: Evaluation
// Di spec, ini didefinisikan per Production.
const SDO_Evaluation = {
  Literal: (node) => {
    console.log("-> SDO Evaluation (Literal): Mengembalikan nilai langsung.");
    return node.value;
  },
  BinaryExpression: (node) => {
    console.log("-> SDO Evaluation (BinaryExpression): Menghitung operasi matematika.");
    if (node.operator === "+") return node.left + node.right;
    return 0;
  },
  Script: (node) => {
    console.log("-> SDO Evaluation (Script): Mengevaluasi seluruh body.");
    return node.body.map(child => SDO_Evaluation[child.type](child));
  }
};

// Eksekusi SDO Global
console.log("--- Memulai Simulasi SDO ---");
const results = SDO_Evaluation.Script(syntaxTree);
console.log("\nHasil Evaluasi Pohon:", results);
