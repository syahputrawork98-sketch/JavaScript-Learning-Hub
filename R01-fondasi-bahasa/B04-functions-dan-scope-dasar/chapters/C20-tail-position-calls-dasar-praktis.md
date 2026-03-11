# C20 - Tail Position Calls Dasar Praktis

## Tujuan

Bab ini bertujuan memahami tail position calls dan implikasi praktisnya.

## Kenapa Bab Ini Penting

Tail position calls adalah topik yang sering muncul saat membahas struktur evaluasi function, meskipun dukungan optimasinya tidak selalu terlihat di engine JavaScript modern. Bab ini penting karena membantu pembaca membedakan antara pemanggilan biasa dan pemanggilan yang terjadi di posisi akhir evaluasi.

## Konsep Inti

1. Tail position terjadi ketika hasil pemanggilan function langsung menjadi hasil akhir dari expression atau return.
2. Tidak semua pemanggilan di akhir baris otomatis berada pada tail position.
3. Walau optimasi tidak selalu diaktifkan engine, cara berpikir tail position tetap berguna untuk membaca struktur fungsi rekursif dan alur return.

## Analogi

- Intuisi Singkat: Tail position calls membahas posisi pemanggilan yang secara teori bisa dioptimalkan.
- Analogi: Seperti menyerahkan tugas terakhir langsung ke petugas berikut tanpa kembali menumpuk pekerjaan lama.
- Batas Analogi: Di praktik JavaScript modern, konsep ini penting dipahami, tetapi dukungan optimasinya terbatas di banyak engine.

## Praktik yang Direkomendasikan

- Fokus dulu mengenali bentuk tail position sebelum membahas optimasi engine.
- Bandingkan contoh `return fn(x)` dengan `return fn(x) + 1` agar bedanya jelas.
- Gunakan contoh kecil dan eksplisit karena topik ini mudah kabur jika terlalu abstrak.

## Kesalahan Umum

- Mengira semua `return fn()` otomatis setara dengan optimasi tail call di runtime.
- Tidak membedakan call yang masih dipakai untuk operasi lanjutan setelahnya.
- Membahas optimasi engine dulu sebelum memahami posisi evaluasinya.

## Checkpoint Cepat

1. Kapan sebuah function call berada pada tail position?
2. Kenapa `return fn(x) + 1` bukan tail position call?
3. Apa manfaat praktis memahami tail position meski engine tidak selalu mengoptimalkannya?

## Ringkasan

- Tail position calls membantu kita membaca bentuk akhir evaluasi return dengan lebih presisi.
- Konsep ini lebih penting sebagai alat berpikir daripada janji optimasi otomatis.
- Bab ini menutup jalur B04 dengan menegaskan kembali hubungan antara bentuk fungsi dan perilaku evaluasinya.

## Spec Coverage

Bab ini terutama selaras dengan section ECMAScript berikut:

- `15.10`
- `15.10.1`
- `15.10.2`
- `15.10.3`

Referensi mapping penuh: `../docs/spec-mapping-70.md`.

## Visual Map

![C20 Tail Position Calls Dasar Praktis Map](../assets/C20-tail-position-calls-dasar-praktis-map.svg)

## Contoh Runnable

- Lihat contoh: `../examples/C20-tail-position-calls-dasar-praktis/example.js`
- Lihat contoh tambahan: `../examples/C20-tail-position-calls-dasar-praktis/example-02.js`
- Lihat contoh tambahan: `../examples/C20-tail-position-calls-dasar-praktis/example-03.js`
- Panduan: `../examples/C20-tail-position-calls-dasar-praktis/README.md`
