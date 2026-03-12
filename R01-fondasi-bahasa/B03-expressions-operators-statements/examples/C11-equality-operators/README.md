# Example C11

Contoh runnable untuk bab **C11 - Equality Operators**.

## Tujuan Example

Folder ini membantu pembaca membedakan `==`, `===`, idiom nullish dengan `== null`, dan edge case yang lebih tepat dicek memakai `Object.is`.

## Daftar File

- `example.js` membandingkan strict dan loose equality serta kasus `NaN`.
- `example-02.js` menunjukkan idiom `value == null`.
- `example-03.js` menunjukkan `Object.is` untuk edge comparison.

## Penjelasan Per File

### `example.js`

File utama ini memperlihatkan pasangan yang paling sering menimbulkan salah paham:

- `5 === '5'` vs `5 == '5'`
- `0 === false` vs `0 == false`
- `null == undefined` vs `null === undefined`

Bagian akhirnya sangat penting:

```js
const n = Number('abc');
console.log('NaN === NaN:', n === n);
console.log('Number.isNaN(n):', Number.isNaN(n));
```

Ini menunjukkan bahwa equality biasa tidak cukup untuk semua edge case numerik.

### `example-02.js`

Contoh ini menunjukkan idiom yang memang sengaja dipakai sebagian developer:

```js
function isMissing(value) {
  return value == null;
}
```

Makna idiom ini adalah:

- `null` dianggap missing
- `undefined` juga dianggap missing
- nilai lain seperti `0` atau `''` tidak ikut tertangkap

### `example-03.js`

File ini menunjukkan dua kasus penting untuk `Object.is`:

```js
Object.is(NaN, NaN)
Object.is(0, -0)
```

Contoh ini membantu pembaca melihat bahwa `Object.is` punya perilaku yang lebih tepat untuk beberapa edge comparison tertentu.

## Catatan Belajar

- Gunakan `===` sebagai default yang paling aman.
- `== null` berguna jika memang sengaja ingin menangkap `null` dan `undefined` sekaligus.
- Untuk `NaN` dan `-0`, `Object.is` sering lebih informatif daripada `===`.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
