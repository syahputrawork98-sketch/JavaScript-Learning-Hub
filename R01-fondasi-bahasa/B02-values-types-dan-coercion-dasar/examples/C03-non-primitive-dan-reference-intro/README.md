# Example C03

Contoh runnable untuk bab **C03 - Non-Primitive dan Reference Intro**.

## Tujuan Example

Folder ini membantu pembaca memahami bahwa object disimpan dan dibagikan lewat reference, sehingga perubahan lewat alias atau shallow copy bisa memengaruhi data asli.

## Daftar File

- `example.js` menunjukkan alias reference, perbandingan identity, dan shallow copy yang masih berbagi nested object.
- `example-02.js` fokus pada jebakan shallow copy.
- `example-03.js` menunjukkan cara copy nested object yang lebih aman secara manual.

## Penjelasan Per File

### `example.js`

Contoh ini memulai dengan:

```js
const original = { profile: { name: 'Arta' } };
const alias = original;
alias.profile.name = 'Syahputra';
```

Karena `alias` menunjuk object yang sama, perubahan lewat `alias` juga terlihat pada `original`.

Bagian berikut membandingkan:

- `x === y` bernilai `false` karena dua object berbeda walaupun isinya mirip
- `x === z` bernilai `true` karena `z` menunjuk reference yang sama dengan `x`

### `example-02.js`

File ini memperjelas bahwa spread pada level atas belum tentu aman:

```js
const clone = { ...user };
clone.settings.theme = 'dark';
```

Karena `settings` masih nested object yang sama, perubahan pada `clone.settings` ikut memengaruhi `user.settings`.

### `example-03.js`

Contoh ini menunjukkan satu langkah lebih aman:

```js
const deepCopy = {
  ...source,
  profile: { ...source.profile },
};
```

Nested object `profile` ikut disalin, sehingga perubahan pada `deepCopy.profile` tidak lagi mengubah `source.profile`.

## Catatan Belajar

- Object dibandingkan berdasarkan reference, bukan isi.
- Spread object hanya menyalin level atas.
- Saat data bersarang, selalu curiga ada nested reference yang masih dibagi.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `6.1.7`
- `7.2.14`

Referensi chapter: `../../chapters/C03-non-primitive-dan-reference-intro.md`.
Referensi mapping penuh: `../../docs/spec-mapping-56.md`.
