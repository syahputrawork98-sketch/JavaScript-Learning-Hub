# CH-01: Object Internal Methods and Slots

> **"Mesin di balik properti. `Object Internal Mechanics` membedah 14 metode sakral yang menentukan bagaimana sebuah unit data berinteraksi dengan Grid."**

**Source Hub**: 
- [ECMA-262: Essential Internal Methods and Internal Slots](https://tc39.es/ecma262/#sec-essential-internal-methods-and-internal-slots)

---

## 1. Konsep & Esensi

**Definisi Arsitek**:
Setiap objek dalam spesifikasi ECMAScript memiliki sekumpulan **Internal Methods** (ditulis dengan kurung siku ganda `[[...]]`) yang mendefinisikan perilaku runtime-nya. Objek yang mengikuti perilaku default disebut **Ordinary Object**, sedangkan yang memodifikasi satu atau lebih metode ini disebut **Exotic Object**.

**Model Mental**:
Bayangkan sebuah unit perangkat keras di Hub.
- **Properties**: Lampu dan tombol di panel depan (yang bisa Anda lihat/sentuh).
- **Internal Methods**: Sirkuit di dalam kotak yang menentukan apa yang terjadi saat tombol ditekan. Anda tidak bisa menyentuhnya langsung, tapi mereka yang melakukan pekerjaan sebenarnya.

---

## 2. Visualisasi Sistem: Internal Method Pipeline

```mermaid
graph TD
    JS[JS: obj.prop = 123] --> Op[Abstract Op: Set]
    Op --> Internal[Internal Method: [[Set]]]
    Internal --> Validate{Check Invariants}
    Validate -->|Pass| Write[Update [[Slot]]]
    Validate -->|Fail| Err[TypeError]
    
    style Internal fill:#f8bbd0,stroke:#880e4f
    style Validate fill:#f1c40f,stroke:#333
```

---

## 3. Mekanisme & Hubungan

### 14 Metode Internal Utama (Kategori)
1. **Fundamental**: `[[GetPrototypeOf]]`, `[[SetPrototypeOf]]`, `[[IsExtensible]]`, `[[PreventExtensions]]`.
2. **Property Access**: `[[GetOwnProperty]]`, `[[DefineOwnProperty]]`, `[[HasProperty]]`, `[[Get]]`, `[[Set]]`, `[[Delete]]`, `[[OwnPropertyKeys]]`.
3. **Behavioral**: `[[Call]]` (untuk fungsi), `[[Construct]]` (untuk class/constructor).

### Internal Slots
- **`[[Prototype]]`**: Menyimpan referensi ke objek induk.
- **`[[Extensible]]`**: Flag boolean yang menentukan apakah properti baru bisa ditambahkan ke unit ini.
- **`[[PrivateElements]]`**: Ruang rahasia untuk field `#privat`.

### Arsitek Mindset: The Invariant Contract
- Hub menjamin bahwa meskipun sebuah objek adalah "Exotic", ia tidak boleh melanggar kontrak tertentu (Invariants). Misal: jika `[[IsExtensible]]` mengembalikan false, Anda tidak boleh berhasil menjalankan `[[DefineOwnProperty]]` untuk properti baru. Kontrak ini menjaga kestabilan seluruh Grid.

---

## 4. Lab Praktis
Buka file `examples/internal_methods_trace.js` untuk melihat bagaimana panggilan properti sederhana diterjemahkan menjadi serangkaian metode internal di balik layar.

---
*Status: [status.md](../../../../../status.md)*
