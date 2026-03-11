# C14 - [13.14] Conditional Operator

## Tujuan

Bab ini bertujuan memahami ternary operator (`kondisi ? a : b`) untuk ekspresi kondisional singkat.

## Kenapa Bab Ini Penting

Ternary sering dipakai di assignment, rendering, dan transformasi data.

Jika berlebihan, ternary justru menurunkan keterbacaan.

## Konsep Inti

### 1. Bentuk Dasar Ternary

```js
const label = score >= 75 ? 'Lulus' : 'Remedial';
```

### 2. Ternary adalah Expression

Bisa langsung dipakai di assignment atau return.

### 3. Nested Ternary Sulit Dibaca

```js
const level = n > 90 ? 'A' : n > 75 ? 'B' : 'C';
```

Valid tapi cepat membingungkan jika terlalu panjang.

### 4. Kapan Ganti ke `if/else`

Jika cabang mulai banyak atau perlu side effect, `if/else` biasanya lebih jelas.

## Praktik yang Direkomendasikan

- Pakai ternary untuk dua cabang sederhana.
- Hindari nested ternary panjang tanpa formatting rapi.
- Utamakan kode yang mudah direview.

## Kesalahan Umum

- Memakai ternary untuk logika kompleks.
- Mencampur side effect dalam kedua cabang tanpa alasan.
- Menurunkan keterbacaan demi singkatnya baris kode.

## Checkpoint Cepat

1. Kapan ternary lebih cocok daripada `if/else`?
2. Apa tanda nested ternary perlu direfaktor?
3. Kenapa ternary disebut expression, bukan statement?

## Analogi Singkat

Conditional operator itu seperti persimpangan dua jalur yang dipilih lewat satu syarat singkat. Praktis untuk kasus sederhana, tetapi cepat membingungkan jika cabangnya terlalu banyak.

## Ringkasan

- Ternary adalah expression kondisional ringkas.
- Cocok untuk kasus sederhana dua cabang.
- Keterbacaan tetap prioritas utama.

## Visual Map

![C14 - [13.14] Conditional Operator Map](../assets/C14-conditional-operator-map.svg)

## Contoh Runnable

- Lihat contoh: ../examples/C14-conditional-operator/example.js
- Panduan: ../examples/C14-conditional-operator/README.md
