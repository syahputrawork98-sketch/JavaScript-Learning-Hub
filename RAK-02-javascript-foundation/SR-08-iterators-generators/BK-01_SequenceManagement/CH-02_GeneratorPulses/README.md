# CH-02: Generator Pulses (Pause-and-Resume Flows)

> **"Tidak semua proses harus berjalan sampai selesai dalam satu napas. CH-02 membedah generator sebagai alat untuk membuat aliran yang bisa berhenti, mengirim nilai, lalu melanjutkan lagi saat diminta."**

## Source Hub
- **Primary Source**: [MDN Web Docs - function*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)
- **Technical Reference**: [MDN Web Docs - yield](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield)

## 1. Aliran Denyut

### A. [SEC-01: Generator Functions](./SEC-01_GeneratorFunctions/README.md)
Pengenalan bentuk dasar fungsi generator dan objek generator yang dihasilkannya.

### B. [SEC-02: The yield Keyword](./SEC-02_YieldKeyword/README.md)
Titik henti yang mengatur kapan generator berhenti dan mengirim nilai.

### C. [SEC-03: yield*](./SEC-03_YieldDelegation/README.md)
Delegasi aliran ke generator atau iterable lain.

### D. [SEC-04: Async Iterators](./SEC-04_AsyncIteratorsRef/README.md)
Aliran bertahap yang bekerja dengan sumber data asinkron.

---

## Arsitek Mindset: Kontrol Ritme

Sebagai arsitek Hub:
- Gunakan generator saat aliran perlu dikendalikan langkah demi langkah.
- Pilih async iterators saat sumber datanya datang bertahap dari operasi asinkron.
- Tetap prioritaskan keterbacaan; jangan memakai generator bila loop biasa sudah cukup jelas.

---

## Hands-on: Lab Pulse Flow
Masuk ke tiap section untuk melihat bagaimana denyut data dikirim, dihentikan, dan diteruskan kembali.

---
*Status: [x] Complete (4 Sections).*
