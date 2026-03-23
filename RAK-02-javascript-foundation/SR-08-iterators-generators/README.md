# SR-08: Iterators & Generators (The Controlled Flow System)

> **"Tidak semua data perlu dilepas sekaligus. SR-08 membahas bagaimana JavaScript mengatur aliran nilai secara bertahap, terukur, dan bisa dilanjutkan sesuai kebutuhan."**

**Iterators** dan **Generators** memberi kita cara untuk membaca urutan data sedikit demi sedikit. Di level `RAK-02`, fokus kita adalah memahami cara pakai, mental model aliran bertahap, dan kapan pola ini lebih tepat daripada array biasa atau fungsi yang langsung selesai.

---

## Arsitektur Aliran Terkendali

### 1. [BK-01: Sequence Management](./BK-01_SequenceManagement/README.md)
Membahas bagaimana data bisa mengalir secara berurutan melalui protokol iterasi dan generator.
- **Iteration Protocols**: iterable, iterator, `for...of`, spread.
- **Generator Pulses**: `function*`, `yield`, `yield*`, async iterators.

---

## 1. Mental Model: "Controlled Flow System"

Bayangkan Hub tidak selalu mengirim seluruh muatan data dalam satu ledakan. Sebaliknya:
- **Iterable** menandai bahwa sebuah sumber data siap dibaca bertahap.
- **Iterator** bertugas menarik nilai satu demi satu.
- **Generator** memungkinkan aliran itu dihentikan, dilanjutkan, lalu dihentikan lagi dengan ritme yang lebih fleksibel.

---

## Arsitek Mindset: Aliran yang Disengaja

Sebagai arsitek Hub:
- Gunakan iterators/generators saat Anda ingin memproses data bertahap, bukan menumpuk semua hasil di awal.
- Pahami fitur ini sebagai alat kontrol aliran dan efisiensi, bukan sekadar sintaks lanjutan.
- Jaga fokus pada use case praktis seperti traversal, streaming, dan sequence processing.

---

## Hands-on: Lab Controlled Flow
Masuk ke tiap chapter untuk melihat bagaimana JavaScript mengalirkan data satu langkah demi satu langkah di dalam Hub.

---
*Status: Gold Standard (100% Complete).*
