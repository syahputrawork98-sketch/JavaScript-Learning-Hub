# Chapter 03: Syntax-Directed & Runtime Operations

Ini adalah "Sutradara" yang menghubungkan apa yang Anda tulis (Syntax) dengan apa yang terjadi di memori (Runtime).

## 1. Syntax-Directed Operations

Beberapa operasi dalam spesifikasi bergantung pada "bentuk" kode. Spek akan mengatakan: "Jika bentuknya adalah `var x`, lakukan langkah A. Jika bentuknya adalah `let x`, lakukan langkah B."

### Analogi Singkat: "The Play Director"
Sutradara (Spesifikasi) melihat naskah (Syntax). Jika naskahnya tertulis [Marah], sutradara memerintahkan aktor (Engine) untuk berteriak. Jika naskahnya [Sedih], aktor harus menangis. Tindakan aktor (Execution) diarahkan langsung oleh tanda di naskah.

## 2. Runtime Semantics

Ini adalah langkah-langkah nyata yang dijalankan saat mesin dinyalakan. Ini termasuk alur loop, pemilihan kondisi, dan pemanggilan fungsi.

Tanpa pemahaman tentang bagaimana spek "menunjuk" ke struktur sintaksis, Anda tidak akan pernah benar-benar mengerti mengapa `hoisting` bekerja berbeda antara `var` dan `const`.
