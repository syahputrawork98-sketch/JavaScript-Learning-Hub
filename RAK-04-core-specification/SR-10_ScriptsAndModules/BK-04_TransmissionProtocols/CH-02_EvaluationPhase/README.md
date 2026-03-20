# CH-02: Phase 2: Evaluation (The Energy Burst)

> **"Setelah sirkuit terpasang sempurna, saatnya menyalakan daya. `Phase 2` adalah 'Ledakan Energi' (Evaluation)—tahap eksekusi kode yang sebenarnya di mana nilai-nilai dihitung dan modul dihidupkan."**

*Pemetaan ECMA-262: Clause 16.2.1.5.3*

## 1. Mental Model: "The Energy Flow"

Pada tahap ini, Hub mulai menjalankan perintah di dalam modul:
1.  **Bottom-Up Execution**: Hub menjalankan modul-modul yang tidak memiliki dependensi terlebih dahulu, lalu bergerak naik ke modul yang mengimpornya.
2.  **Singleton Burst**: Eksekusi hanya terjadi satu kali. Hasilnya disimpan di dalam Hub. Jika modul lain memanggilnya lagi, Hub hanya memberikan "Hasil Energi" yang sudah disimpan tanpa menjalankan ulang kodenya.

---

## 2. Top-level Await Handling

Jika sebuah modul menggunakan `await` di level teratas, fase Evaluation untuk modul tersebut (dan semua modul di atasnya dalam graf dependensi) akan ditunda sampai Promise tersebut terpenuhi. Hub mengelola ini secara efisien agar Grid tidak membeku.

---

## 3. Praktik Lapangan (Lab)

```javascript
console.log("Evaluation Phase Started");

const data = await fetchEnergyStatus(); // Menunda sirkuit sampai data siap

export const status = data.ok ? "STABLE" : "FAULT";

console.log("Evaluation Phase Complete");
```

---

## Arsitek Mindset: Efek Samping Eksekusi

Sebagai arsitek Hub:
- Hindari membuat "Efek Samping" (Side Effects) yang berat di luar fungsi dalam sebuah modul. Idealnya, fase Evaluation modul hanya digunakan untuk inisialisasi formal.
- Jika modul Anda mengubah status Global Grid (seperti menambahkan sesuatu ke `window`), lakukan dengan sangat hati-hati karena urutan eksekusi antar-modul bisa menjadi kompleks saat melibatkan asinkronitas.

---
*Status: [status.md](../../../docs/status.md)*
