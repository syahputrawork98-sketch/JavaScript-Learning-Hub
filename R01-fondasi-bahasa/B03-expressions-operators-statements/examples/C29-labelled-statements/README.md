# Example C29

Contoh runnable untuk bab **C29 - Labelled Statements**.

## Tujuan Example

Folder ini memperlihatkan bagaimana label membantu `break` atau `continue` mengontrol loop luar pada nested loop.

## Daftar File

- `example.js` menunjukkan `break` ke label loop luar.
- `example-02.js` menunjukkan `continue` dengan label.
- `example-03.js` menegaskan pentingnya nama label yang jelas.

## Penjelasan Per File

### `example.js`

Contoh utama ini memakai label:

```js
outerLoop: for (...) {
  ...
  break outerLoop;
}
```

Tujuannya adalah menunjukkan bahwa `break` tidak selalu berhenti di loop terdalam jika label dipakai secara eksplisit.

### `example-02.js`

File ini memperlihatkan `continue outer`:

```js
if (j === 1) continue outer;
```

Dengan ini, alur langsung lompat ke iterasi berikutnya pada loop luar, bukan hanya loop dalam.

### `example-03.js`

Contoh ini menekankan naming label:

```js
searchLoop: for (...) {
```

Karena label jarang dipakai, nama yang jelas membantu pembaca memahami arah lompatan control flow.

## Catatan Belajar

- Label berguna terutama pada nested loop.
- Tanpa label, `break` dan `continue` hanya memengaruhi loop terdekat.
- Karena fitur ini cukup jarang, gunakan nama label yang membantu pembaca, bukan sekadar pendek.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
