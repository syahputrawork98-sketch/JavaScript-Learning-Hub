# Example C15

Contoh runnable untuk bab **C15 - Object, Array, dan Reference Behavior di Function**.

## Tujuan Example

Folder ini menunjukkan bahwa object dan array yang dilewatkan ke function tetap merujuk ke data yang sama, sehingga perubahan di dalam function dapat terlihat dari luar kecuali kita sengaja bekerja pada salinan.

## Daftar File

- `example.js` menunjukkan mutasi object di dalam function.
- `example-02.js` menunjukkan mutasi array di dalam function.
- `example-03.js` menunjukkan pola aman dengan membuat shallow copy array sebelum dimodifikasi.

## Penjelasan Per File

### `example.js`

Kasus utamanya:

```js
function updateUser(data) {
  data.name = 'Budi';
}
```

Function menerima reference ke object yang sama, sehingga perubahan pada `data.name` juga terlihat pada `user` di luar function.

### `example-02.js`

Perilaku serupa terjadi di sini:

```js
function addFruit(list) {
  list.push('mango');
}
```

Array juga bersifat reference-based untuk kasus dasar ini. Karena itu `push()` di dalam function mengubah array asli yang dikirim sebagai argumen.

### `example-03.js`

Pola pembandingnya:

```js
const copied = list.slice();
copied.push('mango');
```

Dengan membuat salinan lebih dulu, perubahan diarahkan ke array baru. Hasilnya `fruits` asli tetap aman, sedangkan `result` memuat versi yang sudah ditambah.

## Catatan Belajar

- "Dikirim ke function" tidak berarti data otomatis disalin penuh.
- Untuk kebutuhan dasar, shallow copy dengan `slice()` cukup membantu mencegah mutasi tak sengaja pada array.
- Topik reference behavior penting untuk debugging saat state tampak berubah dari tempat yang tidak terduga.

## Cara Menjalankan

```bash
node example.js
node example-02.js
node example-03.js
```
