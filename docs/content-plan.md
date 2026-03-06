# Content Plan

## Track 01: JavaScript Tutorial
### In Scope
- syntax essentials: variables, functions, objects, arrays, conditionals, loops.
- modules dan error handling dasar.
- mini app sederhana untuk integrasi konsep.

### Out of Scope
- internals engine yang mendalam.
- framework khusus.

### Prioritas Penulisan
1. fondasi bahasa dan flow control.
2. data structures dan function design.
3. async dasar + mini project.

## Track 02: JavaScript Runtime First Principles
### In Scope
- execution context.
- lexical environment.
- scope, closure, hoisting.
- `this` binding.
- call stack dan memory model dasar.

### Out of Scope
- framework API.
- optimasi mikro tanpa konteks.

### Prioritas Penulisan
1. execution context + lexical environment.
2. scope/closure/hoisting/`this`.
3. stack + memory model.

## Track 03: Asynchronous JavaScript Model
### In Scope
- event loop.
- task queue.
- microtask queue dan job queue.
- Promise.
- `async/await`.

### Out of Scope
- distributed systems concurrency detail.
- framework async abstraction spesifik.

### Prioritas Penulisan
1. event loop + queues.
2. Promise + `async/await` reasoning.
3. async execution order drills.

## Track 04: JavaScript Object Model
### In Scope
- objects.
- property descriptors.
- prototype chain dan `[[Prototype]]`.
- constructors, `new` operator.
- class syntax.

### Out of Scope
- OOP framework patterns spesifik.
- decorator/proposal non-standar sebagai materi inti.

### Prioritas Penulisan
1. object basics + descriptors.
2. prototype chain + constructors.
3. class syntax + composition trade-off.

## Track 05: JavaScript Memory and References
### In Scope
- primitive values.
- reference values.
- referential equality.
- mutation vs immutability.
- garbage collection (high level).

### Out of Scope
- VM implementation detail per engine.
- low-level allocator internals.

### Prioritas Penulisan
1. primitive vs reference semantics.
2. mutation bugs + immutability strategies.
3. GC mental model (high level).

## Track 06: JavaScript Runtime Exercises
### In Scope
- latihan closure behavior.
- latihan `this` binding edge cases.
- latihan async execution order.
- latihan object mutation behavior.
- latihan Promise error propagation.
- latihan event loop batching/starvation.
- latihan prototype/class runtime behavior.
- latihan integrative runtime debugging.

### Out of Scope
- teori panjang tanpa eksperimen.

### Prioritas Penulisan
1. progression 3 level per topik (dasar-menengah-lanjutan).
2. answer key terpisah untuk self-check pasca-attempt.
3. visual map untuk pola runtime yang sering menimbulkan miskonsepsi.

## Track 07: JavaScript Specification Companion
### In Scope
- peta konsep ke ECMAScript specification sections.
- glossary istilah formal spec yang relevan.
- reading guide untuk konsep runtime inti.
- visual map untuk workflow membaca spec dan model formal utama.

### Out of Scope
- pembahasan semua clause spesifikasi secara menyeluruh.
- legal/editorial detail non-pedagogis.

### Prioritas Penulisan
1. mapping concept -> spec section.
2. guided reading notes.
3. companion checks + visual aids untuk topik sulit.

## Catatan Evolusi
- Arsitektur 7 track sudah menjadi baseline aktif repository.
- Penyesuaian berikutnya difokuskan ke kualitas konten, bukan perpindahan struktur utama.
