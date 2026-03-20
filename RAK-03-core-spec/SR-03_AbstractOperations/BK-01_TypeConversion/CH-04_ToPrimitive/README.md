# CH-04: ToPrimitive (The Key Transmutation)

> **"Saat sebuah mesin (`Object`) harus masuk ke jalur pipa primitif, Hub melakukan 'Transmutasi Kunci' (The Key Transmutation). Ini adalah proses negosiasi internal untuk mengekstrak nilai mentah dari sebuah struktur kompleks berdasarkan petunjuk (*hint*) yang diberikan."**

*Pemetaan ECMA-262: Clause 7.1.1 (ToPrimitive)*

## 1. Mental Model: "The Key Transmutation"

Bayangkan sebuah kontainer kargo (`Object`) yang harus ditimbang beratnya (Number) atau diberi label nama (String). Hub tidak bisa memasukkan seluruh kontainer ke timbangan; Hub harus bertanya pada kontainer tersebut: *"Berikan saya nilai mentahmu."*
- **Hint "number"**: "Saya butuh angka. Berikan sensor `valueOf` Anda."
- **Hint "string"**: "Saya butuh teks. Berikan label `toString` Anda."

---

## 2. Peta Jalan Transmutasi (Algoritma Spec)

Saat `ToPrimitive(input, preferredType)` dipanggil:
1.  Jika `input` sudah Primitif -> Kembali ke unit asal.
2.  Cek apakah ada metode **`@@toPrimitive`** (`Symbol.toPrimitive`). Jika ada, jalankan!
3.  Jika tidak ada, dan `preferredType` adalah `string`:
    - Jalankan `toString()`. Jika hasilnya Primitif, Selesai.
    - Jika tidak, jalankan `valueOf()`.
4.  Jika `preferredType` adalah `number`:
    - Jalankan `valueOf()`. Jika hasilnya Primitif, Selesai.
    - Jika tidak, jalankan `toString()`.

---

## 3. Praktik Lapangan (Lab)

```javascript
const hubUnit = {
    [Symbol.toPrimitive](hint) {
        if (hint === "number") return 1000;
        if (hint === "string") return "UNIT_ALPHA";
        return null;
    }
};

console.log(+hubUnit); // 1000 (Hint: number)
console.log(`${hubUnit}`); // "UNIT_ALPHA" (Hint: string)
```

---

## Arsitek Mindset: Prediktabilitas Konversi

Sebagai arsitek Hub:
- Memahami `ToPrimitive` adalah kunci untuk menghindari bug saat melakukan operasi matematika pada Object.
- Gunakan `Symbol.toPrimitive` untuk memberikan kontrol penuh pada bagaimana Object Anda bertransmutasi di dalam Grid.
- Ingat: Kebanyakan Object standar (Ordinary) akan mencoba `valueOf` lalu `toString` untuk operasi numerik.

---
*Status: [status.md](../../../docs/status.md)*
