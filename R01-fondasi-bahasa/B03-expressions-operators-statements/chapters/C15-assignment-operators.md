# C15 - [13.15] Assignment Operators

## Tujuan

Bab ini bertujuan memahami assignment operator sederhana dan gabungan (`=`, `+=`, `-=`, dll).

## Kenapa Bab Ini Penting

Assignment adalah operasi paling sering dalam program.

Tanpa disiplin assignment yang jelas, state program sulit ditelusuri saat debugging.

## Konsep Inti

### 1. Assignment Dasar

```js
let total = 10;
total = 15;
```

### 2. Compound Assignment

```js
let points = 10;
points += 5; // 15
points *= 2; // 30
```

### 3. Assignment Adalah Expression

```js
let a;
let b = (a = 5);
```

### 4. Destructuring Assignment (Pengenalan)

```js
const [x, y] = [1, 2];
const { id } = { id: 10 };
```

## Praktik yang Direkomendasikan

- Hindari assignment chain panjang yang sulit dibaca.
- Pakai destructuring saat meningkatkan kejelasan, bukan sekadar gaya.
- Bedakan mutation state yang disengaja dan tidak sengaja.

## Kesalahan Umum

- Menulis assignment dalam kondisi tanpa sadar (`if (x = 1)`).
- Menumpuk banyak assignment satu baris.
- Menggunakan destructuring berlebihan pada struktur kompleks.

## Checkpoint Cepat

1. Kenapa assignment disebut expression?
2. Apa risiko assignment di dalam kondisi `if`?
3. Kapan compound assignment membantu keterbacaan?

## Analogi Singkat

Assignment operator itu seperti menulis hasil terbaru ke papan catatan kerja. Begitu nilai dihitung, hasilnya disimpan ke target yang valid agar bisa dipakai lagi setelahnya.

## Ringkasan

- Assignment mengubah binding/state dan menghasilkan nilai.
- Compound assignment mempersingkat operasi umum.
- Kejelasan intent assignment penting untuk maintainability.

## Visual Map

![C15 - [13.15] Assignment Operators Map](../assets/C15-assignment-operators-map.svg)

## Contoh Runnable

- Lihat contoh: ../examples/C15-assignment-operators/example.js
- Panduan: ../examples/C15-assignment-operators/README.md
