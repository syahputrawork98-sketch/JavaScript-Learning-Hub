# Example C03

Contoh runnable untuk bab **C03 - Left-Hand-Side Expressions**.

## Tujuan Example

Folder ini menunjukkan bentuk expression yang bisa menjadi target akses atau assignment, seperti property access, call result access, optional chaining, dan dynamic key.

## Daftar File

- `example.js` memperlihatkan dot access, bracket access, function call lalu access, dan assignment lewat key dinamis.
- `example-02.js` menunjukkan optional chaining untuk akses aman.
- `example-03.js` fokus pada assignment dengan dynamic key.

## Penjelasan Per File

### `example.js`

File utama ini membandingkan dua gaya access property:

```js
user.profile.name
user['profile']['name']
```

Keduanya sama-sama valid, tetapi dipakai dalam konteks yang sedikit berbeda. Dot notation nyaman untuk nama tetap, sedangkan bracket notation fleksibel untuk key dinamis.

Contoh ini juga menunjukkan hasil function call yang langsung diakses:

```js
getUser().profile.name
```

Lalu di akhir ada assignment lewat key variabel:

```js
const key = 'profile';
user[key].name = 'Syahputra';
```

### `example-02.js`

File ini memperkenalkan optional chaining:

```js
console.log(config.api?.timeout);
console.log(config.cache?.ttl);
```

Poin pentingnya:

- jika jalur property ada, nilainya dibaca seperti biasa
- jika jalurnya tidak ada, hasilnya `undefined`
- program tidak langsung error hanya karena property perantara tidak ditemukan

### `example-03.js`

Contoh ini fokus ke dynamic key assignment:

```js
const key = 'status';
const task = {};
task[key] = 'done';
```

Ini penting karena banyak operasi object nyata tidak selalu memakai nama property yang sudah ditulis statis di source code.

## Catatan Belajar

- Dot notation dan bracket notation sama-sama penting, bukan saling menggantikan.
- Optional chaining membuat access bertingkat lebih aman.
- Dynamic key sangat sering muncul saat bekerja dengan konfigurasi, mapping, atau data hasil API.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
