# Example C25

Contoh runnable untuk bab **C25 - break Statement**.

## Tujuan Example

Folder ini menunjukkan bagaimana `break` menghentikan loop atau `switch` lebih awal ketika kondisi tertentu sudah terpenuhi.

## Daftar File

- `example.js` menunjukkan `break` pada loop dan `switch`.
- `example-02.js` menunjukkan `break` pada nested loop.
- `example-03.js` menunjukkan `break` pada `while`.

## Penjelasan Per File

### `example.js`

File utama ini memperlihatkan dua konteks berbeda:

- `break` pada loop `for`
- `break` pada `switch`

Di loop, `break` dipakai saat `i === 4`, sehingga iterasi langsung berhenti tanpa melanjutkan nilai berikutnya.  
Di `switch`, `break` mencegah jatuh ke `case` selanjutnya.

### `example-02.js`

Contoh ini memakai nested loop:

```js
if (j === 1) break;
```

Poin pentingnya: `break` default hanya keluar dari loop terdalam, bukan seluruh struktur loop di luar.

### `example-03.js`

File ini menunjukkan pola `while (true)` dengan kondisi berhenti eksplisit:

```js
if (x === 3) break;
```

Contoh ini berguna karena banyak loop dunia nyata memang tidak selalu berhenti lewat kondisi di header loop.

## Catatan Belajar

- `break` menghentikan struktur yang sedang aktif saat itu.
- Pada nested loop, selalu cek loop mana yang benar-benar dihentikan.
- Di `switch`, lupa `break` bisa mengubah perilaku program secara signifikan.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`
