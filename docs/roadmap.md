# Peta Jalan (Roadmap) Senior Architect

Dokumen ini mendefinisikan rute pembelajaran strategis di dalam **JavaScript Knowledge Base**. Rute ini dirancang untuk mencetak *Senior Architect* yang memahami JavaScript dari sisi pemakaian, teoritis spesifikasi, hingga internal mesin.

## Ringkasan 3 Rak Utama

1. **`RAK-01-core/` (Pillar)**: Pemahaman mendalam tentang perilaku bahasa (Pragmatis & Konseptual).
2. **`RAK-02-spec/` (Foundation)**: Bedah formal klausa **ECMA-262** (Legalistik & Definisi).
3. **`RAK-03-engine/` (Machinery)**: Mekanisme fisik mesin eksekusi (**V8, JIT, GC**).

---

## 1. Rak: `RAK-01-core/` (The Brain Pillars)

Rak ini membagi pilar bahasa menjadi **12 Alur Utama (Sub-Rak)** yang memetakan Clause demi Clause dari ECMA-262 secara granular:

1. `SR-01_NationalConvention/` (Clause 5: Notasi & Algoritma Spec)
2. `SR-02_DataTypesAndValues/` (Clause 6: Tipe Data Primitif & Internal)
3. `SR-03_AbstractOperations/` (Clause 7: Type Conversion & Coercion)
4. `SR-04_ExecutableCodeAndContexts/` (Clause 9: Execution Context, Scope, Realm)
5. `SR-05_OrdinaryAndExoticObjects/` (Clause 10: Object Internals & Prototypes)
6. `SR-06_LexicalGrammar/` (Clause 11-12: Source Text & Lexical Grammar)
7. `SR-07_ExpressionsAndOperators/` (Clause 13: Expressions)
8. `SR-08_StatementsAndDeclarations/` (Clause 14: Statements)
9. `SR-09_FunctionsAndClasses/` (Clause 15: Functions & classes)
10. `SR-10_ScriptsAndModules/` (Clause 16: Modules system)
11. `SR-11_StandardBuiltInObjects/` (Clause 18-28: Math, Promise, Intl, etc)
12. `SR-12_MemoryManagementAndGC/` (Clause 28.3 - 28.5)

---

## 2. Rak: `RAK-02-spec/` (ECMA-262 Scholar)

*Direncanakan:* Pemetaan formal klausa demi klausa ECMA-262.

---

## 3. Rak: `RAK-03-engine/` (Advanced Internals)

*Fokus:*
- Arsitektur **V8** (Ignition & TurboFan).
- Algoritma **Garbage Collection**.
- **Optimization & Deoptimization** patterns.

---

## Aturan Evolusi

- Karena repositori ini berfungsi sebagai "The Brain", **DILARANG** menambahkan pembahasan Framework spesifik (React/Vue) atau Runtime (Node.js). Mereka ada di repositori tersendiri di Master Plan.
