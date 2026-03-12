# Example C12

Contoh runnable untuk bab **C12 - Built-in Array `includes`, `some`, dan `every` Dasar**.

## Tujuan Example

Folder ini menunjukkan built-in array untuk menjawab pertanyaan boolean dasar: apakah suatu nilai ada, apakah ada minimal satu elemen yang memenuhi syarat, dan apakah semua elemen memenuhi syarat.

## Daftar File

- `example.js` menunjukkan pengecekan keberadaan nilai dengan `includes()`.
- `example-02.js` menunjukkan pengecekan kondisi minimum satu elemen dengan `some()`.
- `example-03.js` menunjukkan pengecekan kondisi semua elemen dengan `every()`.

## Penjelasan Per File

### `example.js`

Contoh intinya:

```js
fruits.includes('banana')
fruits.includes('orange')
```

`includes()` langsung menjawab apakah nilai tertentu ada di dalam array. Method ini cocok untuk kebutuhan membership check yang sederhana.

### `example-02.js`

Bagian pentingnya:

```js
scores.some((score) => score >= 80)
scores.some((score) => score < 30)
```

`some()` akan berhenti begitu menemukan satu elemen yang memenuhi kondisi. Karena itu hasilnya `true` jika ada minimal satu kecocokan.

### `example-03.js`

Perbandingan utamanya:

```js
scores.every((score) => score >= 60)
mixedScores.every((score) => score >= 60)
```

`every()` lebih ketat daripada `some()`. Hasilnya baru `true` jika seluruh elemen lulus kondisi yang sama.

## Catatan Belajar

- Ketiga built-in di folder ini sama-sama menghasilkan boolean.
- `includes()` cocok untuk nilai langsung, sedangkan `some()` dan `every()` cocok untuk aturan berbasis callback.
- Membedakan "ada satu yang cocok" dan "semua harus cocok" sangat penting saat membaca logika validasi.

## Cara Menjalankan

```bash
node example.js
node example-02.js
node example-03.js
```
