# CH-01: Essential Object Abstract Ops

> **"Instruksi dasar manipulasi struktur. `Essential Object Ops` adalah perintah internal yang digunakan Hub untuk membaca, menulis, dan memverifikasi keberadaan data di dalam objek."**

**Source Hub**: 
- [ECMA-262: Abstract Operations on Objects](https://tc39.es/ecma262/#sec-operations-on-objects)

---

## 1. Konsep & Esensi

**Definisi Arsitek**:
Operasi Abstrak pada objek adalah algoritma tingkat rendah yang membungkus pemanggilan **Internal Methods**. Misalnya, operasi `Get(O, P)` akan memanggil internal method `O.[[Get]](P, O)`. Terdapat lapisan abstraksi ini agar spesifikasi bisa menangani objek biasa maupun objek eksotis (seperti Proxy).

**Model Mental**:
Bayangkan remote control universal untuk semua unit di Hub. Tombol "BACA" (Get) tetap sama, meskipun unit yang dibaca (Object) memiliki mekanisme internal yang berbeda-beda.

---

## 2. Visualisasi Sistem: Object Operation Layer

```mermaid
graph TD
    JS[JS Code: obj.prop] --> Op[Abstract Op: Get]
    Op --> Internal[Internal Method: [[Get]]]
    Internal --> Prototypes[Prototype Chain Search]
    Prototypes --> Value[Return Value]
    
    style Op fill:#f1c40f,stroke:#333
    style Internal fill:#f8bbd0,stroke:#880e4f
```

---

## 3. Mekanisme & Hubungan

### Operasi Utama
1. **Get (O, P)**: Mengambil nilai properti `P` dari objek `O`. Jika `O` bukan objek (primitif), ia akan memanggil `GetV`.
2. **Set (O, P, V, Throw)**: Memasang nilai `V` pada properti `P`. Jika gagal dan `Throw` bernilai true, Hub akan melempar error.
3. **HasProperty (O, P)**: Memeriksa apakah properti `P` ada di objek `O` atau di dalam rantai prototipenya. Ini adalah dasar dari operator `in`.
4. **CreateDataProperty (O, P, V)**: Digunakan untuk membuat properti baru dengan atribut default (Writable, Enumerable, Configurable set ke true).

### Arsitek Mindset: Understanding the Overhead
- Setiap akses properti (`obj.x`) melibatkan rantai panggilan Abstract Ops ini. Untuk objek dengan prototype yang sangat dalam, operasi `Get` dan `HasProperty` akan memakan waktu lebih lama. Desainlah sirkuit dengan hirarki objek yang dangkal untuk performa maksimal.

---

## 4. Lab Praktis
Buka file `examples/object_ops_sim.js` untuk melihat simulasi bagaimana Hub melakukan penelusuran properti menggunakan algoritma `Get` dan `HasProperty`.

---
*Status: [status.md](../../../../../status.md)*
