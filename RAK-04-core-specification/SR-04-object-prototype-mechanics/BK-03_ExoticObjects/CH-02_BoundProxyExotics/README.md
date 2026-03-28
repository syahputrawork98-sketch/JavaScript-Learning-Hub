# CH-02: Bound Functions and Proxy Exotics

![Status](https://img.shields.io/badge/STATUS-GOLD_STANDARD-green?style=for-the-badge)

> **"Intersepsi & Pengikatan: Bagaimana Objek Eksotis Menangani Delegasi Panggilan dan Trap Internal Melalui Objek Target."**

---

## 🌐 Source Hub
- **Parent Book**: [BK-03: Exotic Objects](../README.md)
- **Primary Source**: [ECMA-262: Proxy Exotic Objects (Clause 10.5)](https://tc39.es/ecma262/#sec-proxy-exotic-objects)

---

## 🌓 1. Essence: The Narrative

### The Shadow Call
**Bound Function** dan **Proxy** adalah puncak dari perilaku eksotis. Mereka tidak menyimpan data secara langsung, melainkan bertindak sebagai "cangkang" atau perantara untuk objek lain (**Target Object**).

### Bound Function
Setiap kali fungsi di-bind (`.bind()`), engine menciptakan **Bound Function Exotic Object**. Objek ini mengunci secara permanen nilai `this` dan argumen awal, sehingga pemanggilan di masa depan akan selalu menggunakan konteks yang telah ditetapkan sebelumnya, ke mana pun fungsi tersebut dikirim.

---

## 🗺️ 2. Visual Logic: The Proxy Interception

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#F7DF1E', 'primaryTextColor': '#000'}}}%%
graph TD
    Op[Operation: [[Get]]/[[Set]]] --> P[Proxy Object]
    P --> Trap{Trap Defined?}
    Trap -- Yes --> Handler[Handler Object: Traps Result]
    Trap -- No --> Target[Target Object: Default Work]
    
    style P fill:#e1f5fe,stroke:#333
    style Target fill:#c8e6c9,stroke:#333
```

---

## ⚙️ 3. Spec-Internals: The Slot Registry

Objek-objek ini memiliki slot internal khusus untuk menjaga delegasi:
- **`[[ProxyTarget]]`**: Referensi ke objek asli yang diwakili.
- **`[[ProxyHandler]]`**: Objek yang berisi fungsi "trap" untuk setiap metode internal.
- **`[[BoundTargetFunction]]`**: Fungsi asli sebelum diikat.
- **`[[BoundThis]]`**: Nilai `this` yang terkunci secara permanen.

---

## 🧪 4. The Lab: Discovery Specimens

Eksperimen Delegasi Eksotis:
1.  **[examples/proxy_interception_lab.js](../../../../../examples/proxy_interception_lab.js)**: Mempelajari bagaimana `[[Get]]` dapat dialihkan untuk memutar nilai kustom.
2.  **[examples/bound_this_leak_test.js](../../../../../examples/bound_this_leak_test.js)**: Mencoba memaksakan `this` baru pada bound function (dan membuktikan kegagalannya).

---

## 🧠 5. Arsitek Mindset: Keamanan & Abstraksi
Sebagai arsitek, gunakan **Proxy** untuk membangun lapisan abstraksi yang aman (misal: validasi skema data otomatis atau penguncian akses properti privat). Namun, sadarilah bahwa Proxy adalah "Heavy Object" — setiap operasi melalui Proxy memiliki biaya *trap execution* tambahan. Gunakan secara strategis untuk gerbang utama data, bukan untuk operasi perulangan mikro-detik.

---
*Status: 🟢 Gold Standard | Kembali ke [BK-03](../README.md)*
