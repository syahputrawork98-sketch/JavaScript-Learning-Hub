# CH-01: Iteration Protocols

![Status](https://img.shields.io/badge/STATUS-COMPLETE-green?style=for-the-badge)

> **"Protokol Iterasi: Kontrak Standar untuk Pengaliran Data Masif."**

---

## 🔗 Source Hub
- **Primary Source**: [MDN Web Docs - Iteration protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- **Technical Reference**: [ECMA-262 - Iteration Symbols](https://tc39.es/ecma262/#sec-iteration-symbols)
- **Conceptual Parent**: [BK-01 Sequence Management](../README.md)

---

## 🌓 1. Essence: The Logic
Agar data bisa dialirkan secara otomatis oleh alat-alat bawaan JavaScript (seperti `for...of` atau *spread operator*), ia harus mematuhi sebuah kontrak standar yang disebut **Iteration Protocols**. Di **CH-01**, kita membedah bagaimana sebuah objek mendaftarkan dirinya sebagai **Iterable** melalui `Symbol.iterator`, dan bagaimana ia menyediakan sebuah **Iterator** untuk mengirimkan nilai satu demi satu.

Memahami "Jabat Tangan" (*Handshake*) antara protokol ini memungkinkan Anda untuk mengubah objek data apa pun menjadi sumber aliran yang kinetik dan terkendali.

---

## 🎨 2. Visual Logic: The Protocol Handshake
Mekanisme aliran koneksi antar protokol iterasi:

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#F7DF1E', 'primaryTextColor': '#000'}}}%%
graph LR
    Iter[Iterable Object] -- "[Symbol.iterator]()" --> ItObj[Iterator Object]
    ItObj -- "next()" --> Res[Result: {value, done}]
    
    subgraph Handshake
    Res -- "done: false" --> ItObj
    Res -- "done: true" --> End[Stop Flow]
    end
    
    style Iter fill:#f7df1e,stroke:#333;
    style ItObj fill:#fff,stroke:#333;
    style Res fill:#90EE90,stroke:#333;
```

---

## 🏛️ 3. Sections Atlas
- **[SEC-01: The Iterable Protocol](./SEC-01_TheIterableProtocol/)**: Membedah teknik pendaftaran objek ke jalur iterasi standar.
- **[SEC-02: The Iterator Protocol](./SEC-02_TheIteratorProtocol/)**: Meninjau mekanisme penarikan nilai secara bertahap menggunakan `next()`.
- **[SEC-03: for...of & Spread](./SEC-03_ForOfSpread/)**: Menjelaskan bagaimana alat-alat bahasa memanfaatkan protokol ini dalam praktik nyata.

---

## 🧪 4. The Lab (Iteration Lab)
Uji ketajaman kontrak dan pengaliran data kustom di laboratorium:
- `../examples/iteration_protocol_demo.js`

---

## ⚠️ 5. Common Pitfalls & Myths
- **Mitos**: *"Semua objek di JavaScript otomatis bisa di-iterasi."* (Salah, objek literal `{}` secara default **bukan** merupakan iterable; Anda harus mendaftarkannya secara eksplisit jika ingin menggunakannya di dalam `for...of`).
- **Mitos**: *"Iterator adalah array."* (Faktanya, iterator adalah **mekanisme penarikan**; ia tidak menyimpan semua data sekaligus di memori seperti array, melainkan menghasilkan nilai hanya saat diminta, sehingga sangat efisien untuk data besar/infinite).

---
*Back to [Sequence Management](../README.md)*
