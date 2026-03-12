# Example C10

Contoh runnable untuk bab **C10 - Null vs Undefined**.

## Tujuan Example

Folder ini membantu pembaca membedakan `null` dan `undefined` pada variabel, properti object, parameter function, equality, dan defaulting modern.

## Daftar File

- `example.js` memperlihatkan `undefined` dan `null` dalam beberapa konteks sekaligus.
- `example-02.js` membedakan properti yang ada tetapi `null` dengan properti yang memang tidak ada.
- `example-03.js` menunjukkan `optional chaining` dan `??` dalam kasus konfigurasi.

## Penjelasan Per File

### `example.js`

Contoh utama ini memperlihatkan beberapa sumber `undefined`:

- variabel `let token;`
- properti object yang tidak ada (`profile.age`)
- parameter function yang tidak diisi

Lalu `profile.name` sengaja bernilai `null` untuk menunjukkan bahwa:

- `undefined` sering berarti "belum ada nilai" atau "tidak ada properti"
- `null` sering berarti "memang sengaja dikosongkan"

### `example-02.js`

Bagian pentingnya ada di operator `in`:

```js
'nickname' in user
'age' in user
```

Ini membantu membedakan:

- properti ada tetapi nilainya `null`
- properti memang tidak ada sama sekali

### `example-03.js`

Contoh ini sangat relevan untuk kode modern:

```js
const timeout = config.api?.timeout ?? 5000;
const retries = config.api?.retries ?? 3;
```

Hasilnya menunjukkan bahwa:

- `timeout: 0` tetap dipertahankan karena `0` bukan nullish
- `retries` memakai default karena property-nya tidak ada

## Catatan Belajar

- `null` dan `undefined` berdekatan, tetapi makna penggunaannya sering berbeda.
- Pakai `??` saat ingin default hanya untuk nilai nullish.
- Gunakan `in` atau pengecekan property yang tepat jika perlu membedakan "ada tapi kosong" vs "tidak ada".

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `6.1.1`
- `6.1.2`
- `7.2.14`

Referensi chapter: `../../chapters/C10-null-vs-undefined.md`.
Referensi mapping penuh: `../../docs/spec-mapping-56.md`.
