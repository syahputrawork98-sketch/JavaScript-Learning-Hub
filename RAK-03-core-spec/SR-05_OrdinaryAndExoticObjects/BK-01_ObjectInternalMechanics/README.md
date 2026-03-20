# Buku 01: Object Internal Mechanics

Buku ini membedah sifat "Hidup" dari objek di JavaScript. Kita akan melihat melampaui sintaks kurung kurawal `{}` dan memahami bagaimana *Engine* mengelola properti, menangani referensi memori, dan memberikan perilaku khusus pada objek tertentu seperti Array (Clause 10 pada ECMA-262).

## Mengapa Mempelajari Ini?
Objek adalah blok pembangun utama JavaScript. Tanpa memahami mekanika internalnya (seperti *Internal Slots*), pengembang sering terjebak dalam bug mutasi data yang sulit dilacak atau salah paham tentang bagaimana `Array` mengelola memorinya sendiri.

## Daftar Bab

1. **[Bab 01: Internal Slots & Methods (Mesin di Balik Cangkang)](./CH-01_InternalSlotsAndMethods/)**
2. **[Bab 02: Reference Behavior (Variabel vs Objek)](./CH-02_ReferenceBehavior/)**
3. **[Bab 03: Array Exotic Behavior (Sihir Properti Length)](./CH-03_ArrayExoticBehavior/)**

## Prasyarat Pembaca
- **[RAK-01-javascript/SR-01-javascript/SR-01-get-started-core / SR-02_DataTypesAndValues / Buku 01: Primitive Types](../../SR-02_DataTypesAndValues/BK-01_PrimitiveTypes/)**: Memahami perbedaan objek dengan tipe primitif.
- **[RAK-01-javascript/SR-01-javascript/SR-01-get-started-core / SR-04_ExecutableCodeAndContexts / Buku 01: Execution Contexts](../../SR-04_ExecutableCodeAndContexts/BK-01_ExecutionContexts/)**: Memahami bagaimana objek disimpan di dalam *Environment Records*.
