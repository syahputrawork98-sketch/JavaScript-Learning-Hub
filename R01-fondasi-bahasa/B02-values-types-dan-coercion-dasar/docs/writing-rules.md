# Aturan Penulisan Buku B02

Dokumen ini hanya menulis perbedaan dari aturan global root docs/writing-rules.md.

## Karakter Buku

- Gaya utama: tutorial konseptual bertahap.
- Porsi teori vs praktik: seimbang.
- Intensitas visual: medium, hanya saat membantu pemahaman.

## Override dari Aturan Global

- Fokus buku ini hanya pada domain Values, Types, dan Coercion Dasar.
- Bab harus ringkas dan menjaga satu tujuan utama per bab.
- Contoh kode diutamakan singkat dan runnable.
- Setiap chapter minimal memiliki satu analogi yang membantu pembaca membangun intuisi konsep.
- Pilihan section analogi bersifat fleksibel sesuai kebutuhan materi: `## Analogi Singkat`, `## Analogi`, atau keduanya.
- `## Analogi Singkat` dipakai untuk hook cepat dalam 1 paragraf pendek saat konsep cukup sederhana tetapi tetap butuh jembatan intuitif.
- `## Analogi` dipakai untuk penjelasan lebih dalam dengan format tiga poin yang konsisten: `Intuisi Singkat`, `Analogi`, dan `Batas Analogi`.
- Jika sebuah chapter memakai keduanya, letakkan `## Analogi Singkat` lebih dulu, lalu `## Analogi`, dan jaga keduanya tetap ringkas.
- Section analogi ditempatkan setelah `Checkpoint Cepat` dan sebelum `Ringkasan` agar alur baca tetap konsisten.
- Analogi membantu membangun intuisi, tetapi tidak boleh menggantikan definisi teknis atau menyesatkan perilaku JavaScript.

## Hal yang Tidak Berubah

- Semua kontrak global tetap berlaku kecuali yang dioverride eksplisit di atas.
