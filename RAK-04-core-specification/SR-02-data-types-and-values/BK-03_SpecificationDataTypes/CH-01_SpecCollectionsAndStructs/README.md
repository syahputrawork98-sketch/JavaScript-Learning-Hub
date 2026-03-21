# CH-01: Spec Collections and Structs

> **"Wadah data internal spesifikasi. `Spec Collections and Structs` adalah fondasi organisasi informasi di dalam algoritma ECMA-262."**

**Source Hub**: 
- [ECMA-262: Specification Types](https://tc39.es/ecma262/#sec-specification-types)
- [ECMA-262: List and Record Types](https://tc39.es/ecma262/#sec-list-and-record-specification-type)

---

## 1. Konsep & Esensi

**Definisi Arsitek**:
**Specification Types** adalah tipe data meta yang digunakan dalam algoritma untuk mengelola status Grid. Tipe yang paling umum adalah **List** (urutan nilai), **Record** (kumpulan field `[[...]]`), dan **Enum** (kumpulan konstanta bernama).

**Model Mental**:
Bayangkan catatan teknis seorang arsitek Hub. Catatan itu berisi daftar inventaris (List) dan formulir spesifikasi komponen (Record). Anda tidak akan melihat catatan ini di panel kontrol Hub, tapi arsitek membutuhkannya untuk merancang sirkuit.

---

## 2. Visualisasi Sistem: Internal Structs

```mermaid
graph TD
    subgraph Record_Struct [Spec Record: [[Field]]]
        F1[[Value]]
        F2[[Writable]]
        F3[[Enumerable]]
    end
    
    subgraph List_Struct [Spec List]
        L1[Item 1] --> L2[Item 2] --> L3[Item 3]
    end
    
    style Record_Struct fill:#e1f5fe,stroke:#01579b
    style List_Struct fill:#a8e6cf,stroke:#333
```

---

## 3. Mekanisme & Hubungan

### Struktur Data Meta
1. **Record**: Ditulis dengan kurung siku ganda, misalnya `PropertyDescriptor { [[Value]]: 5 }`. Digunakan untuk menyimpan atribut objek.
2. **List**: Ditulis dengan tanda kurung siku, misalnya `« 1, 2, 3 »`. Digunakan untuk argumen fungsi atau daftar properti.
3. **Enum**: Nilai konstanta yang tidak dapat diubah, misalnya `~empty~` atau `~unused~`. Digunakan sebagai flag status di dalam algoritma.

### Arsitek Mindset: Spec-Rigor
- Saat membaca spesifikasi, jangan bingung antara **List** spec dan **Array** JavaScript. List adalah alat tulis spek, sedangkan Array adalah komponen nyata yang bisa Anda panggil di dalam kode.

---

## 4. Lab Praktis
Buka file `examples/spec_structs_lab.js` untuk mensimulasikan bagaimana sebuah Record internal digunakan oleh Hub untuk menyimpan status konfigurasi sebuah sirkuit.

---
*Status: [status.md](../../../../../status.md)*
