# Example C06

Contoh runnable untuk bab **C06 - Exponentiation Operator**.

## Tujuan Example

Folder ini membantu pembaca memahami operator `**`, associativity-nya, dan contoh pemakaian praktis dalam rumus.

## Daftar File

- `example.js` menunjukkan pangkat dasar, right-associativity, dan perbandingan dengan `Math.pow`.
- `example-02.js` fokus pada associativity operator `**`.
- `example-03.js` memakai exponentiation dalam formula pertumbuhan sederhana.

## Penjelasan Per File

### `example.js`

File utama ini menunjukkan beberapa pola dasar:

```js
2 ** 3
2 ** 3 ** 2
Math.pow(base, power)
base ** power
```

Poin pentingnya:

- `**` dipakai untuk perpangkatan
- operator ini dibaca dari kanan untuk rantai tertentu
- ia lebih ringkas daripada `Math.pow(...)` untuk banyak kasus

Bagian `-(2 ** 2)` juga penting karena menegaskan bahwa grouping memengaruhi interpretasi expression.

### `example-02.js`

Contoh ini dibuat khusus untuk membandingkan:

```js
3 ** 2 ** 2
(3 ** 2) ** 2
```

Kedua expression ini tidak dibaca dengan cara yang sama. Ini salah satu bagian yang sering menipu jika hanya dilihat sekilas.

### `example-03.js`

File ini membawa operator `**` ke konteks yang lebih realistis:

```js
const amount = principal * rate ** years;
```

Jadi pembaca tidak hanya melihat operator secara abstrak, tetapi juga dalam rumus pertumbuhan atau compound effect sederhana.

## Catatan Belajar

- Saat ragu, tambahkan tanda kurung agar niatmu jelas.
- `**` terlihat sederhana, tetapi associativity-nya tetap perlu dipahami.
- Gunakan contoh rumus nyata agar operator ini tidak terasa seperti fitur yang berdiri sendiri.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
