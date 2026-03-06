# JavaScript

Repository ini adalah **perpustakaan kecil** yang berisi kumpulan buku teknis tentang JavaScript.

Repository ini **bukan tutorial tunggal** dan bukan juga sebuah handbook besar.  
Sebaliknya, repository ini disusun sebagai **rak buku**, di mana setiap buku membahas satu aspek penting dari bahasa JavaScript.

Tujuan dari repository ini adalah membangun **pemahaman yang kuat dan benar tentang bagaimana JavaScript bekerja**, mulai dari sintaks dasar hingga perilaku runtime dan cara kerja JavaScript engine.

---

# Konsep Repository

Banyak materi JavaScript yang tersedia di internet berfokus pada **cara menggunakan API atau framework**.

Namun sering kali penjelasan tersebut tidak menjelaskan **mengapa JavaScript berperilaku seperti itu**.

Untuk memahami JavaScript secara mendalam, kita perlu memahami:

- bagaimana kode JavaScript dieksekusi
- bagaimana **Execution Context** bekerja
- bagaimana **Lexical Environment** terbentuk
- bagaimana **Event Loop** menjalankan asynchronous code
- bagaimana **Prototype Chain** membentuk object system
- bagaimana nilai dan reference disimpan di memory
- bagaimana JavaScript engine mengeksekusi program

Karena itu repository ini disusun sebagai **kumpulan buku**, sehingga setiap topik dapat dipelajari secara lebih fokus.

---

# Struktur Rak Buku

Repository ini disusun seperti **rak buku teknis**.

Setiap folder merepresentasikan **satu buku**.
JavaScript
│
├── 01-javascript-tutorial
├── 02-javascript-runtime-first-principles
├── 03-asynchronous-javascript-model
├── 04-javascript-object-model
├── 05-javascript-memory-and-references
├── 06-javascript-runtime-exercises
├── 07-javascript-specification-companion
├── 08-javascript-engine-internals
└── 09-javascript-modules-and-program-structure


Setiap buku membahas **satu domain JavaScript** secara khusus.

Jika dipelajari bersama, buku-buku ini akan membentuk **mental model yang utuh tentang JavaScript**.

---

# Daftar Buku

## 01 — JavaScript Tutorial

Buku ini berfokus pada **dasar-dasar bahasa JavaScript** dan cara menulis program menggunakan sintaks JavaScript.

Topik utama:

- variables
- functions
- arrays
- objects
- conditionals
- loops
- modules
- error handling

Tujuan buku ini adalah memahami **bagaimana menulis program JavaScript**.

---

## 02 — JavaScript Runtime First Principles

Buku ini membahas **bagaimana JavaScript dijalankan oleh runtime**.

Topik utama:

- Execution Context
- Lexical Environment
- Scope
- Hoisting
- Closures
- `this` binding
- Call Stack
- Scope Chain

Tujuan buku ini adalah membangun **mental model tentang bagaimana kode JavaScript dieksekusi**.

---

## 03 — Asynchronous JavaScript Model

Buku ini membahas bagaimana JavaScript menjalankan **asynchronous code**.

Topik utama:

- Event Loop
- Task Queue
- Microtask Queue
- Promises
- Async/Await
- Job Queue

Tujuan buku ini adalah memahami **urutan eksekusi asynchronous code**.

---

## 04 — JavaScript Object Model

Buku ini membahas **sistem objek dalam JavaScript**.

Topik utama:

- Objects
- Property Descriptors
- Prototype Chain
- `[[Prototype]]`
- Constructors
- `new` operator
- Class syntax

Tujuan buku ini adalah memahami **prototype-based object system** dalam JavaScript.

---

## 05 — JavaScript Memory and References

Buku ini membahas **bagaimana nilai dan reference disimpan di memory**.

Topik utama:

- Primitive values
- Reference values
- Referential equality
- Mutation vs immutability
- Garbage Collection (high level)

Tujuan buku ini adalah memahami bagaimana **data berperilaku di dalam program JavaScript**.

---

## 06 — JavaScript Runtime Exercises

Buku ini berisi **eksperimen kode untuk melatih pemahaman runtime JavaScript**.

Contoh latihan:

- closure behavior
- `this` binding edge cases
- async execution order
- object mutation behavior
- prototype chain behavior

Tujuan buku ini adalah melatih kemampuan untuk **memprediksi perilaku runtime JavaScript**.

---

## 07 — JavaScript Specification Companion

Buku ini menghubungkan konsep yang dipelajari dengan **ECMAScript Specification**.

Topik utama:

- cara membaca ECMAScript specification
- Environment Records
- Abstract Operations
- Completion Records
- Iteration Protocol

Tujuan buku ini adalah menjembatani **pemahaman developer dengan spesifikasi resmi JavaScript**.

---

## 08 — JavaScript Engine Internals

Buku ini membahas bagaimana **JavaScript engine mengeksekusi kode secara internal**.

Topik utama:

- parsing
- Abstract Syntax Tree (AST)
- bytecode
- JIT compilation
- hidden classes
- inline caching
- optimization dan deoptimization

Tujuan buku ini adalah memahami bagaimana **engine seperti V8 menjalankan dan mengoptimasi JavaScript**.

---

## 09 — JavaScript Modules and Program Structure

Buku ini membahas bagaimana **program JavaScript modern disusun menggunakan module system**.

Topik utama:

- ES Modules
- module graph
- `import` / `export`
- live bindings
- circular dependencies
- module evaluation

Tujuan buku ini adalah memahami **struktur program JavaScript modern**.

---

# Tujuan Jangka Panjang

Repository ini merupakan **proyek belajar jangka panjang**.

Dengan mempelajari JavaScript melalui buku-buku ini, diharapkan terbentuk pemahaman yang kuat tentang:

- runtime behavior
- execution model
- object system
- asynchronous execution
- memory behavior
- engine internals

Dengan fondasi tersebut, teknologi lain yang dibangun di atas JavaScript akan jauh lebih mudah dipahami.

---

# Status Repository

Repository ini bersifat **work in progress** dan akan terus berkembang seiring dengan proses belajar dan dokumentasi yang dilakukan.

