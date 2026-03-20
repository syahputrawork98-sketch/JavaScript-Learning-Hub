# CH-03: The Null Type

*Pemetaan ECMA-262: Clause 6.1.2*

Tipe **Null** hanya memiliki satu nilai tunggal, yaitu `null`. Berbeda dengan `undefined`, `null` biasanya digunakan untuk menunjukkan ketidakhadiran nilai objek secara sengaja.

## 🏗️ Intentional Void

```mermaid
graph LR
    Var[Variable] -->|Point to| Nothing[/NULL /]
    Note right of Nothing: Intentional Blank
    
    style Nothing fill:#34495e,stroke:#333,color:#fff
```

## 🔍 Fitur Utama
- **Sentinel Value**: Digunakan dalam logika pemrograman untuk menandai "akhir dari pencarian" atau "tidak ada data".
- **Prototype Chain**: Ujung dari rantai prototype (`Object.prototype.__proto__`) adalah `null`.

> [!WARNING]
> **The Typeof Bug**: `typeof null` mengembalikan `"object"`. Ini adalah bug desain dari versi pertama JavaScript (1995) yang tetap dipertahankan hingga sekarang demi menjaga kompatibilitas ke belakang (*backward compatibility*).

---
*Lihat Lab: [Eksperimen Null](./examples/null_intent.js)*  
*Kembali ke [BK-01](../README.md)*
