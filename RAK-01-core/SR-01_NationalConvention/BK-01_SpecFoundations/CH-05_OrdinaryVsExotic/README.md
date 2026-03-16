# CH-05: Ordinary vs Exotic Objects

Dalam dunia spesifikasi, tidak semua objek diciptakan sama. Ada objek yang "patuh aturan" dan ada objek yang "berperilaku aneh". Inilah perbedaan antara **Ordinary** dan **Exotic**.

## Mental Model: "Karyawan Standar vs Agen Spesial"
- **Ordinary Object:** Seperti karyawan yang bekerja sesuai SOP perusahaan (Spesifikasi). Jika Anda minta data, dia memberi data dengan cara standar.
- **Exotic Object:** Seperti agen rahasia yang punya aturan main sendiri. Dia mungkin terlihat seperti karyawan biasa, tapi saat Anda meminta sesuatu, dia melakukannya dengan cara yang tidak lazim.

---

## 1. Ordinary Objects
Objek ini adalah mayoritas objek yang Anda buat.
- **Syarat:** Memiliki implementasi default untuk semua *Essential Internal Methods* (seperti `[[Get]]`, `[[Set]]`, `[[Delete]]`, dll) yang didefinisikan di Clause 10.1.
- Jika perilakunya standar dan bisa diprediksi, dia adalah **Ordinary**.

## 2. Exotic Objects
Objek ini memiliki setidaknya satu implementasi *Internal Method* yang **tidak standar**.
- **Contoh Paling Terkenal: Array.**
  - Mengapa Array disebut Exotic? Karena properti `length`-nya berperilaku "ajaib". Saat Anda menambah elemen, `length` otomatis bertambah. Saat Anda mengecilkan `length`, elemen di ujung otomatis terhapus.
  - Perilaku ini membutuhkan implementasi khusus pada `[[DefineOwnProperty]]`.
- **Contoh Lain:**
  - **String Exotic Objects:** Saat Anda mengakses `str[0]`, itu adalah perilaku exotic.
  - **Proxy:** Ini adalah raja dari segala objek exotic, karena perilakunya bisa Anda tentukan sendiri secara total.

## 3. Mengapa Pembedaan Ini Penting?
Spesifikasi sering membuat aturan yang berbeda untuk keduanya.
> *Example:* "If target is an ordinary object..."

Jika Anda sedang membaca algoritma tentang bagaimana properti dicari (Property Lookup), spesifikasi akan menjelaskan alur standarnya. Namun, jika objeknya *Exotic*, alurnya bisa melompat ke bab lain yang mendefinisikan perilaku spesifik objek tersebut.

---

## Daftar Objek Exotic Populer:
1. **Bound Function:** Hasil dari `.bind()`.
2. **Array:** Karena `length` magic.
3. **String:** Karena akses indeks integer.
4. **Arguments:** (Terutama di non-strict mode).
5. **TypedArray:** Karena akses memory buffer langsung.

---

## Tantangan Kecil
Apakah `{}` (objek kosong biasa) adalah Ordinary atau Exotic?
(Jawabannya: **Ordinary**. Dia mengikuti semua aturan standar tanpa ada perilaku khusus).

---
> [!TIP]
> **Architect's Insight:** Saat Anda menggunakan **Proxy**, Anda secara teknis sedang menciptakan objek paling birokratis dan berat di JavaScript, karena setiap akses harus melewati "Filter" exotic yang Anda buat. Gunakan dengan bijak!
