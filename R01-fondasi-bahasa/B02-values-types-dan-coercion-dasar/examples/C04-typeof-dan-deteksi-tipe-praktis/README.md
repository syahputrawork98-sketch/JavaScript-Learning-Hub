# Example C04

Contoh runnable untuk bab **C04 - typeof dan Deteksi Tipe Praktis**.

## Tujuan Example

Folder ini membantu pembaca memakai `typeof` secara realistis, sambil memahami kapan perlu helper tambahan untuk membedakan `null`, array, dan plain object.

## Daftar File

- `example.js` menunjukkan helper `detectType` yang lebih praktis daripada `typeof` mentah.
- `example-02.js` menunjukkan helper `isPlainObject` sederhana.
- `example-03.js` menunjukkan runtime guard untuk input string angka.

## Penjelasan Per File

### `example.js`

Helper berikut adalah inti contoh:

```js
function detectType(value) {
  if (value === null) return 'null';
  if (Array.isArray(value)) return 'array';
  return typeof value;
}
```

Tujuannya untuk menutup dua celah paling umum:

- `typeof null` yang membingungkan
- array yang oleh `typeof` tetap terbaca sebagai `'object'`

### `example-02.js`

Contoh ini memperlihatkan helper yang cukup sering dibutuhkan:

```js
function isPlainObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}
```

Hasil yang dicetak membedakan object biasa dari array dan `null`.

### `example-03.js`

File ini mengubah teori deteksi tipe menjadi guard input yang praktis:

```js
if (typeof input !== 'string') return null;
const n = Number(input);
return Number.isFinite(n) ? n : null;
```

Hasilnya:

- `'12'` menjadi `12`
- `'12px'` ditolak
- `12` sebagai number juga ditolak karena fungsi ini memang mengharapkan string

## Catatan Belajar

- `typeof` bagus untuk langkah awal, tapi kadang belum cukup.
- Gunakan helper kecil saat aturan deteksi tipe perlu lebih jelas.
- Runtime guard lebih aman daripada mengandalkan asumsi input.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `7.2.2`
- `7.2.3`
- `7.2.8`

Referensi chapter: `../../chapters/C04-typeof-dan-deteksi-tipe-praktis.md`.
Referensi mapping penuh: `../../docs/spec-mapping-56.md`.
