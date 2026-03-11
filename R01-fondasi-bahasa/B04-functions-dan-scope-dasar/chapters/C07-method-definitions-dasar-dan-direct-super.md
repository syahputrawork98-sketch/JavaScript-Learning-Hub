# C07 - Method Definitions Dasar dan Direct Super

## Tujuan

Bab ini bertujuan memahami method definition serta relasi super dasar.

## Kenapa Bab Ini Penting

Method definitions adalah jembatan antara function biasa dan object-oriented behavior. Memahami `super` dari level method akan memudahkan saat masuk class pipeline di bab berikutnya.

## Konsep Inti

1. Method di object literal memiliki sintaks ringkas dan berbeda dari property function biasa.
2. Method dapat memakai `super` jika berada pada konteks yang memiliki `[[HomeObject]]`.
3. Pemakaian `super` terutama relevan untuk delegasi ke prototype parent.

## Analogi

- Intuisi Singkat: Method definition membentuk perilaku method yang menempel pada object/class dengan aturan khusus.
- Analogi: Seperti tombol bawaan pada mesin yang terpasang langsung di panel utama.
- Batas Analogi: Method punya semantik yang berbeda dari sekadar menyimpan function ke properti biasa.

## Praktik yang Direkomendasikan

- Gunakan method shorthand untuk method object agar intent lebih jelas.
- Pakai `super` saat memang butuh delegasi behavior, bukan sekadar menyalin kode parent.
- Pisahkan data property dan method agar struktur object mudah dibaca.

## Kesalahan Umum

- Mengira semua function di property object otomatis setara method dari sisi `super`.
- Menggunakan `super` di konteks yang tidak valid.
- Terlalu banyak logic dalam satu method tanpa pemecahan fungsi bantu.

## Checkpoint Cepat

1. Apa perbedaan method shorthand dan property function biasa?
2. Kapan `super` valid dipakai dalam method?
3. Kenapa konsep `[[HomeObject]]` penting untuk memahami `super`?

## Ringkasan

- Method definitions punya karakter sintaks dan semantik khusus.
- `super` bekerja lewat relasi prototype dan konteks method.
- Dasar ini penting sebelum masuk evaluasi method dan class definitions.

## Spec Coverage

Bab ini terutama selaras dengan section ECMAScript berikut:

- `15.4`
- `15.4.1`
- `15.4.2`

Referensi mapping penuh: `../docs/spec-mapping-70.md`.

## Visual Map

![C07 Method Definitions Dasar dan Direct Super Map](../assets/C07-method-definitions-dasar-dan-direct-super-map.svg)

## Contoh Runnable

- Lihat contoh: `../examples/C07-method-definitions-dasar-dan-direct-super/example.js`
- Lihat contoh tambahan: `../examples/C07-method-definitions-dasar-dan-direct-super/example-02.js`
- Lihat contoh tambahan: `../examples/C07-method-definitions-dasar-dan-direct-super/example-03.js`
- Panduan: `../examples/C07-method-definitions-dasar-dan-direct-super/README.md`
