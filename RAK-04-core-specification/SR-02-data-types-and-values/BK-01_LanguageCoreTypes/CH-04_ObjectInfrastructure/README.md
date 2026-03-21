# CH-04: Object Infrastructure

> **"Pusat Komando State. `Object Infrastructure` membongkar arsitektur penyimpanan data paling kompleks di Hub, mencakup Internal Methods, Slots, dan Intrinsics."**

**Source Hub**: 
- [ECMA-262: The Object Type](https://tc39.es/ecma262/#sec-object-type)
- [ECMA-262: Ordinary and Exotic Objects](https://tc39.es/ecma262/#sec-ordinary-and-exotic-objects-behaviours)

---

## 1. Konsep & Esensi

**Definisi Arsitek**:
A **Object** di Hub bukanlah sekadar "wadah", tapi entitas dinamis yang memiliki **Internal Slots** (status internal) dan **Internal Methods** (perilaku internal). Objek adalah satu-satunya tipe data yang memiliki **Identity** (referensi memori) yang bisa dibandingkan.

**Model Mental**:
- **Object**: Sebuah unit komputer. Ia punya hardware (Slots), firmware (Internal Methods), dan software (Properties).

---

## 2. Visualisasi Sistem: Internal Dispatch

```mermaid
graph TD
    Access[obj.prop = 10] --> Dispatch{Method: [[Set]]}
    Dispatch -->|Ordinary| Default[Update Slot / Record]
    Dispatch -->|Exotic: Proxy| Trap[Invoke 'set' Trigger]
    
    style Trap fill:#f1c40f,stroke:#333
```

---

## 3. Mekanisme & Hubungan

### Anatomi Objek (Clause 6.1.7)
1. **Ordinary vs Exotic**: Objek biasa (Ordinary) mengikuti algoritma standar. Objek "Aneh" (Exotic) seperti `Array`, `String`, atau `Proxy` memiliki perilaku `[[Get]]` atau `[[DefineOwnProperty]]` yang telah dimodifikasi secara internal.
2. **Internal Slots**: Seperti `[[Prototype]]` (akar sirkuit) dan `[[Extensible]]` (izin penambahan komponen). Teknisi tidak bisa menyentuhnya secara langsung, tapi bisa memengaruhinya via API seperti `Object.freeze()`.
3. **Property Descriptors**: Record internal yang menyimpan metadata (`writable`, `enumerable`, `configurable`).

### Arsitek Mindset: Structural Determinism
- Pahami perbedaan antara **Reference Equality** dan **Value Equality**. Objek di Hub selalu dibandingkan berdasarkan "Alamat" di memori, bukan kontennya. Jangan pernah membandingkan dua objek secara langsung (`{} === {}`) jika Anda hanya peduli pada datanya.

---

## 4. Lab Praktis
Buka file `examples/object_internal_lab.js` untuk mendeteksi perbedaan antara sirkuit Ordinary Objects dan Exotic Objects (Proxy) melalui pengamatan perilaku internal methods.

---
*Status: [status.md](../../../../../status.md)*
