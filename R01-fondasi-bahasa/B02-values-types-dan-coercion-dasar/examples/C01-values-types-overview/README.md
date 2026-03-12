# Example C01

Contoh runnable untuk bab **C01 - Values dan Types Overview**.

## Tujuan Example

Folder ini memberi gambaran besar tentang value, type, perbedaan primitive dan non-primitive, serta contoh coercion awal yang akan menjadi fondasi bab-bab berikutnya.

## Daftar File

- `example.js` memperlihatkan berbagai nilai, tipe dasarnya, perbedaan copy primitive vs reference object, dan contoh coercion operator.
- `example-02.js` mengelompokkan nilai ke primitive dan non-primitive.
- `example-03.js` menunjukkan bahwa operator yang berbeda bisa memberi hasil coercion yang berbeda.

## Penjelasan Per File

### `example.js`

Contoh utama ini menggabungkan beberapa ide dasar sekaligus:

- `typeof` pada nilai umum seperti number, string, boolean, `null`, dan object
- primitive yang disalin menghasilkan nilai terpisah
- object yang dibagikan lewat alias akan menunjuk reference yang sama
- operator `+` dan `-` bisa memicu coercion berbeda

Output penting yang perlu diperhatikan:

- `typeof null` tetap menghasilkan `'object'`, ini adalah perilaku historis JavaScript
- setelah `b = 99`, nilai `a` tetap `10` karena primitive disalin by value
- setelah `alias.score = 20`, object asli ikut berubah karena reference dibagi
- `'5' + 1` menjadi `'51'`, sedangkan `'5' - 1` menjadi `4`

### `example-02.js`

File ini membantu pembaca melihat daftar nilai yang lebih beragam:

```js
42, '42', true, null, undefined, Symbol('id'), 42n, { id: 1 }, [1, 2, 3]
```

Lalu tiap nilai dikelompokkan menjadi `primitive` atau `non-primitive`. Ini bagus untuk membangun mental model awal sebelum masuk ke equality dan coercion lebih detail.

### `example-03.js`

Contoh ini fokus pada pasangan nilai seperti:

```js
['5', 1]
['10', '2']
[true, 1]
[null, 1]
```

Setiap pasangan diuji dengan `+` dan `-`. Tujuannya agar pembaca melihat bahwa JavaScript tidak memperlakukan semua operator aritmetika dengan aturan coercion yang sama.

## Catatan Belajar

- Di buku ini, selalu biasakan melihat `value`, `type`, lalu konteks operatornya.
- Jika hasil operasi terasa aneh, jangan tebak. Cek dulu tipe masing-masing nilai.
- Contoh pada folder ini memang campuran, karena bab ini berfungsi sebagai peta awal seluruh `B02`.

## Jalankan

- `node example.js`
- `node example-02.js`
- `node example-03.js`

## Spec Alignment

Contoh pada folder ini terutama selaras dengan section ECMAScript berikut:

- `6.1`
- `7.1`
- `7.2`

Referensi chapter: `../../chapters/C01-values-dan-types-overview.md`.
Referensi mapping penuh: `../../docs/spec-mapping-56.md`.
