# CH-02: Function (The Executable Unit)

> **"Chapter ini membahas `Function` sebagai built-in object, terutama properti bawaan dan alat kontrol konteks seperti `call`, `apply`, dan `bind`."**

## Source Hub
- **Primary Source**: [MDN Web Docs - Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
- **Technical Reference**: [ECMA-262 - Function Objects](https://tc39.es/ecma262/#sec-function-objects)

## 1. Struktur Chapter
### A. [SEC-01: Function as Object](./SEC-01_FunctionAsObject/README.md)
Properti built-in pada fungsi seperti `name` dan `length`.

### B. [SEC-02: Call Apply Bind](./SEC-02_CallApplyBind/README.md)
Kontrol konteks `this` melalui utilitas prototipe fungsi.

---

## Arsitek Mindset: Built-in Function Utilities

Sebagai arsitek Hub:
- Di chapter ini, fokusnya bukan "cara menulis fungsi", tetapi bagaimana fungsi berperilaku sebagai objek bawaan.
- Gunakan `bind` dan rekan-rekannya dengan sengaja saat konteks benar-benar penting.

---

## Hands-on: Lab Executable Unit
Chapter ini tetap memakai lab di `examples/function_mechanics.js` untuk melihat sifat object-like pada fungsi.

---
*Status: [x] Complete (2 Sections).*
