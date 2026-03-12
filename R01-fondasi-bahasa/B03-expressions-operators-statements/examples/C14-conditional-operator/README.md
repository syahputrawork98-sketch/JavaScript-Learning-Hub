# Example C14

Contoh runnable untuk bab **C14 - Conditional Operator**.

## Tujuan Example

Folder ini menunjukkan operator ternary sebagai expression ringkas untuk memilih nilai berdasarkan kondisi.

## Daftar File

- `example.js` menunjukkan ternary dasar, nested ternary, dan pemilihan harga.
- `example-02.js` menyorot nested ternary dan risiko keterbacaannya.
- `example-03.js` menunjukkan ternary di dalam `return`.

## Penjelasan Per File

### `example.js`

File utama ini memakai ternary untuk beberapa kasus:

- label kelulusan
- grade bertingkat
- pemilihan harga berdasarkan status member

Contoh ini penting karena menunjukkan bahwa ternary memang cocok ketika kita ingin memilih **nilai**, bukan membangun blok kontrol alur panjang.

### `example-02.js`

Contoh ini sengaja fokus ke nested ternary:

```js
const grade = score > 90 ? 'A' : score > 75 ? 'B' : 'C';
```

Secara sintaks ini valid dan sering dijumpai, tetapi juga memberi momen belajar bahwa ekspresi yang terlalu padat cepat menurunkan keterbacaan.

### `example-03.js`

File ini menunjukkan ternary di dalam function:

```js
function badge(active) {
  return active ? 'ACTIVE' : 'INACTIVE';
}
```

Ini contoh yang cukup ideal: singkat, jelas, dan hasilnya langsung menjadi return value.

## Catatan Belajar

- Ternary sangat bagus untuk pemilihan nilai yang pendek.
- Jika ekspresinya mulai sulit dibaca dalam sekali lihat, pertimbangkan `if`.
- Gunakan ternary untuk memperjelas, bukan sekadar memendekkan jumlah baris.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
