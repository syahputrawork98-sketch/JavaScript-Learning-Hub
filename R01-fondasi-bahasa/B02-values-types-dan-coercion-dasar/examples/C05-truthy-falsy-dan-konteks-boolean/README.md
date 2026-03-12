# Example C05

Contoh runnable untuk bab **C05 - Truthy Falsy dan Konteks Boolean**.

## Tujuan Example

Folder ini membantu pembaca melihat nilai mana yang truthy atau falsy, dan kenapa penggunaan `||` untuk default kadang memicu bug.

## Daftar File

- `example.js` memperlihatkan daftar nilai truthy/falsy dan perbandingan `||` vs `??`.
- `example-02.js` menunjukkan bug default dengan `||`.
- `example-03.js` menunjukkan perbaikan menggunakan `??`.

## Penjelasan Per File

### `example.js`

Contoh utama ini mencetak hasil `Boolean(value)` untuk banyak nilai penting seperti `false`, `0`, `''`, `null`, `undefined`, `NaN`, `[]`, `{}`, `'0'`, dan `'false'`.

Bagian akhirnya sangat penting:

```js
const qty = 0;
console.log('qty || 10 =>', qty || 10);
console.log('qty ?? 10 =>', qty ?? 10);
```

Hasil ini memperlihatkan bahwa `0` dianggap falsy oleh `||`, tetapi tidak dianggap missing oleh `??`.

### `example-02.js`

Contoh bug-nya sederhana:

```js
function displayQty(qty) {
  return qty || 100;
}
```

Jika `qty` bernilai `0`, hasilnya justru `100`. Ini adalah bug klasik saat nilai `0` sebenarnya valid.

### `example-03.js`

Versi perbaikannya:

```js
function displayQty(qty) {
  return qty ?? 100;
}
```

Sekarang `0` tetap dipertahankan, sementara `null` dan `undefined` baru akan memakai nilai default.

## Catatan Belajar

- Falsy bukan berarti salah; kadang nilainya memang valid.
- Gunakan `||` untuk fallback berbasis truthiness.
- Gunakan `??` untuk fallback berbasis nullish (`null` atau `undefined`).

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `7.1.2`
- `7.2.14`

Referensi chapter: `../../chapters/C05-truthy-falsy-dan-konteks-boolean.md`.
Referensi mapping penuh: `../../docs/spec-mapping-56.md`.
