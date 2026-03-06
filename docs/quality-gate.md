# Quality Gate - Docs Lintas Track

Gunakan checklist ini sebelum review akhir atau commit perubahan yang menyentuh lebih dari satu track.

## Struktur Minimum per Track
- [ ] `README.md` ada dan mencerminkan status aktual track.
- [ ] `PRASYARAT-DAN-KAMUS-MINI.md` ada untuk track yang sudah dinormalkan penuh.
- [ ] `docs/learning-path.md` ada dan urutannya sinkron dengan konten aktif.
- [ ] Folder materi utama (`topics/` atau `exercises/`) punya index `README.md`.
- [ ] `CHANGELOG.md` ada dan entry terbaru mencatat perubahan nyata.

## Konsistensi Konten
- [ ] Scope di track README sinkron dengan daftar topik/latihan aktif.
- [ ] Exit criteria bersifat verifiable, bukan kalimat abstrak.
- [ ] Referensi cross-track mengarah ke path yang benar.
- [ ] Istilah kunci konsisten (`runtime`, `microtask`, `reference`, `spec`, dll).

## Validasi Teknis
- [ ] Link markdown lokal valid (tidak ada broken path).
- [ ] Aset visual (`.svg`) valid XML parse.
- [ ] Tidak ada artefak migrasi sementara yang tertinggal di track aktif.

## Changelog dan Versioning
- [ ] Entry changelog memakai tanggal absolut (`YYYY-MM-DD`).
- [ ] Kategori perubahan jelas (`Added`, `Changed`, `Removed`, `Validation`, `Notes`).
- [ ] Versi naik sesuai skala perubahan (minor patch vs penambahan struktur besar).

## Gate Lulus
- [ ] Semua item wajib tercentang sebelum minta review final/siap commit.

## Catatan Adopsi Bertahap
- Untuk track legacy yang belum dinormalkan penuh, tandai item yang belum berlaku sebagai `N/A` dengan alasan singkat.
