# 04 - Operators

## Tujuan Pembelajaran

Setelah mempelajari bab ini, pembaca dapat:
- menggunakan operator dasar untuk perhitungan dan perbandingan
- memahami hasil ekspresi logika sederhana
- menulis ekspresi yang lebih jelas dan mudah dibaca

## Konsep Utama

- arithmetic operators (`+`, `-`, `*`, `/`, `%`)
- comparison operators (`===`, `!==`, `>`, `<`, `>=`, `<=`)
- logical operators (`&&`, `||`, `!`)
- assignment operators (`=`, `+=`, `-=`, `*=`, `/=`)

## Penjelasan

Operator adalah simbol untuk melakukan operasi pada nilai.

Kelompok yang paling sering dipakai di tahap awal:
- arithmetic: menghitung nilai angka
- comparison: membandingkan dua nilai dan menghasilkan boolean
- logical: menggabungkan atau membalik kondisi boolean
- assignment: memberi atau memperbarui nilai variabel

Utamakan `===` dan `!==` untuk perbandingan agar hasil lebih konsisten dan mudah diprediksi.

## Contoh Kode

### Contoh 1 - Dasar Arithmetic dan Comparison

```javascript
const a = 10
const b = 3

console.log(a + b)   // 13
console.log(a - b)   // 7
console.log(a * b)   // 30
console.log(a / b)   // 3.333...
console.log(a % b)   // 1

console.log(a > b)   // true
console.log(a === b) // false
```

### Contoh 2 - Logical Operator

```javascript
const isLoggedIn = true
const hasSubscription = false

console.log(isLoggedIn && hasSubscription) // false
console.log(isLoggedIn || hasSubscription) // true
console.log(!hasSubscription)              // true
```

### Contoh 3 - Mini Kasus: Update Nilai

```javascript
let score = 50
score += 10  // 60
score *= 2   // 120
score -= 20  // 100

const passed = score >= 75
console.log(score)  // 100
console.log(passed) // true
```

## Analogi Singkat (Opsional)

Operator seperti tombol fungsi di kalkulator. Setiap tombol punya tugas berbeda: menghitung, membandingkan, atau menggabungkan hasil keputusan.

## Eksperimen Kode

Ubah nilai `x` dan `y`, lalu amati hasil setiap ekspresi.

```javascript
let x = 8
let y = 2

console.log(x * y)
console.log(x >= y)
console.log((x > 5) && (y < 5))

x -= 3
console.log(x)
```

Pertanyaan refleksi:
1. Kenapa hasil `x >= y` berupa `true` atau `false`?
2. Apa beda `x = x - 3` dan `x -= 3`?

## Cakupan dan Batasan

- Dibahas di bab ini: operator dasar untuk perhitungan dan logika.
- Tidak dibahas di bab ini: precedence lanjutan dan coercion kompleks.

## Latihan

1. Buat dua variabel angka dan tampilkan hasil `+`, `-`, `*`, `/`.
2. Tulis dua perbandingan yang menghasilkan `true` dan `false`.
3. Gunakan `&&` atau `||` untuk menggabungkan dua kondisi.

## Ringkasan

- Operator dipakai untuk menghitung, membandingkan, dan menyusun logika.
- Operator comparison menghasilkan nilai boolean.
- Gunakan operator assignment untuk update nilai dengan singkat.
