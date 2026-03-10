# Aturan Penulisan Global v2

Dokumen ini adalah baseline penulisan untuk semua buku di v2.

## Kontrak Global (Wajib)

- Materi harus tetap fokus pada JavaScript (bahasa, runtime, object model, memory, async, modules, engine).
- Terminologi teknis harus presisi dan konsisten.
- Contoh kode harus kecil, fokus, dan dapat dijalankan.
- Penjelasan harus menjawab "apa", "bagaimana", dan "kenapa".
- Setiap bab harus memiliki tujuan belajar yang jelas.
- Jika memakai visual (gambar/SVG), visual harus menjelaskan konsep, bukan dekorasi.

## Struktur Minimum Bab (Wajib)

Setiap bab minimal memuat:

1. tujuan pembelajaran
2. penjelasan konsep inti
3. contoh kode
4. ringkasan singkat
5. latihan atau checkpoint pemahaman

Nama heading boleh berbeda, tetapi fungsi tiap bagian harus tetap ada.

## Bagian yang Boleh Di-Custom per Buku

Setiap buku boleh mengubah:

- proporsi teori vs praktik
- gaya narasi (ringkas, eksploratif, atau studi kasus)
- jumlah visual (sedikit atau banyak)
- bentuk latihan (drill, mini challenge, debugging task)

Namun custom tidak boleh melanggar kontrak global.

## Mekanisme Override

- Aturan khusus buku ditulis di `<book>/docs/writing-rules.md`.
- Aturan di buku hanya berisi perbedaan dari baseline global.
- Jika tidak disebut override, aturan global tetap berlaku.

## Hal yang Perlu Dihindari

- pembahasan framework sebagai topik utama
- contoh kode besar yang mengaburkan konsep
- analogi yang menghasilkan mental model salah
- istilah populer yang tidak presisi tanpa klarifikasi
