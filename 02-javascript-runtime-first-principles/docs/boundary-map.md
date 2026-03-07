# Boundary Map - Buku 02

Dokumen ini menetapkan batas konsep Buku 02 terhadap buku lain agar tidak overlap.

## In Buku 02 (Runtime First Principles)
- Values, types, coercion (sebagai fondasi runtime reasoning).
- Scope, hoisting, closure.
- Lexical environment dan environment record (high-level reasoning).
- `this` binding.
- Execution context lifecycle.
- Call stack sebagai model eksekusi sinkron.
- Scope chain lookup.
- Memory model (high-level): primitive vs reference behavior, mutation sharing.

## Cross-Buku Boundaries
- Async queue details (event loop, task/microtask/job queue): Buku 03.
- Object internals/prototype chain detail: Buku 04.
- Memory lifecycle, reference behavior detail, dan GC lanjutan: Buku 05.
- Drill praktikum edge-cases: Buku 06.

## Rule of Thumb
- Jika fokus topik adalah "kenapa kode sync ini berjalan begitu" -> Buku 02.
- Jika fokus topik adalah "urutan async scheduling" -> Buku 03.
- Jika fokus topik adalah object/prototype mechanics -> Buku 04.
- Jika fokus topik adalah mutation/reference/GC detail mendalam -> Buku 05.

