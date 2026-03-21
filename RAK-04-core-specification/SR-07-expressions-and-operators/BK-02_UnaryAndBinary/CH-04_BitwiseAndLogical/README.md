# CH-04: Binary Bitwise and Logical Ops

> **"Logika biner murni. `Binary Bitwise and Logical Ops` adalah sirkuit pengambilan keputusan tingkat rendah yang bekerja langsung pada status bit atau aliran boolean."**

**Source Hub**: 
- [ECMA-262: Binary Bitwise Operators](https://tc39.es/ecma262/#sec-binary-bitwise-operators)
- [ECMA-262: Binary Logical Operators](https://tc39.es/ecma262/#sec-binary-logical-operators)

---

## 1. Konsep & Esensi

**Definisi Arsitek**:
Operator **Binary Bitwise** (`&`, `|`, `^`) bekerja pada representasi biner 32-bit dari operannya. Operator **Logical** (`&&`, `||`, `??`) digunakan untuk mengatur aliran eksekusi berdasarkan nilai kebenaran (*truthiness*). Khusus untuk `&&` dan `||`, mereka memiliki perilaku **Short-circuiting**.

**Model Mental**:
- **Bitwise**: Gerbang logika fisik di sirkuit Hub. AND hanya menyala jika kedua kabel aktif.
- **Logical**: Saklar cadangan di rumah. "Gunakan lampu utama (A) ATAU lampu cadangan (B)". Jika lampu utama menyala, Anda tidak perlu memeriksa lampu cadangan.

---

## 2. Visualisasi Sistem: Short-Circuit Logic

```mermaid
graph TD
    Start[A || B] --> CheckA{Is A Truthy?}
    CheckA -->|Yes| EndA[Result: A / Skip B]
    CheckA -->|No| CheckB[Result: B]
    
    style CheckA fill:#f1c40f,stroke:#333
    style EndA fill:#a8e6cf,stroke:#333
```

---

## 3. Mekanisme & Hubungan

### Operator Modern
1. **Nullish Coalescing (`??`)**: Hanya beralih ke operand kedua jika yang pertama adalah `null` atau `undefined`. Berbeda dengan `||` yang beralih jika nilai pertama adalah "falsy" (termasuk `0` atau `""`).
2. **Short-circuiting**: Penting untuk performa. Jika operand pertama `&&` sudah `false`, Hub tidak akan membuang energi untuk mengevaluasi operand kedua.
3. **Bitwise AND/OR/XOR**: Digunakan untuk manipulasi flag status dalam satu variabel.

### Arsitek Mindset: The "Truthy" Trap
- Selalu hargai perbedaan antara `||` dan `??`. Dalam arsitektur konfigurasi, seringkali nilai `0` atau `false` adalah nilai yang valid. Menggunakan `||` untuk memberikan nilai default dalam kasus tersebut akan me-reset sirkuit ke default secara tidak sengaja.

---

## 4. Lab Praktis
Buka file `examples/logical_shortcircuit_lab.js` untuk melihat bagaimana Hub menghentikan eksekusi di tengah jalan melalui mekanisme short-circuit.

---
*Status: [status.md](../../../../../status.md)*
