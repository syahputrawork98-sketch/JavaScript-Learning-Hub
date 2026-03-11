# C17 - [14.1] Statement Semantics Overview

## Tujuan

Bab ini bertujuan memahami bagaimana statement mengatur alur eksekusi program, bukan sekadar menghasilkan nilai.

## Kenapa Bab Ini Penting

Di level statement, kita mulai membahas kontrol alur: kapan baris dijalankan, dilewati, dihentikan, atau melempar error.

Ini fondasi untuk memahami `if`, `loop`, `return`, `break`, dan `try/catch`.

## Konsep Inti

### 1. Statement Mengontrol Eksekusi

```js
if (isReady) {
  runTask();
}
```

### 2. Completion Flow (Normal vs Abrupt)

Secara praktik, statement bisa berakhir:

- normal (lanjut ke statement berikut)
- abrupt (mis. `return`, `throw`, `break`, `continue`)

### 3. Urutan Statement Menentukan Perilaku Program

Eksekusi bergerak top-down, kecuali diubah control flow statement.

### 4. Expression vs Statement

Expression menghasilkan nilai, statement mengatur jalannya program.

## Praktik yang Direkomendasikan

- Tulis statement dengan intent alur yang jelas.
- Pisahkan logika kondisi dari side effect bila perlu.
- Hindari flow rumit dalam satu blok panjang.

## Kesalahan Umum

- Mencampur terlalu banyak flow control tanpa struktur.
- Sulit melacak jalur eksekusi karena nested terlalu dalam.
- Mengabaikan jalur abrupt completion saat debugging.

## Checkpoint Cepat

1. Apa beda utama expression dan statement?
2. Contoh abrupt flow apa saja?
3. Kenapa urutan statement penting untuk hasil program?

## Analogi Singkat

Statement itu seperti sutradara yang tidak fokus menghasilkan barang, tetapi mengatur kapan adegan dimulai, dilewati, atau dihentikan. Ia menentukan jalannya program, bukan sekadar nilai yang keluar dari satu ekspresi.

## Analogi

- Intuisi Singkat: Statement mengatur alur eksekusi, bukan sekadar menghasilkan nilai.
- Analogi: Seperti sutradara yang menentukan adegan lanjut, lompat, atau berhenti.
- Batas Analogi: Statement punya completion flow normal vs abrupt.

## Ringkasan

- Statement adalah alat kontrol alur program.
- Flow bisa normal atau abrupt.
- Pemahaman ini jadi dasar semua bab statement berikutnya.

## Visual Map

![C17 - [14.1] Statement Semantics Overview Map](../assets/C17-statement-semantics-overview-map.svg)

## Contoh Runnable

- Lihat contoh: ../examples/C17-statement-semantics-overview/example.js
- Panduan: ../examples/C17-statement-semantics-overview/README.md
