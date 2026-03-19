# CH-02: Inline Caches (IC)

Inline Caches (IC) adalah teknik yang digunakan V8 untuk mempercepat operasi yang berulang, seperti pengaksesan properti objek.

## 🚀 Cara Kerja
Setiap kali V8 mengakses sebuah properti (misal: `obj.x`), ia harus melakukan lookup di Hidden Class. IC akan "mengingat" lokasi memori properti tersebut dan tipe objeknya.

Jika pada panggilan berikutnya tipe objeknya sama, V8 langsung melompat ke alamat memori tanpa perlu melakukan lookup ulang.

## 📊 Tipe IC
1. **Monomorphic**: Hanya satu tipe objek yang lewat (Sangat Cepat).
2. **Polymorphic**: Beberapa tipe objek yang berbeda (Cukup Cepat).
3. **Megamorphic**: Terlalu banyak tipe objek yang berbeda (Lambat - kembali ke lookup biasa).

---
*Kembali ke [BK-01](../README.md)*
