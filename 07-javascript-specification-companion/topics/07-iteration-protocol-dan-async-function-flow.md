# 07 - Iteration Protocol dan Async Function Flow

## Tujuan
Memetakan `for...of`, iterator protocol, dan alur `async` ke model formal.

## Fokus Istilah
- Iterator
- Iterable
- Iterator result object
- AsyncFunction

## Mapping ke Spec
- GetIterator: `https://tc39.es/ecma262/#sec-getiterator`
- IteratorNext: `https://tc39.es/ecma262/#sec-iteratornext`
- CreateIterResultObject: `https://tc39.es/ecma262/#sec-createiterresultobject`
- Async Function Objects: `https://tc39.es/ecma262/#sec-async-function-objects`

## Contoh Mapping Praktik
- `for...of` meminta method iterator dari object iterable.
- Setiap iterasi membaca object hasil `{ value, done }`.
- `async function` selalu mengembalikan Promise secara formal.

## Jebakan Umum
- Mengira semua object otomatis iterable.
- Menganggap `async` mengubah kode jadi sinkron, padahal tetap berbasis job queue.
