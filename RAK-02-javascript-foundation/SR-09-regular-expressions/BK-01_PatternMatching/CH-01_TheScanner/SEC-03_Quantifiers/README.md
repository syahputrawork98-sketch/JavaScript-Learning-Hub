# SEC-03: Quantifiers (The Pulse Counters)

> **"Beberapa tanda tangan data muncul berulang kali dalam satu aliran transmisi. Alih-alih memindai per karakter, Quantifiers adalah 'Penghitung Denyut' (Pulse Counters) yang memungkinkan scanner memindai pengulangan sinyal yang sama sebanyak yang direncanakan."**

**Quantifiers** menentukan berapa banyak karakter (atau kelompok karakter) yang harus dicocokkan oleh scanner pola Anda. Mereka sangat berguna untuk menangani data yang memiliki panjang bervariasi.

## Source Hub
- [MDN Web Docs - Quantifiers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)
- [MDN Web Docs - Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)

---

## 1. Mental Model: "The Pulse Counters"

Bayangkan pemindai radar mendeteksi sinyal listrik di Hub:
- **`+` (1 or more)**: Menangkap sinyal jika ia muncul **setidaknya satu kali** atau lebih secara berurutan.
- **`*` (0 or more)**: Menangkap sinyal meskipun ia **tidak ada sama sekali** atau muncul berkali-kali.
- **`?` (Optional)**: Menangkap sinyal jika ia muncul **nol atau satu kali** saja. Sangat berguna untuk pengecekan opsional.
- **`{n,m}` (Range)**: Penghitung presisi tinggi. Hanya menangkap sinyal jika jumlah kemunculannya berada di antara batas `n` dan `m`.

![Quantifier Pulse Premium](./assets/quantifier_pulse_premium.svg)

```mermaid
flowchart LR
    A[base pattern] --> B[* zero or more]
    A --> C[+ one or more]
    A --> D[? optional]
    A --> E[{n,m} ranged count]
```

---

## 2. Tabel Operasional

| Simbol | Makna | Contoh Pola | Hasil Cocok pada "aa" |
| :--- | :--- | :--- | :--- |
| `a*` | 0 atau lebih | `/a*/` | "aa" |
| `a+` | 1 atau lebih | `/a+/` | "aa" |
| `a?` | 0 atau 1 (Opsional)| `/a?/` | "a" (hanya satu) |
| `a{2}` | Tepat 2 | `/a{2}/` | "aa" |
| `a{1,2}`| Minimal 1, Maksimal 2 | `/a{1,2}/` | "aa" |

---

## 3. Strategi: Greedy vs Lazy (Rakus vs Malas)

Secara default, scanner pola bersifat **Greedy** (Rakus). Ia akan mencoba mengambil data sebanyak mungkin yang masih mematuhi pola.
- **Greedy**: `/<.+>/` pada `<div>Content</div>` akan mengambil seluruh teks `<div>Content</div>`.
- **Lazy**: Tambahkan `?` setelah quantifier (`/<.+?>/`). Scanner akan menjadi malas dan hanya mengambil sesedikit mungkin. Hasilnya hanya `<div>`.

---

## Arsitek Mindset: Kontrol Volume

Sebagai arsitek Hub:
- **Precise Range**: Gunakan `{n,m}` daripada `*` atau `+` jika Anda sudah tahu batasan panjang data yang valid (misal: ID unit 5-8 karakter). Ini mencegah scanner melakukan pemindaian yang tidak perlu (*backtracking*).
- **Optional Logic**: Gunakan `?` untuk karakter yang mungkin tidak ada, seperti tanda minus pada angka atau protokol `s` pada `https`.
- **Prevent Over-Scoping**: Selalu pertimbangkan penggunaan Lazy matching (`+?` atau `*?`) saat memproses teks yang memiliki pembungkus (seperti tanda kutip atau tag), agar scanner tidak melompat ke pembungkus terakhir dan merusak integritas data.

---

## Hands-on: Lab Pengatur Frekuensi
Eksperimen dengan berbagai pengaturan volume dan strategi Greedy vs Lazy di `examples/pulse_freq_lab.js`.

---
*Status: [status.md](../../../status.md)*
