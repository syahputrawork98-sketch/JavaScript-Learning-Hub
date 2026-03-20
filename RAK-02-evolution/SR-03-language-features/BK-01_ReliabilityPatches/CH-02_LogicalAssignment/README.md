# CH-02: Logical Assignment (Efficient Relays)

> **"Mengatur ulang sirkuit energi tidak harus memakan banyak baris perintah. Logical Assignment adalah 'Relay Efisien' (Efficient Relays) yang menggabungkan pengecekan logika dan pengisian daya dalam satu gerakan singkat."**

ES2021 memperkenalkan operator penugasan logis: `&&=`, `||=`, dan `??=`.

## 1. Mental Model: "Efficient Relays"

Bayangkan Anda memiliki relay listrik yang hanya aktif jika kondisi tertentu terpenuhi.
- **`||=` (OR Assignment)**: Berikan daya **hanya jika** unit saat ini mati/kosong (falsy).
- **`??=` (Nullish Assignment)**: Berikan daya **hanya jika** unit saat ini benar-benar tidak ada (nullish).
- **`&&=` (AND Assignment)**: Perbarui daya **hanya jika** unit saat ini sedang aktif (truthy).

---

## 2. Perbandingan Efisiensi

```javascript
// Dulu
if (!unit.status) {
    unit.status = "ACTIVE";
}

// Sekarang (Efficient Relay)
unit.status ||= "ACTIVE";

// Nullish Default
config.retryLimit ??= 5;
```

---

## 3. Numeric Separators (Bonus ES2021)

Untuk membuat beban energi yang sangat besar lebih mudah dibaca oleh teknisi Hub, Anda bisa menggunakan `_` sebagai pemisah visual.

```javascript
const loadCapacity = 1_000_000_000; // Satu Miliar (Readable)
```

---

## Arsitek Mindset: Kode yang Ramping

Sebagai arsitek Hub:
- Gunakan `||=` untuk inisialisasi default yang cepat untuk objek konfigurasi.
- Gunakan `??=` jika Anda ingin menjaga integritas nilai `0`, `false`, atau `""` yang mungkin sudah ada di dalam sistem.
- Manfaatkan Numeric Separators pada semua konstanta angka besar agar Hub Anda mudah diaudit secara visual tanpa kesalahan hitung nol.

---

## Hands-on: Lab Relay Efisien
Buka file `examples/efficient_relays_lab.js` untuk melihat bagaimana menyederhanakan konfigurasi Hub menggunakan operator modern.

---
*Status: [status.md](../../../status.md)*
