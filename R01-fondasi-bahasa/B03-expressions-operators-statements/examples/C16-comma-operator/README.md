# Example C16

Contoh runnable untuk bab **C16 - Comma Operator**.

## Tujuan Example

Folder ini membantu pembaca membedakan comma operator sebagai expression dari koma biasa sebagai separator syntax.

## Daftar File

- `example.js` menunjukkan hasil akhir comma operator dan membedakannya dari koma separator array.
- `example-02.js` menunjukkan bahwa comma operator mengevaluasi beberapa expression lalu mengembalikan yang terakhir.
- `example-03.js` menunjukkan alternatif yang lebih mudah dibaca.

## Penjelasan Per File

### `example.js`

Contoh utama ini memperlihatkan:

```js
const result = (1, 2, 3);
```

Hasil akhirnya adalah `3`, bukan array atau daftar nilai. Ini penting karena banyak pembaca awal tertukar antara comma operator dan koma sebagai pemisah elemen.

Bagian berikut:

```js
const normal = [1, 2, 3];
```

disertakan agar pembandingnya terlihat jelas.

### `example-02.js`

File ini menegaskan pola evaluasi bertahap:

```js
const out = (x += 1, x += 1, x += 1, x);
```

Semua expression di dalam koma tetap dievaluasi, tetapi yang dikembalikan adalah expression terakhir.

### `example-03.js`

Contoh ini sengaja menunjukkan versi yang lebih mudah dibaca:

```js
let a = 1;
a += 1;
a += 1;
```

Tujuannya bukan menolak comma operator sepenuhnya, tetapi menunjukkan bahwa banyak kasus lebih enak dipahami jika dipisah menjadi statement biasa.

## Catatan Belajar

- Comma operator valid, tetapi mudah disalahpahami.
- Bedakan jelas antara operator dan separator syntax.
- Jika tujuan utamanya keterbacaan, statement terpisah sering lebih baik.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
