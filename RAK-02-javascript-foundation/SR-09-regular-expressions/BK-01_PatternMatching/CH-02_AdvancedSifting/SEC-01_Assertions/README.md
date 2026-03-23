# SEC-01: Assertions (The Boundary Perimeter)

> **"Pemindaian data yang akurat tidak hanya tentang 'apa' karakternya, tapi juga 'di mana' lokasinya. Assertions adalah 'Perimeter Batas' (Boundary Perimeter) yang memastikan scanner hanya bekerja di awal, akhir, atau di sekitar pola tertentu tanpa benar-benar memakan data di batas tersebut."**

**Assertions** adalah instruksi khusus yang tidak mencocokkan karakter, melainkan mencocokkan **posisi**. Mereka sering disebut sebagai *Zero-width Assertions* karena mereka melakukan pengecekan kondisi tanpa menggerakkan kursor pemindaian melintasi karakter.

## Source Hub
- [MDN Web Docs - Assertions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Assertions)
- [MDN Web Docs - Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)

---

## 1. Mental Model: "The Boundary Perimeter"

Bayangkan grid data Hub sebagai wilayah yang dilindungi:
- **`^` (Start Perimeter)**: Scanner hanya diijinkan mulai dari pintu masuk wilayah (Awal String).
- **`$` (End Perimeter)**: Scanner hanya diizinkan berhenti tepat di pintu keluar wilayah (Akhir String).
- **`\b` (Word Boundary)**: Scanner memastikan ia berada di celah antara blok kata dan karakter non-kata (seperti spasi atau tanda baca).
- **Lookarounds**: Scanner seperti memiliki "Mata Laser" yang bisa mengintip ke depan atau ke belakang untuk memastikan ada pola tertentu sebelum ia memutuskan untuk mencocokkan data saat ini.

![Boundary Assertions Premium](./assets/boundary_assertions_premium.svg)

```mermaid
flowchart LR
    A[text position] --> B[^ start]
    A --> C[$ end]
    A --> D[\b word boundary]
    A --> E[lookarounds]
```

---

## 2. Jenis Penjaga Perimeter

### A. Anchors (Jangkar)
| Simbol | Deskripsi | Kegunaan Utama |
| :--- | :--- | :--- |
| `^` | Awal Baris / String | Validasi input yang harus dimulai dengan pola tertentu. |
| `$` | Akhir Baris / String | Validasi input yang harus berakhir dengan pola tertentu. |
| `\b` | Batas Kata | Menghindari pencarian parsial (misal: cari `cat` tapi tidak kena `category`). |

### B. Lookarounds (Intipan)
| Simbol | Nama | Logika |
| :--- | :--- | :--- |
| `(?=...)` | Positive Lookahead | "Cocokkan jika DI DEPANNYA ada..." |
| `(?!...)` | Negative Lookahead | "Cocokkan jika DI DEPANNYA **TIDAK** ada..." |
| `(?<=...)`| Positive Lookbehind | "Cocokkan jika DI BELAKANGNYA ada..." |
| `(?<!...)`| Negative Lookbehind | "Cocokkan jika DI BELAKANGNYA **TIDAK** ada..." |

---

## 3. Kekuatan Lookaround: Validasi Tanpa Konsumsi
Lookaround sangat berguna untuk memvalidasi syarat tanpa "memakan" teks tersebut. Contoh klasik: Memastikan password memiliki minimal satu angka sebelum memproses karakter lainnya.

---

## Arsitek Mindset: Presisi Tanpa Jejak

Sebagai arsitek Hub:
- **Strict Validation**: Selalu gunakan `^` dan `$` saat memvalidasi format data krusial (seperti email atau token) agar tidak ada data sampah di sekitar nilai yang benar.
- **Accurate Search**: Gunakan `\b` jika Anda ingin melakukan fitur pencarian "Whole Word Only".
- **Conditional Sifting**: Gunakan Lookarounds untuk logika yang bergantung pada konteks sekitar tanpa merusak posisi kursor scanner Anda.

---

## Hands-on: Lab Penjaga Batas
Berlatih membatasi pergerakan scanner di titik-titik krusial Grid data di `examples/grid_boundaries_lab.js`.

---
*Status: [status.md](../../../status.md)*
