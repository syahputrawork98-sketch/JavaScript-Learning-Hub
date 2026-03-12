# Example C01

Contoh runnable untuk bab **C01 - Object Literal dan Property Access**.

## Tujuan Example

Folder ini menunjukkan cara membaca data dari object literal, kapan memakai dot notation atau bracket notation, dan kenapa nama property tertentu hanya aman diakses lewat tanda kurung siku.

## Daftar File

- `example.js` menunjukkan object literal dasar dan akses property dengan `.` serta `[]`.
- `example-02.js` menunjukkan perbedaan antara nama property dinamis dan property literal biasa.
- `example-03.js` menunjukkan akses property dengan nama yang tidak nyaman dipakai lewat dot notation.

## Penjelasan Per File

### `example.js`

Contoh utamanya:

```js
console.log('user.name ->', user.name);
console.log("user['age'] ->", user['age']);
```

File ini menegaskan bahwa dot notation cocok untuk nama property yang sederhana, sedangkan bracket notation tetap bisa membaca property yang sama saat nama property ditulis sebagai string.

### `example-02.js`

Perbandingan pentingnya ada di sini:

```js
console.log('user[fieldName] ->', user[fieldName]);
console.log('user.fieldName ->', user.fieldName);
```

`user[fieldName]` memakai isi variabel `fieldName`, sedangkan `user.fieldName` benar-benar mencari property bernama `"fieldName"`. Ini sering jadi sumber bug awal saat mulai bekerja dengan property dinamis.

### `example-03.js`

File ini menyorot kasus:

```js
settings['font-size']
settings.theme
```

Property seperti `'font-size'` tidak cocok dipakai dengan dot notation karena namanya mengandung tanda minus. Bracket notation menjadi pilihan aman untuk nama property yang tidak berbentuk identifier biasa.

## Catatan Belajar

- Object literal menyimpan pasangan key-value, dan cara aksesnya bergantung pada bentuk nama property.
- Dot notation nyaman untuk property name yang stabil dan sederhana.
- Bracket notation wajib dipahami untuk property name dinamis atau nama yang mengandung karakter khusus.

## Cara Menjalankan

```bash
node example.js
node example-02.js
node example-03.js
```
