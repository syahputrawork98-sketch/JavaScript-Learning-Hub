# C16 - Class Definitions Runtime Pipeline

## Tujuan

Bab ini bertujuan memahami pipeline evaluasi class declaration dan expression.

## Kenapa Bab Ini Penting

Sesudah melihat jembatan dari static checks ke runtime, langkah berikutnya adalah membaca pipeline evaluasi class secara lebih utuh. Bab ini penting karena class tidak berperilaku seperti function declaration biasa: ada momen binding dibuat, body dievaluasi, dan hasil akhirnya baru bisa dipakai setelah seluruh definisi class selesai diproses.

## Konsep Inti

1. Class declaration membuat binding yang baru benar-benar aman dipakai setelah evaluasi class selesai.
2. Class expression dievaluasi di tempat ekspresi itu muncul, sehingga timing pembentukannya lebih eksplisit.
3. Constructor, methods, fields, dan inheritance dipasang sebagai bagian dari pipeline pembentukan class, bukan saat instance pertama dibuat.

## Analogi

- Intuisi Singkat: Runtime pipeline class menjelaskan kapan binding, methods, fields, dan inheritance dibentuk.
- Analogi: Seperti mesin produksi yang harus dirakit penuh sebelum boleh dinyalakan operator.
- Batas Analogi: Class tidak siap dipakai hanya karena namanya sudah terlihat; pipeline pembentukannya harus selesai dulu.

## Praktik yang Direkomendasikan

- Amati urutan evaluasi dengan `console.log` kecil di sekitar deklarasi class.
- Bedakan waktu pembentukan class dari waktu pembuatan instance.
- Saat membandingkan declaration dan expression, lihat kapan nama class tersedia dan di scope mana.

## Kesalahan Umum

- Mengira class declaration bisa dipakai sebelum deklarasinya seperti function declaration.
- Mengira field initializer baru dijalankan saat method dipanggil.
- Sulit membedakan binding luar class expression dengan nama internal class expression.

## Checkpoint Cepat

1. Kenapa akses class sebelum deklarasi menghasilkan error?
2. Apa perbedaan timing evaluasi class declaration dan class expression?
3. Kapan field initializer instance dijalankan dalam pipeline runtime class?

## Ringkasan

- Runtime pipeline class menentukan kapan binding, inheritance, methods, dan fields benar-benar dibentuk.
- Class declaration dan class expression sama-sama membangun class object, tetapi titik evaluasinya berbeda.
- Dasar ini menyiapkan pembaca untuk topik async function dan evaluasi runtime berikutnya.

## Spec Coverage

Bab ini terutama selaras dengan section ECMAScript berikut:

- `15.7.12`
- `15.7.13`
- `15.7.14`
- `15.7.15`
- `15.7.16`

Referensi mapping penuh: `../docs/spec-mapping-70.md`.

## Visual Map

![C16 Class Definitions Runtime Pipeline Map](../assets/C16-class-definitions-runtime-pipeline-map.svg)

## Contoh Runnable

- Lihat contoh: `../examples/C16-class-definitions-runtime-pipeline/example.js`
- Lihat contoh tambahan: `../examples/C16-class-definitions-runtime-pipeline/example-02.js`
- Lihat contoh tambahan: `../examples/C16-class-definitions-runtime-pipeline/example-03.js`
- Panduan: `../examples/C16-class-definitions-runtime-pipeline/README.md`
