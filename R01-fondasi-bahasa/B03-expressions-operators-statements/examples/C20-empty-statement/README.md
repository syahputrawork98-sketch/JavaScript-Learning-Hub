# Example C20

Contoh runnable untuk bab **C20 - Empty Statement**.

## Tujuan Example

Folder ini menunjukkan bagaimana tanda `;` yang tampak sepele dapat menjadi empty statement dan memicu bug flow yang membingungkan.

## Daftar File

- `example.js` menunjukkan bug `if (...) ;` dan loop dengan body kosong.
- `example-02.js` memperkuat contoh accidental empty statement.
- `example-03.js` menunjukkan empty loop body yang disengaja.

## Penjelasan Per File

### `example.js`

Bagian paling penting di file ini adalah:

```js
if (isReady);
{
  console.log('blok ini tetap dieksekusi ...');
}
```

Karena ada `;` setelah `if`, body `if` sebenarnya kosong. Block setelahnya berdiri sendiri dan tetap dieksekusi.

File ini juga menunjukkan loop dengan body kosong:

```js
for (let i = 0; i < 3; i++);
```

yang sering sulit dikenali jika pembaca tidak teliti.

### `example-02.js`

Contoh ini memperkuat bug accidental empty statement dengan bentuk yang lebih pendek, agar pembaca benar-benar menangkap sumber kebingungannya.

### `example-03.js`

File ini menunjukkan bahwa empty statement bisa juga dipakai secara sengaja:

```js
for (; i < 3; i++);
```

Bedanya, jika dipakai sengaja, penulis harus sangat sadar bahwa keterbacaan akan menurun dan risiko salah baca meningkat.

## Catatan Belajar

- Tanda `;` bisa mengubah makna flow lebih dari yang terlihat.
- Empty statement tidak selalu salah, tetapi sangat mudah memicu bug.
- Jika kamu melihat `if (...) ;` atau loop dengan `;` di akhir header, periksa baik-baik apakah itu memang disengaja.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
