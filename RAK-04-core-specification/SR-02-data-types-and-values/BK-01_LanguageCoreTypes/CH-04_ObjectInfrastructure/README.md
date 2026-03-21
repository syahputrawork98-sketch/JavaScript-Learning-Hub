# CH-04: Object Infrastructure

> **"Arsitektur kompleks penyimpan energi. `Object Infrastructure` adalah fondasi bagaimana data dan perilaku dikumpulkan menjadi satu unit yang dinamis dan modular."**

**Source Hub**: 
- [ECMA-262: The Object Type](https://tc39.es/ecma262/#sec-object-type)
- [ECMA-262: Internal Methods and Internal Slots](https://tc39.es/ecma262/#sec-object-internal-methods-and-internal-slots)

---

## 1. Konsep & Esensi

**Definisi Arsitek**:
Objek di JavaScript adalah kumpulan dinamis dari **Properties**. Setiap properti memiliki **Attributes** (seperti `value`, `writable`, `enumerable`). Yang lebih dalam lagi, setiap objek memiliki **Internal Slots** (ditulis `[[...]]`) yang menentukan perilaku fundamentalnya (misal: `[[Prototype]]`).

**Model Mental**:
Bayangkan sebuah kotak peralatan (Object). Kotak ini punya laci (Properties). Setiap laci punya label (Key) dan kunci (Attributes). Di balik kotak, ada sistem operasi tersembunyi (Internal Methods) yang mengatur bagaimana kotak tersebut dibuka atau ditambah isinya.

---

## 2. Visualisasi Sistem: Anatomy of an Object

```mermaid
graph TD
    Obj[Object] --> Slots[Internal Slots: [[Prototype]], [[Extensible]]...]
    Obj --> Props[Properties List]
    Props --> P1[Property 'id']
    P1 --> Attr[Attributes: Value, Writable, Enumerable, Configurable]
    
    style Slots fill:#f8bbd0,stroke:#880e4f
    style Attr fill:#a8e6cf,stroke:#333
```

---

## 3. Mekanisme & Hubungan

### Atribut dan Invarian
1. **Property Attributes**: Menentukan apakah sebuah properti bisa diubah, dihapus, atau dilihat dalam loop.
2. **Internal Methods (Clause 6.1.7.2)**: Operasi tingkat rendah seperti `[[Get]]`, `[[Set]]`, `[[Delete]]`. Anda tidak bisa memanggilnya langsung, tapi mereka bekerja setiap kali Anda melakukan `obj.prop`.
3. **Invariants**: Aturan sakral yang tidak boleh dilanggar oleh Internal Methods (Contoh: Jika sebuah properti tidak bisa dikonfigurasi, ia tidak boleh tiba-tiba menghilang).

### Arsitek Mindset: Defensive Infrastructure
- Gunakan `Object.freeze()` atau `Object.preventExtensions()` untuk mengunci infrastruktur objek Anda. Ini memastikan tidak ada sirkuit luar yang bisa merusak stabilitas data inti di dalam Hub Anda.

---

## 4. Lab Praktis
Buka file `examples/object_infrastructure_lab.js` untuk membedah atribut properti menggunakan `Object.getOwnPropertyDescriptor` dan melihat bagaimana Hub melindungi integritas objek melalui invarian.

---
*Status: [status.md](../../../../../status.md)*
