# BK-03: Class Architectures (Clause 15.10)

![Book Header](https://img.shields.io/badge/BK--03-CLASSES-red?style=for-the-badge)
![Status](https://img.shields.io/badge/STATUS-GOLD_STANDARD-green?style=for-the-badge)

> **"Pabrik Cetak Biru: Bagaimana Hub Membangun Struktur Objek Melalui Arsitektur Kelas dan Sistem Pewarisan yang Terenkapsulasi."**

---

## 🌓 1. Essence: The Narrative

### Dual Definition
- **Formal**: Spesifikasi mengenai pendefinisian **Class Objects** yang berfungsi sebagai template untuk pembuatan instansi. Mencakup aturan evaluasi deklarasi kelas, mekanisme pewarisan melalui slot internal **`[[ClassHeritage]]`**, serta sistem enkapsulasi menggunakan **Private Elements** (`#`).
- **Analogi**: Bayangkan sebuah **Blueprint Arsitektur Gedung**. Kelas adalah blueprint tersebut. Di dalamnya terdapat instruksi untuk pondasi dasar (**Heritage/Extends**), tipe ruangan untuk semua penghuni (**Instance Methods/Fields**), dan ruang panel kontrol rahasia yang hanya bisa diakses oleh pengelola gedung (**Private Fields**). Anda bisa menggunakan blueprint ini untuk membangun banyak gedung serupa, masing-masing dengan nomor unitnya sendiri tetapi tetap mengikuti struktur utama yang sama.

---

## 🗺️ 2. Visual Logic: Heritage & Prototype Map

Aliran data dan link prototype saat sebuah kelas didefinisikan dengan pewarisan:

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#F7DF1E', 'primaryTextColor': '#000', 'lineColor': '#FF0000'}}}%%
graph TD
    Sub[Class Subclass] -->|extends| Super[Class Superclass]
    
    subgraph "The Construction Link"
        Sub -->|[[Prototype]]| Super
        SubProto[Subclass.prototype] -->|[[Prototype]]| SuperProto[Superclass.prototype]
    end
    
    subgraph "Internal Slots"
        Sub -->|[[ClassHeritage]]| Super
        Sub -->|[[ConstructorKind]]| Kind[base vs derived]
    end

    style Sub fill:#f7df1e,stroke:#333
    style Super fill:#fff,stroke:#333
    style Kind fill:#fff,stroke:#ff0000
    style SubProto fill:#f7df1e,stroke:#333
```

---

## 🏛️ 3. Strategic Chapters (Levels 5)

Arsitektur dan pewarisan kelas:

1.  **[CH-01: Class Definitions and Heritage](./CH-01_ClassHeritage/)**
    *Evaluasi deklarasi kelas, sirkuit `extends`, dan inisialisasi constructor.*
2.  **[CH-02: Private Elements and Static Logic](./CH-02_PrivateStatic/)**
    *Enkapsulasi tingkat tinggi: Private fields/methods dan anggota statis di level kelas.*

---

## 🧠 4. Under-the-hood: The "Derived" Constructor
Pada kelas turunan (`subclass extends superclass`), constructor memiliki status `[[ConstructorKind]]` bernilai `"derived"`. Perbedaan krusialnya: constructor derived tidak secara otomatis membuat objek `this`. Ia harus memanggil `super()` terlebih dahulu, yang akan memicu constructor parent untuk menginstansiasi objek, yang kemudian "dikembalikan" ke subclass untuk diikat ke `this`. Mencoba mengakses `this` sebelum `super()` akan memicu `ReferenceError` di level engine.

---

## 🎖️ 5. The Gold Standard Checklist
- [x] **Spec-Alignment**: Sinkronisasi dengan Clause 15.10.
- [x] **Visual Logic**: Mermaid diagram untuk Heritage & Prototype Map.
- [x] **Mental Model**: Analogi "Blueprint Arsitektur Gedung".

---
*Buku Status: [x] Complete | [status.md](../../docs/status.md) | Kembali ke [SR-06](../README.md)*
