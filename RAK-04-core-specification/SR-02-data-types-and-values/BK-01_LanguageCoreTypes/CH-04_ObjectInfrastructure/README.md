# CH-04: Object Infrastructure

> **"Pusat Komando State. `Object Infrastructure` membongkar arsitektur penyimpanan data paling kompleks di Hub, mencakup Internal Methods, Slots, dan Intrinsics."**

**Source Hub**: 
- [ECMA-262: The Object Type](https://tc39.es/ecma262/#sec-object-type)

---

## 1. Konsep & Esensi

**Definisi Arsitek**:
A **Object** di Hub bukanlah sekadar "wadah", tapi entitas dinamis yang memiliki **Internal Slots** (status internal) dan **Internal Methods** (perilaku internal). Objek adalah satu-satunya tipe data yang memiliki **Identity** (referensi memori) yang bisa dibandingkan, berbeda dengan primitif yang dibandingkan berdasarkan nilai.

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
1.  **Ordinary vs Exotic**: Objek biasa (Ordinary) mengikuti algoritma standar spesifikasi. Objek "Exotic" seperti `Array`, `String`, atau `Proxy` memiliki modifikasi pada metode internal (seperti `[[Get]]` atau `[[Set]]`) untuk mendukung perilaku khusus.
2.  **Internal Slots (`[[]]`)**: Slot memori tersembunyi seperti `[[Prototype]]` atau `[[Extensible]]` yang tidak bisa diakses langsung via kode, namun menentukan seluruh nasib objek di dalam Hub.
3.  **Property Descriptors**: Metadata yang mengatur izin akses tiap properti. Terbagi menjadi *Data Descriptor* (berisi nilai) dan *Accessor Descriptor* (berisi fungsi getter/setter).

---

## 4. Arsitek Mindset
Selalu asumsikan setiap akses properti objek adalah sebuah pemanggilan fungsi internal (`[[Get]]`). Jika Anda ingin mendesain sistem yang sangat aman, gunakan `Object.freeze()` untuk mengunci deskriptor properti sehingga sirkuit state Anda tidak bisa dimodifikasi secara ilegal.

---

## 5. Lab Praktis
Eksperimen di folder `examples/` membedah dua pilar utama:
1.  **[Internal Dispatch & Proxy](./examples/01_internal_dispatch.js)**: Memahami bagaimana metode internal dipicu dan diinterupsi oleh Proxy.
2.  **[Descriptors & Integrity](./examples/02_descriptors_integrity.js)**: Mengontrol keberadaan dan modifikasi properti melalui API deskriptor.

---
*Status: [status.md](../../../../../status.md)*
