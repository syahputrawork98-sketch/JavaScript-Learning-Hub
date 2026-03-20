# CH-02: Character Classes (Signature Categories)

> **"Tidak semua data di Grid adalah teks biasa. Ada angka, spasi, atau karakter khusus lainnya. Character Classes adalah 'Kategori Tanda Tangan' (Signature Categories) yang memungkinkan scanner Anda mengenali kelompok data tertentu secara instan menggunakan kode singkat."**

Character classes membedakan jenis karakter, seperti membedakan huruf dari angka.

## 1. Mental Model: "Signature Categories"

Bayangkan filter pada scanner Anda. Alih-alih mencari angka `0, 1, 2, 3...` secara manual, Anda cukup menggunakan filter "Digit".
- `\d`: Filter untuk memindai **Digit** (angka).
- `\w`: Filter untuk memindai **Word** (huruf, angka, underscore).
- `\s`: Filter untuk memindai **Space** (spasi, tab, newline).

---

## 2. Pintasan Scanner (Shorthands)

| Simbol | Deskripsi | Lawan (Negasi) | Deskripsi Lawan |
| :--- | :--- | :--- | :--- |
| `.` | Karakter apa saja | - | - |
| `\d` | Digit [0-9] | `\D` | Bukan Digit |
| `\w` | Alfanumerik [A-Za-z0-9_] | `\W` | Bukan Alfanumerik |
| `\s` | Whitespace (spasi/tab) | `\S` | Bukan Whitespace |

---

## 3. Kustomisasi Kategori `[ ]`

Anda juga bisa membuat kategori kustom menggunakan kurung siku.
- `[aeiou]`: Hanya pindai huruf vokal.
- `[0-5]`: Hanya pindai angka 0 sampai 5 (Range).
- `[^0-9]`: Pindai apa pun **kecuali** angka (Negated Range).

---

## Arsitek Mindset: Presisi Pemindaian

Sebagai arsitek Hub:
- Gunakan shorthands (`\d`, `\w`) untuk menjaga pola tetap pendek dan mudah dibaca.
- Gunakan negasi (`\D`, `\S`) jika Anda lebih mudah mendefinisikan apa yang **tidak** Anda inginkan daripada apa yang Anda inginkan.
- Hati-hati dengan titik `.` karena ia sangat rakus dan memindai hampir semua hal kecuali baris baru.

---

## Hands-on: Lab Kategori Tanda Tangan
Buka file `examples/signature_categories_lab.js` untuk mencoba berbagai filter kategori untuk membedah data log dari Grid.

---
*Status: [status.md](../../../status.md)*
