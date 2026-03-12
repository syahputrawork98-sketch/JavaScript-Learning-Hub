# Example C05

Contoh runnable untuk bab **C05 - Array Literal, Index, Length, dan Update**.

## Tujuan Example

Folder ini memperkenalkan array sebagai daftar berurutan yang diakses lewat index numerik, sambil menunjukkan hubungan antara isi array, posisi elemen, dan properti `length`.

## Daftar File

- `example.js` menunjukkan akses elemen pertama dan pembacaan `length`.
- `example-02.js` menunjukkan pembaruan elemen array berdasarkan index.
- `example-03.js` menunjukkan apa yang terjadi saat membaca index yang tidak terisi.

## Penjelasan Per File

### `example.js`

Contoh dasarnya:

```js
console.log('first ->', fruits[0]);
console.log('length ->', fruits.length);
```

Index array dimulai dari `0`, bukan `1`. Karena itu elemen pertama selalu diakses lewat index `0`, sedangkan `length` memberi tahu berapa banyak slot yang sedang dianggap bagian dari array.

### `example-02.js`

Inti perilakunya:

```js
fruits[1] = 'grape';
```

Menulis ke index tertentu akan mengganti nilai pada posisi itu. Tidak perlu method khusus untuk update sederhana jika kita sudah tahu index yang ingin diubah.

### `example-03.js`

Kasus pentingnya:

```js
console.log('fruits[10] ->', fruits[10]);
console.log('length ->', fruits.length);
```

Membaca index di luar isi array menghasilkan `undefined`, tetapi tidak otomatis mengubah `length`. Ini membantu pembaca membedakan antara "slot tidak ada" dan "array berubah ukuran".

## Catatan Belajar

- Array tetap object khusus, tetapi cara membacanya berpusat pada index numerik.
- `length` adalah properti yang sangat penting untuk iterasi dan validasi batas index.
- Akses ke index yang kosong tidak error, tetapi menghasilkan `undefined`, jadi pengecekan hasil tetap perlu.

## Cara Menjalankan

```bash
node example.js
node example-02.js
node example-03.js
```
