# Example C24

Contoh runnable untuk bab **C24 - continue Statement**.

## Tujuan Example

Folder ini menunjukkan cara `continue` melewati sisa iterasi ketika kondisi tertentu terpenuhi.

## Daftar File

- `example.js` menunjukkan `continue` pada `for` dan `while`.
- `example-02.js` fokus pada `continue` di `for` loop.
- `example-03.js` menunjukkan `continue` di `while` dengan update counter yang tetap aman.

## Penjelasan Per File

### `example.js`

Contoh utama ini menunjukkan dua konteks:

- `for` loop yang melewati bilangan ganjil
- `while` loop yang melewati nilai tertentu

Poin pentingnya adalah `continue` tidak menghentikan loop, hanya melewati sisa body iterasi saat ini.

### `example-02.js`

File ini memperkuat pola paling sederhana:

```js
if (i % 2) continue;
```

Tujuannya agar pembaca melihat `continue` sebagai alat untuk memfilter jalur iterasi secara cepat.

### `example-03.js`

Contoh ini penting karena memakai `while`:

```js
n++;
if (n === 2) continue;
```

Urutan update state sebelum `continue` sangat penting. Jika salah tempat, loop seperti ini bisa menjadi sulit dipahami atau bahkan bermasalah.

## Catatan Belajar

- `continue` berguna untuk skip cepat tanpa membungkus seluruh sisa body dalam `if`.
- Pada `while`, selalu pastikan state yang mengontrol loop tetap bergerak.
- Jika pembaca merasa flow-nya kabur, tambah komentar singkat atau pecah logika ke fungsi kecil.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
