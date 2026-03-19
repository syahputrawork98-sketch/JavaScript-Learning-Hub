# CH-03: Contextual Energy (The this Binding)

> **"Di dalam Hub, identitas unit ditentukan oleh di mana sirkuit dijalankan. `this` adalah 'Energi Kontekstual' (Contextual Energy)—pointer dinamis yang menentukan objek mana yang saat ini memegang kendali atas eksekusi fungsi."**

*Pemetaan ECMA-262: Clause 10.2.1*

## 1. Empat Aturan Pengaliran `this`

1.  **Default Binding**: Di luar sirkuit formal (Global), `this` merujuk pada Global Object (atau `undefined` dalam Strict Mode).
2.  **Implicit Binding**: Saat fungsi dipanggil sebagai metode objek (`obj.fn()`), `this` merujuk pada `obj` tersebut.
3.  **Explicit Binding**: Menggunakan unit pengarah `call`, `apply`, atau `bind` untuk memaksa `this` merujuk pada target tertentu.
4.  **New Binding**: Saat fungsi digunakan sebagai konstruktor (`new Fn()`), `this` merujuk pada objek baru yang baru saja dirakit.

---

## 2. Bind: Perekat Konteks Permanen

Unit `.bind()` menciptakan fungsi baru dengan konteks `this` yang sudah dikunci secara permanen. Bahkan jika fungsi tersebut dipindahkan ke objek lain, ia tetap setia pada identitas aslinya.

---

## 3. Praktik Lapangan (Lab)

```javascript
function showIdentity() {
    console.log(`Active Unit ID: ${this.id || 'GLOBAL'}`);
}

const unitA = { id: "UNIT_A", show: showIdentity };
const unitB = { id: "UNIT_B" };

unitA.show(); // Implicit: UNIT_A
showIdentity.call(unitB); // Explicit: UNIT_B

const lockedA = showIdentity.bind(unitA);
lockedA(); // Locked: UNIT_A
```

---

## Arsitek Mindset: Keamanan Konteks

Sebagai arsitek Hub:
- Gunakan **Strict Mode** (`"use strict"`) untuk mencegah `this` secara tidak sengaja merujuk ke Global Object, yang bisa menyebabkan manipulasi data global yang berbahaya.
- Pahami bahwa Arrow Functions adalah satu-satunya unit yang **kebal** terhadap aturan `call/apply/bind` terkait `this`, karena mereka selalu menggunakan Lexical `this`.

---
*Status: [status.md](../../../docs/status.md)*
