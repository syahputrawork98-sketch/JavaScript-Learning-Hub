# Example C09

Contoh runnable untuk bab **C09 - Mutable vs Non-Mutable Operation Dasar**.

## Tujuan Example

Folder ini membantu pembaca membedakan operasi yang mengubah array asli dan operasi yang menghasilkan array baru, termasuk pola sederhana untuk menyalin data sebelum diubah.

## Daftar File

- `example.js` menunjukkan operasi mutable dengan `push()`.
- `example-02.js` menunjukkan operasi non-mutable dengan `map()`.
- `example-03.js` menunjukkan penyalinan array dengan `slice()` sebelum dimodifikasi.

## Penjelasan Per File

### `example.js`

Contoh paling langsungnya:

```js
fruits.push('mango');
```

Setelah `push()` dipanggil, array `fruits` yang sama berubah isi. Ini adalah contoh klasik operasi mutable.

### `example-02.js`

Perbandingan pentingnya:

```js
const doubled = numbers.map((number) => number * 2);
```

`map()` tidak menyentuh `numbers` asli. Ia membentuk array hasil baru, sehingga input dan output bisa hidup berdampingan tanpa saling menimpa.

### `example-03.js`

File ini menunjukkan pola aman:

```js
const copied = original.slice();
copied.push('d');
```

`slice()` tanpa argumen sering dipakai untuk membuat shallow copy array. Setelah itu perubahan dilakukan pada salinan, bukan pada data awal.

## Catatan Belajar

- Memahami mutable vs non-mutable penting untuk debugging data yang berubah diam-diam.
- Menyalin array sebelum mutasi adalah kebiasaan baik saat data asli masih perlu dipertahankan.
- `slice()` di sini menghasilkan shallow copy, jadi hanya aman untuk kebutuhan dasar sesuai contoh.

## Cara Menjalankan

```bash
node example.js
node example-02.js
node example-03.js
```
