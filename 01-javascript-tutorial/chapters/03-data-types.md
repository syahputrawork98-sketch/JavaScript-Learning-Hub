# 03 - Data Types

## Tujuan Pembelajaran

Setelah mempelajari bab ini, pembaca dapat:
- mengenali tipe data dasar JavaScript
- memilih tipe data yang tepat untuk kasus sederhana
- membaca output nilai dengan lebih akurat

## Konsep Utama

- `number`
- `string`
- `boolean`
- `null`
- `undefined`

## Penjelasan

JavaScript punya beberapa tipe data dasar yang sering dipakai di awal belajar:

- `number`: angka, misalnya `10`, `3.14`
- `string`: teks, misalnya `"Halo"`
- `boolean`: `true` atau `false`
- `null`: nilai sengaja dikosongkan
- `undefined`: variabel ada, tapi belum diberi nilai

Memahami tipe data membantu kita menulis logika yang benar, misalnya saat membuat kondisi atau operasi perhitungan.

## Contoh Kode

```javascript
const score = 100          // number
const userName = "Budi"    // string
const isActive = true      // boolean
const middleName = null    // null
let note                 // undefined

console.log(score, typeof score)
console.log(userName, typeof userName)
console.log(isActive, typeof isActive)
console.log(middleName) // null
console.log(note)       // undefined
```

## Analogi Singkat (Opsional)

Tipe data seperti jenis kontainer. Angka masuk ke kontainer angka, teks masuk ke kontainer teks, dan `null`/`undefined` menandakan kontainer belum berisi nilai yang bisa dipakai.

## Eksperimen Kode

Ubah nilai variabel lalu cek hasil `typeof`.

```javascript
let value = 42
console.log(value, typeof value)

value = "42"
console.log(value, typeof value)

value = false
console.log(value, typeof value)
```

Pertanyaan refleksi:
1. Apa perbedaan `42` dan `"42"` saat dicek tipenya?
2. Kapan kamu akan memakai `null` dibanding membiarkan `undefined`?

## Cakupan dan Batasan

- Dibahas di bab ini: tipe data dasar untuk penggunaan harian.
- Tidak dibahas di bab ini: coercion lanjutan dan detail spesifikasi tipe data.

## Latihan

1. Buat 5 variabel: satu untuk tiap tipe data dasar di bab ini.
2. Cetak nilainya beserta `typeof` jika relevan.
3. Ubah satu variabel dari number ke string lalu cek perbedaannya.

## Ringkasan

- Data type menentukan bagaimana nilai direpresentasikan di program.
- Lima tipe dasar awal yang penting: number, string, boolean, null, undefined.
- Mengetahui tipe data membuat keputusan logika di kode menjadi lebih tepat.
