# Example C16

Contoh runnable untuk bab **C16 - Checklist Debugging Object, Array, dan Built-ins**.

## Tujuan Example

Folder ini menyatukan beberapa pola debugging dasar agar pembaca terbiasa memeriksa perubahan data, tipe hasil built-in, dan asumsi yang salah tentang mutasi array.

## Daftar File

- `example.js` menunjukkan logging sebelum dan sesudah mutasi object.
- `example-02.js` menunjukkan pengecekan tipe hasil built-in `join()`.
- `example-03.js` menunjukkan bahwa `filter()` menghasilkan array baru dan tidak mengubah array asal.

## Penjelasan Per File

### `example.js`

Contoh debugging paling dasarnya:

```js
console.log('before ->', user);
user.age = 21;
console.log('after ->', user);
```

Logging sebelum dan sesudah operasi membantu kita memastikan kapan data berubah. Ini sering lebih berguna daripada langsung menebak letak bug.

### `example-02.js`

Poin pentingnya:

```js
const result = fruits.join(', ');
console.log('typeof result ->', typeof result);
```

Kadang bug muncul karena kita salah mengira bentuk hasil built-in. `join()` menghasilkan string, bukan array, dan contoh ini mengingatkan pembaca untuk selalu memeriksa tipe output.

### `example-03.js`

Perbandingan utamanya:

```js
console.log('before filter ->', scores);
const passed = scores.filter((score) => score >= 70);
console.log('after filter original ->', scores);
```

Contoh ini membantu mematahkan asumsi bahwa semua built-in array memutasi data. `filter()` justru mempertahankan array awal dan membentuk hasil baru.

## Catatan Belajar

- Debugging yang baik sering dimulai dari observasi kecil yang jelas, bukan dugaan besar.
- Selalu cek apakah built-in mengembalikan array, string, boolean, atau nilai tunggal.
- Bedakan operasi yang memutasi data asli dan operasi yang hanya membentuk hasil baru.

## Cara Menjalankan

```bash
node example.js
node example-02.js
node example-03.js
```
