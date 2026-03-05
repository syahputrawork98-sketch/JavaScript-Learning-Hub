# Learning Path JavaScript First Principles

Dokumen ini memetakan alur prasyarat per topik dan kamus istilah yang diperkenalkan secara bertahap.

## Foundations Flow
1. `01-values-types-coercion.md`
2. `02-scope-hoisting.md`
3. `03-function-closure-dasar.md`
4. `04-this-binding-dasar.md`
5. `05-object-prototype-dasar.md`
6. `06-async-javascript-dasar.md`

## Advanced Flow
1. `01-closure-patterns.md`
2. `02-this-binding-lanjutan.md`
3. `03-prototype-chain-lanjutan.md`
4. `04-promise-async-await.md`
5. `05-error-handling-defensive-coding.md`
6. `06-module-organization-esm.md`

## Internals Flow
1. `01-execution-context-lifecycle.md`
2. `02-call-stack-web-apis-queues.md`
3. `03-event-loop-detail.md`
4. `04-scope-chain-lookup.md`
5. `05-prototype-chain-lookup.md`
6. `06-memory-lifecycle-garbage-collection.md`

## Prasyarat Per Topik (Foundations)
- `01-values-types-coercion.md`
  - prasyarat: variabel dasar dan `console.log`
  - membuka jalan ke: scope, function, object
- `02-scope-hoisting.md`
  - prasyarat: topik 01
  - membuka jalan ke: closure dan `this`
- `03-function-closure-dasar.md`
  - prasyarat: topik 01-02
  - membuka jalan ke: advanced closure patterns
- `04-this-binding-dasar.md`
  - prasyarat: topik 02-03
  - membuka jalan ke: `this` lanjutan
- `05-object-prototype-dasar.md`
  - prasyarat: topik 01 dan 03
  - membuka jalan ke: prototype chain lanjutan
- `06-async-javascript-dasar.md`
  - prasyarat: topik 03
  - membuka jalan ke: promise/async-await lanjutan

## Prasyarat Per Topik (Advanced)
- `01-closure-patterns.md`
  - prasyarat: foundations topik 03
  - membuka jalan ke: pola stateful utility dan module
- `02-this-binding-lanjutan.md`
  - prasyarat: advanced topik 01 + foundations topik 04
  - membuka jalan ke: method borrowing dan callback context control
- `03-prototype-chain-lanjutan.md`
  - prasyarat: foundations topik 05
  - membuka jalan ke: desain inheritance berbasis delegasi yang aman
- `04-promise-async-await.md`
  - prasyarat: foundations topik 06
  - membuka jalan ke: orkestrasi async flow yang rapi dan efisien
- `05-error-handling-defensive-coding.md`
  - prasyarat: advanced topik 04
  - membuka jalan ke: desain alur error yang stabil dan mudah di-debug
- `06-module-organization-esm.md`
  - prasyarat: advanced topik 05
  - membuka jalan ke: transisi ke internals dengan boundary modul yang rapi

## Prasyarat Per Topik (Internals)
- `01-execution-context-lifecycle.md`
  - prasyarat: advanced topik 06 + foundations topik 02-03
  - membuka jalan ke: pemahaman mekanis call stack dan antrean event loop
- `02-call-stack-web-apis-queues.md`
  - prasyarat: internals topik 01 + foundations topik 06
  - membuka jalan ke: pembahasan event loop scheduling yang lebih detail
- `03-event-loop-detail.md`
  - prasyarat: internals topik 02 + advanced topik 04
  - membuka jalan ke: analisis urutan eksekusi async yang lebih presisi
- `04-scope-chain-lookup.md`
  - prasyarat: internals topik 01 + foundations topik 02
  - membuka jalan ke: pemahaman lookup property vs lookup identifier secara terpisah
- `05-prototype-chain-lookup.md`
  - prasyarat: internals topik 04 + advanced topik 03
  - membuka jalan ke: analisis lookup object dan persiapan topik memory lifecycle
- `06-memory-lifecycle-garbage-collection.md`
  - prasyarat: internals topik 05 + foundations topik 01 dan 03
  - membuka jalan ke: pemahaman performa memory dan pencegahan memory leak

## Kamus Bertahap (Pertama Muncul)
- `value`, `type`, `coercion`, `primitive`, `reference`: topik 01
- `scope`, `hoisting`, `TDZ`, `execution context`: topik 02
- `parameter`, `argument`, `closure`: topik 03
- `this`, `method call`, `explicit binding`: topik 04
- `property`, `method`, `prototype`, `prototype chain`: topik 05
- `call stack`, `task queue`, `microtask queue`, `event loop`: topik 06

## Kamus Bertahap (Advanced - Mulai)
- `factory function`, `encapsulation`, `data privacy`, `stale closure`: advanced topik 01
- `hard binding`, `soft binding`, `callback context loss`, `method borrowing`: advanced topik 02
- `shadowing`, `delegation`, `mutation risk`, `prototype pollution`: advanced topik 03
- `promise chaining`, `sequential await`, `parallel await`, `fail-fast`: advanced topik 04
- `error boundary`, `defensive coding`, `guard clause`, `fallback value`: advanced topik 05
- `ESM`, `named export`, `default export`, `side-effect import`: advanced topik 06

## Kamus Bertahap (Internals - Mulai)
- `execution context`, `creation phase`, `execution phase`, `lexical environment`: internals topik 01
- `stack frame`, `run-to-completion`, `Web APIs`, `queue handoff`: internals topik 02
- `tick`, `microtask starvation`, `render opportunity`, `scheduling fairness`: internals topik 03
- `identifier resolution`, `outer environment reference`, `shadowing lookup`, `unresolvable reference`: internals topik 04
- `[[Prototype]] slot`, `own property check`, `lookup miss`, `terminal null`: internals topik 05
- `allocation`, `reachability`, `mark-and-sweep`, `memory leak`: internals topik 06

## Aturan Penggunaan di Materi
- Setiap section `0) Prasyarat dan Kamus Mini` wajib menandai istilah dengan:
  - `[baru]` untuk istilah yang baru dikenalkan di topik itu
  - `[ulang]` untuk istilah review dari topik sebelumnya

## Dokumen Remedial Prasyarat
- [`prasyarat/console-dan-if-dasar.md`](./prasyarat/console-dan-if-dasar.md)
- [`prasyarat/variabel-dasar.md`](./prasyarat/variabel-dasar.md)
- [`prasyarat/function-dasar.md`](./prasyarat/function-dasar.md)
- [`prasyarat/object-dasar.md`](./prasyarat/object-dasar.md)
- [`prasyarat/promise-dasar.md`](./prasyarat/promise-dasar.md)
