# Example C32

Contoh runnable untuk bab **C32 - debugger Statement**.

## Tujuan Example

Folder ini menjelaskan peran `debugger` sebagai alat inspeksi sementara saat debugging lokal.

## Daftar File

- `example.js` menunjukkan lokasi wajar untuk meletakkan `debugger` saat inspeksi flow.
- `example-02.js` memberi contoh pemakaian pada fungsi kalkulasi sederhana.
- `example-03.js` menggabungkan `debugger` dan logging saat inspeksi object.

## Penjelasan Per File

### `example.js`

File utama ini menunjukkan bentuk yang realistis:

```js
// debugger;
```

Statement tersebut sengaja dikomentari agar contoh tetap aman dijalankan biasa, tetapi pembaca tetap tahu lokasi yang wajar untuk memasangnya saat ingin pause runtime.

### `example-02.js`

Contoh ini menaruh `debugger` pada fungsi kalkulasi sederhana. Tujuannya adalah menunjukkan bahwa debugger sering dipakai di titik tengah perhitungan untuk memeriksa nilai sementara.

### `example-03.js`

File ini menggabungkan debugger dan logging:

```js
// debugger;
console.log('order id:', order.id);
```

Ini mencerminkan praktik nyata: kadang pause runtime dipakai bersama output log agar inspeksi data lebih lengkap.

## Catatan Belajar

- `debugger` paling berguna saat devtools atau debugger runtime aktif.
- Statement ini biasanya bersifat sementara selama investigasi bug.
- Logging dan debugger sering saling melengkapi, bukan saling menggantikan.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
