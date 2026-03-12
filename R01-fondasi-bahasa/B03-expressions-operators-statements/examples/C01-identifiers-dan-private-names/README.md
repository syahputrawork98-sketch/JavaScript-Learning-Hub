# Example C01

Contoh runnable untuk bab **C01 - Identifiers dan Private Names**.

## Tujuan Example

Folder ini membantu pembaca melihat dua hal yang tampak mirip tetapi sebenarnya berbeda konteks:

- identifier biasa seperti nama variabel
- private name pada class dengan prefix `#`

## Daftar File

- `example.js` menunjukkan identifier umum yang valid dan private field pada class.
- `example-02.js` memperkuat bentuk identifier valid seperti `_` dan `$`.
- `example-03.js` fokus pada private field yang hanya bisa diakses lewat method class.

## Penjelasan Per File

### `example.js`

Bagian awal file ini menunjukkan identifier umum:

```js
const totalScore = 90;
const _cache = {};
const $meta = 'ok';
```

Tujuannya untuk menegaskan bahwa nama variabel JavaScript bisa memakai pola yang sering ditemui di dunia nyata, termasuk awalan underscore dan dollar sign.

Bagian berikut memperkenalkan private field:

```js
class User {
  #id = 1;
  getId() {
    return this.#id;
  }
}
```

Poin pentingnya:

- `#id` bukan identifier biasa
- ia hanya valid di dalam body class terkait
- aksesnya harus lewat method atau bagian class lain yang sah

### `example-02.js`

Contoh ini dibuat singkat agar fokusnya jelas:

```js
const validName = 'ok';
const _privateLike = 'ok';
const $meta = 'ok';
```

Tujuannya adalah memisahkan dua hal yang sering tertukar oleh pemula:

- `_privateLike` hanyalah identifier biasa
- ia **bukan** private field seperti `#value`

### `example-03.js`

File ini memperlihatkan private field dalam alur object yang lebih realistis:

```js
class Counter {
  #value = 0;
  inc() { this.#value += 1; }
  get() { return this.#value; }
}
```

Setelah `inc()` dipanggil, nilai internal bertambah dan dibaca melalui `get()`. Ini membantu pembaca melihat bahwa private field dipakai untuk menyembunyikan state internal class.

## Catatan Belajar

- Jangan samakan `_name` dengan `#name`; keduanya punya arti yang sangat berbeda.
- Private field adalah fitur class, bukan gaya penamaan biasa.
- Jika tujuanmu hanya memberi sinyal “internal”, underscore cukup. Jika butuh akses benar-benar dibatasi oleh bahasa, gunakan private field.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
