# Example C02

Contoh runnable untuk bab **C02 - Parameter Lists Initializer dan Expected Argument Count**.

## Tujuan Example

Folder ini memperlihatkan kapan default initializer dipakai dan bagaimana `function.length` dihitung.

## Daftar File

- `example.js` menunjukkan default parameter hanya aktif untuk `undefined`.
- `example-02.js` memperlihatkan efek urutan initializer antar-parameter.
- `example-03.js` menunjukkan aturan `function.length`.

## Poin Penting

- `null` tidak memicu default initializer.
- Urutan parameter memengaruhi nilai default yang bisa dipakai.
- `function.length` tidak selalu sama dengan jumlah parameter tekstual.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `15.1.3`
- `15.1.4`
- `15.1.5`

Referensi chapter: `../../chapters/C02-parameter-lists-initializer-dan-expected-argument-count.md`.
Referensi mapping penuh: `../../docs/spec-mapping-70.md`.
