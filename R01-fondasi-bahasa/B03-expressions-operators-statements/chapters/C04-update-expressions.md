# C04 - [13.4] Update Expressions

## Tujuan

Bab ini bertujuan memahami operator `++` dan `--` pada bentuk prefix/postfix beserta hasil evaluasinya.

## Kenapa Bab Ini Penting

Perbedaan prefix dan postfix sering menimbulkan hasil tak terduga pada assignment, loop, dan expression chain.

## Konsep Inti

### 1. Prefix Mengubah Nilai Lalu Mengembalikan Nilai Baru

```js
let x = 1;
const a = ++x; // x=2, a=2
```

### 2. Postfix Mengembalikan Nilai Lama Lalu Mengubah Nilai

```js
let y = 1;
const b = y++; // b=1, y=2
```

### 3. Target Update Harus Valid

```js
let count = 0;
count++;

// 1++;      // invalid
// (count+1)++; // invalid
```

### 4. Hindari Update Rumit dalam Satu Baris

Keterbacaan menurun saat update expression dicampur dengan operasi lain secara berlebihan.

## Praktik yang Direkomendasikan

- Pisahkan update dan perhitungan jika expression mulai ambigu.
- Gunakan prefix/postfix secara konsisten sesuai intent.
- Di loop sederhana, gunakan update eksplisit yang mudah dibaca.

## Kesalahan Umum

- Mengira prefix dan postfix setara.
- Menulis expression update pada target yang bukan reference.
- Menumpuk `++` dalam expression kompleks.

## Checkpoint Cepat

1. Apa beda hasil `a = ++x` dan `a = x++`?
2. Kenapa `1++` invalid?
3. Kapan lebih baik mengganti `x++` dengan `x = x + 1`?

## Analogi Singkat

Update expression itu seperti melihat angka pada meter lalu langsung menambah atau menguranginya saat itu juga. Yang sering mengecoh adalah kapan nilainya dibaca dan kapan perubahan akhirnya dianggap terjadi.

## Ringkasan

- Prefix dan postfix punya urutan evaluasi berbeda.
- Update expression hanya valid pada target reference yang sah.
- Keterbacaan lebih penting daripada ekspresi singkat tapi membingungkan.

## Visual Map

![C04 - [13.4] Update Expressions Map](../assets/C04-update-expressions-map.svg)

## Contoh Runnable

- Lihat contoh: ../examples/C04-update-expressions/example.js
- Panduan: ../examples/C04-update-expressions/README.md
