# CH-02: Logical Assignment (Efficient Relays)

> **"Mengatur ulang sirkuit energi tidak harus memakan banyak baris perintah. Logical Assignment adalah 'Relay Efisien' (Efficient Relays) yang menggabungkan pengecekan logika dan pengisian daya dalam satu gerakan singkat."**

**Source Hub**: 
- [MDN: Logical OR assignment (||=)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)
- [MDN: Logical AND assignment (&&=)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)
- [MDN: Nullish coalescing assignment (??=)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment)

---

## 1. Konsep & Esensi

**Definisi Arsitek**:
ES2021 memperkenalkan operator penugasan logis yang menggabungkan operator logika (`||`, `&&`, `??`) dengan penugasan (`=`). Ini bukan sekadar *syntactic sugar*, melainkan mekanisme kontrol alur yang memastikan penugasan hanya terjadi jika kondisi sirkuit terpenuhi, mengurangi beban eksekusi dan meningkatkan keterbacaan.

**Model Mental**:
Bayangkan Anda memiliki relay listrik yang hanya aktif jika kondisi tertentu terpenuhi:
- **`||=` (OR Assignment)**: Berikan daya **hanya jika** unit saat ini mati/kosong (falsy).
- **`??=` (Nullish Assignment)**: Berikan daya **hanya jika** unit saat ini benar-benar tidak ada (nullish).
- **`&&=` (AND Assignment)**: Perbarui daya **hanya jika** unit saat ini sedang aktif (truthy).

---

## 2. Visualisasi Sistem: Sirkuit Relay Logis

```mermaid
graph TD
    subgraph OR_Circuit [OR Assignment ||=]
    OR_In[Val] --> OR_If{Falsy?}
    OR_If -->|Yes| OR_Set[Assign New Value]
    OR_If -->|No| OR_Keep[Keep Original]
    end

    subgraph Null_Circuit [Nullish Assignment ??=]
    N_In[Val] --> N_If{Nullish?}
    N_If -->|Yes| N_Set[Assign New Value]
    N_If -->|No| N_Keep[Keep Original]
    end

    style OR_Set fill:#f9f,stroke:#333
    style N_Set fill:#9f9,stroke:#333
```

---

## 3. Mekanisme & Hubungan

### Perbandingan Efisiensi
Operator ini melakukan sirkuit pendek (*short-circuiting*). Jika kondisi tidak terpenuhi, penugasan tidak akan dieksekusi sama sekali (tidak ada operasi `Set` pada variabel).

```javascript
// Dulu
if (!unit.status) { unit.status = "ACTIVE"; }

// Sekarang (Efficient Relay)
unit.status ||= "ACTIVE";

// Nullish Default
config.retryLimit ??= 5;
```

### Numeric Separators (Bonus ES2021)
Untuk membuat beban energi yang sangat besar lebih mudah dibaca, gunakan `_`.
```javascript
const loadCapacity = 1_000_000_000; // Satu Miliar (Readable)
```

---

## 4. Lab Praktis
Buka file `examples/efficient_relays_lab.js` untuk melihat bagaimana menyederhanakan konfigurasi Hub menggunakan operator modern dan menguji presisi `??=` vs `||=`.

---
*Status: [status.md](../../../../../status.md)*
