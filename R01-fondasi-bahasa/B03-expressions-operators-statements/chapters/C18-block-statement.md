# C18 - [14.2] Block Statement

## Tujuan

Bab ini bertujuan memahami block statement `{ ... }` sebagai unit pengelompokan statement dan scope.

## Kenapa Bab Ini Penting

Block adalah struktur dasar pada `if`, `for`, `while`, dan function body.

Salah paham block membuat bug scope (`let/const`) sering muncul.

## Konsep Inti

### 1. Block Mengelompokkan Statement

```js
{
  const message = 'inside block';
  console.log(message);
}
```

### 2. `let/const` Bersifat Block-Scoped

```js
{
  let x = 1;
}
// x tidak bisa diakses di sini
```

### 3. Block pada Control Flow

`if`, `else`, `for`, dan `while` umumnya memakai block agar aman dan jelas.

### 4. Block Kosong Valid, Tapi Jarang Berguna

Block kosong legal, namun biasanya menandakan logic belum lengkap.

## Praktik yang Direkomendasikan

- Gunakan block walau satu baris untuk menjaga konsistensi.
- Batasi scope variabel sedekat mungkin dengan penggunaannya.
- Kurangi nested block berlebihan.

## Kesalahan Umum

- Menganggap `let` sama seperti `var` di luar block.
- Menulis `if` tanpa block lalu keliru menambah baris berikutnya.
- Variabel scope terlalu luas sehingga mudah tertimpa.

## Checkpoint Cepat

1. Kenapa `let` di dalam block tidak bisa diakses dari luar?
2. Apa keuntungan memakai block walau statement cuma satu?
3. Kapan nested block mulai jadi masalah keterbacaan?

## Analogi Singkat

Block statement itu seperti map yang mengelompokkan beberapa lembar kerja menjadi satu bundel. Ia membantu memberi batas yang jelas, walau arah alurnya tetap ditentukan isi di dalamnya.

## Ringkasan

- Block statement mengelompokkan alur kode.
- `let/const` mengikuti batas block.
- Disiplin block membantu keterbacaan dan keamanan scope.

## Visual Map

![C18 - [14.2] Block Statement Map](../assets/C18-block-statement-map.svg)

## Contoh Runnable

- Lihat contoh: ../examples/C18-block-statement/example.js
- Panduan: ../examples/C18-block-statement/README.md
