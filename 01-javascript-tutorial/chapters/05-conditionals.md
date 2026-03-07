# 05 - Conditionals

## Tujuan Pembelajaran

Setelah mempelajari bab ini, pembaca dapat:
- menulis logika percabangan dengan `if`, `else if`, `else`
- memilih kapan memakai ternary operator
- membuat keputusan program berdasarkan kondisi boolean

## Konsep Utama

- `if`
- `else if`
- `else`
- ternary operator (`condition ? valueA : valueB`)

## Penjelasan

Conditional dipakai saat program perlu mengambil keputusan.

Struktur dasar:
- `if`: jalankan blok saat kondisi benar
- `else if`: cek kondisi tambahan jika kondisi sebelumnya salah
- `else`: jalankan blok default jika semua kondisi salah

Ternary operator berguna untuk keputusan sederhana dalam satu baris.

## Contoh Kode

### Contoh 1 - Dasar if else

```javascript
const age = 16

if (age >= 18) {
  console.log("Boleh daftar")
} else {
  console.log("Belum boleh daftar")
}

// Output: Belum boleh daftar
```

### Contoh 2 - if else if else Lengkap

```javascript
const score = 82
let grade = ""

if (score >= 90) {
  grade = "A"
} else if (score >= 80) {
  grade = "B"
} else if (score >= 70) {
  grade = "C"
} else {
  grade = "D"
}

console.log("Score:", score)
console.log("Grade:", grade)
// Output:
// Score: 82
// Grade: B
```

### Contoh 3 - Mini Kasus Lengkap: Diskon Belanja

```javascript
const totalBelanja = 250000
const isMember = true
let diskon = 0

if (isMember && totalBelanja >= 300000) {
  diskon = 0.15
} else if (isMember) {
  diskon = 0.1
} else if (totalBelanja >= 300000) {
  diskon = 0.05
} else {
  diskon = 0
}

const nominalDiskon = totalBelanja * diskon
const totalBayar = totalBelanja - nominalDiskon
const labelMember = isMember ? "Member" : "Non-member"

console.log("Status:", labelMember)
console.log("Total sebelum diskon:", totalBelanja)
console.log("Diskon (%):", diskon * 100)
console.log("Nominal diskon:", nominalDiskon)
console.log("Total bayar:", totalBayar)
```

## Analogi Singkat (Opsional)

Conditional seperti petugas gerbang dengan aturan. Jika syarat A terpenuhi masuk jalur A, jika tidak cek syarat B, dan jika semua gagal masuk jalur default.

## Eksperimen Kode

Ubah nilai `temperature` dan lihat cabang mana yang berjalan.

```javascript
const temperature = 30

if (temperature > 32) {
  console.log("Sangat panas")
} else if (temperature >= 25) {
  console.log("Hangat")
} else {
  console.log("Sejuk")
}

const advice = temperature >= 28 ? "Bawa air minum" : "Cuaca nyaman"
console.log(advice)
```

Pertanyaan refleksi:
1. Apa yang berubah jika `temperature` diisi `24`?
2. Kapan ternary lebih tepat daripada `if-else` biasa?

## Cakupan dan Batasan

- Dibahas di bab ini: percabangan kondisi dasar.
- Tidak dibahas di bab ini: pattern percabangan kompleks dan optimasi struktur kondisi.

## Latihan

1. Buat variabel `score`, lalu cetak grade sederhana (`A/B/C`) dengan `if-else`.
2. Buat variabel `isMember` lalu tentukan diskon dengan ternary.
3. Uji dengan beberapa nilai input berbeda.

## Ringkasan

- Conditional membuat program bisa memilih aksi berdasarkan kondisi.
- `if-else if-else` cocok untuk beberapa cabang keputusan.
- Ternary cocok untuk keputusan singkat dan sederhana.
