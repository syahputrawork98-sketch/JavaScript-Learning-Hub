# Buku 01: Execution Contexts

Buku ini membedah "Mesin Utama" yang menggerakkan runtime JavaScript. Kita tidak hanya belajar cara menulis kode, tapi belajar bagaimana *Engine* (seperti V8) menyiapkan panggung, mengatur tumpukan memori, dan menjaga variabel tetap hidup melalui mekanisme *Execution Context* (Clause 9 pada ECMA-262).

## Mengapa Mempelajari Ini?
Memahami *Execution Context* adalah pembeda antara pengembang yang menebak-nebak hasil kode dan arsitek yang bisa memprediksi perilaku kode dengan presisi 100%. Ini adalah pondasi untuk memahami Hoisting, Scope Chain, Closure, dan perilaku `this`.

## Daftar Bab

1. **[Bab 01: The Global Stage (Realms & Contexts)](./01_the_global_stage/)**
2. **[Bab 02: Mekanika Call Stack (Execution Context Stack)](./02_call_stack_mechanics/)**
3. **[Bab 03: Hoisting dan Registration (Environment Records)](./03_hoisting_and_registration/)**
4. **[Bab 04: Closure Persistence (Lexical Environments)](./04_closure_persistence/)**

## Prasyarat Pembaca
- **[RAK-01-core / 02_data_types_and_values / Buku 01: Primitive Types](../../02_data_types_and_values/01_primitive_types/)**: Memahami warga dasar yang akan diolah di dalam konteks eksekusi.
