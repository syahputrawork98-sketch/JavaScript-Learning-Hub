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

## Workflow Baca (Topik Ini)
1. Baca alur `GetIterator` untuk memahami syarat iterable.
2. Telusuri langkah `IteratorNext` dan bentuk hasil `{ value, done }`.
3. Baca model `AsyncFunction` yang selalu menghasilkan Promise.
4. Validasi dengan snippet `for...of` dan `async function`.

## Contoh Mapping Praktik
- `for...of` meminta method iterator dari object iterable.
- Setiap iterasi membaca object hasil `{ value, done }`.
- `async function` selalu mengembalikan Promise secara formal.

## Mini Mapping Contoh
```js
const data = [10, 20];
for (const n of data) {
  console.log(n);
}

async function f() {
  return 42;
}

f().then(console.log);
```
Cara baca:
1. Peta `for...of` ke protocol iterator (`GetIterator` + `IteratorNext`).
2. Peta `async function` ke Promise return formal.
3. Verifikasi output runtime.

## Checkpoint
- [ ] Bisa menjelaskan kenapa object tertentu iterable dan yang lain tidak.
- [ ] Bisa menjelaskan bentuk iterator result object.
- [ ] Bisa menjelaskan kenapa `async function` tetap menghasilkan Promise.

## Jebakan Umum
- Mengira semua object otomatis iterable.
- Menganggap `async` mengubah kode jadi sinkron, padahal tetap berbasis job queue.
