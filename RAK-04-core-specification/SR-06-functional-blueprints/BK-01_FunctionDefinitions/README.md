# BK-01: Function Definitions (Clause 15.1-15.4)

![Book Header](https://img.shields.io/badge/BK--01-FUNCTIONS-red?style=for-the-badge)
![Status](https://img.shields.io/badge/STATUS-GOLD_STANDARD-green?style=for-the-badge)

> **"Generator Sinyal: Bagaimana Hub Mendefinisikan Unit Logika yang Dapat Dipanggil, Diinstansiasi, dan Diwariskan."**

---

## 🌓 1. Essence: The Narrative

### Dual Definition
- **Formal**: Spesifikasi mengenai pembuatan **Function Objects** melalui deklarasi atau ekspresi sintaksis. Mencakup algoritma `InstantiateFunctionObject` (untuk Ordinary Functions) dan `InstantiateArrowFunctionExpression`, serta pengelolaan slot internal `[[Environment]]` untuk mendukung mekanisme **Closure**.
- **Analogi**: Bayangkan sebuah **Robot Lengan Industri**. Anda bisa memberikan program kerja (Function Definition) kepada robot tersebut. Robot tersebut memiliki dua mode operasi: mode kerja biasa (**[[Call]]**) di mana ia melakukan tugasnya, dan mode untuk membuat robot baru (**[[Construct]]**) jika robot tersebut didesain sebagai printer 3D (Constructor). Robot ini juga membawa "baterai cadangan" (**Closure**) yang berisi data dari pabrik tempat ia dibuat.

---

## 🗺️ 2. Visual Logic: [[Call]] vs [[Construct]]

Mekanisme internal yang membedakan pemanggilan fungsi biasa dan penggunaan operator `new`:

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#F7DF1E', 'primaryTextColor': '#000', 'lineColor': '#FF0000'}}}%%
graph TD
    Trigger["Function Execution Trigger"] --> Type{How is it called?}
    
    subgraph "Ordinary Execution"
        Type -->|f()| Call["[[Call]] Method"]
        Call --> Env["Create Function Environment"]
        Env --> Exec["Execute Function Body"]
    end
    
    subgraph "Constructor Execution"
        Type -->|new f()| Const["[[Construct]] Method"]
        Const --> Instance["Create New Object Instance"]
        Instance --> CallBound["Invoke [[Call]] with 'this' = Instance"]
        CallBound --> Return["Return Instance (Default)"]
    end

    style Trigger fill:#fff,stroke:#333
    style Type fill:#f7df1e,stroke:#333
    style Call fill:#fff,stroke:#333
    style Const fill:#fff,stroke:#ff0000
```

---

## 🏛️ 3. Strategic Chapters (Levels 5)

Definisi dan metode unit modular:

1.  **[CH-01: Ordinary and Arrow Functions](./CH-01_OrdinaryArrow/)**
    *Deklarasi, ekspresi, dan perbedaan fundamental pengikatan `this` serta slot internal.*
2.  **[CH-02: Method Definitions and Property Accessors](./CH-02_MethodsAccessors/)**
    *Penulisan metode di dalam objek, HomeObject link, dan sirkuit Get/Set accessors.*

---

## 🧠 4. Under-the-hood: The [[Environment]] Slot
Setiap objek fungsi memiliki slot internal rahasia bernama **`[[Environment]]`**. Slot ini menyimpan referensi ke Lexical Environment di mana fungsi tersebut didefinisikan. Inilah "jantung" dari **Closures**: meskipun fungsi dipanggil di luar scope aslinya, ia tetap bisa mengakses variabel dari tempat asalnya karena link permanen di slot internal ini.

---

## 🎖️ 5. The Gold Standard Checklist
- [x] **Consolidation**: Penggabungan mekanika internal dari BK-EXT.
- [x] **Visual Logic**: Mermaid diagram untuk Call vs Construct flow.
- [x] **Spec-Alignment**: Sinkronisasi dengan Clause 15.1-15.4.

---
*Buku Status: [x] Complete | [status.md](../../docs/status.md) | Kembali ke [SR-06](../README.md)*
