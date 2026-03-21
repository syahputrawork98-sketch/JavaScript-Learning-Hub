# CH-03: Bitwise and Binary Operations

> **"Manipulasi langsung pada sirkuit biner. `Bitwise and Binary Operations` memungkinkan Anda mengontrol status bit individual untuk efisiensi energi maksimal."**

**Source Hub**: 
- [ECMA-262: Binary Bitwise Operators](https://tc39.es/ecma262/#sec-binary-bitwise-operators)
- [MDN: Bitwise Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)

---

## 1. Konsep & Esensi

**Definisi Arsitek**:
Operasi Bitwise memperlakukan operan mereka sebagai urutan 32-bit (untuk Number) atau panjang arbitrer (untuk BigInt) dari angka nol dan satu. Operasi ini bekerja pada representasi biner internal nilai tersebut.

**Model Mental**:
Bayangkan panel kontrol Hub dengan deretan saklar (0 dan 1). Operasi Bitwise adalah cara Anda menyalakan atau mematikan beberapa saklar sekaligus hanya dengan satu perintah.

---

## 2. Visualisasi Sistem: Bitwise Logic

```mermaid
graph TD
    A[Value A: 1010]
    B[Value B: 1100]
    A & B --> AND[AND: 1000]
    A | B --> OR[OR: 1110]
    A ^ B --> XOR[XOR: 0110]
    
    style AND fill:#a8e6cf,stroke:#333
```

---

## 3. Mekanisme & Hubungan

### Jenis Operasi
1. **Logical Bitwise**: `&` (AND), `|` (OR), `^` (XOR), `~` (NOT).
2. **Shift Operations**: `<<` (Left Shift), `>>` (Sign-propagating Right Shift), `>>>` (Zero-fill Right Shift).
3. **32-bit Limit**: Perlu diperhatikan bahwa untuk tipe `Number`, operasi bitwise selalu mengubahnya menjadi integer 32-bit terlebih dahulu.

### Arsitek Mindset: Performance Hacks
- Gunasi bitwise untuk menyimpan banyak status boolean dalam satu variabel (Bit Flags). Ini menghemat ruang Warehouse (Heap) dan mempercepat pemrosesan data di dalam sirkuit yang padat.

---

## 4. Lab Praktis
Buka file `examples/bitwise_logic_lab.js` untuk melihat implementasi sistem hak akses (Permissions) menggunakan Bit Flags dan membandingkan kecepatannya dengan penggunaan objek biasa.

---
*Status: [status.md](../../../../../status.md)*
