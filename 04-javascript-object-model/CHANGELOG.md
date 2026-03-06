# Changelog - 04 JavaScript Object Model

## 2026-03-06 - v0.3.0

### Added
- Menambahkan topik baru:
- `topics/07-object-create-dan-delegation-patterns.md`
- `topics/08-property-descriptors-lanjutan-dan-defineproperty.md`
- `topics/09-internal-methods-get-set-dan-defineownproperty.md`
- `topics/10-this-method-dispatch-dan-object-context.md`
- `topics/11-built-in-objects-dan-behavior-khusus.md`
- `topics/12-proxy-reflect-dasar-dan-metaprogramming.md`

### Changed
- Menormalkan urutan topik aktif track 04 dari 6 menjadi 12 topik.
- Memperbarui `README.md` agar scope mencakup object model lanjutan hingga metaprogramming dasar.
- Memperbarui `topics/README.md` dan `docs/learning-path.md` agar sinkron dengan 12 topik aktif.
- Menyelaraskan alur transisi topik `06` agar lanjut ke topik `07`.

### Validation
- Link lokal area aktif track 04 (`README + PRASYARAT + docs + topics`) telah diverifikasi dan valid.

### Notes
- Track 04 sekarang mencakup object model dari fondasi prototype sampai Proxy/Reflect dasar sebelum lanjut ke track 05.

## 2026-03-06 - v0.2.0

### Added
- Menambahkan dokumen prasyarat aktif:
- `PRASYARAT-DAN-KAMUS-MINI.md`
- Menambahkan dokumen learning path:
- `docs/learning-path.md`
- Menambahkan topik baru:
- `topics/04-property-descriptors-dasar.md`
- `topics/05-class-constructor-dan-new.md`
- `topics/06-composition-vs-inheritance.md`
- Menambahkan folder visualisasi:
- `assets/`
- Menambahkan aset SVG:
- `assets/object-prototype-basics-map.svg`
- `assets/prototype-chain-advanced-map.svg`
- `assets/prototype-chain-lookup-map.svg`
- `assets/property-descriptor-map.svg`
- `assets/class-constructor-new-map.svg`
- `assets/composition-vs-inheritance-map.svg`

### Changed
- Menormalkan `README.md` track 04 agar `topics/` + `docs/` menjadi rute belajar utama.
- Menormalkan urutan topik aktif menjadi 6 topik:
- `01-object-prototype-dasar.md`
- `02-prototype-chain-lanjutan.md`
- `03-prototype-chain-lookup.md`
- `04-property-descriptors-dasar.md`
- `05-class-constructor-dan-new.md`
- `06-composition-vs-inheritance.md`
- Memperbarui referensi prasyarat/remedial/cross-track pada topik `01` sampai `06`.
- Menambahkan referensi visual map pada topik `01` sampai `06`.
- Menyelaraskan index topik dan learning path agar konsisten dengan 6 topik aktif.

### Removed
- Menghapus artefak migrasi sementara:
- `migrated-from-02-first-principles/`
- `migrated-from-03-advanced-patterns/`

### Validation
- Link lokal area aktif track 04 (`README + PRASYARAT + docs + topics`) telah diverifikasi dan valid.
- Seluruh aset SVG track 04 telah divalidasi XML parse dan valid.

### Notes
- Track 04 siap dipakai sebagai rute belajar object model sebelum lanjut ke track 05.
