# CH-03: Records, Lists, and Internal Data

> **"Gudang data rahasia Hub. `Records, Lists, and Internal Data` membedah struktur penyimpanan yang digunakan oleh spesifikasi untuk mengelola status internal sirkuit."**

**Source Hub**: 
- [ECMA-262: Record and List Types](https://tc39.es/ecma262/#sec-list-and-record-specification-type)

---

## 1. Konsep & Esensi

**Definisi Arsitek**:
Spesifikasi menggunakan tipe data khusus yang tidak bisa diakses oleh kode JavaScript biasa. **Record** adalah kumpulan pasangan kunci-nilai statis (mirip objek tapi imutabel dan privat). **List** adalah urutan nilai (mirip array). Struktur-struktur ini digunakan untuk menyimpan segala sesuatu, mulai dari variabel di memori (Environment Record) hingga status modul.

**Model Mental**:
- **Record**: Formulir isian resmi Hub. Isinya tetap dan tidak bisa ditambah-tambah sembarangan setelah diisi.
- **List**: Daftar antrean tugas Hub.

---

## 2. Visualisasi Sistem: Specification Data Model

```mermaid
graph LR
    Spec[Specification Data] --> R[Record: { [[Field1]], [[Field2]] }]
    Spec --> L[List: [ Item1, Item2, ... ]]
    
    R --> Env[Environment Record: Variables]
    R --> Prop[Property Descriptor]
    L --> Args[Argument Lists]
    
    style R fill:#e1f5fe,stroke:#01579b
    style L fill:#a8e6cf,stroke:#333
```

---

## 3. Mekanisme & Hubungan

### Infrastruktur Internal (Clause 6.2.1 - 6.2.2)
1. **The Record Notation**: Ditulis dengan kurung kurawal `{ [[Field]]: value }`. Field-field ini bersifat privat bagi spesifikasi dan seringkali menentukan perilaku fundamental sebuah objek.
2. **The List Notation**: Ditulis dengan kurung siku `« value1, value2 »`. Digunakan untuk melacak urutan operasi atau parameter fungsi.
3. **Immutability**: Kebanyakan Record di level spec bersifat deskriptif—artinya mereka diciptakan untuk menjelaskan status di satu titik waktu tertentu.

### Arsitek Mindset: Structured Thinking
- Meskipun Anda tidak bisa menyentuh `Record` ini secara langsung, memahaminya membantu Anda memvisualisasikan bagaimana engine JavaScript "berpikir". Setiap kali Anda membuat variabel, bayangkan Hub sedang menulis satu baris di dalam sebuah **Environment Record**.

---

## 4. Lab Praktis
Buka file `examples/internal_record_mapping.js` untuk melihat bagaimana sebuah objek JavaScript "dipetakan" menjadi sebuah `Property Descriptor Record` di dalam memori engine.

---
*Status: [status.md](../../../../../status.md)*
