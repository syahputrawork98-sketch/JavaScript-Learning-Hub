# CH-02: IsStrictlyEqual (The Precise Sensor)

> **"Untuk operasional Hub yang kritis, tidak ada ruang bagi asumsi. `isStrictlyEqual` (`===`) adalah 'Sensor Presisi' (The Precise Sensor) — ia menuntut kecocokan mutlak baik pada tipe elemen maupun nilai energinya tanpa transmutasi apapun."**

*Pemetaan ECMA-262: Clause 7.2.15 (IsStrictlyEqual)*

## 1. Mental Model: "The Precise Sensor"

Bayangkan sebuah kunci digital yang hanya terbuka jika:
1.  Bahan kuncinya sama (Tipe: String, Number, dsb).
2.  Gerigi kuncinya identik (Nilai).
Jika bahan kuncinya berbeda (misal: Kunci Besi vs Kunci Plastik), sensor tidak akan mencoba melelehkan kunci plastik tersebut. Sensor akan langsung melaporkan **`false`**.

---

## 2. Aturan Sensor Presisi

1.  **Tipe Berbeda**: Selalu `false`.
2.  **Number vs Number**: 
    - `NaN === NaN` -> **false** (Salah satu keanehan Grid).
    - `+0 === -0` -> **true**.
    - Nilai lain harus sama secara bit.
3.  **Lainnya**: Nilai harus identik. Untuk Object, **referensi memori** harus sama.

---

## 3. Mengapa `NaN === NaN` adalah `false`?

Di level spesifikasi, `NaN` (Not-a-Number) didefinisikan sebagai hasil dari operasi yang gagal. Karena kegagalan bisa berasal dari berbagai sumber yang tidak berhubungan, spesifikasi menganggap satu kegagalan tidak identik dengan kegagalan lainnya.

---

## Arsitek Mindset: Standar Keamanan

Sebagai arsitek Hub:
- Jadikan `===` sebagai protokol standar operasional di seluruh Grid Anda.
- Gunakan `Number.isNaN()` jika Anda butuh mendeteksi sinyal `NaN`, jangan mengandalkan `===`.
- Ingat bahwa `===` pada Object hanya memastikan Anda menunjuk ke **mesin fisik yang sama**, bukan mesin dengan spesifikasi yang sama.

---
*Status: [status.md](../../../docs/status.md)*
