# C21 - [14.5] Expression Statement

## Tujuan

Bab ini bertujuan memahami kapan expression berdiri sendiri sebagai statement.

## Kenapa Bab Ini Penting

Banyak baris kode JavaScript sebenarnya expression statement, misalnya assignment atau function call.

## Konsep Inti

### 1. Expression Bisa Jadi Statement

```js
count += 1;
logResult();
```

### 2. Tujuannya Biasanya Side Effect

Expression statement dipakai saat nilai balik tidak dipakai langsung.

### 3. Ada Ambiguitas Parser pada Awal Baris Tertentu

Contoh object literal di awal statement bisa ambigu tanpa konteks.

### 4. Beda dengan Declaration Statement

Declaration menambah binding baru, sedangkan expression statement mengeksekusi ekspresi.

## Praktik yang Direkomendasikan

- Gunakan expression statement untuk aksi yang jelas (call, assignment).
- Hindari expression statement "misterius" tanpa efek nyata.
- Pisahkan expression kompleks ke variabel antara bila perlu.

## Kesalahan Umum

- Menulis expression statement yang tidak berdampak (dead expression).
- Sulit membaca efek kode karena side effect tersembunyi.
- Mencampur terlalu banyak operasi dalam satu statement.

## Checkpoint Cepat

1. Contoh expression statement paling umum apa?
2. Kenapa nilai balik expression statement sering diabaikan?
3. Kapan expression statement sebaiknya dipecah?

## Analogi Singkat

Expression statement itu seperti menekan tombol aksi: yang penting efeknya terjadi, bukan nilai balik tombol itu. Fokusnya ada pada side effect yang dijalankan.

## Ringkasan

- Expression statement mengeksekusi expression sebagai aksi.
- Umumnya dipakai untuk side effect.
- Kejelasan efek lebih penting dari kepadatan baris.

## Visual Map

![C21 - [14.5] Expression Statement Map](../assets/C21-expression-statement-map.svg)

## Contoh Runnable

- Lihat contoh: ../examples/C21-expression-statement/example.js
- Panduan: ../examples/C21-expression-statement/README.md
