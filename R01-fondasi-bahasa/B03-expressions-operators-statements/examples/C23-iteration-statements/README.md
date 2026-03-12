# Example C23

Contoh runnable untuk bab **C23 - Iteration Statements**.

## Tujuan Example

Folder ini memperlihatkan berbagai bentuk loop dasar di JavaScript dan kapan masing-masing terasa paling alami dipakai.

## Daftar File

- `example.js` merangkum `for`, `while`, `do...while`, `for...of`, dan `for...in`.
- `example-02.js` fokus pada `while` dan `do...while`.
- `example-03.js` membandingkan `for...of` dan `for...in`.

## Penjelasan Per File

### `example.js`

File utama ini mengumpulkan banyak jenis iterasi dalam satu tempat agar pembaca bisa melihat bedanya langsung:

- `for` untuk pola hitung yang jelas
- `while` untuk perulangan berbasis kondisi
- `do...while` untuk kasus yang harus jalan minimal sekali
- `for...of` untuk nilai iterable
- `for...in` untuk key enumerable

Contoh ini cocok sebagai peta cepat sebelum mempelajari masing-masing gaya secara lebih detail.

### `example-02.js`

File ini memperkuat perbandingan `while` dan `do...while`. Tujuannya adalah memperjelas beda timing pengecekan kondisi:

- `while` cek dulu, baru jalan
- `do...while` jalan dulu, baru cek

### `example-03.js`

Contoh ini penting karena banyak pemula mencampur:

```js
for (const v of arr)
for (const k in arr)
```

`for...of` membaca nilai, sedangkan `for...in` membaca index/key.

## Catatan Belajar

- Jangan hanya hafal nama loop; pahami juga data apa yang dibaca tiap loop.
- `for...of` biasanya lebih cocok untuk array dibanding `for...in`.
- `do...while` layak diingat karena perilakunya berbeda jelas dari `while`.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
