# C31 - [14.15] try Statement

## Tujuan

Bab ini bertujuan memahami struktur `try...catch...finally` untuk menangani error runtime secara terkontrol.

## Kenapa Bab Ini Penting

Tanpa penanganan error yang tepat, aplikasi mudah berhenti total saat satu operasi gagal.

## Konsep Inti

### 1. `try` Menjalankan Kode Berisiko

### 2. `catch` Menangani Error

```js
try {
  risky();
} catch (error) {
  handle(error);
}
```

### 3. `finally` Selalu Jalan

`finally` cocok untuk cleanup resource.

### 4. Error Bisa Dilempar Ulang

Setelah logging/transformasi, error dapat di-throw lagi jika perlu.

## Praktik yang Direkomendasikan

- Batasi area `try` agar fokus dan kecil.
- Tangani hanya error yang memang bisa dipulihkan.
- Gunakan `finally` untuk cleanup konsisten.

## Kesalahan Umum

- `try` terlalu besar sehingga root cause kabur.
- Menelan semua error tanpa logging.
- Menganggap `finally` hanya jalan saat error.

## Checkpoint Cepat

1. Kapan `finally` dijalankan?
2. Kenapa area `try` sebaiknya kecil?
3. Kapan error sebaiknya dilempar ulang?

## Analogi Singkat

`try...catch...finally` itu seperti prosedur kerja teknisi: coba jalankan proses, tangani jika gagal, lalu tetap rapikan area kerja pada akhirnya. Susunan ini membantu program tetap terkontrol saat sesuatu berjalan tidak sesuai rencana.

## Analogi

- Intuisi Singkat: Try/catch/finally menangani kegagalan sambil menjaga cleanup.
- Analogi: Seperti prosedur teknisi: coba jalankan, tangani gagal, lalu rapikan.
- Batas Analogi: `finally` tetap jalan meskipun ada `return` atau `throw`.

## Ringkasan

- `try/catch/finally` memberi kontrol alur saat error terjadi.
- Penanganan error yang baik meningkatkan stabilitas program.
- Scope `try` yang tepat mempercepat diagnosis bug.

## Visual Map

![C31 - [14.15] try Statement Map](../assets/C31-try-statement-map.svg)

## Contoh Runnable

- Lihat contoh: ../examples/C31-try-statement/example.js
- Panduan: ../examples/C31-try-statement/README.md
