# CH-02: Completion Records

> **"Protokol laporan hasil setiap operasi. `Completion Records` adalah cara Hub membungkus keberhasilan, kegagalan, dan interupsi aliran."**

**Source Hub**: 
- [ECMA-262: The Completion Record Specification Type](https://tc39.es/ecma262/#sec-completion-record-specification-type)

---

## 1. Konsep & Esensi

**Definisi Arsitek**:
Setiap langkah algoritma di JavaScript sebenarnya tidak mengembalikan nilai mentah, melainkan sebuah **Completion Record**. Record ini adalah "Paket Laporan" yang berisi: **[[Type]]** (normal, return, throw, break, continue), **[[Value]]** (hasilnya), dan **[[Target]]** (tujuan lompatan).

**Model Mental**:
Bayangkan setiap sirkuit Hub mengirimkan kotak paket ke pusat kendali. Di luar kotak ada label: "SUKSES" (Normal), "ERROR" (Throw), atau "STOP" (Break). Pusat kendali akan membuka kotak hanya jika labelnya sesuai dengan yang diharapkan.

---

## 2. Visualisasi Sistem: Record Unwrapping

```mermaid
graph LR
    Step[Run Algorithm Step] --> Record[Result: Completion Record]
    Record --> Type{Check Type}
    Type -->|Normal| Value[Extract [[Value]]]
    Type -->|Throw| Err[Escalate to Catch/Abort]
    Type -->|Return/Break| Jump[Jump to Target]
    
    style Record fill:#e1f5fe,stroke:#01579b
    style Type fill:#f1c40f,stroke:#333
```

---

## 3. Mekanisme & Hubungan

### Shorthand Penting di Spec
1. **`?` (Abrupt Completion check)**: Shorthand yang berarti "Jika langkah ini mengembalikan error, kembalikan error tersebut sekarang juga (Bubbling up). Jika sukses, ambil nilainya."
2. **`!` (Never-Abrupt check)**: Shorthand yang berarti "Kita yakin langkah ini tidak akan pernah error, langsung ambil nilainya."
3. **Implicit Normal Completion**: Jika sebuah langkah tidak menyebutkan "Return", maka ia secara implisit dianggap mengembalikan `NormalCompletion(undefined)`.

### Arsitek Mindset: The "Try-Catch" Origin
- Mekanisme `try...catch` di JavaScript sebenarnya hanyalah visualisasi dari pemeriksaan `[[Type]] == throw` pada Completion Record. Memahami hal ini membantu Anda mengerti alasan kenapa beberapa error tidak bisa "ditangkap" (seperti syntax error yang terjadi di fase statis).

---

## 4. Lab Praktis
Buka file `examples/completion_record_sim.js` untuk melihat bagaimana sebuah fungsi internal mensimulasikan pembungkusan dan pembukaan paket Completion Record.

---
*Status: [status.md](../../../../../status.md)*
