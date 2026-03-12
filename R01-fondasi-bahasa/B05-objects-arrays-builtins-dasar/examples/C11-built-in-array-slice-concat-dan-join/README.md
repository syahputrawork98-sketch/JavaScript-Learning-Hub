# Example C11

Contoh runnable untuk bab **C11 - Built-in Array `slice`, `concat`, dan `join`**.

## Tujuan Example

Folder ini menunjukkan built-in array yang umum dipakai untuk mengambil sebagian data, menggabungkan array, dan mengubah array menjadi string tanpa mengubah array asal.

## Daftar File

- `example.js` menunjukkan pengambilan sebagian array dengan `slice()`.
- `example-02.js` menunjukkan penggabungan array dengan `concat()`.
- `example-03.js` menunjukkan pengubahan array menjadi string dengan `join()`.

## Penjelasan Per File

### `example.js`

Contoh utamanya:

```js
const selected = fruits.slice(1, 3);
```

`slice(1, 3)` mengambil elemen dari index `1` sampai sebelum `3`. Hasilnya array baru, jadi `fruits` asli tetap utuh.

### `example-02.js`

Pola dasarnya:

```js
const combined = first.concat(second);
```

`concat()` membentuk array baru yang berisi gabungan dua array. Method ini berguna saat ingin menyatukan data tanpa memodifikasi sumber aslinya.

### `example-03.js`

File ini menyorot:

```js
const text = tags.join(', ');
```

`join()` mengubah seluruh elemen array menjadi satu string dengan separator tertentu. Ini sering dipakai saat data array perlu ditampilkan sebagai teks yang mudah dibaca manusia.

## Catatan Belajar

- `slice()`, `concat()`, dan `join()` pada contoh ini tidak memutasi array asal.
- `slice()` bekerja di level subarray, `concat()` di level penggabungan, dan `join()` di level representasi string.
- Memahami bentuk output tiap built-in membantu memilih method yang tepat untuk kebutuhan data.

## Cara Menjalankan

```bash
node example.js
node example-02.js
node example-03.js
```
