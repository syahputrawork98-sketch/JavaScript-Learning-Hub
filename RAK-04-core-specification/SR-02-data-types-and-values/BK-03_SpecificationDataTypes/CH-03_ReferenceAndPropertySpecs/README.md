# CH-03: Reference and Property Specs

> **"Mekanisme pelacakan identitas dan atribut. `Reference and Property Specs` menjelaskan bagaimana Hub menemukan variabel dan bagaimana ia menjaga kerahasiaan elemen privat."**

**Source Hub**: 
- [ECMA-262: The Reference Record](https://tc39.es/ecma262/#sec-reference-record-specification-type)
- [ECMA-262: Property Descriptor Specification Type](https://tc39.es/ecma262/#sec-property-descriptor-specification-type)

---

## 1. Konsep & Esensi

**Definisi Arsitek**:
Dua tipe meta penting untuk akses data adalah:
1. **Reference Record**: Mewakili "alamat" dari sebuah variabel atau properti (Base, Referenced Name, Strict flag). Digunakan untuk resolusi nama.
2. **Property Descriptor**: Record yang menentukan perilaku properti objek (Value, Writable, Enumerable, Configurable).

**Model Mental**:
- **Reference**: Seperti label di atas kabel: "Ini adalah kabel 'Tenaga' yang terhubung ke Power Plant A".
- **Descriptor**: Seperti spesifikasi fisik kabel tersebut: "Kabel ini hanya bisa dibaca statusnya, tidak bisa diganti isinya".

---

## 2. Visualisasi Sistem: Data Access Layers

```mermaid
graph TD
    Code[Code: obj.x = 1] --> Ref[Create Reference Record]
    Ref --> Resolve[Identify Base: obj, Name: x]
    Resolve --> Desc[Get Property Descriptor of 'x']
    Desc --> Check{is Writable?}
    Check -->|Yes| Set[Perform [[Set]] Operation]
    Check -->|No| Fail[Silent Fail / TypeError]
    
    style Ref fill:#e1f5fe,stroke:#01579b
    style Desc fill:#a8e6cf,stroke:#333
```

---

## 3. Mekanisme & Hubungan

### Komponen Lanjutan
1. **PrivateElement & PrivateName**: Mekanisme internal untuk mendukung field `#privat` di dalam Class. Hub menggunakan sistem hashing internal agar elemen ini tidak bisa diakses dari luar sirkuit class.
2. **Super Reference**: Tipe khusus dari Reference Record yang tahu cara mencari data di dalam prototipe induk.
3. **Unresolvable Reference**: Terjadi saat Anda mencoba mengakses variabel yang tidak ada (Memicu `ReferenceError`).

### Arsitek Mindset: Identity Resolution
- Ketahuilah bahwa setiap kali Anda menulis `x`, Hub menciptakan sebuah **Reference Record** sementara. Memahami struktur record ini membantu Anda mengerti teknis di balik "Sisi Kiri" (LHS) dan "Sisi Kanan" (RHS) dari sebuah operasi penugasan.

---

## 4. Lab Praktis
Buka file `examples/reference_resolution_lab.js` untuk mensimulasikan bagaimana Hub membangun Reference Record saat mencari variabel di dalam rantai scope.

---
*Status: [status.md](../../../../../status.md)*
