# CH-01: Hidden Classes (Shapes)

Karena JavaScript adalah bahasa dinamis, properti objek bisa ditambah atau dihapus kapan saja. V8 menangani ini dengan efisien menggunakan **Hidden Classes** (atau "Shapes").

## 🧩 Masalah: Dinamisme Properti
Di bahasa statis seperti C++, memori untuk objek sudah ditentukan di awal. Di JS, V8 tidak tahu di mana lokasi memori properti `x` jika objek `obj` berubah-ubah.

## 🛠️ Solusi: Hidden Classes
Setiap kali Anda membuat objek atau menambah properti, V8 membuat/mengaitkan objek tersebut dengan "Hidden Class" khusus yang memetakan nama properti ke offset memori.

**Aturan Emas:**
Jika dua objek memiliki properti yang sama ditambahkan dalam **urutan yang sama**, mereka akan berbagi Hidden Class yang sama. Ini sangat menguntungkan untuk performa.

---
*Kembali ke [BK-01](../README.md)*
