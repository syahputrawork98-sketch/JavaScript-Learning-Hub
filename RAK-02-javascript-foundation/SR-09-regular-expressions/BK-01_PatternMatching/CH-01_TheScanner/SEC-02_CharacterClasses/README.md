# SEC-02: Character Classes (The Frequency Sifters)

> **"Tidak semua data di Grid adalah teks biasa. Ada angka, spasi, atau simbol transmisi lainnya. Character Classes adalah 'Penyaring Frekuensi' (Frequency Sifters) yang memungkinkan scanner Anda mengenali kelompok data tertentu secara instan menggunakan kode singkat."**

**Character Classes** adalah komponen dasar RegExp yang memungkinkan pemindai untuk mencocokkan satu karakter dari set karakter yang sudah ditentukan. Ini adalah cara tercepat untuk membedah data berdasarkan "tanda tangan" kategorinya.

## Source Hub
- [MDN Web Docs - Character classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)
- [MDN Web Docs - Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)

---

## 1. Mental Model: "The Frequency Sifters"

Bayangkan filter pada pemindai pola Anda memiliki tiga slot utama untuk menyaring aliran data mentah:
- **`\d` (Digits)**: Hanya mengizinkan angka (0-9) untuk lolos.
- **`\w` (Words)**: Mengizinkan huruf, angka, dan garis bawah (*underscore*) untuk lolos.
- **`\s` (Spaces)**: Hanya menangkap spasi, tab, dan jeda baris.

![Character Sifters Premium](./assets/character_sifters_premium.svg)

```mermaid
flowchart LR
    A[input text] --> B[character class]
    B --> C[\d digits]
    B --> D[\w word chars]
    B --> E[\s spaces]
    B --> F[[a-z] custom range]
```

---

## 2. Tabel Penyaring Standar (Shorthands)

| Simbol | Deskripsi | Lawan (Negasi) | Deskripsi Lawan |
| :--- | :--- | :--- | :--- |
| `.` | **Wildcard**: Karakter apa saja (kecuali newline) | - | - |
| `\d` | **Digit**: Angka [0-9] | `\D` | Bukan Digit |
| `\w` | **Word**: Alfanumerik [A-Za-z0-9_] | `\W` | Bukan Alfanumerik |
| `\s` | **Space**: Spasi, tab, line break | `\S` | Bukan Spasi |

---

## 3. Penyaring Kustom `[ ]`

Terkadang sifter standar terlalu luas. Anda bisa merakit sifter kustom menggunakan kurung siku:
- **Range**: `[a-z]` (huruf kecil saja), `[0-5]` (angka 0 hingga 5).
- **Custom Set**: `[aeiou]` (hanya huruf vokal).
- **Negation**: `[^0-9]` (apa pun **kecuali** angka).

---

## Arsitek Mindset: Presisi Pemindaian

Sebagai arsitek Hub:
- **Keep it Simple**: Gunakan shorthands (`\d`, `\w`) sesering mungkin agar pola scanner Anda tetap ramping dan mudah dibaca oleh operator lain.
- **Negative Sifting**: Gunakan negasi (`\D`, `\S`) jika mengecualikan sesuatu terasa lebih intuitif daripada mencocokkan ribuan kemungkinan lain.
- **Wildcard Caution**: Berhati-hatilah dengan titik `.`. Ia mampu menembus hampir semua firewall data, namun bisa menyebabkan scanner Anda menjadi "terlalu rakus" dan mengambil data yang tidak diinginkan.

---

## Hands-on: Lab Penyaring Frekuensi
Gunakan berbagai filter kategori untuk membedah data log dari Grid di `examples/signature_categories_lab.js`.

---
*Status: [status.md](../../../status.md)*
