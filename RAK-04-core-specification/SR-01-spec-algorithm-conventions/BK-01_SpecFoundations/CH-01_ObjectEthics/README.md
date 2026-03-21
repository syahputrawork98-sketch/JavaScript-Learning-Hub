# CH-01: Objects and Prototypal Ethics

> **"Etika dasar keberadaan objek. `Objects and Prototypal Ethics` mendefinisikan apa itu objek di mata spesifikasi dan bagaimana mereka saling terhubung melalui garis keturunan."**

**Source Hub**: 
- [ECMA-262: Object](https://tc39.es/ecma262/#sec-object)
- [ECMA-262: Prototype](https://tc39.es/ecma262/#sec-prototype)

---

## 1. Konsep & Esensi

**Definisi Arsitek**:
Di level spesifikasi, **Object** adalah kumpulan properti. Jika sebuah objek mengikuti semua aturan perilaku default, ia disebut **Ordinary Object**. Jika ia melanggar satu bahasa internal saja (misal: cara ia mengambil properti), ia menjadi **Exotic Object**. **Prototype** adalah objek pendamping yang menyediakan energi cadangan (properti) jika objek utama tidak memilikinya.

**Model Mental**:
- **Ordinary Object**: Karyawan teladan yang mengikuti buku aturan Hub 100%.
- **Exotic Object**: Agen khusus yang punya aturan sendiri (seperti Proxy atau Array).
- **Inheritance**: Seperti mewarisi perpustakaan keluarga. Jika Anda tidak punya buku di rak sendiri, Anda meminjam dari rak orang tua Anda (Prototype).

---

## 2. Visualisasi Sistem: Object Taxonomy Flow

```mermaid
graph TD
    Obj[Object] --> Type{Is it default?}
    Type -->|Yes| Ord[Ordinary Object]
    Type -->|No: Custom [[Get]]/[[Set]]| Exo[Exotic Object]
    
    Ord --> Proto[Linked to [[Prototype]]]
    Exo --> Proto
    
    style Ord fill:#a8e6cf,stroke:#333
    style Exo fill:#f8bbd0,stroke:#880e4f
```

---

## 3. Mekanisme & Hubungan

### Pilar Keberadaan (Clause 4.4.1 - 4.4.10)
1. **Ordinary Object**: Memiliki metode internal standar untuk manipulasi properti.
2. **Exotic Object**: Objek yang mengabaikan satu atau lebih metode internal standar (misal: `Proxy` yang menginterupsi seluruh transmisi).
3. **Inheritance (Clause 4.4.5)**: Hubungan dinamis di mana sebuah objek secara otomatis mendelegasikan pencarian properti ke objek prototipenya.

### Arsitek Mindset: Predictable Integrity
- Rancanglah sebagian besar sistem Anda menggunakan **Ordinary Objects** untuk menjamin stabilitas dan performa maksimal di engine Hub. Gunakan **Exotic Objects** (seperti Proxy) hanya jika Anda membutuhkan kontrol ketat pada sirkuit yang sangat spesifik.

---

## 4. Lab Praktis
Buka file `examples/object_taxonomy_lab.js` untuk memverifikasi perbedaan antara objek biasa dan objek Proxy (Exotic) melalui inspeksi internal.

---
*Status: [status.md](../../../../../status.md)*
