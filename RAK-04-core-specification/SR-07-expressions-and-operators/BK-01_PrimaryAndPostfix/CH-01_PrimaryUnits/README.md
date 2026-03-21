# CH-01: Primary Units and Initializers

> **"Blok bangunan energi paling dasar. `Primary Units and Initializers` mendefinisikan atom-atom yang menjadi asal muasal setiap perhitungan di Hub."**

**Source Hub**: 
- [ECMA-262: Primary Expressions](https://tc39.es/ecma262/#sec-primary-expressions)

---

## 1. Konsep & Esensi

**Definisi Arsitek**:
**Primary Expressions** adalah ekspresi yang tidak bisa diuraikan lagi secara struktural tanpa kehilangan maknanya. Ini mencakup kata kunci `this`, Identifier (nama variabel), Literals (angka, string), serta inisialisasi kompleks seperti Array dan Object literal.

**Model Mental**:
Bayangkan Hub sebagai pabrik perakitan. Primary Units adalah komponen mentah (seperti baut, kabel, atau baterai) yang belum disambungkan ke sirkuit apa pun. Mereka adalah sumber daya murni.

---

## 2. Visualisasi Sistem: Primary Resolution

```mermaid
graph TD
    Code[Expression: {x: 1}] --> Type{Type Check}
    Type -->|this| This[Get [[ThisValue]] from Context]
    Type -->|Identifier| Resolve[Lookup Name in Env Record]
    Type -->|Object| Init[Execute Object Literal Algorithm]
    
    style Init fill:#a8e6cf,stroke:#333
    style This fill:#e1f5fe,stroke:#01579b
```

---

## 3. Mekanisme & Hubungan

### Komponen Utama (Clause 13.2)
1. **Identifier Reference**: Proses mencari nama variabel di dalam Environment Record. Jika tidak ditemukan, Hub melempar **ReferenceError**.
2. **Object Initializer**: Bukan sekadar wadah data, tapi serangkaian instruksi untuk menjalankan operasi `[[DefineOwnProperty]]` satu per satu.
3. **Function/Class Expressions**: Primary units yang menciptakan objek fungsi atau class secara anonim atau bernama di dalam lingkup lokal.

### Arsitek Mindset: The Value of "this"
- `this` adalah unit primer yang paling dinamis. Nilainya tidak tetap, melainkan ditentukan oleh "siapa" yang memanggil sirkuit tersebut. Memahami `this` berarti Anda memahami kontrol akses di level arsitektur.

---

## 4. Lab Praktis
Buka file `examples/primary_units_lab.js` untuk melihat bagaimana Hub mengevaluasi identitas `this` dan resolusi identifier di berbagai tingkat scope.

---
*Status: [status.md](../../../../../status.md)*
