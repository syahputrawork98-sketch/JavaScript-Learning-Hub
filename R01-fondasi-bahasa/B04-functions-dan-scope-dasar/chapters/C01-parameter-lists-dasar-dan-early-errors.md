# C01 - Parameter Lists Dasar dan Early Errors

## Tujuan

Bab ini bertujuan memahami fondasi parameter list dan validasi awal deklaratif.

## Kenapa Bab Ini Penting

Semua bentuk function di JavaScript diawali dari parameter list. Jika dasar ini tidak solid, bug pada default value, rest parameter, atau destructuring akan muncul di bab-bab berikutnya.

## Konsep Inti

1. Parameter list adalah bagian kontrak input function.
2. Tidak semua bentuk parameter legal; ada validasi sintaks (early errors).
3. Bentuk parameter memengaruhi keterbacaan dan behavior saat function dipanggil.

## Analogi

- Intuisi Singkat: Parameter list adalah kontrak input yang harus valid sejak awal.
- Analogi: Seperti formulir pendaftaran: kolomnya harus disusun benar sebelum petugas mau memproses isinya.
- Batas Analogi: Jika format parameter salah, JavaScript bisa menolaknya sebagai early error bahkan sebelum runtime berjalan.

## Praktik yang Direkomendasikan

- Mulai dari parameter sederhana, lalu naik ke destructuring dan rest parameter.
- Uji perilaku dengan input normal dan input edge case (`undefined`, argumen berlebih, argumen kurang).
- Saat mengeksplorasi aturan sintaks, gunakan snippet kecil agar pesan error mudah dipahami.

## Kesalahan Umum

- Mengira parameter duplicate selalu aman di semua konteks.
- Menganggap rest parameter boleh diletakkan di tengah daftar parameter.
- Mencampur terlalu banyak teknik parameter dalam satu function sehingga sulit dibaca.

## Checkpoint Cepat

1. Kapan sebuah bentuk parameter dianggap tidak valid sebelum program dijalankan?
2. Kenapa rest parameter harus berada di posisi terakhir?
3. Apa beda tujuan parameter biasa, destructuring parameter, dan rest parameter?

## Ringkasan

- Parameter list adalah fondasi kontrak input untuk function.
- Beberapa kesalahan terdeteksi sebagai early errors sebelum runtime berjalan.
- Menjaga parameter tetap jelas dan minimal akan memudahkan debugging bab berikutnya.

## Spec Coverage

Bab ini terutama selaras dengan section ECMAScript berikut:

- `15.1`
- `15.1.1`
- `15.1.2`

Referensi mapping penuh: `../docs/spec-mapping-70.md`.

## Visual Map

![C01 Parameter Lists Dasar dan Early Errors Map](../assets/C01-parameter-lists-dasar-dan-early-errors-map.svg)

## Contoh Runnable

- Lihat contoh: `../examples/C01-parameter-lists-dasar-dan-early-errors/example.js`
- Lihat contoh tambahan: `../examples/C01-parameter-lists-dasar-dan-early-errors/example-02.js`
- Lihat contoh tambahan: `../examples/C01-parameter-lists-dasar-dan-early-errors/example-03.js`
- Panduan: `../examples/C01-parameter-lists-dasar-dan-early-errors/README.md`
