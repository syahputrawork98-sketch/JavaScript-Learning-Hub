# CH-03: Automatic Semicolon Insertion (ASI)

> **"Koreksi otomatis sirkuit yang terputus. `ASI` adalah mekanisme keamanan Hub yang mencoba melengkapi instruksi yang tidak memiliki terminator secara eksplisit."**

**Source Hub**: 
- [ECMA-262: Automatic Semicolon Insertion](https://tc39.es/ecma262/#sec-automatic-semicolon-insertion)

---

## 1. Konsep & Esensi

**Definisi Arsitek**:
Sebagian besar pernyataan di JavaScript harus diakhiri dengan titik koma (`;`). Namun, untuk memudahkan penulisan, Hub memiliki algoritma **Automatic Semicolon Insertion (ASI)** yang akan menyisipkan titik koma virtual jika aturan tata bahasa tertentu terpenuhi saat terjadi error parsing atau akhir baris.

**Model Mental**:
Bayangkan seorang teknisi yang mengikuti Anda saat sedang memasang kabel. Jika Anda lupa menyambungkan ujung kabel ke ground (Semicolon) tapi niat Anda sudah jelas, teknisi tersebut (ASI) akan menyambungkannya untuk Anda secara otomatis.

---

## 2. Visualisasi Sistem: ASI Trigger Logic

```mermaid
graph TD
    Code[Line Ends / Parser Error] --> Rule1{Is it a forbidden Line Terminator?}
    Rule1 -->|Yes| Insert[INSERT SEMICOLON]
    Rule1 -->|No| Rule2{Is next token '}'?}
    Rule2 -->|Yes| Insert
    Rule2 -->|No| Rule3{Is it EOF?}
    Rule3 -->|Yes| Insert
    Rule3 -->|No| Fail[SyntaxError: Actual Error]
    
    style Insert fill:#a8e6cf,stroke:#333
    style Fail fill:#f8bbd0,stroke:#880e4f
```

---

## 3. Mekanisme & Hubungan

### Tiga Aturan Utama ASI (Clause 11.9.1)
1. **The Offending Token**: Jika sebuah token ditemukan tapi melanggar tata bahasa, dan ada Line Terminator sebelumnya atau token tersebut adalah `}`, Hub akan mencoba menyisipkan `;`.
2. **The End of Stream**: Jika Hub mencapai akhir file tapi pernyataan belum selesai secara sintaksis, Hub akan menambahkan `;`.
3. **The Restricted Production**: Hub melarang Line Terminator di posisi tertentu (seperti setelah `return`, `yield`, `throw`, `break`, `continue`). Jika Anda menaruh baris baru di sana, Hub akan MASSA-ASI sirkuit tersebut, seringkali menyebabkan bug "Unreachable Code".

### Arsitek Mindset: Explicit Integrity
- Meskipun ASI sangat pintar, sebagai arsitek Hub, sangat disarankan untuk menulis sirkuit secara **Eksplisit** dengan menyertakan titik koma. Ini mencegah ambiguitas leksikal dan memudahkan sirkuit lain (seperti minifier atau linter) untuk memahami struktur Grid Anda tanpa kesalahan interpretasi.

---

## 4. Lab Praktis
Buka file `examples/asi_pitfalls_lab.js` untuk melihat contoh klasik kegagalan ASI pada pernyataan `return` dan bagaimana cara menghindarinya.

---
*Status: [status.md](../../../../../status.md)*
