# CH-01: Array and String Exotics (Legacy Indexting)

![Status](https://img.shields.io/badge/STATUS-GOLD_STANDARD-green?style=for-the-badge)

> **"Akses Karakter & Indeks Bawaan: Bagaimana Objek Eksotis Mengelola Perilaku Khusus pada Indeks Numerik dan Panjang (Length)."**

---

## 🌐 Source Hub
- **Parent Book**: [BK-03: Exotic Objects](../README.md)
- **Primary Source**: [ECMA-262: Array Exotic Objects (Clause 10.4.2)](https://tc39.es/ecma262/#sec-array-exotic-objects)

---

## 🌓 1. Essence: The Narrative

### Numeric Indexing
Objek Array dan String adalah jenis **Exotic Objects** yang paling umum ditemui. Perilaku eksotis mereka terletak pada cara mereka menangani **Numeric Indices** (seperti `arr[0]` atau `str[5]`).

### Array Length Magic
Array memiliki "sirkuit" internal yang menghubungkan indeks numerik dengan properti `length`. Setiap kali indeks baru ditambahkan, `length` akan diperbarui secara otomatis. Sebaliknya, jika `length` diperkecil, elemen-elemen di luar batas tersebut akan dihapus secara instan dari memori.

---

## 🗺️ 2. Visual Logic: The Indexing Circuit

```mermaid
    Check -->|Yes| UpdateLength[Update length to Index + 1]
    Check -->|No| NormalValue[Regular Property Update]
    
    style Array fill:#a8e6cf,stroke:#333
    style UpdateLength fill:#f1c40f,stroke:#333
```

---

## 3. Mekanisme & Hubungan

### Karakteristik Array (Clause 10.4.2)
- Saat properti `length` dikurangi, Hub secara otomatis menjalankan `[[Delete]]` pada semua properti numerik yang indeksnya lebih besar dari panjang baru. Ini adalah mekanisme penghapusan massal yang sangat efisien di level internal.

### Karakteristik String (Clause 10.4.3)
- Objek String memiliki properti indeks virtual. Jika Anda mengakses `str[0]`, Hub sebenarnya memanggil metode internal yang secara dinamis mengekstrak karakter dari data mentah string tersebut.

### Arsitek Mindset: Semantic Accuracy
- Jangan mencoba mensimulasikan Array hanya dengan objek biasa dan manual update length. Anda tidak akan pernah bisa menyamai efisiensi dan keakuratan "Magic" yang sudah ditanamkan Hub ke dalam sirkuit Array Eksotis bawaan.

---

## 4. Lab Praktis
Buka file `examples/exotic_behavior_lab.js` untuk melihat bagaimana perubahan `length` pada Array secara otomatis menghapus elemen-elemen di dalamnya.

---
*Status: [status.md](../../../../../status.md)*
