# R01 Book Map

Dokumen ini menetapkan struktur buku di rak `R01 - Fondasi Bahasa`.

## Daftar Buku R01

Semua buku berikut sudah memiliki struktur folder awal.

1. `B00-javascript-tutorial-map`  
   Fungsi: pintu masuk dan peta belajar untuk seluruh buku fondasi.
2. `B01-lexical-dan-grammar-dasar`  
   Fungsi: fondasi cara membaca dan menulis bentuk sintaks JavaScript.
3. `B02-values-types-dan-coercion-dasar`  
   Fungsi: fondasi perilaku nilai, tipe data, dan konversi tipe.
4. `B03-expressions-operators-statements`  
   Fungsi: fondasi membentuk logika program dan kontrol alur.
5. `B04-functions-dan-scope-dasar`  
   Fungsi: fondasi penggunaan fungsi dan scope tanpa runtime detail mendalam.
6. `B05-objects-arrays-builtins-dasar`  
   Fungsi: fondasi struktur data inti JavaScript.
7. `B06-error-handling-dan-modules-dasar`  
   Fungsi: fondasi ketahanan program dan pemecahan kode antar modul.

## Checklist Coverage Wajib

Gunakan checklist ini saat mulai menulis setiap buku.

### B00 - JavaScript Tutorial Map

- [ ] Menjelaskan urutan baca `B01 -> B06`.
- [ ] Menjelaskan output belajar akhir rak R01.
- [ ] Menjelaskan batas scope R01 vs R02/R03/R04.
- [ ] Menyediakan rute belajar minimum dan rute belajar lengkap.

### B01 - Lexical dan Grammar Dasar

- [ ] Case sensitivity, whitespace, line terminator, dan comments.
- [ ] Identifier rules dan reserved words.
- [ ] Literals dasar (number, string, boolean, null).
- [ ] Statement blocks `{}` dan struktur file dasar.
- [ ] Strict mode dasar (`"use strict"`), batasan, dan dampak umum.

### B02 - Values, Types, dan Coercion Dasar

- [ ] Primitive types dasar dan pengenalan object sebagai non-primitive.
- [ ] `typeof` dan keterbatasan hasilnya pada kasus dasar.
- [ ] Truthy/falsy.
- [ ] Equality dasar (`==` vs `===`) dengan contoh miskonsepsi umum.
- [ ] Coercion umum pada number/string/boolean.
- [ ] `null` vs `undefined` pada konteks praktis pemula.

### B03 - Expressions, Operators, Statements

- [ ] Assignment dan expression evaluation dasar.
- [ ] Arithmetic, comparison, logical operators.
- [ ] Operator precedence dan associativity pada kasus umum.
- [ ] Conditional statements (`if/else`, `switch`).
- [ ] Loops (`for`, `while`, `do...while`) dan kontrol (`break`, `continue`).
- [ ] Error umum pemula pada kondisi dan loop.

### B04 - Functions dan Scope Dasar

- [ ] Function declaration vs function expression.
- [ ] Parameters, arguments, default parameter dasar.
- [ ] Return value dan side effect.
- [ ] Arrow function dasar dan batas penggunaannya.
- [ ] Scope dasar: global, function, block (`var`, `let`, `const`).
- [ ] Closure dasar pada kasus praktis sederhana.

### B05 - Objects, Arrays, Built-ins Dasar

- [ ] Object literal, property access (`.` dan `[]`).
- [ ] Method dasar pada object.
- [ ] Array dasar: indexing, length, iterasi dasar.
- [ ] Built-in methods dasar yang umum dipakai (`push`, `pop`, `map`, `filter` level pemula).
- [ ] Perbedaan mutable vs non-mutable operation dasar.
- [ ] JSON dasar (`JSON.stringify` dan `JSON.parse`) untuk data sederhana.

### B06 - Error Handling dan Modules Dasar

- [ ] Error jenis umum untuk pemula (`ReferenceError`, `TypeError`, `SyntaxError`).
- [ ] `try...catch...finally` dasar.
- [ ] `throw` dasar untuk validasi sederhana.
- [ ] Konsep defensive coding dasar.
- [ ] ES modules dasar (`export`, `import`, default vs named).
- [ ] Struktur file modular sederhana untuk mini project.

## Batas Scope R01

Topik berikut tidak dibahas mendalam di R01:

- Execution Context detail, Environment Record formal, dan hoisting detail lintas skenario (masuk R02).
- Event loop detail, microtask/macrotask orchestration, Promise internals (masuk R03).
- Prototype internals, descriptor lanjutan, dan Proxy/Reflect (masuk R04).
- Memory profiling, leak analysis mendalam, dan engine optimization detail (masuk R05/R07).
