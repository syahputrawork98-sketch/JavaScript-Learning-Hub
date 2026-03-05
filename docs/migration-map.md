# Migration Map (4 Track -> 7 Track)

Dokumen ini adalah peta resmi migrasi dari struktur lama (4 track) ke struktur baru (7 track).

## Tujuan Migrasi
- Memisahkan boundary konsep agar tiap track fokus.
- Menjaga link tetap valid selama perpindahan bertahap.
- Menghindari perpindahan massal yang berisiko chaos.

## Struktur Lama
- `01-javascript-tutorial/`
- `02-javascript-first-principles/`
- `03-javascript-advanced-patterns/`
- `04-javascript-exercises-katas/`

## Struktur Target (7 Root)
- `01-javascript-tutorial/`
- `02-javascript-runtime-first-principles/`
- `03-asynchronous-javascript-model/`
- `04-javascript-object-model/`
- `05-javascript-memory-and-references/`
- `06-javascript-runtime-exercises/`
- `07-javascript-specification-companion/`

## Mapping Utama
1. `01-javascript-tutorial/` (lama) -> `01-javascript-tutorial/` (tetap)
- Status: `migrated` (tidak dipindah).

2. `02-javascript-first-principles/` (lama) -> pecah ke:
- `02-javascript-runtime-first-principles/`
- `03-asynchronous-javascript-model/` (bagian async runtime)
- `04-javascript-object-model/` (bagian prototype/object mechanics)
- `05-javascript-memory-and-references/` (bagian memory/reference)
- Status: `in_progress`.
- Progres:
- Tahap 1 copy non-destruktif selesai ke folder `migrated-from-02-first-principles/` pada track 02/03/04/05.
- Masing-masing track sudah memiliki `README.md` index untuk daftar file migrasi tahap 1.
- Tahap 1b normalisasi awal selesai:
- Track 02 memiliki `topics/` dan `docs/` berbasis hasil copy.
- Track 03/04/05 memiliki `topics/` berbasis hasil copy.

3. `03-javascript-advanced-patterns/` (lama) -> pecah ke:
- `03-asynchronous-javascript-model/` (orchestration async yang fundamental)
- `04-javascript-object-model/` (composition/object design yang relevan)
- `06-javascript-runtime-exercises/` (case-driven drills/refactor exercises)
- Status: `migrated`.
- Progres:
- Sumber lama hanya berisi `README.md` dan sudah disalin ke:
- `03-asynchronous-javascript-model/migrated-from-03-advanced-patterns/README.original.md`
- `04-javascript-object-model/migrated-from-03-advanced-patterns/README.original.md`
- `06-javascript-runtime-exercises/migrated-from-03-advanced-patterns/README.original.md`

4. `04-javascript-exercises-katas/` (lama) -> `06-javascript-runtime-exercises/`
- Status: `migrated`.
- Progres:
- Baseline `README.md` dari track lama sudah dicopy ke `06-javascript-runtime-exercises/migrated-from-04-exercises-katas/README.original.md`.
- Struktur target `06-javascript-runtime-exercises/exercises/` sudah dibuat sebagai tempat paket drill.
- Paket drill awal sudah dibuat di:
- `06-javascript-runtime-exercises/exercises/01-closure-behavior-drills.md`
- `06-javascript-runtime-exercises/exercises/02-this-binding-edge-cases.md`
- `06-javascript-runtime-exercises/exercises/03-async-order-drills.md`
- `06-javascript-runtime-exercises/exercises/04-object-mutation-drills.md`

5. Track baru `07-javascript-specification-companion/`
- Sumber: baru, diisi dari nol dengan cross-reference ke materi track 01-06.
- Status: `planned`.

## Urutan Eksekusi Migrasi
1. Tetapkan arsitektur dan scope (selesai).
2. Buat folder target + README kerangka (selesai).
3. Migrasi konten `02-javascript-first-principles` ke track 02/03/04/05.
 - Status: in_progress (tahap 1 copy + normalisasi awal selesai, refinemen akhir belum).
4. Migrasi konten `04-javascript-exercises-katas` ke track 06.
 - Status: migrated (sumber lama hanya README + paket drill baseline sudah dibuat).
5. Seleksi konten `03-javascript-advanced-patterns`:
- Pindahkan yang fundamental ke track 03/04/06.
- Sisanya ditandai `deferred` sampai ada track lanjutan formal.
 - Status: migrated (sumber lama hanya README, artefak sudah dipetakan).
6. Mulai isi `07-javascript-specification-companion`.
 - Status: planned.
7. Hapus folder lama hanya setelah:
- semua link diperbarui,
- semua konten sudah dipetakan,
- dan checklist validasi lulus.

## Aturan Migrasi Wajib
- Setiap file yang dipindah harus dicatat di changelog terkait.
- Setiap pemindahan harus update link internal di commit yang sama.
- Gunakan catatan `migrated from: <path_lama>` di header dokumen target (sementara).
- Jangan pindah lebih dari satu domain konsep dalam satu commit besar.

## Checklist Validasi
- [x] Tidak ada broken links di root docs.
- [x] Semua track target punya scope dan exit criteria.
- [x] File kritikal dari track lama sudah punya lokasi target.
- [x] Status tiap mapping diperbarui (`planned` -> `in_progress` -> `migrated`).

## Status Ringkas Saat Ini
- `01-javascript-tutorial`: migrated (tetap).
- `02-javascript-first-principles` -> `02/03/04/05`: in_progress.
- `03-javascript-advanced-patterns` -> `03/04/06`: migrated.
- `04-javascript-exercises-katas` -> `06`: migrated.
- `07-javascript-specification-companion`: planned (belum berisi materi inti).
