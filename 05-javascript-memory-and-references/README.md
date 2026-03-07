# 05 - JavaScript Memory and References

Buku ini fokus memahami bagaimana data disimpan, direferensikan, dan berubah.

## Tujuan
- Memahami primitive vs reference values.
- Memahami mutation vs immutability.
- Memahami bug yang muncul karena shared references.
- Memahami memory lifecycle dan pola memory leak umum.

## Scope
- Primitive values
- Reference values
- Referential equality
- Mutation vs immutability
- Memory lifecycle
- Garbage collection (high-level)
- Leak patterns and cleanup strategy
- Copy strategies (shallow vs deep)
- WeakMap/WeakSet for ephemeral metadata cache

## Out of Scope
- VM internals detail.
- Low-level allocator implementation.

## Output
- Studi kasus bug reference/mutation + strategi perbaikan.

## Struktur Konten
- `topics/`: materi utama yang dipakai belajar.
- `docs/`: jalur belajar dan catatan pendukung.

## Visualisasi Konsep
- `assets/memory-lifecycle-gc-map.svg`: peta lifecycle memori dan reachability.
- `assets/primitive-vs-reference-map.svg`: peta copy by value vs copy by reference.
- `assets/mutation-vs-immutability-map.svg`: peta tradeoff mutasi vs update immutable.
- `assets/referential-equality-map.svg`: peta identity/reference pada `===`.
- `assets/memory-leak-patterns-cleanup-map.svg`: peta leak pattern dan cleanup checklist.
- `assets/copy-strategies-shallow-vs-deep-map.svg`: peta pilihan shallow vs deep copy.
- `assets/closure-retention-memory-traps-map.svg`: peta trap closure retention dan cleanup.
- `assets/weakmap-weakset-ephemeral-cache-map.svg`: peta kapan pakai WeakMap/WeakSet.

## Mulai Belajar
1. Buka `docs/learning-path.md`.
2. Ikuti urutan di `topics/README.md`.
3. Kembali ke buku 04 jika masih bingung sumber property/prototype behavior.

## Exit Criteria
- Bisa mengidentifikasi bug referensi pada object/array.
- Bisa memilih pendekatan immutable sederhana saat dibutuhkan.
- Bisa membaca indikasi memory leak dan menentukan cleanup yang tepat.
- Bisa memilih strategi copy shallow/deep secara sadar.
- Bisa memahami kapan WeakMap/WeakSet cocok dipakai.

