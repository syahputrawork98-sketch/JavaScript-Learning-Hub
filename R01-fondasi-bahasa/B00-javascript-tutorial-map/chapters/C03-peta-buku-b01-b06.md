# C03 - Peta Buku B01 sampai B06

## Tujuan

Bab ini memetakan fungsi setiap buku agar pembaca tidak salah urutan belajar.

## Peta Buku Inti

| Kode | Buku | Fungsi Utama | Output Minimal |
| --- | --- | --- | --- |
| `B01` | [Lexical dan Grammar Dasar](../../B01-lexical-dan-grammar-dasar/README.md) | Fondasi bentuk sintaks JavaScript | Paham struktur dasar file JavaScript dan aturan penulisan token/sintaks |
| `B02` | [Values, Types, dan Coercion Dasar](../../B02-values-types-dan-coercion-dasar/README.md) | Fondasi perilaku nilai dan tipe data | Bisa memprediksi hasil coercion umum dan kasus `==` vs `===` |
| `B03` | [Expressions, Operators, dan Statements](../../B03-expressions-operators-statements/README.md) | Fondasi logika program dan kontrol alur | Bisa menulis alur keputusan dan loop yang benar |
| `B04` | [Functions dan Scope Dasar](../../B04-functions-dan-scope-dasar/README.md) | Fondasi pemecahan kode ke fungsi | Bisa menulis fungsi dengan parameter/return jelas dan scope tidak rancu |
| `B05` | [Objects, Arrays, dan Built-ins Dasar](../../B05-objects-arrays-builtins-dasar/README.md) | Fondasi struktur data praktis | Bisa memanipulasi data object/array dengan method dasar yang tepat |
| `B06` | [Error Handling dan Modules Dasar](../../B06-error-handling-dan-modules-dasar/README.md) | Fondasi ketahanan program dan modularisasi | Bisa menangani error dasar dan memecah kode ke beberapa modul |

## Urutan Rekomendasi

1. `B01`
2. `B02`
3. `B03`
4. `B04`
5. `B05`
6. `B06`

Urutan ini disusun agar pembaca tidak belajar teknik sebelum fondasi istilah dan perilaku dasarnya stabil.

## Dependency Praktis

- `B02` dibaca setelah `B01`.
- `B03` membutuhkan pemahaman `B01-B02`.
- `B04` membutuhkan pemahaman `B03`.
- `B05` membutuhkan pemahaman `B03-B04`.
- `B06` membutuhkan pemahaman `B03-B05`.

## Titik Checkpoint

- Setelah `B02`: pembaca bisa menjelaskan mengapa output kode sederhana bernilai demikian.
- Setelah `B04`: pembaca bisa menulis fungsi yang rapi dan tidak membingungkan scope.
- Setelah `B06`: pembaca siap membuat mini project JavaScript dasar multi-file.

## Jika Mandek di Tengah

- Mandek di `B02`: ulang konsep truthy/falsy dan equality sebelum lanjut.
- Mandek di `B04`: kembali ke latihan `B03` untuk memperkuat alur logika.
- Mandek di `B06`: sederhanakan dulu struktur jadi 2 modul sebelum menambah file.
