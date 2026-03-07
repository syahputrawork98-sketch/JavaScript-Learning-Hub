# Changelog - 05 JavaScript Memory and References

## 2026-03-06 - v0.2.0

### Added
- Menambahkan dokumen prasyarat aktif:
- `PRASYARAT-DAN-KAMUS-MINI.md`
- Menambahkan dokumen learning path:
- `docs/learning-path.md`
- Menambahkan topik baru:
- `topics/02-primitive-vs-reference-behavior.md`
- `topics/03-mutation-vs-immutability.md`
- `topics/04-referential-equality.md`
- `topics/05-memory-leak-patterns-dan-cleanup.md`
- `topics/06-copy-strategies-shallow-vs-deep.md`
- `topics/07-closure-retention-dan-memory-traps.md`
- `topics/08-weakmap-weakset-dan-ephemeral-cache.md`
- Menambahkan folder visualisasi:
- `assets/`
- Menambahkan aset SVG:
- `assets/memory-lifecycle-gc-map.svg`
- `assets/primitive-vs-reference-map.svg`
- `assets/mutation-vs-immutability-map.svg`
- `assets/referential-equality-map.svg`
- `assets/memory-leak-patterns-cleanup-map.svg`
- `assets/copy-strategies-shallow-vs-deep-map.svg`
- `assets/closure-retention-memory-traps-map.svg`
- `assets/weakmap-weakset-ephemeral-cache-map.svg`

### Changed
- Menormalkan `README.md` buku 05 agar `topics/` + `docs/` menjadi rute belajar utama.
- Menormalkan urutan topik aktif menjadi 8 topik dari memory lifecycle hingga WeakMap/WeakSet.
- Memperbarui referensi prasyarat/remedial/cross-buku pada topik `01` sampai `08`.
- Menambahkan referensi visual map pada topik `01` sampai `08`.
- Menyelaraskan index topik dan learning path agar konsisten dengan 8 topik aktif.

### Removed
- Menghapus artefak migrasi sementara:
- `migrated-from-02-first-principles/`

### Validation
- Link lokal area aktif buku 05 (`README + PRASYARAT + docs + topics`) telah diverifikasi dan valid.
- Seluruh aset SVG buku 05 telah divalidasi XML parse dan valid.

### Notes
- Buku 05 siap dipakai sebagai rute belajar memory/reference lengkap sebelum lanjut ke latihan lintas buku.

