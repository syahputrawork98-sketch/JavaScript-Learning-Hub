# CH-03: String Exotics (The Read-Only Sequence)

![Status](https://img.shields.io/badge/STATUS-GOLD_STANDARD-green?style=for-the-badge)

> **"Sekuens Imutabel: Bagaimana Objek String Mengelola Akses Karakter Melalui Indeks Numerik yang Terkunci Secara Spesifikasi."**

---

## 🌐 Source Hub
- **Parent Book**: [BK-03: Exotic Objects](../README.md)
- **Primary Source**: [ECMA-262: String Exotic Objects (Clause 10.4.3)](https://tc39.es/ecma262/#sec-string-exotic-objects)

---

## 🌓 1. Essence: The Narrative

### Character Indices
Meskipun String di JavaScript bisa diperlakukan seperti array (misal: `"abc"[0]`), secara internal ia adalah **String Exotic Object**. Perilaku eksotisnya terletak pada kemampuannya untuk mengembalikan karakter pada posisi tertentu melalui indeks numerik, meskipun karakter tersebut tidak disimpan sebagai properti fisik objek tersebut.

### The Read-Only Nature
Berbeda dengan Array, indeks pada String bersifat **Read-Only**. Anda tidak bisa mengubah karakter melalui indeks (misal: `str[0] = "X"` tidak akan mengubah string). Hal ini karena string di JavaScript bersifat primidif imutabel, dan objek pembungkusnya (String Exotic) mempertahankan aturan tersebut pada level metode internal.

---

## 🗺️ 2. Visual Logic: The String Index Lookup

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#F7DF1E', 'primaryTextColor': '#000'}}}%%
graph LR
    Req[Get: str[index]] --> Check{Is Index Valid?}
    Check -- Yes --> Slice[Extract Code Unit]
    Slice --> Return[Return 1-char String]
    Check -- No --> Default[Forward to OrdinaryGet]
    
    style Req fill:#e1f5fe,stroke:#333
    style Return fill:#c8e6c9,stroke:#333
```

---

Sebagai arsitek Hub:
- Gunakan sifat *immutable* (kekal) dari unit String untuk menjamin keamanan data antar unit.
- Jika Anda perlu mengubah data per karakter secara intensif, konversikan unit String menjadi unit **Array** (`split('')`), lakukan modifikasi, lalu kembalikan menjadi String (`join('')`). Ini jauh lebih efisien daripada mencoba memodifikasi String secara langsung.

---
*Status: [status.md](../../../docs/status.md)*
