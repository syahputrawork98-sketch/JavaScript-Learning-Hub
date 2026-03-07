# 07 - Functions

## Tujuan Pembelajaran

Setelah mempelajari bab ini, pembaca dapat:
- membuat fungsi untuk menghindari pengulangan kode
- menggunakan parameter dan return value
- menulis function declaration dan arrow function sederhana

## Konsep Utama

- function declaration
- parameter
- return value
- arrow function dasar

## Penjelasan

Function adalah blok kode yang bisa dipanggil berulang.

Manfaat utama:
- kode lebih rapi
- logika bisa dipakai ulang
- perubahan lebih mudah karena cukup edit di satu tempat

Komponen penting:
- nama function
- parameter (input)
- return value (hasil)

Jika function tidak mengembalikan nilai secara eksplisit, hasilnya `undefined`.

## Contoh Kode

### Contoh 1 - Dasar Function Declaration

```javascript
function greet(name) {
  console.log("Halo,", name)
}

greet("Andi")
greet("Sita")
```

### Contoh 2 - Function dengan Return Value

```javascript
function add(a, b) {
  return a + b
}

const result1 = add(3, 4)
const result2 = add(10, 5)

console.log(result1) // 7
console.log(result2) // 15
```

### Contoh 3 - Mini Kasus: Arrow Function untuk Hitung Diskon

```javascript
const calculateTotal = (price, discountPercent) => {
  const discountAmount = price * (discountPercent / 100)
  return price - discountAmount
}

const finalPrice = calculateTotal(200000, 10)
console.log("Total bayar:", finalPrice) // 180000
```

## Analogi Singkat (Opsional)

Function seperti resep masakan. Kamu bisa pakai resep yang sama berkali-kali dengan bahan (parameter) berbeda untuk menghasilkan hasil yang diinginkan.

## Eksperimen Kode

Ubah parameter dan lihat perubahan hasil.

```javascript
function multiply(x, y) {
  return x * y
}

console.log(multiply(2, 3))
console.log(multiply(5, 6))
console.log(multiply(10, 0))
```

Pertanyaan refleksi:
1. Apa manfaat `return` dibanding langsung `console.log` di dalam function?
2. Apa yang terjadi jika function dipanggil tanpa argumen lengkap?

## Cakupan dan Batasan

- Dibahas di bab ini: function dasar untuk reuse logika sederhana.
- Tidak dibahas di bab ini: closure internals, `this` binding lanjutan, dan callback kompleks.

## Latihan

1. Buat function `subtract(a, b)` yang mengembalikan hasil pengurangan.
2. Buat arrow function `isEven(n)` yang mengembalikan `true` jika angka genap.
3. Panggil kedua function dengan beberapa input berbeda.

## Ringkasan

- Function dipakai untuk membungkus logika agar bisa dipakai ulang.
- Parameter adalah input, `return` adalah output.
- Arrow function cocok untuk bentuk function singkat.
