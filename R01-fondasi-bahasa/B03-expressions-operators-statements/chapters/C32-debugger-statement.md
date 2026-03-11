# C32 - [14.16] debugger Statement

## Tujuan

Bab ini bertujuan memahami `debugger` statement sebagai titik henti inspeksi runtime saat debugging lokal.

## Kenapa Bab Ini Penting

`debugger` membantu melihat state aktual program di titik kritis tanpa menebak-nebak.

## Konsep Inti

### 1. `debugger;` Menandai Breakpoint Programatik

Jika devtools aktif, eksekusi bisa pause di titik ini.

### 2. Tidak Mengubah Logika Bisnis

`debugger` adalah alat observasi, bukan solusi permanen.

### 3. Harus Dihapus dari Kode Produksi

Sisa `debugger` di production dapat mengganggu flow debugging atau tooling.

### 4. Kombinasikan dengan Logging Selektif

Gunakan `debugger` untuk inspeksi mendalam, logging untuk jejak eksekusi umum.

## Praktik yang Direkomendasikan

- Pakai `debugger` sementara saat analisis bug.
- Hapus sebelum merge/release.
- Gunakan lint rule/no-debugger untuk mencegah lolos ke main branch.

## Kesalahan Umum

- Membiarkan `debugger` tertinggal di codebase.
- Terlalu mengandalkan debugger tanpa memahami flow.
- Tidak menyiapkan reproduksi bug sebelum pause runtime.

## Checkpoint Cepat

1. Kapan `debugger` paling membantu?
2. Kenapa `debugger` tidak boleh tinggal di produksi?
3. Apa kombinasi ideal antara debugger dan logging?

## Analogi Singkat

Debugger statement itu seperti memberi tanda pause di titik tertentu agar runtime bisa diperiksa lebih dekat. Ia membantu observasi, bukan mengubah logika inti program.

## Ringkasan

- `debugger` adalah alat inspeksi runtime yang sangat praktis.
- Gunakan sementara dan terkontrol.
- Disiplin cleanup penting untuk kualitas codebase.

## Visual Map

![C32 - [14.16] debugger Statement Map](../assets/C32-debugger-statement-map.svg)

## Contoh Runnable

- Lihat contoh: ../examples/C32-debugger-statement/example.js
- Panduan: ../examples/C32-debugger-statement/README.md
