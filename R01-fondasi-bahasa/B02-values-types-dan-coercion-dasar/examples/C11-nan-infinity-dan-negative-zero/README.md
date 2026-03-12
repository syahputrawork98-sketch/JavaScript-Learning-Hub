# Example C11

Contoh runnable untuk bab **C11 - NaN, Infinity, dan Negative Zero**.

## Tujuan Example

Folder ini membantu pembaca memahami tiga nilai number yang sering bikin bingung: `NaN`, `Infinity`, dan `-0`.

## Daftar File

- `example.js` memperlihatkan `NaN`, `Infinity`, dan `-0` dalam satu tempat.
- `example-02.js` menunjukkan validasi hasil pembagian dengan `Number.isFinite`.
- `example-03.js` menunjukkan cara membedakan `-0` dari `0`.

## Penjelasan Per File

### `example.js`

Contoh utama ini menampilkan tiga kelompok perilaku:

- `Number('abc')` menghasilkan `NaN`
- `1 / 0` dan `-1 / 0` menghasilkan `Infinity` dan `-Infinity`
- `-0` secara `===` sama dengan `0`, tetapi bisa dibedakan dengan `Object.is`

Ini penting karena banyak bug numerik muncul justru dari nilai-nilai edge case seperti ini.

### `example-02.js`

File ini memperlihatkan helper yang cukup realistis:

```js
function divide(a, b) {
  const result = a / b;
  if (!Number.isFinite(result)) return null;
  return result;
}
```

Hasil pembagian tak valid seperti `10 / 0` atau `0 / 0` ditolak, sehingga nilai bermasalah tidak menyebar ke logika lain.

### `example-03.js`

Contoh ini menunjukkan bahwa `-0` kadang perlu dibedakan:

```js
if (Object.is(value, -0)) return 'negative-zero';
if (value === 0) return 'zero';
```

Untuk banyak aplikasi umum ini jarang penting, tetapi untuk debugging angka, visualisasi arah, atau code numerik tertentu, bedanya bisa relevan.

## Catatan Belajar

- `NaN` bukan cuma "angka jelek", tetapi sinyal bahwa hasil numeriknya tidak valid.
- `Infinity` dan `-Infinity` masih bertipe `number`.
- Jika edge case numerik penting, `Object.is` sering lebih tepat daripada `===`.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `6.1.6.1`
- `7.2.10`

Referensi chapter: `../../chapters/C11-nan-infinity-dan-negative-zero.md`.
Referensi mapping penuh: `../../docs/spec-mapping-56.md`.
