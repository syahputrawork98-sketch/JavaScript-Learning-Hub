# CH-02: Mathematical Processors (Math, Number, BigInt)

> **"Untuk perhitungan energi yang kompleks dan presisi tinggi, Hub dilengkapi dengan unit kalkulasi khusus. `Mathematical Processors` adalah 'Pembangkit Presisi'—sistem yang menangani angka dari logika floating-point hingga integer raksasa."**

*Pemetaan ECMA-262: Clause 21 & 22*

## 1. Mental Model: "The High-Precision Core"

- **`Number`**: Standar 64-bit (IEEE 754). Cepat namun memiliki batas presisi (lihat SR-02).
- **`Math`**: Unit pustaka statis. Tidak bisa di-instansi (`new Math()`), melainkan digunakan langsung untuk fungsi trigonometri, logaritma, dan pembulatan.
- **`BigInt`**: Unit khusus untuk menangani integer masif yang melampaui `Number.MAX_SAFE_INTEGER`. Berguna untuk ID unik atau perhitungan kriptografi energi.

---

## 2. Karakteristik Mesin

| Unit | Kapasitas | Batasan |
| :--- | :--- | :--- |
| **Number** | ~1.8e308 | Kehilangan presisi setelah 2^53 - 1 |
| **BigInt** | Tak Terbatas (Memori) | Tidak bisa dicampur langsung dengan Number |
| **Math** | Utilitas | Hanya bekerja pada tipe Number |

---

## 3. Praktik Lapangan (Lab)

```javascript
// 1. Math Utility
const voltage = 220.456;
console.log("Rounded Pulse:", Math.round(voltage));

// 2. BigInt for Massive Data
const largeID = 9007199254740991n + 10n;
console.log("Massive Energy ID:", largeID.toString());

// 3. Number Limits
console.log("Is Safe:", Number.isSafeInteger(Math.pow(2, 53))); // false
```

---

## Arsitek Mindset: Pilih Unit yang Tepat

Sebagai arsitek Hub:
- Gunakan **`Number`** untuk hampir semua perhitungan standar Hub (kecepatan adalah prioritas).
- Gunakan **`BigInt`** saat Anda bekerja dengan database eksternal yang mengirimkan ID 64-bit agar tidak terjadi korupsi data.
- Ingat bahwa `Math.random()` bukan merupakan pembangkit angka acak kriptografis (CSPRNG). Untuk keamanan tingkat tinggi, gunakan unit khusus dari Web Crypto API.

---
*Status: [status.md](../../../docs/status.md)*
