# SR-07: Expressions and Operators (The Engine Room)

> **"Di dalam Grid, data mentah tidak akan berguna tanpa pemrosesan. SR-07 membedah 'Ruang Mesin' (The Engine Room)—pusat di mana ekspresi dievaluasi, energi ditransmutasikan melalui operator, dan aliran logika diarahkan dengan presisi milidetik."**

*Pemetaan ECMA-262: Clause 13*

## 💎 Status: Gold Standard
> **Mencakup pemetaan lengkap Clause 13 dengan 5 Buku Strategis, 3 Visualisasi SVG, dan 1 Laboratorium Evaluasi.**

## 📚 Daftar Buku

1.  **[BK-01_PrimaryUnits](./BK-01_PrimaryUnits/)**: Bedah generator inti seperti `this`, Identifiers, dan mekanisme Initializer (Array/Object).
2.  **[BK-02_CommandLinks](./BK-02_CommandLinks/)**: Sistem navigasi dan routing (Property Access, Call/New Expressions).
3.  **[BK-03_EnergyTransmutation](./BK-03_EnergyTransmutation/)**: Pengubah wujud energi (Arithmetic, Unary, Bitwise Operators).
4.  **[BK-04_LogicFlow](./BK-04_LogicFlow/)**: Pengatur aliran logika dan sensor perbandingan (Logic Gates).
5.  **[BK-05_EnergyDistribution](./BK-05_EnergyDistribution/)**: Penyebaran dan penyimpanan energi terakhir (Assignments).

## 📊 Visualisasi Arsitektur
## 🏗️ Expression Precedence Stack

```mermaid
stack
    ["Groupings: ( ) - Priority 1"]
    ["Member Access: . [ ] - Priority 2"]
    ["Execution: call(), new - Priority 3"]
    ["Unary: ++, --, typeof - Priority 4"]
    ["Arithmetic: *, /, +, - - Priority 5"]
    ["Relational: <, >, === - Priority 6"]
    ["Logic: &&, ||, ?? - Priority 7"]
    ["Assignment: =, += - Priority 8 (Bottom)"]
```

## 🧪 Laboratorium
- [Engine Room Lab](./examples/engine_room_lab.js) - Eksperimen evaluasi ekspresi.

---
*Status: Gold Standard 💎*
