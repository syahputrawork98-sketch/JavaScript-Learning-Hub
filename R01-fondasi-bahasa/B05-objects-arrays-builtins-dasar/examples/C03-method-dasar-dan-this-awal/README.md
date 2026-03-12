# Example C03

Contoh runnable untuk bab **C03 - Method Dasar dan `this` Awal**.

## Tujuan Example

Folder ini membantu pembaca memahami bahwa method bukan hanya function biasa di dalam object, tetapi juga punya kaitan kuat dengan cara `this` ditentukan saat pemanggilan.

## Daftar File

- `example.js` menunjukkan method yang memperbarui state object lewat `this`.
- `example-02.js` menunjukkan method yang membaca property object dan mengembalikan string.
- `example-03.js` menunjukkan apa yang terjadi saat method dilepas dari object lalu dipanggil terpisah.

## Penjelasan Per File

### `example.js`

Contoh utamanya:

```js
counter.increment();
counter.increment();
```

Karena method dipanggil melalui `counter`, nilai `this` mengarah ke object `counter`. Itulah sebabnya `this.value += 1` benar-benar menaikkan nilai di object tersebut.

### `example-02.js`

File ini memakai pola:

```js
sayHello() {
  return `Halo, saya ${this.name}`;
}
```

Di sini `this.name` dibaca dari object `user`, sehingga method dapat menghasilkan output yang bergantung pada state object saat dipanggil.

### `example-03.js`

Kasus pentingnya:

```js
const fn = counter.increment;
fn();
```

Ketika method dipisahkan lalu dipanggil sebagai function biasa di mode strict, keterikatan context hilang. Akibatnya `this` tidak lagi menunjuk ke `counter`, dan operasi pada `this.value` memicu error.

## Catatan Belajar

- Nilai `this` sangat dipengaruhi oleh cara function dipanggil, bukan hanya tempat function ditulis.
- Method terasa aman selama dipanggil lewat object asalnya.
- Kasus detached method penting dipahami sebelum masuk ke callback, event handler, atau class method.

## Cara Menjalankan

```bash
node example.js
node example-02.js
node example-03.js
```
