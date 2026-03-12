# Example C04

Contoh runnable untuk bab **C04 - Update Expressions**.

## Tujuan Example

Folder ini membantu pembaca memahami perbedaan prefix dan postfix `++`/`--`, terutama saat operator update dipakai di dalam expression.

## Daftar File

- `example.js` membandingkan hasil prefix dan postfix serta update sederhana.
- `example-02.js` menunjukkan beda hasil saat operator update dipakai di expression.
- `example-03.js` menunjukkan update expression di loop.

## Penjelasan Per File

### `example.js`

File utama ini memperlihatkan perbedaan paling penting:

```js
let x = 1;
const prefix = ++x;

let y = 1;
const postfix = y++;
```

Hasil yang perlu diperhatikan:

- `prefix` berisi nilai **setelah** `x` ditambah
- `postfix` berisi nilai **sebelum** `y` ditambah

Lalu contoh ini menutup dengan update naik lalu turun:

```js
counter++;
counter--;
```

Tujuannya agar pembaca melihat bahwa update expression bisa berdiri sendiri sebagai statement, tidak selalu harus dipakai dalam expression yang lebih besar.

### `example-02.js`

File ini menaruh operator update langsung di dalam expression:

```js
console.log('++a + 1 =', ++a + 1);
console.log('b++ + 1 =', b++ + 1);
```

Di sinilah banyak kebingungan pemula muncul. Kedua baris terlihat mirip, tetapi hasilnya berbeda karena timing pengambilan nilainya berbeda.

### `example-03.js`

Contoh ini menunjukkan update expression dalam pola yang sangat umum:

```js
for (let i = 1; i <= 3; i++) {
  total += i;
}
```

Poin pentingnya bukan hanya `i++`, tetapi bagaimana update expression sering dipakai untuk menggerakkan iterasi secara bertahap.

## Catatan Belajar

- Prefix dan postfix sebaiknya dipahami lewat timing nilainya, bukan sekadar dihafal simbolnya.
- Jika expression mulai terasa membingungkan, pecah dulu ke beberapa baris.
- Dalam loop, `i++` paling sering dipakai karena alurnya mudah dibaca.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
