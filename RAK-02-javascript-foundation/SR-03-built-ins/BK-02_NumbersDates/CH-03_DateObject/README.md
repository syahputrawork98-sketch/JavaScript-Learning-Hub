# CH-03: Date Object (Temporal Management)

> **"Chapter ini membahas `Date` sebagai instrumen utama JavaScript untuk membaca momen, mengatur waktu, dan memahami beda antara UTC dan waktu lokal."**

## Source Hub
- **Primary Source**: [MDN Web Docs - Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- **Technical Reference**: [ECMA-262 - Date Objects](https://tc39.es/ecma262/#sec-date-objects)

## 1. Struktur Chapter
### A. [SEC-01: Reading and Setting Time](./SEC-01_ReadWriteTime/README.md)
Getter dan setter dasar pada objek `Date`.

### B. [SEC-02: UTC and Local Time](./SEC-02_UTCAndLocalTime/README.md)
Cara berpikir tentang timestamp, UTC, dan tampilan lokal.

### C. [SEC-03: Date Practices](./SEC-03_DatePractices/README.md)
Praktik aman untuk penyimpanan dan pengiriman waktu.

---

## Arsitek Mindset: Time Is Tricky

Sebagai arsitek Hub:
- Perlakukan waktu sebagai data yang mudah membingungkan jika format dan zona waktunya tidak jelas.
- Pisahkan penyimpanan waktu dari tampilan waktu ke pengguna.

---

## Hands-on: Lab Chronometer
Chapter ini tetap memakai lab di `examples/date_lab.js` untuk menghitung waktu dan menjadwalkan aktivitas.

---
*Status: [x] Complete (3 Sections).*
