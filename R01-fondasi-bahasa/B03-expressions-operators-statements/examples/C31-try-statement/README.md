# Example C31

Contoh runnable untuk bab **C31 - try Statement**.

## Tujuan Example

Folder ini memperlihatkan `try`, `catch`, `finally`, dan pola rethrow sebagai dasar penanganan error.

## Daftar File

- `example.js` menunjukkan `try/catch/finally` pada parsing JSON.
- `example-02.js` memperkuat urutan flow `try/catch/finally`.
- `example-03.js` menunjukkan pola logging lalu rethrow.

## Penjelasan Per File

### `example.js`

File utama ini sangat cocok untuk pemula karena memakai kasus yang familiar:

```js
JSON.parse(text)
```

Ketika parsing berhasil, nilai dikembalikan. Ketika parsing gagal, `catch` menangani error. Lalu `finally` tetap dijalankan, sehingga pembaca bisa melihat urutan lengkap control flow-nya.

### `example-02.js`

Contoh ini memperjelas bahwa:

- `catch` dijalankan hanya jika ada error
- `finally` tetap dijalankan apa pun hasilnya

Ini membantu pembaca membangun mental model yang stabil tentang peran tiap blok.

### `example-03.js`

File ini menunjukkan pola rethrow:

```js
catch (e) {
  console.log('logging:', e.message);
  throw e;
}
```

Tujuannya adalah menunjukkan bahwa menangkap error tidak selalu berarti error itu “selesai”; kadang ia dicatat dulu, lalu diteruskan ke layer atas.

## Catatan Belajar

- `try` dipakai untuk membungkus bagian yang berpotensi melempar error.
- `finally` cocok untuk cleanup atau logging penutup.
- Rethrow adalah pola penting saat kita ingin mencatat error tanpa menelannya.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
