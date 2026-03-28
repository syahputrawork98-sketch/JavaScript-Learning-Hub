# SR-08: Iterators & Generators

![Sub-Rak Header](https://img.shields.io/badge/SR--08-ITERATORS--GENERATORS-yellow?style=for-the-badge&logo=javascript)
![Status](https://img.shields.io/badge/STATUS-COMPLETE-green?style=for-the-badge)

> **"Aliran Terkendali: Mengatur Ritme Data Satu Langkah Demi Satu Langkah."**

---

## 🔗 Source Hub
- **Primary Source**: [MDN Web Docs - Iteration Protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- **Technical Reference**: [MDN Web Docs - Generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)
- **Conceptual Parent**: [RAK-02 Foundation](../README.md)

---

## 🌓 1. Essence: The Narrative
Dalam sistem hub yang besar, tidak semua data harus dilepas sekaligus. **Iterators** dan **Generators** adalah mekanisme untuk mengontrol aliran nilai secara bertahap dan terukur. Jika Array adalah sebuah tangki penuh, maka Iterator adalah keran yang memungkinkan Anda mengambil data setetes demi setetes (ritme yang terkendali).

Penguasaan SR-08 adalah tentang **Efisiensi Aliran**. Memahami bagaimana kontrak protokol iterasi membuat data bisa dibaca bertahap dan bagaimana **Generators** memungkinkan aliran dihentikan (*paused*) dan dilanjutkan kembali.

---

## 🗺️ 2. Landscape: The Big Picture
Sub-Rak ini membagi pengelolaan urutan melalui satu buku arsitektur utama:

### 🎨 Visual Logic: The Iteration Protocol Flow
```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#F7DF1E', 'primaryTextColor': '#000'}}}%%
graph LR
    Obj[Iterable Object] -- "@@iterator" --> Iter[Iterator]
    Iter -- "next()" --> Result[Result: {value, done}]
    
    subgraph Generator_System
    G[function*] -- "yield" --> Result
    Result -- "next()" --> G
    end
    
    style Obj fill:#f7df1e,stroke:#333;
    style G fill:#fff,stroke:#333;
```

### 🏛️ Books Atlas
1.  **[BK-01: Sequence Management](./BK-01_SequenceManagement/)**: Membahas bagaimana data mengalir secara berurutan melalui kontrak **Iteration Protocols** (iterable, iterator) dan bagaimana **Generator Pulses** (function*, yield) mengontrol ritme pulsasi energi data.

---

## 🧪 3. The Lab (Controlled Flow Lab)
Masuk ke setiap Bab untuk melihat bagaimana JavaScript mengalirkan data satu langkah demi satu langkah melalui protokol iterasi dan aliran generator yang fleksibel.

---

## ⚠️ 4. Common Pitfalls & Myths
- **Mitos**: *"Iterators hanya untuk loop `for...of`."* (Faktanya, iterasi juga bekerja pada operasi *spread* (`...`) dan banyak API bawaan lainnya).
- **Mitos**: *"Generators selalu lebih lambat dari fungsi biasa."* (Faktanya, Generators sangat efisien untuk menangani data besar secara bertahap (*Lazy Evaluation*) tanpa harus menumpuk semua nilai di memori di awal).

---
*Status: [x] Complete. Struktur dan Visual telah diselaraskan ke Adaptive Gold Standard.*
