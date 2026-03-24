# CH-02: Method Definitions and Property Accessors

> **"Keahlian khusus di dalam objek. `Method Definitions and Property Accessors` adalah cara Hub memberikan kecerdasan pada unit data statis."**

**Source Hub**: 
- [ECMA-262: Method Definitions](https://tc39.es/ecma262/#sec-method-definitions)

---

## 1. Konsep & Esensi

**Definisi Arsitek**:
**Method Definition** adalah cara singkat untuk menambahkan fungsi ke dalam objek literal atau kelas. **Accessors** (get/set) adalah metode khusus yang menyamar sebagai properti data, memungkinkan Hub menjalankan logika saat sebuah nilai dibaca atau ditulis.

**Model Mental**:
Bayangkan sebuah laci di Hub.
- **Data Property**: Anda memasukkan barang, barang itu ada di sana.
- **Accessor (Getter/Setter)**: Anda mencoba memasukkan barang, tapi ada robot yang mengambilnya, memeriksanya, baru kemudian menaruhnya (atau menolaknya).

---

## 2. Visualisasi Sistem: Accessor Logic Flow

```mermaid
graph TD
    User[Write: obj.energy = 100] --> Set[Execute 'set energy(v)']
    Set --> Validate{Is valid?}
    Validate -->|Yes| Update[Update Internal Slot]
    Validate -->|No| Fail[Log error/Ignore]
    
    style Set fill:#f1c40f,stroke:#333
    style Update fill:#a8e6cf,stroke:#333
```

---

## 3. Mekanisme & Hubungan

### Komponen Internal
1. **HomeObject**: Setiap metode memiliki slot internal `[[HomeObject]]` yang menunjuk ke objek tempat ia didefinisikan. Ini krusial agar kata kunci `super` bisa menemukan prototipe yang benar.
2. **Computed Property Names**: Nama metode bisa ditentukan secara dinamis menggunakan tanda kurung siku `[ ... ]`.
3. **Get/Set (Clause 15.4)**: Mengalihkan operasi `[[Get]]` dan `[[Set]]` internal ke pemanggilan fungsi yang Anda tentukan.

### Arsitek Mindset: Encapsulation and Invariants
- Gunakan Getters dan Setters untuk menjaga integritas data model Anda. Jangan biarkan sirkuit luar menulis data sampah ke dalam properti internal objek tanpa melewati filter validasi yang Anda pasang di setter.

---

## 4. Lab Praktis
Buka file `examples/01_accessor_validation_lab.js` untuk membuat objek "SafeStorage" yang memvalidasi tipe data sebelum menyimpannya melalui setter.

---
*Status: [x] Complete | [status.md](../../../../../status.md)*
