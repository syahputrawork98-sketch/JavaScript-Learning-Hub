# C06 - [13.6] Exponentiation Operator

## Tujuan

Bab ini bertujuan memahami operator `**`, associativity-nya, dan kaitannya dengan unary operator.

## Kenapa Bab Ini Penting

Eksponensial sering dipakai pada rumus matematika, tetapi precedence dan associativity-nya mudah disalahpahami.

## Konsep Inti

### 1. Operator `**` untuk Pangkat

```js
2 ** 3; // 8
```

### 2. Right-Associative

```js
2 ** 3 ** 2; // 512 (2 ** (3 ** 2))
```

### 3. Interaksi dengan Unary Minus

```js
- (2 ** 2); // -4
// -2 ** 2; // syntax error
```

Unary sebelum basis eksponensial butuh grouping yang benar.

### 4. Alternatif Lama: `Math.pow`

`Math.pow(a, b)` masih valid, tetapi `**` umumnya lebih ringkas.

## Praktik yang Direkomendasikan

- Pakai tanda kurung saat expression eksponensial berantai.
- Hindari mencampur terlalu banyak operasi matematika tanpa grouping.
- Gunakan nama variabel antara untuk rumus panjang.

## Kesalahan Umum

- Mengira `2 ** 3 ** 2` dievaluasi dari kiri ke kanan.
- Lupa tanda kurung saat ada unary minus.
- Menulis rumus panjang tanpa pemisahan langkah.

## Checkpoint Cepat

1. Kenapa `2 ** 3 ** 2` bernilai 512?
2. Kenapa `-2 ** 2` tidak valid tanpa kurung?
3. Kapan lebih baik pecah rumus ke variabel antara?

## Analogi Singkat

Exponentiation bisa dibayangkan seperti pertumbuhan bertingkat yang efeknya cepat membesar. Walau terlihat sederhana, urutan pembacaannya tidak selalu sama dengan intuisi kalkulator biasa.

## Ringkasan

- `**` adalah operator pangkat yang right-associative.
- Grouping penting untuk mencegah salah evaluasi.
- Ekspresi matematika panjang perlu ditulis dengan fokus keterbacaan.

## Visual Map

![C06 - [13.6] Exponentiation Operator Map](../assets/C06-exponentiation-operator-map.svg)

## Contoh Runnable

- Lihat contoh: ../examples/C06-exponentiation-operator/example.js
- Panduan: ../examples/C06-exponentiation-operator/README.md
