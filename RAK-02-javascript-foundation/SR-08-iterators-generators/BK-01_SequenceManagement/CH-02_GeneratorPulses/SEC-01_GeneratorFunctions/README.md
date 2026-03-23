# SEC-01: Generator Functions (The Pulse Origin)

> **"Jika fungsi biasa adalah ledakan daya yang harus selesai dalam satu waktu, Generator adalah 'Pusat Generator' (Pulse Generator) yang bisa dinyalakan, dihentikan sementara, dan dilanjutkan kembali sesuka hati. Mereka tidak menghasilkan output sekaligus, melainkan menghasilkan denyut-denyut (Pulses) data."**

**Generator functions** adalah jenis fungsi spesial yang dapat dihentikan di tengah jalan (*pause*) dan dilanjutkan kembali (*resume*). Mereka ditandai dengan sintaksis `function*` dan selalu mengembalikan sebuah objek **Generator**.

## Source Hub
- [MDN Web Docs - function*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)
- [MDN Web Docs - Iterators and generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators)

---

## 1. Mental Model: "The Pulse Generator"

Bayangkan sebuah mesin generator di Hub. 
- Saat Anda memanggil fungsi generator, mesin belum benar-benar menyala. Ia hanya memberikan Anda **Remote Control** (Objek Generator).
- Setiap kali Anda menekan tombol `next()` pada remote, mesin akan berjalan sampai menemukan instruksi `yield` (titik henti).
- Mesin akan mengirimkan satu "Denyut" (Pulse) data, lalu berhenti bernapas (*pause*), namun ia tetap mengingat semua kondisi internalnya (variabel, posisi baris).

![Generator Pulse Premium](./assets/pulse_gen_premium.svg)

```mermaid
flowchart LR
    A[call generator function] --> B[generator object]
    B --> C[next()]
    C --> D[yield value]
    D --> E[pause state]
    E --> C
```

---

## 2. Karakteristik "Dual-Protocol"

Generator adalah unit yang sangat canggih karena ia mematuhi dua protokol sekaligus:
1. **Iterable**: Ia memiliki gerbang `[Symbol.iterator]` (sehingga bisa digunakan di `for...of`).
2. **Iterator**: Ia memiliki metode `next()` (sehingga bisa ditarik datanya secara manual).

---

## 3. Kekuatan Lazy Evaluation

Karena generator hanya bekerja saat diminta (`next()`), ia sangat efisien untuk menangani:
- **Infinite Series**: Deret angka yang tidak terbatas.
- **Large Datasets**: Memproses data besar tanpa harus memuat semuanya ke memori Hub sekaligus.
- **Workflow Control**: Alur kerja yang membutuhkan banyak tahapan persetujuan/interaksi di tengah jalan.

---

## Arsitek Mindset: Manajemen Arus Terkendali

Sebagai arsitek Hub:
- **Standardize Flows**: Gunakan Generator untuk menstandardisasi alur data yang bersifat streaming atau bertahap.
- **Memory Optimization**: Jika Anda merasa sebuah array akan menjadi terlalu besar dan membebani grid, segera ubah menjadi Generator.
- **State Persistence**: Manfaatkan kemampuan generator untuk "mengingat" kondisi terakhir tanpa perlu menggunakan variabel global yang mengotori namespace Hub.

---

## Hands-on: Lab Pusat Generator
Eksperimen dengan kontrol ritme kerja mesin generator dan pemanenan denyut data di `examples/pulse_gen_lab.js`.

---
*Status: [status.md](../../../status.md)*
