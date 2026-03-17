# CH-16: Own vs Inherited Properties

Silsilah keluarga properti berakhir di sini. Bagaimana mesin membedakan harta milik sendiri dan harta warisan? (Clause 4.4.41 - 4.4.42).

## 1. Own Property (4.4.41)
Properti yang terkandung **langsung** di dalam objek tersebut. 

## 2. Inherited Property (4.4.42)
Properti yang tidak ada di objek tersebut, tapi ditemukan di **Prototype** dari objek tersebut (atau prototipe dari prototipe-nya, dst).

---
> [!TIP]
> **Architect Cheat-sheet:** Operator `in` mengecek kedua jenis properti ini, sedangkan `Object.hasOwn()` atau `hasOwnProperty` hanya peduli pada **Own Property**. Memahami perbedaan ini akan menyelamatkan Anda dari bug loop dan validasi objek.
