# C25 - [14.9] break Statement

## Tujuan

Bab ini bertujuan memahami `break` untuk menghentikan loop atau `switch` secara langsung.

## Kenapa Bab Ini Penting

`break` adalah kontrol flow penting untuk keluar lebih awal dari proses iterasi/cabang.

Jika salah pakai, alur program bisa berhenti di titik yang tidak diinginkan.

## Konsep Inti

### 1. `break` pada Loop

```js
for (let i = 0; i < 10; i++) {
  if (i === 3) break;
}
```

### 2. `break` pada `switch`

`break` mencegah fallthrough ke case berikutnya.

### 3. `break` Menghasilkan Abrupt Flow

Eksekusi keluar dari statement terdekat yang relevan.

### 4. Bisa Dipadukan dengan Label (Kasus Khusus)

Labelled break dipakai untuk keluar dari nested loop tertentu.

## Praktik yang Direkomendasikan

- Pakai `break` saat kondisi stop jelas.
- Tambahkan komentar jika keluar lebih awal punya alasan domain tertentu.
- Hindari `break` tersebar berlebihan dalam satu loop panjang.

## Kesalahan Umum

- Lupa `break` di `switch` sehingga terjadi fallthrough tak sengaja.
- Menghentikan loop terlalu cepat karena kondisi salah.
- Sulit men-debug karena banyak jalur `break`.

## Checkpoint Cepat

1. Apa beda `break` di loop dan di `switch`?
2. Kenapa `break` penting di `switch`?
3. Kapan labelled break layak dipertimbangkan?

## Analogi Singkat

Break itu seperti tombol stop darurat yang menghentikan proses yang sedang berlangsung di struktur terdekat. Karena efeknya langsung memotong alur, penggunaannya biasanya ingin sangat jelas.

## Ringkasan

- `break` menghentikan flow statement saat ini secara langsung.
- Kunci penggunaannya ada pada kondisi stop yang jelas.
- Gunakan secukupnya agar flow tetap mudah dilacak.

## Visual Map

![C25 - [14.9] break Statement Map](../assets/C25-break-statement-map.svg)

## Contoh Runnable

- Lihat contoh: ../examples/C25-break-statement/example.js
- Panduan: ../examples/C25-break-statement/README.md
