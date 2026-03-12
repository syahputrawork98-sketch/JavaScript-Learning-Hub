# Example C13

Contoh runnable untuk bab **C13 - Binary Logical Operators**.

## Tujuan Example

Folder ini membantu pembaca memahami hasil operand dari `&&`, `||`, dan `??`, bukan hanya hasil boolean semata.

## Daftar File

- `example.js` membandingkan `&&`, `||`, dan `??`.
- `example-02.js` fokus pada `||` vs `??`.
- `example-03.js` menunjukkan pola guard lama dengan `&&`.

## Penjelasan Per File

### `example.js`

File utama ini menunjukkan bahwa operator logika JavaScript sering mengembalikan operand asli:

```js
'A' && 'B'
'' || 'fallback'
0 ?? 10
null ?? 10
```

Poin pentingnya:

- `&&` memilih berdasarkan truthiness
- `||` memilih fallback berdasarkan truthiness
- `??` memilih fallback hanya untuk nilai nullish

### `example-02.js`

Contoh ini dibuat lebih fokus:

```js
const qty = 0;
console.log('qty || 10 =', qty || 10);
console.log('qty ?? 10 =', qty ?? 10);
```

Ini adalah kasus nyata yang sangat sering memicu bug default value.

### `example-03.js`

File ini menunjukkan pola guard lama:

```js
const email = user && user.profile && user.profile.email;
```

Walaupun sekarang ada optional chaining, pola ini masih penting dipahami karena sering muncul di kode lama atau basis kode tertentu.

## Catatan Belajar

- Jangan paksa semua operator logika dibaca sebagai `true`/`false` murni.
- `||` dan `??` tampak mirip, tetapi tujuannya berbeda.
- Pahami guard style lama agar kamu tetap bisa membaca codebase JavaScript yang lebih tua.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
