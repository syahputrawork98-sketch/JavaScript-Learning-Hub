# Topics Index - Buku 09

## Daftar Topik
1. `01-es-modules-fundamentals.md`
2. `02-module-graph-linking-dan-evaluation-order.md`
3. `03-live-bindings-dan-re-export-behavior.md`
4. `04-circular-dependencies-dan-mitigasi.md`
5. `05-dynamic-import-dan-code-splitting-konseptual.md`
6. `06-boundary-design-dan-public-api-modul.md`
7. `07-barrel-pattern-tradeoff-dan-anti-pattern.md`
8. `08-case-study-module-architecture-refactor.md`

## Learning Flow (Disarankan)
- `01-03`: fondasi model modul (graph, linking, evaluation, live binding).
- `04-05`: problem runtime dan strategi loading (cycle + dynamic import).
- `06-08`: desain arsitektur modul (boundary, barrel tradeoff, case study refactor).

## Cara Pakai Efektif
1. Ikuti urutan 01 -> 08 tanpa lompat pada pembacaan pertama.
2. Untuk tiap topik:
- prediksi output dulu,
- jalankan snippet,
- cocokkan dengan model dependency flow.
3. Catat istilah baru per topik di notebook singkat (3-5 poin saja).
4. Jika mentok di topik lanjut (06-08), ulangi topik 02 dan 04.

## Checklist Progress
- [ ] Bisa menggambar graph dependency sederhana (3-5 modul).
- [ ] Bisa membedakan linking vs evaluation dengan bahasa sendiri.
- [ ] Bisa mengenali gejala circular dependency di codebase.
- [ ] Bisa menentukan public API domain yang kecil dan stabil.
- [ ] Bisa menyusun rencana refactor modular bertahap berbasis metrik.

## Peta Kesulitan
- Mudah: `01`, `02`
- Menengah: `03`, `04`, `05`
- Menengah-lanjut: `06`, `07`
- Lanjut (integratif): `08`

## Sinyal Siap Lanjut ke Buku Lain
Kamu siap lanjut jika sudah bisa:
1. Menjelaskan urutan evaluasi modul pada skenario umum dan cycle.
2. Menentukan boundary domain tanpa membuka terlalu banyak internal export.
3. Menulis satu regression guard dependency untuk mencegah regress arsitektur.

## Rujukan Cepat
- Jalur belajar: [`../docs/learning-path.md`](../docs/learning-path.md)
- Prasyarat + kamus: [`../PRASYARAT-DAN-KAMUS-MINI.md`](../PRASYARAT-DAN-KAMUS-MINI.md)
- Ringkasan buku: [`../README.md`](../README.md)
