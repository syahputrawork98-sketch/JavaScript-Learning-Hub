# CH-02: Inheritance and Property Resolution

![Status](https://img.shields.io/badge/STATUS-GOLD_STANDARD-green?style=for-the-badge)

> **"Proses Pencarian Nilai: Algoritma Rekursif yang Menentukan Bagaimana Engine Menemukan Properti di Sepanjang Rantai Prototipe."**

---

## 🌐 Source Hub
- **Parent Book**: [BK-02: Prototype Inheritance](../README.md)
- **Primary Source**: [ECMA-262: OrdinaryGet (Clause 10.1.8.1)](https://tc39.es/ecma262/#sec-ordinaryget)

---

## 🌓 1. Essence: The Narrative

### Property Resolution
Ketika Anda mencoba mengakses properti pada objek (misalnya `obj.prop`), engine tidak hanya memeriksa objek tersebut. Inilah inti dari **Property Resolution**. Engine melakukan pencarian bertingkat: dari objek lokal, naik ke prototipe pertamanya, lalu ke prototipe berikutnya, hingga mencapai akhir rantai (`null`).

### Ordinary vs Exotic Resolution
Objek biasa (**Ordinary**) menggunakan algoritma standar bernama **`OrdinaryGet`**. Namun, perlu dicatat bahwa objek eksotis (seperti **Proxy**) bisa memiliki algoritma resolusi kustom yang mengalihkan atau memodifikasi jalur pencarian ini secara total.

---

## 🗺️ 2. Visual Logic: The Resolution Algorithm

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#F7DF1E', 'primaryTextColor': '#000'}}}%%
graph TD
    Start[Get Property 'P' on Object 'O'] --> Found{P exists in O?}
    Found -- Yes --> Return[Return Value]
    Found -- No --> Next{[[Prototype]] is null?}
    Next -- Yes --> Undefined[Return undefined]
    Next -- No --> Lookup[O = O.[[Prototype]]]
    Lookup --> Found

    style Start fill:#e1f5fe,stroke:#333
    style Return fill:#c8e6c9,stroke:#333
    style Undefined fill:#ffccbc,stroke:#333
```

---

## ⚙️ 3. Spec-Internals: The OrdinaryGet Operation

Algoritma internal untuk pencarian properti (Clause 10.1.8.1):
1.  Let *desc* be ? *O*.**[[GetOwnProperty]]**(*P*).
2.  If *desc* is **undefined**, then
    a. Let *parent* be ? *O*.**[[GetPrototypeOf]]**().
    b. If *parent* is **null**, return **undefined**.
    c. Return ? *parent*.**[[Get]]**(*P*, *Receiver*).
3.  If **IsDataDescriptor**(*desc*) is **true**, return *desc*.**[[Value]]**.
4.  Otherwise, return ? **Call**(*desc*.**[[Get]]**, *Receiver*).

---

## 🧪 4. The Lab: Discovery Specimens

Eksperimen Resolusi Properti:
1.  **[examples/property_shadowing.js](../../../../../examples/property_shadowing.js)**: Demonstrasi bagaimana properti lokal "menutup" properti dengan nama yang sama di prototipe.
2.  **[examples/resolution_speed_test.js](../../../../../examples/resolution_speed_test.js)**: Mengamati perbedaan waktu akses antara properti lokal vs properti yang berada di ujung rantai prototipe.

---

## 🧠 5. Arsitek Mindset: Batasi Kedalaman Rantai
Sebagai arsitek, pahami bahwa setiap level di rantai prototipe adalah "Hop" memori tambahan bagi engine. Meskipun JavaScript sangat efisien dalam menangani delegasi, rantai yang terlalu dalam (misal: lebih dari 5-7 level) dapat memengaruhi performa pada aplikasi yang sangat intensif memori. Selalu desain hirarki objek yang **rata (flat)** jika memungkinkan.

---
*Status: 🟢 Gold Standard | Kembali ke [BK-02](../README.md)*
