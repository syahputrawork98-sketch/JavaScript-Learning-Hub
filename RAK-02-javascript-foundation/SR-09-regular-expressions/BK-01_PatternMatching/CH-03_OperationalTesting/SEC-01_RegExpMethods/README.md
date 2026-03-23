# SEC-01: RegExp Methods (The Probe Analyzers)

> **"Setelah memiliki pemindai yang tepat, Anda butuh instruksi operasi. RegExp Methods adalah 'Penganalisis Probe' (Probe Analyzers) yang menentukan apakah scanner hanya melihat-lihat keberadaan data (test) atau melakukan biopsi mendalam untuk membongkar seluruh isinya (exec)."**

Metode yang menempel pada objek RegExp (`test` dan `exec`) adalah instrumen utama untuk melakukan validasi cepat dan ekstraksi data yang mendalam dari aliran teks di Grid.

## Source Hub
- [MDN Web Docs - RegExp.prototype.test()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
- [MDN Web Docs - RegExp.prototype.exec()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)
- [MDN Web Docs - RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

---

## 1. Mental Model: "The Probe Analyzers"

Bayangkan dua jenis alat sensor di tangan Anda:
- **`.test()` (The Presence Probe)**: Seperti lampu indikator hijau/merah. Ia hanya memberi tahu lewat nilai Boolean (`true/false`) apakah pola ditemukan atau tidak. Sangat cepat dan efisien untuk konfirmasi validitas data.
- **`.exec()` (The Biopsy Probe)**: Seperti tim forensik yang membedah sampel data. Ia mengembalikan objek hasil yang sangat detail, termasuk isi dari setiap *Capturing Group*, posisi index temuan, dan input aslinya.

![Probe Analyzers Premium](./assets/probe_analyzers_premium.svg)

```mermaid
flowchart LR
    A[RegExp scanner] --> B[test()]
    A --> C[exec()]
    B --> D[boolean answer]
    C --> E[detailed match data]
```

---

## 2. Cara Kerja Operasional

### A. Validasi Cepat dengan `.test()`
Gunakan ini jika hasil akhir yang Anda butuhkan hanyalah jawaban "Ya" atau "Tidak".

```javascript
const validator = /^[A-Z]{3}-\d{2}$/; // Format: AAA-00
console.log(validator.test("HUB-01")); // true
```

### B. Ekstraksi Detail dengan `.exec()`
Gunakan ini saat Anda perlu mengambil data spesifik (misal: mengambil ID dan Status dari log).

```javascript
const extractor = /UNIT-(?<id>\d+): (?<status>\w+)/;
const data = extractor.exec("LOG: UNIT-45: ONLINE");
console.log(data.groups.id); // "45"
```

---

## 3. Statefulness: Rahasia `lastIndex`

Saat menggunakan flag `g` (global), objek RegExp menjadi **Stateful** (mengingat posisi). Setiap kali `.exec()` dipanggil, ia akan mulai mencari dari posisi terakhir ia berhenti (`lastIndex`).
- Jika Anda ingin memindai ulang string yang sama dari awal, pastikan reset `scanner.lastIndex = 0`.
- Jika Anda menggunakan loop `while` dengan `.exec()`, scanner akan terus memanen data sampai tidak ada lagi yang tersisa (`null`).

---

## Arsitek Mindset: Efisiensi Operasi

Sebagai arsitek Hub:
- **Boolean First**: Selalu pilih `.test()` jika Anda hanya sedang melakukan percabangan `if`. Ini jauh lebih hemat sumber daya Hub daripada `.exec()`.
- **Iterative Extraction**: Gunakan `.exec()` di dalam loop `while` untuk memanen banyak temuan dari dokumen log yang sangat panjang secara efisien.
- **Shared Scanner Caution**: Berhati-hatilah saat berbagi satu objek RegExp global di antara beberapa fungsi. Pastikan Anda membersihkan `lastIndex` agar tidak terjadi kebocoran posisi pemindaian.

---

## Hands-on: Lab Penganalisis Probe
Bandingkan lampu indikator `.test()` dan tim forensik `.exec()` saat mereka memproses data Grid di `examples/probe_methods_lab.js`.

---
*Status: [status.md](../../../status.md)*
