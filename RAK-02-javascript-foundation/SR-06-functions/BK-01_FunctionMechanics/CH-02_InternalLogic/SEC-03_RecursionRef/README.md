# CH-03: Recursion Ref (Nested Sub-Processing)

> **"Beberapa masalah besar di Hub harus diselesaikan dengan memecahnya menjadi replika masalah yang lebih kecil. Rekursi adalah 'Pemrosesan Mandiri' (Self-Processing) di mana sebuah unit memanggil salinan dirinya sendiri untuk menyelesaikan tugas secara bertingkat."**

Rekursi adalah teknik di mana sebuah fungsi memanggil dirinya sendiri.

## 1. Mental Model: "Nested Sub-Processing"

Bayangkan Anda harus memindai seluruh jaringan kabel yang bercabang-cabang. Daripada menulis satu instruksi raksasa, Anda menginstruksikan unit: "Periksa sambungan ini. Jika ada cabang, buat unit seperti dirimu untuk masuk ke cabang tersebut."

Struktur ini sangat efektif untuk navigasi data bertingkat (Tree/DOM) atau perhitungan matematis berantai.

---

## 2. Anatomi Rekursi yang Aman

- **Base Case (Titik Henti)**: Kondisi darurat untuk berhenti. Tanpa ini, unit akan terus beroperasi sampai Hub meledak (*Stack Overflow*).
- **Recursive Case (Langkah Berulang)**: Bagian di mana unit memanggil dirinya sendiri dengan input yang lebih sederhana atau mendekati titik henti.

---

## 3. Stack dan Memori

Setiap pemanggilan fungsi memakan ruang di "Call Stack" Hub. Jika rekursi terlalu dalam, Anda akan kehabisan ruang.
*Catatan Teknis: Gunakan rekursi pada data yang kedalamannya terukur atau pertimbangkan menggunakan perulangan (`loop`) jika performa memori sangat kritis.*

---

## Arsitek Mindset: Elegan vs Efisien

Sebagai arsitek Hub:
- Gunakan rekursi saat struktur data memang bersifat rekursif (misal: JSON bersarang atau folder direktori).
- Rekursi sering kali menghasilkan kode yang lebih elegan dan mudah dibaca daripada tumpukan loop yang rumit.
- Selalu pastikan Base Case Anda tidak bisa dilewati agar keamanan sistem terjamin.

---

## Hands-on: Lab Pemecahan Berantai
Buka file `examples/recursion_math_lab.js` untuk melihat bagaimana kita menghitung total beban pada sirkuit paralel yang bertingkat-tingkat menggunakan logika rekursi.

---
*Status: [status.md](../../../status.md)*
