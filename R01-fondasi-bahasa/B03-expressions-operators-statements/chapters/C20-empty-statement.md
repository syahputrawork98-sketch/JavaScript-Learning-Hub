# C20 - [14.4] Empty Statement

## Tujuan

Bab ini bertujuan memahami empty statement (`;`) dan dampaknya pada flow.

## Kenapa Bab Ini Penting

Empty statement sering muncul tidak sengaja, terutama setelah `if` atau loop, dan bisa mengubah perilaku program.

## Konsep Inti

### 1. Empty Statement adalah Statement Valid

```js
;
```

### 2. Bug Klasik pada `if`

```js
if (isReady);
{
  runTask();
}
```

Blok di bawah tetap berjalan karena `if`-nya berakhir pada `;`.

### 3. Bisa Dipakai Sengaja (Jarang)

Pada beberapa loop low-level, empty body bisa disengaja, tapi perlu komentar.

### 4. Keterbacaan Prioritas

Empty statement tanpa alasan jelas biasanya anti-pattern.

## Praktik yang Direkomendasikan

- Hindari `;` berdiri sendiri kecuali benar-benar sengaja.
- Aktifkan lint rule untuk mendeteksi empty statement mencurigakan.
- Tulis komentar jika empty body memang intentional.

## Kesalahan Umum

- Menaruh `;` setelah kondisi `if`.
- Tidak sadar loop body kosong.
- Debugging lama karena bug satu karakter.

## Checkpoint Cepat

1. Kenapa `if (cond);` berbahaya?
2. Kapan empty statement masih bisa diterima?
3. Bagaimana mencegah bug ini di tim?

## Analogi Singkat

Empty statement itu seperti jeda resmi yang sah ditulis, tetapi tidak menambahkan tindakan baru. Karena tidak melakukan apa-apa, pemakaiannya harus hati-hati agar tidak membingungkan pembaca.

## Ringkasan

- Empty statement legal namun rawan bug.
- Banyak kasus muncul karena typo.
- Linting dan review detail sangat membantu.

## Visual Map

![C20 - [14.4] Empty Statement Map](../assets/C20-empty-statement-map.svg)

## Contoh Runnable

- Lihat contoh: ../examples/C20-empty-statement/example.js
- Panduan: ../examples/C20-empty-statement/README.md
