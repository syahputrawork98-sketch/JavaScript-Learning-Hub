# Aturan Kontribusi v2

Dokumen ini mengatur cara menambah, mengubah, dan merapikan isi repository v2.

## Prinsip Utama

- Perubahan harus memperjelas struktur perpustakaan atau meningkatkan kualitas materi buku.
- Scope perubahan harus jelas: root, rak, atau buku.
- Hindari perubahan besar yang mencampur banyak scope sekaligus.

## Aturan Penempatan

- Aturan global ada di root `docs/`.
- Aturan rak ada di `<rack>/docs/`.
- Aturan buku ada di `<rack>/<book>/docs/`.
- Materi bab ada di folder buku, bukan di `docs/`.

## Aturan Changelog

- Setiap perubahan materi buku harus dicatat di `<book>/CHANGELOG.md`.
- Tidak ada changelog pada root dan rak.
- Perubahan aturan global cukup dicatat pada commit/PR, bukan file changelog terpisah.

## Menambah Buku Baru

Saat membuat buku baru, minimum siapkan:

1. `README.md`
2. `CHANGELOG.md`
3. `docs/README.md`
4. `docs/writing-rules.md` (jika perlu override)
5. folder konten bab (`chapters/` atau `topics/`)

## Revisi Materi Buku

Saat revisi bab:

1. perbaiki akurasi konsep
2. perjelas contoh dan alur penjelasan
3. sinkronkan visual jika ada
4. update `CHANGELOG.md` buku tersebut

## Kriteria Kualitas Minimum

- tidak ada miskonsepsi teknis yang jelas
- istilah konsisten di dalam satu buku
- referensi silang antar bab tidak rusak
- struktur heading tetap mudah dipindai
