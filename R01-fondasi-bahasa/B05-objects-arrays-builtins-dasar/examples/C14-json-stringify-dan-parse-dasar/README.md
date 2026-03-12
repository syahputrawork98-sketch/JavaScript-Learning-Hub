# Example C14

Contoh runnable untuk bab **C14 - `JSON.stringify()` dan `JSON.parse()` Dasar**.

## Tujuan Example

Folder ini menunjukkan alur dasar pertukaran data antara object JavaScript dan representasi string JSON, termasuk proses serialisasi dan parsing balik ke object yang bisa dipakai lagi.

## Daftar File

- `example.js` menunjukkan pengubahan object menjadi string JSON dengan `JSON.stringify()`.
- `example-02.js` menunjukkan pengubahan string JSON menjadi object dengan `JSON.parse()`.
- `example-03.js` menunjukkan round-trip sederhana dari object ke JSON lalu kembali lagi.

## Penjelasan Per File

### `example.js`

Contoh utamanya:

```js
const text = JSON.stringify(user);
console.log('typeof text ->', typeof text);
```

`JSON.stringify()` menghasilkan string. Ini penting karena banyak pemula mengira hasilnya masih object hanya karena tampilannya mirip struktur data.

### `example-02.js`

Bagian pentingnya:

```js
const parsed = JSON.parse(text);
console.log('parsed.name ->', parsed.name);
```

`JSON.parse()` membangun kembali data JavaScript dari string JSON yang valid. Setelah diparse, property bisa diakses seperti object biasa.

### `example-03.js`

File ini memperlihatkan alur lengkap:

```js
const text = JSON.stringify(payload);
const parsed = JSON.parse(text);
```

Contoh round-trip ini membantu pembaca melihat bahwa data seperti array dan boolean ikut terbawa dalam proses serialisasi dasar.

## Catatan Belajar

- JSON string dan object JavaScript adalah dua bentuk yang berbeda, walaupun tampilannya sekilas mirip.
- `JSON.stringify()` dipakai saat data perlu dikirim atau disimpan sebagai teks.
- `JSON.parse()` dipakai saat teks JSON perlu diubah kembali menjadi data yang bisa diproses program.

## Cara Menjalankan

```bash
node example.js
node example-02.js
node example-03.js
```
