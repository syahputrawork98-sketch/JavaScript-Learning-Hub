# CH-02: Logical & Comparison

![Status](https://img.shields.io/badge/STATUS-COMPLETE-green?style=for-the-badge)

> **"Integritas Logika: Gerbang Inspeksi dan Pengambilan Keputusan Sirkuit."**

---

## 🔗 Source Hub
- **Primary Source**: [MDN Web Docs - Comparison Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)
- **Technical Reference**: [ECMA-262 - Equality Operators](https://tc39.es/ecma262/#sec-equality-operators)
- **Conceptual Parent**: [BK-01 Basic Operators](../README.md)

---

## 🌓 1. Essence: The Logic
**CH-02** adalah pusat kendali untuk validasi energi. Di sini, kita belajar bagaimana membandingkan dua muatan data (Comparison) dan bagaimana menggabungkan berbagai sinyal status (Logical) untuk menentukan jalur aliran energi selanjutnya di dalam sirkuit program.

Memahami perbedaan antara **Strict Equality** (`===`) dan **Loose Equality** (`==`) adalah benteng utama pertahanan Anda terhadap bug yang disebabkan oleh kebocoran tipe data (*Type Coercion*).

---

## 🎨 2. Visual Logic: The Logical Selection Flow
Mekanisme pengambilan keputusan sirkuit:

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#F7DF1E', 'primaryTextColor': '#000'}}}%%
graph TD
    Input[Data Charge] -- "Comparison: ===" --> Gate{Logic Gate}
    Gate -- "TRUE" --> Flow[Continue Energy Flow]
    Gate -- "FALSE" --> Block[Block / Alternative Route]
    
    subgraph Logical_Operators
    L1[&&: AND - All must be true]
    L2[||: OR - One is enough]
    L3[!: NOT - Inverse signal]
    end
    
    style Gate fill:#f7df1e,stroke:#333;
    style Flow fill:#90EE90,stroke:#333;
    style Block fill:#FF7F7F,stroke:#333;
```

---

## 🏛️ 3. Sections Atlas
- **[SEC-01: Comparison](./SEC-01_Comparison/)**: Membedah instrumen perbandingan nilai dan identitas tipe data.
- **[SEC-02: Logical](./SEC-02_Logical/)**: Membedah gerbang logika `AND`, `OR`, `NOT`, dan `Nullish Coalescing`.

---

## 🧪 4. The Lab (Logic Lab)
Uji integritas logika dan perilaku *Short-circuit Evaluation* melalui laboratorium di:
- `../examples/logical_comparison_lab.js`

---

## ⚠️ 5. Common Pitfalls & Myths
- **Mitos**: *"Operator `==` lebih fleksibel dan aman digunakan."* (Salah, `==` melakukan konversi tipe data otomatis yang seringkali tidak terduga; selalu gunakan `===` sebagai standar integritas Hub).
- **Mitos**: *"Short-circuit evaluation (`||`) hanya untuk kondisi `if`."* (Faktanya, ini sering digunakan untuk memberikan nilai default pada variabel secara instan).

---
*Back to [Basic Operators](../README.md)*
