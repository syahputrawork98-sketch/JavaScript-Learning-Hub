# CH-01: Phase 1: Parsing & Instantiation

> **"Sebelum energi dialirkan, Hub harus memastikan seluruh jalur kabel terpasang dengan benar. `Phase 1` adalah 'Persiapan Sirkuit' (Parsing & Instantiation)—tahap di mana blueprint dibaca dan slot memori dialokasikan tanpa menjalankan kode."**

*Pemetaan ECMA-262: Clause 16.2.1.5.1 & 16.2.1.5.2*

## 1. Mental Model: "Setting Up the Rails"

Tahap ini terbagi menjadi dua langkah kritis:
1.  **Parsing (Construction)**: Hub membaca kode dari atas ke bawah. Jika ada kesalahan sintaksis atau `import` yang merujuk ke file yang tidak ada, Hub akan berhenti di sini.
2.  **Instantiation (Linking)**: Hub menciptakan "Slot Memori" untuk semua variabel yang diekspor. Belum ada nilai yang diisi (kecuali fungsi), tetapi kabel-kabel sudah tersambung antar-modul.

---

## 2. Statical Analysis Guarantee

Keuntungan fase ini adalah Hub mengetahui seluruh struktur aplikasi secara statis. Inilah mengapa Anda tidak bisa memiliki variabel `import` yang dinamis atau kondisional di tingkat statis—jalur transmisi harus "Keras" dan sudah ditentukan sebelum energi mengalir.

---

## 3. Praktik Lapangan (Lab)

```javascript
// Jika file ini diimpor, Hub akan melakukan Instantiation:
export const energyLevel = 100; // Slot diciptakan, tapi nilainya masih 'uninitialized'
```

---

## Arsitek Mindset: Keamanan Jalur

Sebagai arsitek Hub:
- Sadari bahwa fase Instantiation adalah saat di mana **Cyclic Dependencies** (Dependensi Meleingkar) dideteksi. Hub akan mencoba menyambungkan kabel-kabel ini, dan jika tidak hati-hati, Anda bisa mendapatkan variabel yang masih dalam keadaan *uninitialized* (TDZ) saat diakses.
- Pastikan semua path file dalam `import` sudah benar karena kegagalan pada fase 1 akan membatalkan eksekusi seluruh program, bukan hanya modul yang bermasalah.

---
*Status: [status.md](../../../docs/status.md)*
