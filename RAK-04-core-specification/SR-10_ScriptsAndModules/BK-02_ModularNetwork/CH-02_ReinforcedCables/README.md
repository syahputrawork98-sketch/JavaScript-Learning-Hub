# CH-02: Reinforced Cables (Modern ESM Features)

> **"Modul dirancang untuk standar Hub masa depan yang lebih aman dan sinkron. `Reinforced Cables` adalah fitur modern Modul yang menjamin isolasi total dan kemampuan untuk menunggu sinyal asinkron di level tertinggi."**

*Pemetaan ECMA-262: Clause 16.2.1.8 (v2025)*

## 1. Automatic Strict Mode

Setiap Modul secara otomatis menggunakan **Strict Mode**. Anda tidak perlu menulis `"use strict"`. Ini berarti fitur-fitur berbahaya (seperti `with` atau manipulasi `this` global) sudah diblokir secara permanen di seluruh jaringan modul.

---

## 2. Top-level Await Protocol

Dalam jaringan modul modern, Anda bisa menggunakan `await` langsung di luar fungsi. Ini memungkinkan modul untuk menunda "Penyambungan Sirkuit" sampai sinyal dari database atau server jauh diterima. Modul lain yang mengimpor modul ini akan otomatis ikut menunggu sampai proses ini selesai.

---

## 3. Praktik Lapangan (Lab)

```javascript
// database_connector.mjs
// Top-level Await: Menunggu koneksi sebelum modul dianggap "Siap"
export const connection = await establishConnection();

console.log("Database Unit Ready for Distribution");
```

---

## Arsitek Mindset: Sinkronisasi Jaringan

Sebagai arsitek Hub:
- Gunakan **Top-level Await** untuk inisialisasi modul yang krusial (seperti loading konfigurasi atau koneksi API). Namun, berhati-hatilah agar tidak membuat "Bottleneck" di mana seluruh aplikasi berhenti menunggu satu modul yang lambat.
- Ingat bahwa Modul dideferensiasi (dijalankan setelah HTML diparsing) secara default di browser, memberikan performa loading yang lebih baik daripada Script klasik.

---
*Status: [status.md](../../../docs/status.md)*
