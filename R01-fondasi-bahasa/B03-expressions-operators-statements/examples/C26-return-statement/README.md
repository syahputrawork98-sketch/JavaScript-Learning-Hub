# Example C26

Contoh runnable untuk bab **C26 - return Statement**.

## Tujuan Example

Folder ini membantu pembaca memahami `return` sebagai penghenti eksekusi fungsi sekaligus pengirim nilai balik.

## Daftar File

- `example.js` menunjukkan beberapa jalur return dan fungsi tanpa return eksplisit.
- `example-02.js` menunjukkan early return untuk normalisasi data.
- `example-03.js` menunjukkan return object dengan shape hasil yang konsisten.

## Penjelasan Per File

### `example.js`

Fungsi `classify(score)` memperlihatkan beberapa jalur keluar:

- `return 'invalid'` untuk nilai nullish
- `return 'lulus'` untuk skor tinggi
- `return 'remedial'` untuk sisanya

Lalu file ini juga menunjukkan:

```js
function noReturn() {}
```

yang membantu pembaca melihat bahwa fungsi tanpa `return` eksplisit menghasilkan `undefined`.

### `example-02.js`

Contoh ini memakai early return:

```js
if (!name) return 'anonymous';
return name.trim().toLowerCase();
```

Pola ini sangat umum karena membuat kondisi penolakan ditangani lebih awal, lalu sisa logika utama menjadi lebih lurus.

### `example-03.js`

File ini menunjukkan `return` object dengan bentuk hasil yang konsisten:

```js
return { ok: false, reason: 'name required' };
return { ok: true, data: { name } };
```

Ini adalah pola praktis untuk fungsi yang ingin mengembalikan hasil sukses dan gagal dengan struktur yang masih mudah dibaca.

## Catatan Belajar

- `return` menghentikan fungsi saat itu juga.
- Early return sering meningkatkan keterbacaan.
- Return object dengan shape yang konsisten memudahkan pemanggil membaca hasil fungsi.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
