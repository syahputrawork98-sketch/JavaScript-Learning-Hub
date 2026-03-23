# SEC-01: Literal vs Constructor (Scanner Models)

> **"Di Hub Energi, Anda bisa menggunakan pemindai portabel yang sudah diset sebelumnya (Literal) atau merakit pemindai kustom secara dinamis (Constructor). Mengetahui model scanner mana yang harus digunakan adalah langkah awal untuk mengenali tanda tangan data di dalam tumpukan informasi Grid."**

Regular Expressions (RegExp) adalah objek yang mendeskripsikan pola karakter. JavaScript menyediakan dua cara utama untuk menciptakan pemindai pola ini.

## Source Hub
- [MDN Web Docs - RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [MDN Web Docs - Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)

---

## 1. Mental Model: "The Pattern Scanner"

- **RegExp Literal (The Preset Scanner)**: Seperti alat pemindai yang sudah memiliki cetakan pola tetap di dalamnya. Ia sangat cepat dan dikompilasi saat skrip dimuat. Gunakan jika pola Anda statis (tidak berubah).
- **RegExp Constructor (The Dynamic Assembly)**: Seperti merakit pemindai di lapangan berdasarkan input variabel yang baru diterima. Sedikit lebih lambat karena dikompilasi saat runtime, namun memberikan fleksibilitas tanpa batas.

![Scanner Models Premium](./assets/scanner_models_premium.svg)

```mermaid
flowchart LR
    A[static pattern] --> B[/literal/]
    C[dynamic pattern] --> D[new RegExp(...)]
    B --> E[reuse in code]
    D --> F[build from variables]
```

---

## 2. Perbandingan Model

### A. Literal Model (Sintaksis `/.../`)
Paling umum digunakan. Pola diletakkan di antara dua garis miring.

```javascript
/* Mencari kata "energy" tanpa mempedulikan huruf besar/kecil */
const scannerA = /energy/i; 
```

### B. Constructor Model (Sintaksis `new RegExp()`)
Digunakan saat pola pencarian harus ditentukan secara dinamis menggunakan variabel.

```javascript
const userSearch = "reactor-01";
const scannerB = new RegExp(userSearch, "g");
```

---

## 3. Catatan Penting: Escaping
Saat menggunakan **Constructor**, Anda harus berhati-hati dengan karakter backslash (`\`). Karena pola ditulis di dalam string, Anda perlu melakukan *double-escaping*.
- Literal: `/\d/` (mencari angka).
- Constructor: `new RegExp("\\d")` (harus double backslash).

---

## Arsitek Mindset: Kecepatan vs Fleksibilitas

Sebagai arsitek Hub:
- **Default to Literal**: Gunakan literal untuk 90% kasus Anda. Ia lebih bersih, lebih mudah dibaca, dan lebih berperforma karena dikompilasi sekali saja.
- **Dynamic Assembly**: Gunakan constructor hanya jika pola pencarian bergantung pada input dari pengguna atau sensor lain yang nilainya baru diketahui saat sistem berjalan.
- **Cache Scanners**: Jika Anda menggunakan constructor di dalam loop yang berulang jutaan kali, pertimbangkan untuk menyimpannya ke dalam variabel di luar loop agar tidak terjadi kompilasi berulang yang membebani CPU Hub.

---

## Hands-on: Lab Model Pemindai
Bandingkan efisiensi dan fleksibilitas antara scanner statis dan dinamis di `examples/scanner_models_lab.js`.

---
*Status: [status.md](../../../status.md)*
