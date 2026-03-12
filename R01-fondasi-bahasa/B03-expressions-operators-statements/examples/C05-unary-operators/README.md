# Example C05

Contoh runnable untuk bab **C05 - Unary Operators**.

## Tujuan Example

Folder ini memperlihatkan unary operator yang sering muncul di JavaScript: coercion numerik, negasi boolean, `typeof`, `void`, dan `delete`.

## Daftar File

- `example.js` merangkum banyak unary operator dalam satu file.
- `example-02.js` menyorot `typeof`, `void`, dan `delete` pada object.
- `example-03.js` menunjukkan unary plus sebagai konversi number cepat.

## Penjelasan Per File

### `example.js`

File ini sengaja menggabungkan beberapa unary operator agar pembaca bisa membandingkannya:

- `+'42'` untuk coercion ke number
- `-'5'` untuk negasi numerik
- `!0` dan `!!'ok'` untuk coercion boolean
- `typeof obj` untuk membaca tipe
- `void 0` untuk menghasilkan `undefined`
- `delete obj.active` untuk menghapus property object

Contoh ini bagus sebagai peta cepat karena menunjukkan bahwa satu operator sebelum operand bisa punya efek semantic yang sangat berbeda.

### `example-02.js`

File ini fokus pada object:

```js
console.log('typeof user:', typeof user);
console.log('void user.name:', void user.name);
console.log('delete user.name:', delete user.name);
```

Di sini pembaca bisa melihat bahwa:

- `typeof` membaca jenis nilai
- `void` mengabaikan hasil expression dan mengembalikan `undefined`
- `delete` berusaha menghapus property object

### `example-03.js`

Contoh ini memakai unary plus dalam helper kecil:

```js
const n = +value;
return Number.isNaN(n) ? null : n;
```

Tujuannya adalah menunjukkan bahwa unary plus memang sering dipakai di kode nyata, tetapi hasilnya tetap perlu divalidasi.

## Catatan Belajar

- Unary operator sering tampak kecil, tetapi efeknya besar terhadap tipe dan hasil evaluasi.
- `delete` bekerja untuk property object, bukan untuk semua jenis binding.
- Unary plus praktis, tetapi jangan sampai dipakai tanpa validasi saat input-nya tidak terkontrol.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
