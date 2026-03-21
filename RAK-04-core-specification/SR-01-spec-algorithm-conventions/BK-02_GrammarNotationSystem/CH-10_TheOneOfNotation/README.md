# CH-10: The "one of" Notation

Daftar pilihan ringkas untuk token tunggal. (Clause 5.1.5.5).

## 🏗️ One-Of Selection Matrix

```mermaid
grid-layout
    A["="] B["+="] C["-="]
    D["*="] E["/="] F["%="]
```

---

## 1. Notasi: `one of` (Clause 5.1.5.5)
Jika sebuah produksi diikuti oleh frasa `one of`, maka simbol-simbol yang tercantum setelahnya adalah kumpulan **Terminal** alternatif. Anda harus memilih tepat satu dari daftar tersebut agar produksi dianggap valid.

Contoh `AssignmentOperator`:
`AssignmentOperator : one of`
  `=` `*=` `/=` `%=` `+=` `-=` `<<=` `>>=` `>>>=` `&=` `^=` `|=` `**=`

Artinya: Operator penugasan apa pun dari daftar di atas akan memenuhi kriteria `AssignmentOperator`.

## 2. Efisiensi Spesifikasi
Notasi ini murni bertujuan untuk kemudahan baca (**Readability**). Tanpa `one of`, spesifikasi ECMAScript akan menjadi sangat tebal karena setiap operator akan butuh satu baris produksi sendiri. `one of` membuat struktur internal bahasa tetap ringkas dan elegan.

---

## Arsitek Mindset: Grouping and Abstraction
Seorang arsitek memahami pentingnya pengelompokan. Menggunakan `one of` adalah cara spesifikasi melakukan "Enum" di level bahasa. Ini membantu Anda melihat kesamaan fungsi di antara banyak simbol yang berbeda; misalnya, semua simbol dalam daftar `AssignmentOperator` memiliki prioritas (precedence) yang serupa dalam alur evaluasi.

---
> [!TIP]
> Saat Anda membaca spec dan bertemu `one of`, perhatikan bahwa semua pilihan di dalamnya biasanya adalah **Terminal Symbols**. Jika ada Nonterminal, biasanya tidak menggunakan notasi `one of` melainkan daftar baris alternatif biasa.
