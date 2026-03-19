# CH-01: Unicode Input Buffer (The Signal Intake)

> **"Sebelum Hub bisa memahami logika, ia harus bisa membaca sinyal mentah. `Unicode Input Buffer` adalah 'Pintu Masuk Sinyal' (The Signal Intake) — sistem yang mengubah aliran teks mentah menjadi urutan poin kode Unicode yang terstandarisasi."**

*Pemetaan ECMA-262: Clause 11.1 (Source Text)*

## 1. Mental Model: "The Signal Intake"

Bayangkan Hub menerima kabel data raksasa dari luar Grid.
- **Source Text**: Teks mentah yang Anda tulis (UTF-16 di memori).
- **Processing**: Hub tidak langsung membaca kata-kata. Ia memecahnya menjadi angka-angka Unicode (Code Points).
- **Normalization**: Hub memastikan bahwa karakter "A" dari berbagai belahan dunia (Unicode ranges) diperlakukan dengan aturan yang sama.

---

## 2. Kenapa Unicode Penting?

Di era modern, Grid tidak hanya mendukung huruf Latin. Hub harus bisa menangani:
1.  **Emoji** sebagai bagian dari string.
2.  **Karakter Internasional** (seperti Hanzi, Arabic, atau Cyrillic) di dalam variabel.
3.  **Escape Sequences** (`\u{...}`) untuk mengakses sirkuit Unicode yang tidak ada di keyboard standar.

---

## 3. Praktik Lapangan (Lab)

```javascript
// Menggunakan Unicode Code Points dalam string
const signal = "\u{1F680} Launching..."; 
console.log(signal); // 🚀 Launching...

// Identifier dengan karakter internasional
const jalurUtama = "ACTIVE"; // Menggunakan Unicode 'u'
console.log(jalurUtama);
```

---

## Arsitek Mindset: Integritas Sinyal

Sebagai arsitek Hub:
- Pastikan file sumber Anda selalu disimpan dalam format **UTF-8** untuk menghindari distorsi sinyal saat Hub melakukan pembacaan buffer.
- Sadarilah bahwa panjang sebuah string (`.length`) di JavaScript dihitung berdasarkan *Code Units* (16-bit), bukan *Code Points*. Untuk sinyal kompleks (seperti emoji), gunakan iterator `[...str]` agar Hub menghitung unit energi yang sebenarnya.

---
*Status: [status.md](../../../docs/status.md)*
