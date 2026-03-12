# Example C09

Contoh runnable untuk bab **C09 - Coercion ke Boolean**.

## Tujuan Example

Folder ini membantu pembaca memahami bagaimana nilai menjadi boolean, bagaimana `&&` dan `||` mengembalikan operand asli, dan kapan normalisasi manual lebih aman.

## Daftar File

- `example.js` memperlihatkan coercion ke boolean, `&&`, `||`, dan perbedaan `||` vs `??`.
- `example-02.js` fokus pada hasil operand dari `&&` dan `||`.
- `example-03.js` menunjukkan normalisasi flag string ke boolean yang lebih eksplisit.

## Penjelasan Per File

### `example.js`

Contoh utama ini mencetak hasil `Boolean(value)` dan `!!value` untuk banyak kandidat. Setelah itu, file ini menunjukkan bahwa:

- `'' || 'fallback'` menghasilkan `'fallback'`
- `'A' && 'B'` menghasilkan `'B'`

Poin pentingnya adalah `&&` dan `||` tidak selalu mengembalikan boolean, tetapi operand asli yang terpilih oleh aturan truthiness.

### `example-02.js`

File ini sengaja dibuat pendek agar perilakunya lebih jelas:

```js
'A' && 'B'
'' && 'B'
'A' || 'B'
'' || 'B'
```

Pembaca bisa langsung melihat bahwa operator logika di JavaScript juga sering dipakai sebagai operator pemilihan nilai.

### `example-03.js`

Contoh ini menunjukkan kenapa `Boolean(input)` tidak selalu cukup:

```js
if (input === 'true') return true;
if (input === 'false') return false;
return Boolean(input);
```

String `'false'` adalah truthy. Karena itu, jika input datang dari form atau environment variable, normalisasi eksplisit seperti ini sering lebih aman.

## Catatan Belajar

- Truthy/falsy adalah aturan evaluasi, bukan label kualitas data.
- `&&` dan `||` sering mengembalikan nilai asli, bukan `true` atau `false`.
- Untuk input string seperti `'true'` dan `'false'`, buat aturan normalisasi yang jelas.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `7.1.2`

Referensi chapter: `../../chapters/C09-coercion-ke-boolean.md`.
Referensi mapping penuh: `../../docs/spec-mapping-56.md`.
