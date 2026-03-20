# CH-01: Character Mapping (Strings & RegExp)

> **"Sebagian besar sinyal yang masuk ke Hub berbentuk tekstual. `Character Mapping` adalah 'Unit Pemrosesan Teks'—sistem yang menangani transmisi string dan pencarian pola (RegExp) untuk memvalidasi aliran energi."**

*Pemetaan ECMA-262: Clause 22 & 26*

## 1. Mental Model: "The Text Transmitter"

- **`String`**: Koleksi karakter Unicode 16-bit (UTF-16). Di JavaScript, string bersifat **Immutable** (Abadi). Sekali sinyal teks tercipta, ia tidak bisa diubah—Anda hanya bisa menciptakan sinyal baru dari hasil transformasinya.
- **`RegExp`**: Mesin pencarian pola. Ia bertindak sebagai "Scanner" yang memindai stream teks untuk menemukan kecocokan sinyal tertentu atau melakukan pembersihan (Sanitization) otomatis.

---

## 2. String Methods: Modulasi Teks

Metode string memungkinkan manipulasi sinyal tanpa mengubah sumber aslinya:
- **`slice/substring`**: Memotong bagian tertentu dari sinyal teks.
- **`replace/replaceAll`**: Mengubah komponen teks tertentu dengan sinyal baru.
- **`split`**: Memecah sinyal teks panjang menjadi unit-unit kecil (Array).

---

## 3. Praktik Lapangan (Lab)

```javascript
// 1. String Immutability
let label = "Alpha";
label.toUpperCase(); // Mengembalikan "ALPHA" baru
console.log(label); // Tetap "Alpha"

// 2. RegExp Scanner
const pattern = /HUB-\d+/;
const input = "Signal from HUB-402 received.";
console.log("Pattern Match:", pattern.test(input));

// 3. Multiline Texts (Template Literals)
const status = `
    UNIT: Core-01
    POWER: STABLE
`;
```

---

## Arsitek Mindset: Efisiensi Teks

Sebagai arsitek Hub:
- Gunakan **Template Literals** (backticks) untuk interpolasi variabel ke dalam teks agar blueprint lebih mudah dibaca daripada menggunakan penggabungan `+`.
- Hati-hati dengan flag `g` (global) pada RegExp jika digunakan berulang kali dengan metode `.exec()`, karena ia menyimpan status `lastIndex` yang bisa menyebabkan hasil tidak terduga di eksekusi berikutnya.
- Ingat bahwa String JS menggunakan internal encoding UTF-16, sehingga karakter-karakter langka (seperti beberapa Emoji) mungkin membutuhkan 2 unit indeks ("Surrogate Pairs").

---
*Status: [status.md](../../../docs/status.md)*
