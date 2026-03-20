# CH-02: Short-Circuiting (The Flow Gates)

> **"Tidak semua sinyal harus diperiksa sampai akhir. `Short-circuiting` adalah 'Gerbang Aliran Cerdas' — mekanisme efisiensi di mana Hub berhenti mengevaluasi ekspresi jika hasil akhirnya sudah bisa dipastikan lebih awal."**

*Pemetaan ECMA-262: Clause 13.11 - 13.13 (Logical Operators)*

## 1. Mental Model: "Smart Flow Gates"

- **Logical AND (`&&`)**: Bertindak sebagai **Gatekeeper**. Jika sinyal pertama *False (Gagal)*, aliran langsung diputus. Sinyal kedua tidak akan pernah diproses.
- **Logical OR (`||`)**: Bertindak sebagai **Bypass Switch**. Jika sinyal pertama *True (Berhasil)*, aliran langsung diteruskan. Sinyal kedua diabaikan.
- **Nullish Coalescing (`??`)**: Bertindak sebagai **Default Switch**. Ia hanya akan beralih ke jalur cadangan jika jalur utama benar-benar mati (`null` atau `undefined`).

## 🏗️ Short-Circuit Logic Guard

```mermaid
graph LR
    A[Signal A] --> OP{&& or ||}
    OP -->|&&: A is Falsy| End[Terminasi: Return A]
    OP -->|&&: A is Truthy| B[Evaluate Signal B]
    OP -->|||: A is Truthy| End[Terminasi: Return A]
    OP -->|||: A is Falsy| B[Evaluate Signal B]
    
    B --> Result[Return Result B]
```

---

## 2. Urutan Prioritas Logika

Dalam satu sirkuit tanpa kurung, Hub mengevaluasi dengan urutan:
1. `&&` (Mencari Kegagalan Pertama)
2. `||` (Mencari Keberhasilan Pertama)
3. `??` (Mencari Nilai Pasti)

*Catatan: Anda tidak boleh mencampur `??` dengan `&&` atau `||` tanpa tanda kurung eksplisit.*

---

## 3. Praktik Lapangan (Lab)

```javascript
const userStored = null;
const isOnline = true;

// Short-circuit Bypass
const user = userStored || "GUEST_UNIT"; // "GUEST_UNIT"

// Gatekeeper
isOnline && console.log("Broadcasting signal..."); // Terpanggil!

// Nullish Coalescing vs OR
const count = 0;
console.log(count || 10); // 10 (Karena 0 dianggap 'Falsy')
console.log(count ?? 10); // 0 (Karena 0 bukan null/undefined)
```

---

## Arsitek Mindset: Efisiensi Jalur

Sebagai arsitek Hub:
- Letakkan ekspresi yang paling "murah" (eksekusi cepat) di sebelah kiri operator `&&` atau `||` untuk memaksimalkan fitur short-circuiting.
- Gunakan `??` alih-alih `||` saat Anda ingin menetapkan nilai default tetapi tetap mengizinkan angka `0` atau string kosong `""` sebagai nilai yang valid.

---
*Status: [status.md](../../../docs/status.md)*
