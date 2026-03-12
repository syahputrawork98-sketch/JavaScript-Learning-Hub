# Example C08

Contoh runnable untuk bab **C08 - Additive Operators**.

## Tujuan Example

Folder ini membantu pembaca melihat bahwa `+` dan `-` punya perilaku berbeda, terutama ketika string ikut terlibat.

## Daftar File

- `example.js` membandingkan penjumlahan, pengurangan, dan coercion string pada operator aditif.
- `example-02.js` memperkuat urutan evaluasi pada kombinasi string dan number.
- `example-03.js` menunjukkan pendekatan aman dengan konversi eksplisit.

## Penjelasan Per File

### `example.js`

File utama ini menampilkan dua wajah operator aditif:

```js
10 + 5
10 - 5
'10' + 5
'10' - 5
```

Di sini pembaca bisa melihat bahwa:

- `+` bisa berarti penjumlahan atau concatenation
- `-` selalu memaksa arah yang lebih numerik

Bagian:

```js
1 + 2 + '3'
'1' + 2 + 3
```

juga penting karena urutan evaluasi mengubah hasil akhir.

### `example-02.js`

Contoh ini memperkuat coercion secara lebih fokus:

```js
'5' + 1 + 1
'5' - 1 - 1
1 + '5' + 1
```

Tujuannya agar pembaca tidak hanya tahu hasilnya, tetapi mulai peka terhadap kapan expression berpindah menjadi string concatenation.

### `example-03.js`

File ini menunjukkan pendekatan yang lebih aman:

```js
const a = Number('10');
const b = Number('20');
console.log(a + b);
```

Daripada bergantung pada coercion implisit, nilai diubah dulu secara eksplisit agar maksud program lebih jelas.

## Catatan Belajar

- `+` adalah salah satu operator paling sering memicu kebingungan coercion.
- Jika tujuanmu murni penjumlahan, konversi eksplisit sering lebih aman.
- Saat membaca expression campuran string dan number, perhatikan urutan evaluasinya.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
