# Example C10

Contoh runnable untuk bab **C10 - Relational Operators**.

## Tujuan Example

Folder ini memperlihatkan operator perbandingan, operator `in`, dan `instanceof` pada contoh-contoh dasar yang dekat dengan praktik.

## Daftar File

- `example.js` memperlihatkan perbandingan angka/string, operator `in`, dan `instanceof`.
- `example-02.js` fokus pada `in` untuk cek property.
- `example-03.js` fokus pada `instanceof` dasar.

## Penjelasan Per File

### `example.js`

Contoh ini menggabungkan beberapa bentuk relational operator:

```js
5 > 3
5 <= 5
'apple' < 'banana'
'10' < '2'
```

Poin pentingnya:

- perbandingan number dan string tidak selalu punya intuisi yang sama
- string dibandingkan secara lexicographic, bukan numerik

Setelah itu file ini beralih ke:

```js
'name' in user
[] instanceof Array
new Date() instanceof Date
```

yang menunjukkan relational operator dalam konteks object dan prototype.

### `example-02.js`

Contoh ini dibuat ringkas agar fokus ke `in`:

```js
'name' in profile
'email' in profile
```

Tujuannya untuk menegaskan bahwa `in` mengecek keberadaan property, bukan apakah nilainya truthy atau tidak.

### `example-03.js`

File ini memperlihatkan `instanceof` pada constructor custom:

```js
function User() {}
const u = new User();
```

Lalu dicek:

```js
u instanceof User
u instanceof Object
```

Ini membantu pembaca memahami bahwa `instanceof` terkait dengan prototype chain.

## Catatan Belajar

- Hati-hati saat membandingkan string yang tampak seperti angka.
- `in` dan `instanceof` sama-sama “relational”, tetapi konteks penggunaannya berbeda jauh.
- Untuk pembaca awal, bedakan dulu dengan jelas antara “punya property”, “tipe runtime”, dan “nilai property”.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
