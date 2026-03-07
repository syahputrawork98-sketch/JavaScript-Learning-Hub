# Boundary Map - Track 02

Dokumen ini menetapkan batas konsep Track 02 terhadap track lain agar tidak overlap.

## In Track 02 (Runtime First Principles)
- Values, types, coercion (sebagai fondasi runtime reasoning).
- Scope, hoisting, closure.
- Lexical environment dan environment record (high-level reasoning).
- `this` binding.
- Execution context lifecycle.
- Call stack sebagai model eksekusi sinkron.
- Scope chain lookup.
- Memory model (high-level): primitive vs reference behavior, mutation sharing.

## Cross-Track Boundaries
- Async queue details (event loop, task/microtask/job queue): Track 03.
- Object internals/prototype chain detail: Track 04.
- Memory lifecycle, reference behavior detail, dan GC lanjutan: Track 05.
- Drill praktikum edge-cases: Track 06.

## Rule of Thumb
- Jika fokus topik adalah "kenapa kode sync ini berjalan begitu" -> Track 02.
- Jika fokus topik adalah "urutan async scheduling" -> Track 03.
- Jika fokus topik adalah object/prototype mechanics -> Track 04.
- Jika fokus topik adalah mutation/reference/GC detail mendalam -> Track 05.
