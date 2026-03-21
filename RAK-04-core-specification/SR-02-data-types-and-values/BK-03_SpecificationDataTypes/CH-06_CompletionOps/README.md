# CH-06: Completion Operations

Di CH-05 kita mengenal laporannya, sekarang kita akan mengenal "Staf Pembuat Laporan" tersebut. Spesifikasi memiliki algoritma khusus untuk menciptakan dan memodifikasi Completion Records (Clause 6.2.4.1 - 6.2.4.4).

---

## 1. NormalCompletion ( value )
Ini adalah fungsi internal yang paling sering dipanggil.
- **Tugas:** Menciptakan Record dengan `[[Type]]: ~normal~` dan `[[Value]]: value`.
- **Analog:** Memberikan stempel "LULUS" pada sebuah tahapan eksekusi.

## 2. ThrowCompletion ( value )
Digunakan saat terjadi kesalahan atau keyword `throw` dipanggil.
- **Tugas:** Menciptakan Record dengan `[[Type]]: ~throw~` dan `[[Value]]: value`.
- **Analog:** Membunyikan alarm darurat di dalam mesin.

## 3. ReturnCompletion ( value )
Digunakan saat keyword `return` dipanggil di dalam fungsi.
- **Tugas:** Menciptakan Record dengan `[[Type]]: ~return~` dan `[[Value]]: value`.
- **Analog:** Menyerahkan hasil kerja dan menandai bahwa tugas sudah selesai.

## 4. UpdateEmpty ( completionRecord, value )
Inilah algoritma "Penyelamat". Seringkali sebuah record memiliki nilai **~empty~** (misal: blok kode kosong). `UpdateEmpty` bertugas mengisi kekosongan tersebut dengan nilai baru jika memang diperlukan.

---

## Mengapa Arsitek Harus Tahu Ini?
Banyak kejutan di JavaScript (seperti nilai kembalian dari `eval()` atau perilaku `finally`) didasarkan pada bagaimana algoritma `UpdateEmpty` dan `NormalCompletion` berinteraksi. Memahami "Staf" internal ini membantu Anda mendesain pustaka atau *framework* yang memiliki kontrol alur yang sangat presisi.

---

## Tantangan Kecil
Jika sebuah fungsi kosong `function f() {}` dijalankan, apa hasil dari `NormalCompletion`-nya?
(Jawabannya: Record dengan `[[Value]]: undefined`. Karena meskipun kosongan, spesifikasi memastikan nilai default `undefined` diberikan sebelum fungsi berakhir).

---
> [!NOTE]
> **Key Takeaway:** Operasi Completion adalah cara spesifikasi berkomunikasi antar tahapan algoritma tentang status keberhasilan eksekusi.
