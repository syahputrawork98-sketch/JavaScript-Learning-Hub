# Buku 01: Execution Contexts

Buku ini membedah "Mesin Utama" yang menggerakkan runtime JavaScript. Kita tidak hanya belajar cara menulis kode, tapi belajar bagaimana *Engine* (seperti V8) menyiapkan panggung, mengatur tumpukan memori, dan menjaga variabel tetap hidup melalui mekanisme *Execution Context* (Clause 9 pada ECMA-262).

## Mengapa Mempelajari Ini?
Memahami *Execution Context* adalah pembeda antara pengembang yang menebak-nebak hasil kode dan arsitek yang bisa memprediksi perilaku kode dengan presisi 100%. Ini adalah pondasi untuk memahami Hoisting, Scope Chain, Closure, dan perilaku `this`.

## Daftar Bab

1. **[Bab 01: The Global Stage (Realms & Context)](./CH-01_TheGlobalStage/)**
2. **[Bab 02: Mekanika Call Stack (Execution Context Stack)](./CH-02_CallStackMechanics/)**
3. **[Bab 03: Hoisting & Registration (Environment Records)](./CH-03_HoistingAndRegistration/)**
4. **[Bab 04: Closure Persistence (Lexical Environments)](./CH-04_ClosurePersistence/)**

## Prasyarat Pembaca
- **[RAK-01-core / SR-02_DataTypesAndValues / Buku 01: Primitive Types](../../SR-02_DataTypesAndValues/BK-01_PrimitiveTypes/)**: Memahami warga dasar yang akan diolah di dalam konteks eksekusi.
