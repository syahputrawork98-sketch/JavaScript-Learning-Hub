# Example C02

Contoh runnable untuk bab **C02 - Object Mutation, Method, dan Delete Dasar**.

## Tujuan Example

Folder ini menunjukkan bahwa object JavaScript dapat diubah setelah dibuat, baik dengan menambah property, memperbarui nilai, memakai method, maupun menghapus property yang tidak lagi dibutuhkan.

## Daftar File

- `example.js` menunjukkan penambahan dan pembaruan property pada object.
- `example-02.js` menunjukkan method object sederhana yang memodifikasi state internal.
- `example-03.js` menunjukkan penggunaan `delete` dan pengecekan hasilnya.

## Penjelasan Per File

### `example.js`

Potongan utamanya:

```js
user.age = 21;
user.name = 'Alya Putri';
```

Object tidak bersifat beku secara default. Property baru bisa ditambahkan kapan saja, dan property lama juga bisa ditimpa dengan nilai baru.

### `example-02.js`

Inti contoh ini adalah:

```js
increment() {
  this.value += 1;
}
```

Method adalah function yang ditempatkan di dalam object. Saat dipanggil sebagai `counter.increment()`, method tersebut bekerja terhadap object yang sama dan mengubah `value` dari dalam.

### `example-03.js`

Bagian pentingnya:

```js
delete user.age;
console.log('age' in user);
```

`delete` menghapus property dari object, bukan sekadar mengubah nilainya menjadi `undefined`. Karena itu, operator `in` akan menghasilkan `false` setelah property benar-benar hilang.

## Catatan Belajar

- Object JavaScript umumnya mutable, jadi perubahan langsung pada property akan memengaruhi object asli.
- Method sering dipakai saat perubahan state ingin dibungkus dalam operasi yang lebih bermakna.
- `delete` sebaiknya dipahami sebagai penghapusan property, bukan reset nilai.

## Cara Menjalankan

```bash
node example.js
node example-02.js
node example-03.js
```
