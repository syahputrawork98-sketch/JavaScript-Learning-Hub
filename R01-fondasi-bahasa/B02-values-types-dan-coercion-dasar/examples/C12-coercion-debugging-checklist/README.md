# Example C12

Contoh runnable untuk bab **C12 - Coercion Debugging Checklist**.

## Tujuan Example

Folder ini membantu pembaca menerapkan cara berpikir debugging untuk kasus coercion: cek nilai asli, cek tipe, cek hasil konversi, lalu perkecil reproduksi bug.

## Daftar File

- `example.js` menunjukkan alur inspeksi coercion pada beberapa nilai nyata.
- `example-02.js` menunjukkan reproduksi minimal bug dari string kosong yang jadi angka.
- `example-03.js` membuat helper checklist coercion yang bisa dipakai ulang.

## Penjelasan Per File

### `example.js`

Helper ini adalah inti file:

```js
function inspectValue(label, value) {
  console.log(label, '=>', value, '| typeof:', typeof value, '| isArray:', Array.isArray(value), '| isNaN:', Number.isNaN(value));
}
```

Setelah itu file memeriksa:

- string mentah `' 15 '`
- hasil `Number(raw)`
- string `'false'` yang ternyata truthy saat dibungkus `Boolean(...)`
- string `'0'` yang menjadi `0` saat dipaksa ke number
- perbedaan fallback `||` dan `??`

File ini cocok sebagai model cara berpikir, bukan sekadar contoh perilaku tunggal.

### `example-02.js`

Contoh ini sangat berguna sebagai reproduksi minimal:

```js
const rawQty = '';
const total = Number(rawQty) + 5;
```

Di sini bug bisa muncul karena string kosong berubah menjadi `0`, lalu perhitungan lanjut tetap jalan. Ini adalah contoh klasik mengapa bug coercion perlu direproduksi dalam bentuk sekecil mungkin.

### `example-03.js`

Helper berikut membuat checklist kecil:

```js
function debugCoercion(label, value) {
  console.log(label, {
    value,
    type: typeof value,
    isArray: Array.isArray(value),
    isNaN: Number.isNaN(value),
    asNumber: Number(value),
    asBoolean: Boolean(value),
    asString: String(value),
  });
}
```

Dengan helper ini, satu nilai bisa dilihat dari banyak sudut sekaligus. Ini sangat berguna saat debugging input dari form, API, query string, atau environment variable.

## Catatan Belajar

- Saat debugging coercion, jangan langsung lihat hasil akhir. Mulai dari nilai mentahnya.
- Tipe, hasil `Number(...)`, hasil `Boolean(...)`, dan hasil `String(...)` sering memberi petunjuk berbeda.
- Reproduksi minimal bug hampir selalu membuat masalah coercion lebih cepat dipahami.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `7.1.2`
- `7.1.4`
- `7.1.17`
- `7.2.14`

Referensi chapter: `../../chapters/C12-coercion-debugging-checklist.md`.
Referensi mapping penuh: `../../docs/spec-mapping-56.md`.
