# Buku 01: Object Internal Mechanics

Buku ini membedah sifat "Hidup" dari objek di JavaScript. Kita akan melihat melampaui sintaks kurung kurawal `{}` dan memahami bagaimana *Engine* mengelola properti, menangani referensi memori, dan memberikan perilaku khusus pada objek tertentu seperti Array (Clause 10 pada ECMA-262).

## Mengapa Mempelajari Ini?
Objek adalah blok pembangun utama JavaScript. Tanpa memahami mekanika internalnya (seperti *Internal Slots*), pengembang sering terjebak dalam bug mutasi data yang sulit dilacak atau salah paham tentang bagaimana `Array` mengelola memorinya sendiri.

## Daftar Bab

1. **[Bab 01: Internal Slots & Methods (Operasi Rahasia)](./01_internal_slots_and_methods/)**
2. **[Bab 02: Reference Behavior (Alamat Memori vs Nilai)](./02_reference_behavior/)**
3. **[Bab 03: Array Exotic Behavior (Sihir Properti Length)](./03_array_exotic_behavior/)**

## Prasyarat Pembaca
- **[RAK-01-core / 02_data_types_and_values / Buku 01: Primitive Types](../../02_data_types_and_values/01_primitive_types/)**: Memahami perbedaan objek dengan tipe primitif.
- **[RAK-01-core / 04_executable_code_and_contexts / Buku 01: Execution Contexts](../../04_executable_code_and_contexts/01_execution_contexts/)**: Memahami bagaimana objek disimpan di dalam *Environment Records*.
