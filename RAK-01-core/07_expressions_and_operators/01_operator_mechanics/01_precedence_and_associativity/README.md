# Bab 01: Precedence & Associativity (Antrean VIP)

Saat Anda menulis ekspresi `1 + 2 * 3`, mengapa hasilnya `7` dan bukan `9`? Rahasianya terletak pada **Operator Precedence** dan **Associativity** (Table 38 pada Clause 13.15 ECMA-262). Ini adalah hukum dasar perhitungan di dalam mesin JavaScript.

## Sistem Analogi (Mental Model)

> **Analogi Singkat:**  
> **Precedence** adalah **Antrean VIP** di sebuah klub malam. Meskipun operator `+` datang duluan di dalam kode, operator `*` memiliki "Kartu VIP" (Level yang lebih tinggi), sehingga ia diizinkan masuk ke dalam prosesor lebih dulu. **Associativity** adalah aturan arah antrean jika ada dua tamu dengan level VIP yang sama.

> **Analogi Panjang (Kantin Sekolah yang Teratur):**  
> Bayangkan sebuah kantin sekolah (Engine) saat jam istirahat.
> - **Precedence (Kelas Sosial)**: Ada aturan tidak tertulis bahwa Kakak Kelas (Operator Perkalian/Pembagian) selalu dilayani lebih dulu daripada Adik Kelas (Operator Pertambahan/Pengurangan). Meskipun Adik Kelas berdiri di depan antrean, pelayan kantin akan melayani Kakak Kelas di belakangnya terlebih dahulu.
> - **Associativity (Arah Antrean)**: Jika ada dua Kakak Kelas yang datang bersamaan (misal `*` dan `/`), pelayan akan melayani mereka berdasarkan arah antrean standar: dari **Kiri ke Kanan** (*Left-to-Right*). 
> - **Pengecualian**: Tapi untuk beberapa perintah khusus, seperti "Pangkat" (`**`) atau "Pemberian Nilai" (`=`), pelayan melayani dari **Kanan ke Kanan** (*Right-to-Left*).

---

## Memahami Kasta Operator (Precedence)

JavaScript membagi operator ke dalam sekitar 20 level kasta. Semakin tinggi angkanya, semakin cepat ia dieksekusi.

| Group | Operators | Precedence Level |
| :--- | :--- | :--- |
| **Grouping** | `( ... )` | 18 (Tertinggi!) |
| **Member Access** | `obj.prop` | 17 |
| **Multiplicative** | `*`, `/`, `%` | 12 |
| **Additive** | `+`, `-` | 11 |
| **Assignment** | `=`, `+=`, etc. | 2 (Terendah) |

### Rahasia Tanda Kurung `()`
Tanda kurung bukan sekadar simbol matematika; ia adalah "Jalur Fast Track". Dengan tanda kurung, Anda secara manual menaikkan level operator di dalamnya menjadi kasta tertinggi, mengalahkan aturan kasta standar.

## Arah Evaluasi (Associativity)

Jika level kasta sama, JavaScript melihat arah:
- **L-to-R (Left to Right)**: Hampir semua operator matematika (`10 - 5 - 2` menjadi `5 - 2 = 3`).
- **R-to-L (Right to Left)**: Operator Assignment (`a = b = 5` menjadi `b = 5` dulu, baru `a = b`).

## Mengapa Arsitek Harus Peduli?

Mengingat seluruh tabel precedence adalah hal mustahil. Namun, seorang Senior Architect tahu bahwa:
1. **Andalkan Tanda Kurung**: Jangan membuat pembaca kode (atau diri Anda di masa depan) menebak-nebak urutan eksekusi. Gunakan `()` untuk memperjelas niat.
2. **Hati-hati dengan Logika**: Operator perbandingan (`>`) menang melawan operator logika (`&&`). Memahami ini mencegah bug validasi yang mematikan.

## Contoh Eksekusi
Lihat pembuktian kasta operator dan bahaya tanpa tanda kurung pada folder [examples/](./examples/).
