# Example C08

Contoh runnable untuk bab **C08 - Coercion ke String**.

## Tujuan Example

Folder ini membantu pembaca melihat berbagai jalur konversi ke string, perbedaan `String(...)` dan `toString()`, serta penggunaan coercion string untuk formatting.

## Daftar File

- `example.js` memperlihatkan `String(...)`, concatenation, dan template literal.
- `example-02.js` membandingkan `String(value)` dengan `value.toString()`.
- `example-03.js` menunjukkan helper formatting log sederhana.

## Penjelasan Per File

### `example.js`

Contoh utama ini mengubah banyak nilai menjadi string:

- `42`
- `null`
- `undefined`
- `true`
- object
- array

Lalu bagian ini menunjukkan coercion string oleh operator:

```js
'Nilai: ' + 10
10 + '5'
```

Dan template literal dipakai sebagai bentuk formatting yang lebih eksplisit.

### `example-02.js`

Contoh ini sangat praktis untuk debugging:

```js
const safe = String(value);
direct = value.toString();
```

Perbedaannya terlihat pada `null` dan `undefined`:

- `String(null)` aman
- `null.toString()` melempar error

Karena itu `String(...)` sering lebih aman untuk logging atau formatting umum.

### `example-03.js`

File ini menunjukkan penggunaan `String(value)` di helper kecil:

```js
function formatLog(label, value) {
  return `[${label}] ${String(value)}`;
}
```

Tujuannya agar pembaca melihat bahwa coercion ke string sering dipakai secara sengaja untuk output yang konsisten.

## Catatan Belajar

- `String(value)` adalah pilihan aman untuk konversi umum.
- `toString()` cocok saat kita yakin nilainya tidak `null` atau `undefined`.
- Coercion ke string sering berguna untuk UI, logging, dan debugging.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `7.1.17`

Referensi chapter: `../../chapters/C08-coercion-ke-string.md`.
Referensi mapping penuh: `../../docs/spec-mapping-56.md`.
