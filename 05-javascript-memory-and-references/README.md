# 05 - JavaScript Memory and References

Track ini fokus memahami bagaimana data disimpan, direferensikan, dan berubah.

## Tujuan
- Memahami primitive vs reference values.
- Memahami mutation vs immutability.
- Memahami bug yang muncul karena shared references.

## Scope
- Primitive values
- Reference values
- Referential equality
- Mutation vs immutability
- Garbage collection (high-level)

## Out of Scope
- VM internals detail.
- Low-level allocator implementation.

## Output
- Studi kasus bug reference/mutation + strategi perbaikan.

## Struktur Konten
- `topics/`: materi memory/reference hasil normalisasi awal.
- `migrated-from-02-first-principles/`: sumber migrasi tahap 1.

## Exit Criteria
- Bisa mengidentifikasi bug referensi pada object/array.
- Bisa memilih pendekatan immutable sederhana saat dibutuhkan.

## Status Migrasi
- `in_progress`
- Baseline memory lifecycle sudah masuk.
- Tahap berikutnya: tambah drill referential equality dan mutation pitfalls.
