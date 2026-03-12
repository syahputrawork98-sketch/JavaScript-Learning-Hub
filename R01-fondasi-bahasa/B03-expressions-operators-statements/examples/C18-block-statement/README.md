# Example C18

Contoh runnable untuk bab **C18 - Block Statement**.

## Tujuan Example

Folder ini menunjukkan fungsi block `{}` sebagai pengelompokan statement sekaligus pembatas scope.

## Daftar File

- `example.js` menunjukkan block biasa, block pada `if`, dan block di loop.
- `example-02.js` menegaskan block scope dengan `const` dan `let`.
- `example-03.js` menunjukkan block untuk variable sementara.

## Penjelasan Per File

### `example.js`

File ini menunjukkan tiga konteks block:

- block mandiri
- block di dalam `if`
- block di dalam `for`

Tujuannya agar pembaca melihat bahwa `{}` bukan hanya dekorasi, tetapi unit struktur yang mengelompokkan statement dan membatasi jangkauan binding tertentu.

### `example-02.js`

Contoh ini dibuat lebih fokus ke scope:

```js
{
  const local = 'inside';
  console.log(local);
}
```

Lalu dilanjut di loop, sehingga pembaca bisa melihat bahwa binding di dalam block tidak harus hidup di luar block itu.

### `example-03.js`

File ini menunjukkan pemakaian block untuk variable sementara:

```js
const result = (() => {
  {
    const a = 2;
    const b = 3;
    return a * b;
  }
})();
```

Ini berguna untuk membangun kebiasaan bahwa block dapat dipakai untuk menahan variable agar tidak bocor ke area yang lebih luas.

## Catatan Belajar

- Block membantu keterbacaan dan juga scope.
- Jangan anggap semua variable hidup di seluruh file.
- Memahami block akan memudahkan membaca `if`, loop, dan function body.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
