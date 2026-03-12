# Example C07

Contoh runnable untuk bab **C07 - Array Mutation `push`, `pop`, `shift`, `unshift`**.

## Tujuan Example

Folder ini menunjukkan operasi mutation array yang paling sering dipakai untuk menambah atau menghapus elemen di awal maupun akhir array.

## Daftar File

- `example.js` menunjukkan penambahan elemen dengan `push()`.
- `example-02.js` menunjukkan penghapusan elemen terakhir dengan `pop()`.
- `example-03.js` menunjukkan penambahan di depan dengan `unshift()` dan penghapusan dari depan dengan `shift()`.

## Penjelasan Per File

### `example.js`

Potongan utamanya:

```js
fruits.push('mango');
```

`push()` menambahkan elemen ke ujung array dan mengubah array asli. Perubahan ini langsung terlihat saat array dicetak ulang dan saat `length` dibaca kembali.

### `example-02.js`

Kasus pentingnya:

```js
const lastFruit = fruits.pop();
```

`pop()` menghapus elemen terakhir sekaligus mengembalikan elemen yang dihapus. Jadi method ini berguna saat kita butuh hasil penghapusan dan array sisa secara bersamaan.

### `example-03.js`

Contohnya menggabungkan dua operasi:

```js
queue.unshift('Alya');
const firstPerson = queue.shift();
```

`unshift()` menambah elemen ke depan array, sedangkan `shift()` mengambil elemen pertama. Kombinasi ini membantu menjelaskan array sebagai struktur data sederhana seperti antrean.

## Catatan Belajar

- Keempat method pada folder ini bersifat mutable: array asli benar-benar berubah.
- Perbedaan utama ada pada sisi array yang disentuh, depan atau belakang.
- Memahami return value `pop()` dan `shift()` penting karena keduanya mengembalikan elemen yang terambil.

## Cara Menjalankan

```bash
node example.js
node example-02.js
node example-03.js
```
