# Peta Jalan (Roadmap) Senior Architect

Dokumen ini mendefinisikan rute pembelajaran strategis di dalam **JavaScript Knowledge Base**. Rute ini dirancang untuk mencetak *Senior Architect* yang memahami JavaScript dari sisi pemakaian, teoritis spesifikasi, hingga internal mesin.

## Ringkasan 3 Rak Utama

1. **`RAK-01-core/` (Pillar)**: Pemahaman mendalam tentang perilaku bahasa (Pragmatis & Konseptual).
2. **`RAK-02-spec/` (Foundation)**: Bedah formal klausa **ECMA-262** (Legalistik & Definisi).
3. **`RAK-03-engine/` (Machinery)**: Mekanisme fisik mesin eksekusi (**V8, JIT, GC**).

---

## 1. Rak: `RAK-01-core/` (The Brain Pillars)

Rak ini membagi pilar bahasa menjadi **12 Alur Utama (Sub-Rak)** yang memetakan Clause demi Clause dari ECMA-262 secara granular:

1. `01_notational_conventions/` (Clause 5: Notasi & Algoritma Spec)
2. `02_data_types_and_values/` (Clause 6: Tipe Data Primitif & Internal)
3. `03_abstract_operations/` (Clause 7: Type Conversion & Coercion)
4. `04_executable_code_and_contexts/` (Clause 9: Execution Context, Scope, Realm)
5. `05_ordinary_and_exotic_objects/` (Clause 10: Object Internals & Prototypes)
6. `06_lexical_grammar/` (Clause 11-12: Source Text & Lexical Grammar)
7. `07_expressions_and_operators/` (Clause 13: Expressions)
8. `08_statements_and_declarations/` (Clause 14: Statements)
9. `09_functions_and_classes/` (Clause 15: Functions & classes)
10. `10_scripts_and_modules/` (Clause 16: Modules system)
11. `11_standard_built_in_objects/` (Clause 18-28: Math, Promise, Intl, etc)
12. `12_memory_and_concurrency/` (Clause 29: Atomics, Shared Memory, Event Loop)

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
