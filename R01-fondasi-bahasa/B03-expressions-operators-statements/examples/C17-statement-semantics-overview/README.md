# Example C17

Contoh runnable untuk bab **C17 - Statement Semantics Overview**.

## Tujuan Example

Folder ini membantu pembaca melihat bahwa statement tidak hanya dieksekusi lurus dari atas ke bawah, tetapi juga bisa mengubah alur secara normal atau abrupt.

## Daftar File

- `example.js` menunjukkan flow normal, `return`, dan `throw` dalam satu fungsi.
- `example-02.js` membandingkan normal completion dan abrupt completion.
- `example-03.js` memperlihatkan tracing flow path sederhana.

## Penjelasan Per File

### `example.js`

Fungsi `run(value)` di file ini punya tiga kemungkinan hasil:

- `throw` saat nilai negatif
- `return 'zero'` saat nilai nol
- `return 'positive'` saat nilai positif

Lalu semuanya dibungkus `try...catch`, sehingga pembaca bisa melihat bahwa:

- sebagian flow selesai normal
- sebagian flow berhenti lebih cepat karena `throw`
- `catch` menangkap alur abrupt tersebut

### `example-02.js`

Contoh ini memfokuskan perhatian ke beda dua jalur:

- jalur yang berhasil mengembalikan nilai
- jalur yang berhenti karena error

Tujuannya agar pembaca mulai peka bahwa semantic statement tidak hanya tentang syntax, tetapi juga tentang bagaimana control flow diselesaikan.

### `example-03.js`

File ini memakai fungsi kecil untuk melacak jalur hasil:

```js
if (x < 0) return 'neg';
if (x === 0) return 'zero';
return 'pos';
```

Contoh ini sederhana, tetapi sangat bagus untuk membangun intuisi tentang flow path.

## Catatan Belajar

- Statement memiliki efek pada alur program, bukan hanya pada nilai.
- `return` dan `throw` adalah dua bentuk abrupt flow yang sangat penting dipahami.
- Membaca function berarti juga membaca semua kemungkinan jalur keluarnya.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
