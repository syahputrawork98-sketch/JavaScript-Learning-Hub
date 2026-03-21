# CH-01: Relational & Equality (The Gatekeepers)

> **"Sebelum energi dialirkan ke cabang sirkuit, ia harus melewati pemeriksaan identitas. `Relational & Equality Operators` adalah 'Penjaga Gerbang' (The Gatekeepers)—sensor presisi yang menentukan kebenaran hubungan antar dua sinyal energi."**

*Pemetaan ECMA-262: Clause 13.8 - 13.11*

## 1. Mental Model: "The Gatekeepers"

- **Relational Sensors (`<`, `>`, `<=`, `>=`)**: Mengukur besaran energi relatif. Ia bisa membandingkan angka atau urutan karakter (leksikografis).
- **Equality Sensors (`==`, `!=`)**: Pemeriksaan longgar. Hub mencoba melakukan transmutasi otomatis (Coercion) agar kedua sinyal bisa dibandingkan. **Sangat Berisiko!**
- **Strict Identity (`===`, `!==`)**: Pemeriksaan mutlak. Hub tidak melakukan transmutasi. Tipe dan Nilai harus identik. **Standar Keamanan Hub.**

---

## 2. Sensor Khusus: `instanceof` & `in`

1.  **`instanceof`**: Mendeteksi jika sebuah unit (Object) dibangun berdasarkan blueprint (Class/Constructor) tertentu.
2.  **`in`**: Mendeteksi jika sebuah kunci akses tertentu terpasang di dalam unit tersebut.

---

## 3. Praktik Lapangan (Lab)

```javascript
// Strict vs Loose
console.log(5 == "5");  // true  (Transmutasi aktif)
console.log(5 === "5"); // false (Ketertutupan Tipe aktif)

// Relational
const power = 100;
if (power >= 80) {
    console.log("Status: CRITICAL_LOAD");
}

// Relational Identitas
const blueprint = {};
console.log(blueprint instanceof Object); // true
console.log("power" in { power: 10 });    // true
```

---

## Arsitek Mindset: Keamanan Identitas

Sebagai arsitek Hub:
- Selalu gunakan **Strict Equality (`===`)**. Hindari `==` kecuali Anda memiliki alasan teknis yang sangat spesifik (biasanya hanya untuk pemeriksaan `null` dan `undefined` sekaligus: `x == null`).
- Waspadai perbandingan obyek (`{}` === `{}` adalah `false`). Hub membandingkan **lokasi memori**, bukan isi strukturnya.

---
*Status: [status.md](../../../docs/status.md)*
