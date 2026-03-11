# C24 - [14.8] continue Statement

## Tujuan

Bab ini bertujuan memahami `continue` untuk melewati iterasi saat ini dan lanjut ke iterasi berikutnya.

## Kenapa Bab Ini Penting

`continue` membantu mempersingkat loop saat ada kondisi skip yang jelas.

Jika dipakai sembarangan, alur loop jadi sulit dipahami.

## Konsep Inti

### 1. `continue` pada `for`

```js
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}
```

### 2. `continue` pada `while`

Perlu hati-hati agar update kondisi tetap terjadi sebelum `continue`.

### 3. Tujuan Utama: Skip Kasus Tertentu

Cocok untuk filtering cepat di dalam loop.

### 4. Hindari Flow Terselubung

Terlalu banyak `continue` bisa membuat jalur eksekusi sulit diikuti.

## Praktik yang Direkomendasikan

- Gunakan `continue` untuk kondisi skip yang sederhana.
- Jaga loop body tetap pendek.
- Pertimbangkan ekstraksi fungsi jika kondisi skip makin kompleks.

## Kesalahan Umum

- `continue` membuat update counter tidak berjalan (khusus pola while tertentu).
- Terlalu banyak titik `continue` dalam satu loop.
- Sulit membaca jalur normal vs jalur skip.

## Checkpoint Cepat

1. Kapan `continue` membantu keterbacaan?
2. Risiko `continue` pada `while` apa?
3. Kapan lebih baik ganti ke `if` biasa tanpa continue?

## Analogi Singkat

Continue itu seperti petugas sortir yang melewati item bermasalah lalu langsung lanjut ke item berikutnya. Ia tidak menghentikan seluruh loop, hanya memotong sisa langkah pada putaran saat ini.

## Ringkasan

- `continue` melewati iterasi aktif dan lanjut ke iterasi berikutnya.
- Cocok untuk kondisi skip ringan yang jelas.
- Gunakan dengan disiplin agar flow loop tetap mudah dipahami.

## Visual Map

![C24 - [14.8] continue Statement Map](../assets/C24-continue-statement-map.svg)

## Contoh Runnable

- Lihat contoh: ../examples/C24-continue-statement/example.js
- Panduan: ../examples/C24-continue-statement/README.md
