# SEC-02: Assignment Operators (Energy Routing)

> **"Setelah energi dihitung, ia harus disimpan ke dalam wadah (variabel). Assignment Operators adalah sistem perutean yang mengarahkan muatan energi ke tempat tujuan yang tepat di dalam Hub."**

Operator penugasan (Assignment) digunakan untuk memberikan nilai kepada variabel.

## 1. Mental Model: "Energy Routing"

Bayangkan sirkuit energi di mana Anda menghubungkan kabel dari sumber (`rvalue`) ke terminal penyimpanan (`lvalue`).

- **`=` (Basic Assignment)**: Hubungkan sirkuit secara langsung.
- **Compound Assignments**: Melakukan operasi matematika DAN menyimpan hasilnya sekaligus. Ini seperti memasang adaptor pengolah langsung di mulut terminal penyimpanan.

---

## 2. Jalur Pintas (Compound Assignments)

- **`x += y`**: Sama dengan `x = x + y`. Tambahkan muatan ke penyimpanan yang sudah ada.
- **`x -= y`**: Sama dengan `x = x - y`. Kurangi muatan dari penyimpanan.
- **`x *= y`**, **`x /= y`**: Pengali dan pembagi jalur cepat.

---

## 3. Logical Assignments (Advanced Routing)

Operator ini hanya akan melakukan perutean jika kondisi sirkuit tertentu terpenuhi:
- **`&&=` (Logical AND Assignment)**: Hanya isi penyimpanan jika sirkuit sudah aktif (nilai *truthy*).
- **`||=` (Logical OR Assignment)**: Hanya isi penyimpanan jika sirkuit kosong atau mati (nilai *falsy*).
- **`??=` (Nullish Coalescing Assignment)**: Hanya isi penyimpanan jika nilai saat ini adalah `null` atau `undefined` (benar-benar kosong).

```javascript
let hubStatus = "ACTIVE";
hubStatus &&= "POWERING"; // Karena ACTIVE (truthy), berubah jadi POWERING

let config = null;
config ??= "DEFAULT"; // Karena null, diisi dengan DEFAULT
```

---

## Arsitek Mindset: Kebersihan Jalur
Gunakan operator gabungan (`+=`, `&&=`) untuk menjaga kode Anda tetap ringkas dan efisien. Namun, jangan menggunakannya berlebihan pada logika yang sangat kompleks karena bisa membingungkan arsitek lain yang membaca desain sirkuit Anda.

---

## Hands-on: Lab Perutean Energi
Buka file `examples/assignment_lab.js` untuk mencoba berbagai teknik pengalokasian energi ke terminal penyimpanan Hub secara efisien.

---
*Status: [status.md](../../../status.md)*
