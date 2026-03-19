# CH-02: Hidden Slots (Internal Slots & Internal States)

> **"Di balik panel kontrol yang terlihat, setiap mesin unit menyimpan sirkuit yang tidak bisa diakses langsung oleh teknisi luar. `Internal Slots` adalah 'Sirkuit Tersembunyi' (The Hidden Slots) — tempat penyimpanan status internal yang hanya bisa dimanipulasi oleh Hub secara otomatis."**

*Pemetaan ECMA-262: Clause 10.1 (Internal Slots)*

## 1. Mental Model: "The Hidden Slots"

Jika Properti Objek adalah "Kabel yang bisa Anda cabut-pasang", maka **Internal Slots** adalah "Kabel yang tertanam di dalam casing mesin".
- Anda tidak bisa mengetik `obj.[[Prototype]]` di kode Anda.
- Anda harus menggunakan alat khusus (seperti `Object.getPrototypeOf()`) untuk berinteraksi dengan sirkuit ini.

---

## 2. Slot Esensial (Internal Slots)

Beberapa sirkuit tersembunyi yang wajib ada di setiap unit `Ordinary`:
- **`[[Prototype]]`**: Pipa yang menyambungkan unit ke denah arsitek dasarnya. (Bernilai `Object` atau `null`).
- **`[[Extensible]]`**: Sakelar yang menentukan apakah unit ini masih bisa menerima penambahan komponen baru (`true`/`false`).
- **`[[PrivateElements]]`**: (Terbaru!) Brankas rahasia untuk menyimpan property `#` yang benar-benar privat.

---

## 3. Kenapa Internal Slots Penting?

Tanpa *Internal Slots*, Hub tidak akan tahu:
1.  Apakah unit ini adalah Array atau Objek biasa.
2.  Apakah unit ini bisa dijalankan sebagai fungsi (`[[Call]]`).
3.  Dari mana unit ini mendapatkan fitur warisan (`[[Prototype]]`).

![Internal Slot Schematic](./assets/internal_slot_schematic.svg)

---

## Arsitek Mindset: Memahami Batasan

Sebagai arsitek Hub:
- Jangan mencoba memanipulasi *Internal Slots* secara paksa (seperti mengganti `__proto__`) kecuali benar-benar diperlukan. Operasi ini seperti membongkar casing mesin saat sedang berjalan—sangat merusak performa Hub.
- Gunakan metode standar `Object.isFrozen()` atau `Object.isExtensible()` untuk memeriksa status sirkuit `[[Extensible]]` sebelum mencoba memodifikasi unit yang sensitif.

---
*Status: [status.md](../../../docs/status.md)*
