# Example C07

Contoh runnable untuk bab **C07 - Coercion ke Number**.

## Tujuan Example

Folder ini membantu pembaca memahami bagaimana berbagai nilai dikonversi ke number, kapan hasilnya valid, kapan menjadi `NaN`, dan kapan parsing longgar bisa menyesatkan.

## Daftar File

- `example.js` memperlihatkan hasil `Number(...)`, coercion operator numerik, dan perbedaan `parseInt` vs `parseFloat`.
- `example-02.js` menunjukkan helper aman untuk menerima hanya angka finite.
- `example-03.js` menunjukkan pentingnya radix pada `parseInt`.

## Penjelasan Per File

### `example.js`

Contoh utama ini menguji nilai seperti:

- `'42'`
- `''`
- `'12px'`
- `'10.5'`
- `true`
- `null`
- `undefined`

Semua dikirim ke `Number(...)`, lalu dicetak bersama `Number.isNaN(...)`.

Poin penting yang biasanya mengejutkan:

- `Number('')` menjadi `0`
- `Number('12px')` menjadi `NaN`
- `Number(true)` menjadi `1`
- `Number(null)` menjadi `0`

### `example-02.js`

Contoh ini membuat helper yang lebih aman:

```js
function toFiniteNumber(input) {
  const n = Number(input);
  return Number.isFinite(n) ? n : null;
}
```

Dengan pola ini, string yang benar-benar numerik diterima, sedangkan input bermasalah seperti `'120px'` atau `undefined` ditolak.

### `example-03.js`

File ini menunjukkan bahwa `parseInt` tidak bisa dilepas dari konteks radix:

```js
parseInt('11', 2)
parseInt('11', 10)
parseInt('0x10', 16)
Number('0x10')
```

Tujuannya agar pembaca melihat bahwa parsing berbasis string kadang lebih longgar atau punya aturan yang berbeda dari `Number(...)`.

## Catatan Belajar

- Bedakan konversi ketat (`Number`) dan parsing longgar (`parseInt`, `parseFloat`).
- Selalu curigai input string kosong, string campuran, dan nilai `undefined`.
- Jika hasil konversi akan dipakai untuk logika penting, validasi dengan `Number.isFinite`.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `7.1.4`

Referensi chapter: `../../chapters/C07-coercion-ke-number.md`.
Referensi mapping penuh: `../../docs/spec-mapping-56.md`.
