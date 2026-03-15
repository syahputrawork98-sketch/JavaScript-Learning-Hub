# Rak: Engines (Internal Mechanics)

*Level: Scientist/Internalist*

Rak ini membedah "mesin fisik" yang menjalankan kode JavaScript. Di sini kita tidak bicara soal spesifikasi bahasa, melainkan soal implementasi piranti lunak (seperti V8 Engine dari Google, SpiderMonkey dari Mozilla, atau JavaScriptCore dari Apple).

## Tujuan Rak Ini
- Memahami bagaimana kode JS dikonversi menjadi Machine Code (JIT Compilation).
- Mempelajari teknik optimasi performa di tingkat Engine (Hidden Classes, Inline Caches).
- Memahami manajemen memori fisik dan mekanisme Garbage Collection.

## Katalog Sub-Rak
*(Akan dikembangkan seiring waktu)*
- `01_v8_arch/` (Arsitektur V8 Engine)
- `02_jit_compilation/` (Ignition, TurboFan, & Optimization)
- `03_memory_management/` (Heap, Stack, & GC Algorithms)
- `04_webassembly_runtime/` (Eksekusi WASM di Engine JS)
