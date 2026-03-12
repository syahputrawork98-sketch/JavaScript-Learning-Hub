# Example C12

Contoh runnable untuk bab **C12 - Binary Bitwise Operators**.

## Tujuan Example

Folder ini memperlihatkan `&`, `|`, `^`, serta penggunaan bitmask sederhana untuk menyimpan flag.

## Daftar File

- `example.js` menunjukkan operator bitwise dasar dan mask permission sederhana.
- `example-02.js` memperkuat pola bitmask untuk permission.
- `example-03.js` menunjukkan toggle flag dengan XOR.

## Penjelasan Per File

### `example.js`

File utama ini memperlihatkan tiga operator dasar:

```js
5 & 3
5 | 3
5 ^ 3
```

Lalu contoh ini membawa konsep itu ke konteks yang lebih praktis:

```js
const read = 1;
const write = 2;
const flags = read | write;
```

Setelah flag digabungkan, operator `&` dipakai untuk mengecek apakah permission tertentu aktif.

### `example-02.js`

Contoh ini menambah satu mask lagi:

```js
const READ = 1;
const WRITE = 2;
const EXEC = 4;
```

Tujuannya agar pembaca melihat bahwa bitmask dapat diperluas secara sistematis dan bukan hanya contoh main-main dengan angka.

### `example-03.js`

File ini menunjukkan XOR sebagai toggle:

```js
flag ^= MASK;
```

Saat dijalankan dua kali, pembaca bisa melihat bahwa nilai flag berpindah dari mati ke hidup lalu kembali lagi.

## Catatan Belajar

- Bitwise operator paling mudah dipahami jika dibaca sebagai operasi pada flag.
- Gunakan contoh mask kecil agar pola kerjanya terlihat jelas.
- Jika pembaca belum nyaman dengan biner, fokus dulu pada makna “gabung flag”, “cek flag”, dan “toggle flag”.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
