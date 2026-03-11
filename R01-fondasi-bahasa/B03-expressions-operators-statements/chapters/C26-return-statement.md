# C26 - [14.10] return Statement

## Tujuan

Bab ini bertujuan memahami `return` sebagai mekanisme keluar dari function dan mengirim hasil.

## Kenapa Bab Ini Penting

`return` menentukan kontrak fungsi: nilai apa yang keluar, kapan fungsi berhenti, dan bagaimana caller memakainya.

## Konsep Inti

### 1. `return` Mengakhiri Eksekusi Function

```js
function add(a, b) {
  return a + b;
}
```

### 2. Tanpa `return`, Fungsi Menghasilkan `undefined`

```js
function noop() {}
```

### 3. Early Return Membantu Struktur Kondisi

Gunakan guard clause untuk menghindari nested `if` dalam.

### 4. `return` Hanya Valid di Function Body

Di top-level script biasa, `return` tidak valid.

## Praktik yang Direkomendasikan

- Definisikan output fungsi dengan jelas.
- Gunakan early return untuk kasus invalid/input khusus.
- Hindari return type campur-campur tanpa alasan kuat.

## Kesalahan Umum

- Lupa `return` pada branch tertentu.
- Return shape tidak konsisten antar cabang.
- Menulis side effect berat sebelum validasi input.

## Checkpoint Cepat

1. Apa hasil fungsi tanpa `return`?
2. Kenapa early return mempermudah keterbacaan?
3. Risiko apa jika return type tidak konsisten?

## Analogi Singkat

Return itu seperti mengakhiri tugas lalu langsung membawa hasilnya kembali ke pemanggil. Setelah `return`, sisa langkah di fungsi yang sama tidak lagi diteruskan.

## Ringkasan

- `return` menutup eksekusi function dan memberi nilai ke caller.
- Early return membantu menjaga alur tetap rata.
- Kontrak return yang konsisten penting untuk maintainability.

## Visual Map

![C26 - [14.10] return Statement Map](../assets/C26-return-statement-map.svg)

## Contoh Runnable

- Lihat contoh: ../examples/C26-return-statement/example.js
- Panduan: ../examples/C26-return-statement/README.md
