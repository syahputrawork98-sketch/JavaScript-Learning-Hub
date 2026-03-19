# CH-01: Block-Scoped Allotment (High-Security Slots)

> **"Di dalam Hub modern, energi tidak boleh bocor keluar dari sirkuit asalnya. `let` dan `const` adalah 'Slot Keamanan Tinggi' (High-Security Slots)—mekanisme alokasi memori yang mengunci sinyal tepat di dalam blok di mana mereka dideklarasikan."**

*Pemetaan ECMA-262: Clause 14.3*

## 1. Mental Model: "The Scoping Vault"

Bayangkan setiap pasangan kurung kurawal `{ ... }` adalah sebuah brankas (Vault) kecil.
- **`let`**: Slot memori yang bisa diperbarui isinya (Re-assignment), tapi tetap terkunci di dalam brankas.
- **`const`**: Slot memori yang sekali disi, segelnya tidak bisa dibuka lagi (Immutable binding). Ia terkunci rapat di dalam brankas.

---

## 2. Temporal Dead Zone (TDZ)

Sirkuit `let` dan `const` memiliki sensor keamanan ekstra. Jika Anda mencoba mengakses "Slot" sebelum instruksi deklarasi dijalankan, Hub akan memutus arus secara instan dan memberikan error: `ReferenceError`. Area waktu/ruang dari awal blok sampai baris deklarasi disebut sebagai **Temporal Dead Zone**.

---

## 3. Praktik Lapangan (Lab)

```javascript
{
    // console.log(power); // ERROR: Melanggar TDZ!
    let power = 100;
    const ID = "CORE-01";
    
    power = 150; // LEGAL: Update daya
    // ID = "CORE-02"; // ERROR: Segel Const permanen
}
// console.log(power); // ERROR: Energi tidak bocor keluar brankas
```

---

## Arsitek Mindset: Default to Const

Sebagai arsitek Hub:
- Gunakan `const` sebagai standar utama untuk semua kabel dan komponen yang nilainya tidak direncanakan untuk berubah. Ini membuat sirkuit lebih stabil dan mudah diprediksi.
- Gunakan `let` hanya jika Anda benar-benar butuh memperbarui nilai (misal dalam loop).
- Hindari kebocoran energi dengan selalu mendeklarasikan variabel di scope sesempit mungkin.

---
*Status: [status.md](../../../docs/status.md)*
