# CH-09: Number Equality (The Precise Matching Sensor)

> **"Di dalam Grid, menentukan apakah dua unit identik memerlukan sensor yang sangat spesifik. `Number::equal` adalah 'Sensor Pencocokan Presisi' (The Precise Matching Sensor) — alat yang membandingkan bit data untuk memastikan keselarasan beban."**

*Pemetaan ECMA-262: Clause 6.1.6.1.16 (Number::equal)*

## 1. Mental Model: "The Precise Matching Sensor"

Bayangkan dua steker energi yang ingin Anda hubungkan. Sensor akan memberikan lampu hijau (`true`) hanya jika:
- Kedua steker memiliki besaran yang sama.
- **Pengecualian NaN**: Jika salah satu steker rusak (`NaN`), sensor tidak bisa mencocokkan mereka (Hasil: `false`).
- **Nol Konsistensi**: Sensor menganggap steker `+0` dan `-0` adalah sama karena mereka mengisi tangki yang sama di Hub.

---

## 2. Aturan Sensor (Spec-Matched)

Saat membandingkan `x == y` (di level Number):
1.  Jika `x` adalah `NaN` -> `false`.
2.  Jika `y` adalah `NaN` -> `false`.
3.  Jika `x` sama dengan `y` -> `true`.
4.  Jika `x` adalah `+0` dan `y` adalah `-0` -> `true`.
5.  Jika `x` adalah `-0` dan `y` adalah `+0` -> `true`.
6.  Jika tidak -> `false`.

---

## 3. Praktik Lapangan (Lab)

```javascript
console.log("--- Mengetes Sensor Pencocokan ---");

console.log(`NaN == NaN : ${NaN == NaN}`); // false
console.log(`+0 == -0   : ${+0 == -0}`);   // true
console.log(`5 == 5      : ${5 == 5}`);      // true
```

---

## Arsitek Mindset: Batas Sensor

Sebagai arsitek Hub:
- Ingat bahwa `==` di sini adalah operasional internal Number. Di level bahasa, ini bisa dipicu oleh `==` maupun `===` (jika tipenya sama).
- Jika Anda butuh sensor yang bisa mendeteksi `NaN` sebagai identitas yang sama, gunakan `Object.is` (SameValue).
- Sensor ini adalah alasan mengapa Anda tidak boleh membandingkan hasil perhitungan desimal secara langsung (`0.1 + 0.2 == 0.3`). Gunakan toleransi `EPSILON`.

---
*Status: [status.md](../../../docs/status.md)*
