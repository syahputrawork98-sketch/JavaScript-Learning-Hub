# SR-11: Standard Built-in Objects (The Core Machinery)

> **"Setiap Hub membutuhkan perkakas standar yang tangguh untuk memproses data. SR-11 membedah 'Mesin Inti' (The Core Machinery)—objek-objek bawaan dari spesifikasi yang menyediakan struktur data, algoritma matematika, dan kontrol asinkron."**

*Pemetaan ECMA-262: Clause 18-28*

## 📚 Daftar Buku

1.  **[BK-01_ProcessingUnits](./BK-01_ProcessingUnits/)**: Kalkulator inti dan utilitas global Hub (`Math`, `Number`, `BigInt`).
2.  **[BK-02_StructuralUnits](./BK-02_StructuralUnits/)**: Unit kontainer data (`Array`, `Map`, `Set`, `TypedArrays`).
3.  **[BK-03_TextAndChronology](./BK-03_TextAndChronology/)**: Mesin pengolah teks (`String`, `RegExp`) dan waktu (`Date`).
4.  **[BK-04_LogicAndSync](./BK-04_LogicAndSync/)**: Unit kontrol asinkron (`Promise`) dan metaprogramming (`Proxy`, `Reflect`).

## 📊 Visualisasi Arsitektur
- [Built-in Objects Hierarchy](./assets/builtin_objects_hierarchy.svg) - Peta kedaulatan mesin inti di dalam Hub.
- [Keyed Collection Mechanics](./BK-02_StructuralUnits/assets/keyed_collection_mechanics.svg) - Perbedaan operasional antara Map dan Set.
- [Text Processing Engine](./BK-03_TextAndChronology/assets/text_processing_engine.svg) - Sistem transmisi teks dan sinkronisasi waktu.
- [Promise Lifecycle States](./BK-04_LogicAndSync/assets/promise_lifecycle_states.svg) - Visualisasi transisi sirkuit asinkron.
- [Proxy Interceptor Trap](./BK-04_LogicAndSync/assets/proxy_interceptor_trap.svg) - Mekanisme interupsi sistem asinkron/metaprogramming.

---
*Status: Gold Standard 💎*
