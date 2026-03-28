# CH-02: Access Logic

![Status](https://img.shields.io/badge/STATUS-COMPLETE-green?style=for-the-badge)

> **"Gerbang Akses: Mengatur Jalur Visibilitas Data dan Utilitas Bersama."**

---

## 🔗 Source Hub
- **Primary Source**: [MDN Web Docs - Classes: Private class features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_features)
- **Technical Reference**: [ECMA-262 - Static Semantics: IsStatic](https://tc39.es/ecma262/#sec-static-semantics-isstatic)
- **Conceptual Parent**: [BK-01 Class Foundations](../README.md)

---

## 🌓 1. Essence: The Logic
Setelah cetak biru terbentuk, arsitek harus menentukan siapa yang boleh melihat atau mengubah bagian tertentu dari unit. **Access Logic** di **CH-02** membedah penggunaan **Private Fields** (`#`) yang mengunci data di dalam sirkuit internal, dan **Static Members** yang bertindak sebagai fasilitas bersama tingkat tinggi yang menempel pada blueprint itu sendiri.

Memahami kontras visibilitas ini memungkinkan Anda membangun sistem yang tangguh, di mana *state* internal tidak bisa dimanipulasi sembarangan dari luar, sehingga integritas Hub aplikasi tetap terjaga.

---

## 🎨 2. Visual Logic: Data Visibility Hierarchy
Hierarki akses dan visibilitas data di dalam arsitektur kelas:

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#F7DF1E', 'primaryTextColor': '#000'}}}%%
graph TD
    Blueprint[Class: The Blueprint] -- "No access to" --> Private[Private: #InternalData]
    Blueprint -- "Owns" --> Static[Static: SharedUtility]
    Instance[Instance: The Unit] -- "Access to" --> Public[Public: this.data]
    Instance -- "Is locked from" --> Private
    
    subgraph Privacy_Shield
    Private
    end
    
    style Blueprint fill:#f7df1e,stroke:#333;
    style Private fill:#ffcccb,stroke:#333;
    style Static fill:#fff,stroke:#333;
```

---

## 🏛️ 3. Sections Atlas
- **[SEC-01: Private Fields](./SEC-01_PrivateFields/)**: Membedah teknik penguncian data internal menggunakan awalan `#`.
- **[SEC-02: Static Members](./SEC-02_StaticMembers/)**: Meninjau fasilitas bersama yang hidup di level blueprint, bukan di level instance.
- **[SEC-03: Getters & Setters](./SEC-03_GettersSetters/)**: Menjelaskan gerbang baca-tulis yang memungkinkan validasi data sebelum diakses.

---

## 🧪 4. The Lab (Access Lab)
Uji ketajaman penguncian dan utilitas statis di laboratorium:
- `../examples/access_logic_demo.js`

---

## ⚠️ 5. Common Pitfalls & Myths
- **Mitos**: *"Menambahkan garis bawah (`_`) di depan properti benar-benar membuatnya privat."* (Salah, itu hanyalah konvensi sosial. Hanya **Private Fields** (`#`) yang memberikan keamanan fisik di level engine JavaScript).
- **Mitos**: *"Static members bisa diakses dari instance."* (Faktanya, anggota statis **hanya** bisa dipanggil melalui nama kelasnya langsung, tidak bisa melalui unit hasil rakitan/instance).

---
*Back to [Class Foundations](../README.md)*
