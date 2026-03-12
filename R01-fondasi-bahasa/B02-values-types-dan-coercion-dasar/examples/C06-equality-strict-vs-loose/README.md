# Example C06

Contoh runnable untuk bab **C06 - Equality Strict vs Loose**.

## Tujuan Example

Folder ini membantu pembaca membedakan `==` dan `===`, melihat jebakan loose equality, dan memahami idiom `value == null` yang kadang dipakai secara sengaja.

## Daftar File

- `example.js` membandingkan strict dan loose equality pada beberapa kasus inti.
- `example-02.js` menunjukkan contoh loose equality yang sering mengejutkan.
- `example-03.js` menunjukkan idiom nullish check dengan `== null`.

## Penjelasan Per File

### `example.js`

Contoh utama ini menampilkan pasangan paling penting:

- `5 == '5'` vs `5 === '5'`
- `0 == false` vs `0 === false`
- `null == undefined` vs `null === undefined`

Bagian akhirnya juga penting:

```js
const score = Number('abc');
console.log('NaN === NaN:', score === score);
console.log('Number.isNaN(score):', Number.isNaN(score));
```

Ini menunjukkan bahwa `NaN` punya perilaku khusus dan tidak bisa dideteksi dengan equality biasa.

### `example-02.js`

File ini sengaja berisi kasus-kasus yang terasa aneh:

- `'' == 0`
- `'0' == 0`
- `false == '0'`
- `false == []`
- `[] == ''`

Tujuannya bukan agar pembaca menghafal semuanya, tetapi agar mereka paham mengapa `===` lebih aman untuk default sehari-hari.

### `example-03.js`

Contoh ini memperlihatkan idiom yang memang kadang berguna:

```js
function isMissing(value) {
  return value == null;
}
```

Irisan pentingnya:

- `null` dan `undefined` dianggap missing
- `0` dan `''` tidak dianggap missing

## Catatan Belajar

- Pilihan default yang paling aman adalah `===`.
- `==` bukan selalu salah, tetapi hanya layak dipakai jika aturannya benar-benar dipahami.
- Untuk mengecek nilai nullish saja, `value == null` bisa menjadi idiom yang ringkas dan sengaja dipakai.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `7.2.12`
- `7.2.13`
- `7.2.14`

Referensi chapter: `../../chapters/C06-equality-strict-vs-loose.md`.
Referensi mapping penuh: `../../docs/spec-mapping-56.md`.
