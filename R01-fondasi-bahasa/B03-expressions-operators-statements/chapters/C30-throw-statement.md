# C30 - [14.14] throw Statement

## Tujuan

Bab ini bertujuan memahami `throw` untuk melempar error secara eksplisit saat kondisi tidak valid.

## Kenapa Bab Ini Penting

`throw` memungkinkan fungsi menghentikan alur normal saat invariant dilanggar.

Ini penting untuk defensive programming.

## Konsep Inti

### 1. `throw` Menghasilkan Abrupt Completion

```js
throw new Error('Invalid input');
```

### 2. Nilai yang Dilempar Bisa Apa Saja

Namun praktik terbaik: lempar `Error` object.

### 3. Integrasi dengan `try/catch`

Error yang dilempar bisa ditangkap oleh `catch` di call stack yang relevan.

### 4. Gunakan untuk Validasi Kontrak

`throw` cocok saat fungsi menerima input yang tidak dapat diproses.

## Praktik yang Direkomendasikan

- Lempar `Error` dengan pesan jelas.
- Validasi input di boundary function/public API.
- Hindari `throw` string mentah.

## Kesalahan Umum

- Melempar nilai non-Error tanpa struktur.
- Pesan error terlalu umum.
- Mengabaikan jalur penanganan error di caller.

## Checkpoint Cepat

1. Kenapa `throw new Error(...)` lebih baik dari `throw 'error'`?
2. Kapan `throw` tepat digunakan?
3. Apa hubungan `throw` dengan `try/catch`?

## Analogi Singkat

Throw itu seperti menyalakan alarm saat proses normal sudah tidak aman untuk diteruskan. Begitu dilempar, alur biasa berhenti dan program berpindah ke mekanisme penanganan error.

## Ringkasan

- `throw` menghentikan flow normal dan melempar sinyal error.
- Error object yang jelas mempercepat debugging.
- Penanganan `throw` harus dirancang end-to-end.

## Visual Map

![C30 - [14.14] throw Statement Map](../assets/C30-throw-statement-map.svg)

## Contoh Runnable

- Lihat contoh: ../examples/C30-throw-statement/example.js
- Panduan: ../examples/C30-throw-statement/README.md
