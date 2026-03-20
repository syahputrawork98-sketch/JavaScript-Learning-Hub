# CH-02: External Interrupts (Signal Transmission)

> **"Ketika sebuah unit selesai bekerja atau mengalami kegagalan fatal, ia harus mengirimkan sinyal ke luar. `External Interrupts` adalah 'Transmisi Sinyal' (Signal Transmission)—mekanisme untuk mengembalikan energi atau melemparkan peringatan keluar dari konteks saat ini."**

*Pemetaan ECMA-262: Clause 14.10 & 14.15*

## 1. Mental Model: "The Signal Exit"

- **`return` Statement**: Mengakhiri eksekusi unit (Function) dan mengirimkan "Paket Energi" (Nilai) kembali ke pemanggilnya. Ini adalah cara legal untuk keluar dari sebuah sirkuit dengan membawa hasil.
- **`throw` Statement**: Sinyal darurat. Digunakan saat terjadi malfungsi yang tidak bisa ditangani di dalam sirkuit tersebut. Sinyal ini akan meluncur keluar mencari "Jaring Pengaman" (`catch`) terdekat.

---

## 2. Tipe Sinyal Keluar

- **`return`**: Completion Type `~return~`.
- **`throw`**: Completion Type `~throw~`.

Keduanya menghentikan sirkuit saat ini secara instan. Tidak ada kode di bawah `return` atau `throw` yang akan pernah mendapatkan pasokan energi (Unreachable Code).

---

## 3. Praktik Lapangan (Lab)

```javascript
function extractEnergy(amount) {
    if (amount < 0) {
        throw new Error("NEGATIVE_LOAD_ERROR"); // Sinyal bahaya
    }
    return amount * 0.95; // Sinyal hasil (dengan rugi-rugi transmisi)
}

try {
    const result = extractEnergy(-10);
} catch (e) {
    console.log(`Alert Captured: ${e.message}`);
}
```

---

## Arsitek Mindset: Disiplin Keluar

Sebagai arsitek Hub:
- Gunakan `return` lebih awal (*Guard Clauses*) untuk membersihkan logika. Jangan membuat teknisi lain membaca 50 baris kode jika ternyata di baris ke-2 sirkuit sudah bisa diputus.
- Hanya `throw` sesuatu yang benar-benar merupakan kegagalan sistem. Gunakan sinyal balik normal (seperti `null` atau `{ error: true }`) untuk kegagalan bisnis yang sudah diprediksi.

---
*Status: [status.md](../../../docs/status.md)*
