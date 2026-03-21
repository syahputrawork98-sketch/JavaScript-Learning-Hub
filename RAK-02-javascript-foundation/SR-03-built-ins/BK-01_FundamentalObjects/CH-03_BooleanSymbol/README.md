# CH-03: Boolean & Symbol (Logic & Identity)

> **"Boolean mengelola gerbang logika dasar (True/False), sementara Symbol memberikan identitas unik yang tidak mungkin tertukar dalam sistem."**

## 🔗 Source Hub
- **Primary Source (Boolean)**: [MDN Web Docs - Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
- **Primary Source (Symbol)**: [MDN Web Docs - Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

## 🎓 Senior Terminology
- **Primitive Type**: Tipe data dasar (bukan objek) yang mewakili nilai tunggal dan bersifat imut (immutable).
- **Unique Identity**: Karakteristik utama `Symbol()` di mana setiap pemanggilan selalu menghasilkan nilai unik, bahkan jika deskripsinya sama.
- **Symbolic Property**: Properti objek yang menggunakan Symbol sebagai kuncinya, sering digunakan untuk menghindari konflik nama properti.

## 1. Mental Model: "The Gate & The Secret Key"

Bayangkan Hub Energi kita:
- **Boolean**: Adalah **Gerbang Logika**. Hanya ada dua kondisi: Terbuka (`true`) atau Tertutup (`false`). Semua keputusan alur energi bergantung pada gerbang ini.
- **Symbol**: Adalah **Kunci Rahasia** unik. Meskipun dua kunci terlihat sama, mereka tidak akan pernah bisa membuka gembok yang sama. Ini adalah identitas murni.

![Logic & Identity](./assets/logic_identity.svg)

---

## 2. Boolean: Logika Dasar Hub

Boolean adalah tiang penyangga logika `if-else`.
- **Truthy**: Nilai yang dianggap benar saat diuji (seperti `1`, `"hello"`, `[]`).
- **Falsy**: Nilai yang dianggap salah (seperti `0`, `""`, `null`, `undefined`, `NaN`).

**Arsitek Mindset**: Selalu waspadalah terhadap *Falsy values*. Banyak bug di Hub terjadi karena pengembang lupa bahwa angka `0` atau string kosong `""` akan menutup gerbang logika secara otomatis.

---

## 3. Symbol: Identitas Tanpa Batas

Symbol diciptakan untuk memberikan kunci unik pada objek agar tidak terjadi tabrakan (*collision*) data:

```javascript
const ENERGY_ID = Symbol('id');
const hub = {
    [ENERGY_ID]: 'CORE-01'
};
// Tidak ada sirkuit luar yang bisa menebak nama properti ini
// tanpa memiliki referensi ke ENERGY_ID yang asli.
```

---

## 4. Global Symbol Registry

Jika Anda ingin berbagi kunci yang sama di seluruh Hub (lintas file), gunakan `Symbol.for()`:
- **`Symbol.for('key')`**: Mencari kunci di registri global; jika tidak ada, ia akan membuatnya.
- **`Symbol.keyFor(sym)`**: Mencari deskripsi dari simbol global yang ada.

---

## Hands-on: Lab Keamanan Identitas
Buka file `examples/identity_lab.js` untuk melihat bagaimana kita menggunakan Symbol untuk menyembunyikan properti metadata hub agar tidak bisa dilihat oleh pengulangan `for...in` biasa.

---
*Back to [Fundamental Objects](../README.md)*
