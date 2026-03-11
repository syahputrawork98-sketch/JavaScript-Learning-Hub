# Aturan Penulisan Buku B04

Dokumen ini hanya menulis perbedaan dari aturan global root docs/writing-rules.md.

## Karakter Buku

- Gaya utama: tutorial konseptual bertahap.
- Porsi teori vs praktik: seimbang.
- Intensitas visual: medium, hanya saat membantu pemahaman.

## Override dari Aturan Global

- Fokus buku ini hanya pada domain Functions dan Scope Dasar.
- Bab harus ringkas dan menjaga satu tujuan utama per bab.
- Contoh kode diutamakan singkat dan runnable.
- Gunakan bahasa Indonesia sebagai default, lalu pertahankan istilah teknis Inggris hanya saat lebih presisi atau sudah menjadi istilah domain yang mapan.
- Pilih padanan Indonesia untuk istilah umum seperti `syntax -> sintaks` dan `evaluation -> evaluasi`, kecuali saat sedang mengutip nama section spec.
- Nama file, judul asset, dan label spec boleh tetap mengikuti istilah source agar mapping ke referensi teknis tetap jelas.
- Setiap chapter minimal memiliki satu analogi yang membantu pembaca membangun intuisi konsep.
- Pilihan section analogi bersifat fleksibel sesuai kebutuhan materi: `## Analogi Singkat`, `## Analogi`, atau keduanya.
- `## Analogi Singkat` dipakai untuk hook cepat dalam 1 paragraf pendek saat konsep cukup sederhana tetapi tetap butuh jembatan intuitif.
- `## Analogi` dipakai untuk penjelasan lebih dalam dengan format tiga poin yang konsisten: `Intuisi Singkat`, `Analogi`, dan `Batas Analogi`.
- Jika sebuah chapter memakai keduanya, letakkan `## Analogi Singkat` lebih dulu, lalu `## Analogi`, dan jaga keduanya tetap ringkas.
- Section analogi ditempatkan setelah `Checkpoint Cepat` dan sebelum `Ringkasan` agar alur baca tetap konsisten.
- Analogi membantu membangun intuisi, tetapi tidak boleh menggantikan definisi teknis atau menyesatkan perilaku sebenarnya.

## Hal yang Tidak Berubah

- Semua kontrak global tetap berlaku kecuali yang dioverride eksplisit di atas.
