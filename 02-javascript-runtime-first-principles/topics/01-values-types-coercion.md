# Values, Types, dan Coercion

## Tujuan Pembelajaran

Setelah mempelajari topik ini, pembaca dapat:
- membedakan nilai primitive dan reference pada level runtime reasoning
- memprediksi coercion dasar pada operator yang umum dipakai
- memilih perbandingan yang aman (`===`) untuk menghindari bug logika

## Konsep Utama

- value dan type di JavaScript
- primitive vs reference
- implicit coercion vs explicit conversion
- perbedaan `==` dan `===`

## Penjelasan

Pada runtime JavaScript, perilaku program sangat dipengaruhi jenis nilai yang diproses.

Dua kategori besar:
- primitive: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`
- reference: `object`, `array`, `function`

Coercion adalah perubahan tipe nilai:
- implicit: terjadi otomatis karena operator/konteks
- explicit: dilakukan sengaja oleh developer (`Number()`, `String()`, `Boolean()`)

Untuk perbandingan, gunakan `===` sebagai default karena tidak melakukan coercion implisit.

## Contoh Kode

### Contoh 1 - Perilaku Operator terhadap Coercion

```javascript
console.log("5" + 1) // "51"
console.log("5" - 1) // 4
console.log("10" * 2) // 20
```

### Contoh 2 - `==` vs `===`

```javascript
console.log(0 == false)  // true
console.log(0 === false) // false

console.log("" == 0)  // true
console.log("" === 0) // false
```

### Contoh 3 - Mini Kasus: Normalisasi Input Angka

```javascript
const rawInput = "42"
const score = Number(rawInput)

if (Number.isNaN(score)) {
  console.log("Input tidak valid")
} else {
  console.log("Nilai valid:", score)
  console.log("Lulus:", score >= 75)
}
```

## Analogi Singkat (Opsional)

Tipe data seperti label kontainer. Saat operator tertentu dipakai, JavaScript bisa memindahkan isi ke kontainer lain secara otomatis jika aturan coercion mengharuskannya.

## Eksperimen Kode

Ubah kombinasi nilai berikut dan prediksi output sebelum menjalankan.

```javascript
console.log(Boolean("0"))
console.log(Boolean(""))
console.log(Number("15"))
console.log(Number("abc"))
```

Pertanyaan refleksi:
1. Kenapa `Boolean("0")` bernilai `true`?
2. Kapan lebih aman memakai conversion eksplisit daripada mengandalkan coercion?

## Common Misconception (Opsional)

- `==` bukan versi singkat dari `===`; keduanya punya aturan perilaku berbeda.
- `const` tidak membuat object menjadi immutable; yang tidak bisa berubah adalah binding variabelnya.

## Cakupan dan Batasan

- Dibahas di topik ini: coercion dasar untuk reading runtime behavior.
- Tidak dibahas di topik ini: abstract operation detail dari ECMAScript spec.

## Latihan

1. Buat 4 ekspresi yang memicu coercion dan prediksi outputnya.
2. Ubah 4 ekspresi itu agar memakai conversion eksplisit.
3. Bandingkan hasil sebelum dan sesudah conversion eksplisit.

## Ringkasan

- Runtime behavior JavaScript sangat dipengaruhi type dan coercion.
- `===` lebih aman sebagai default untuk perbandingan.
- Conversion eksplisit membuat intent kode lebih jelas dan mudah diprediksi.

## Lanjut Setelah Ini

- [02-scope-hoisting.md](./02-scope-hoisting.md)
