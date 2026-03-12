# Example C21

Contoh runnable untuk bab **C21 - Expression Statement**.

## Tujuan Example

Folder ini memperlihatkan expression yang dipakai sebagai statement, terutama ketika yang dibutuhkan adalah side effect-nya.

## Daftar File

- `example.js` menunjukkan assignment dan function call sebagai expression statement.
- `example-02.js` memperkuat expression statement yang memang mengubah state.
- `example-03.js` menunjukkan dead expression tanpa efek.

## Penjelasan Per File

### `example.js`

Contoh utama ini memperlihatkan dua bentuk expression statement yang paling umum:

- assignment seperti `total += 5`
- function call seperti `logResult(total)`

Lalu ada satu string literal berdiri sendiri:

```js
'teks ini dievaluasi tapi hasilnya tidak dipakai';
```

yang menunjukkan bahwa tidak semua expression statement benar-benar berguna.

### `example-02.js`

File ini fokus pada side effect:

```js
value += 2;
value *= 5;
```

Contoh ini menekankan bahwa expression statement sering dipakai bukan demi nilai hasil akhirnya, melainkan demi perubahan state.

### `example-03.js`

Contoh ini menunjukkan anti-pattern:

```js
42;
'hello';
```

Expression di atas valid, tetapi tidak punya efek apa-apa. Tujuannya adalah melatih pembaca membedakan expression statement yang berguna dan yang hanya menjadi noise.

## Catatan Belajar

- Expression statement umum dipakai saat ekspresi tersebut punya side effect.
- Assignment dan function call adalah bentuk yang paling sering muncul.
- Jika suatu expression tidak mengubah apa pun dan hasilnya tidak dipakai, biasanya ia tidak memberi nilai tambah.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
