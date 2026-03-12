# Example C09

Contoh runnable untuk bab **C09 - Shift Operators**.

## Tujuan Example

Folder ini membantu pembaca memahami pergeseran bit kiri/kanan, perbedaan signed dan unsigned right shift, serta efek samping truncation cepat.

## Daftar File

- `example.js` menunjukkan `<<`, `>>`, dan `>>>`.
- `example-02.js` fokus pada signed vs unsigned right shift untuk bilangan negatif.
- `example-03.js` menunjukkan truncation cepat memakai shift.

## Penjelasan Per File

### `example.js`

File utama ini menunjukkan tiga operator shift:

- `<<` untuk menggeser bit ke kiri
- `>>` untuk right shift dengan tanda
- `>>>` untuk unsigned right shift

Contoh:

```js
5 << 1
8 >> 1
-1 >>> 1
```

Poin pentingnya adalah operator ini bekerja di level bit integer 32-bit, bukan sekadar “pembagian” atau “perkalian” biasa walaupun hasil kasarnya kadang tampak mirip.

### `example-02.js`

Contoh ini sengaja membandingkan:

```js
-8 >> 1
-8 >>> 1
```

Ini penting karena perilakunya berbeda drastis ketika operand negatif. Pembaca bisa langsung melihat bahwa unsigned shift tidak mempertahankan tanda negatif.

### `example-03.js`

File ini menunjukkan pola yang kadang ditemui di kode lama:

```js
7.9 >> 0
-7.9 >> 0
```

Teknik ini sering dipakai untuk memangkas pecahan secara cepat, walaupun untuk code modern keterbacaan biasanya lebih penting daripada trik semacam ini.

## Catatan Belajar

- Shift operator sebaiknya dipakai ketika memang sedang berpikir dalam representasi bit.
- Jangan buru-buru menganggap shift sebagai pengganti pembagian/perkalian biasa.
- Teknik truncation dengan shift valid dipahami, tetapi tidak selalu layak dijadikan gaya default.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
