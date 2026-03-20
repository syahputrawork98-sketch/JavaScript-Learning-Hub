# CH-01: Future Promises (Asynchronous States)

> **"Beberapa operasi di Hub membutuhkan waktu untuk menghasilkan energi. `Future Promises` adalah 'Janji Energi' (Asynchronous States)—objek yang bertindak sebagai tempat penyimpanan sementara bagi hasil eksekusi yang belum selesai."**

*Pemetaan ECMA-262: Clause 27.2*

## 1. Mental Model: "The Energy Pager"

Bayangkan Anda memesan energi dari server jauh. Hub memberikan sebuah "Pager" (Promise).
- **`pending`**: Pager sedang menunggu sinyal. Energi belum siap.
- **`fulfilled`**: Pager berbunyi! Energi telah diterima dengan sukses (`value`).
- **`rejected`**: Pager berkedip merah! Terjadi malfungsi pada pengiriman (`reason`).

Sekali Pager berubah status ke *fulfilled* atau *rejected*, ia akan terkunci selamanya (Settled). Anda tidak bisa mengubah hasilnya lagi.

---

## 2. The Microtask Queue

Secara internal, saat sebuah Promise selesai, ia tidak langsung menginterupsi sirkuit utama. Ia meletakkan "Kotak Hasil" di **Microtask Queue**—jalur prioritas tinggi yang akan diproses segera setelah sirkuit saat ini selesai, sebelum Hub menangani event luar (seperti klik mouse).

---

## 3. Praktik Lapangan (Lab)

```javascript
const energyRequest = new Promise((resolve, reject) => {
    const success = true;
    if (success) resolve("100kW_READY");
    else reject("TRANSMISSION_ERROR");
});

energyRequest
    .then(energy => console.log("Received:", energy))
    .catch(err => console.log("Alarm:", err));
```

---

## Arsitek Mindset: Aliran Linier

Sebagai arsitek Hub:
- Selalu gunakan `async/await` (Buku 10) untuk mengonsumsi Promise agar blueprint kode Anda tetap terbaca secara linier dan mudah diaudit.
- Jangan biarkan ada "Uncaught Rejection". Setiap Promise yang memiliki risiko gagal harus memiliki penanganan `.catch()` atau dibungkus dalam `try-catch` agar tidak menyebabkan "Silent Failure" di dalam Hub.
- Gunakan `Promise.all()` untuk meminta banyak energi secara paralel guna mempercepat waktu pemuatan Hub secara keseluruhan.

---
*Status: [status.md](../../../docs/status.md)*
