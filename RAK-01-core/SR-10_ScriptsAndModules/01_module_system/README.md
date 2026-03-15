# Buku 01: Module System

Buku ini membedah "Sistem Logistik" atau bagaimana JavaScript mengelola distribusi kode. Kita akan mempelajari perbedaan antara *Script* tradisional dan *Module* modern (ESM), bagaimana mesin melakukan *Link* antar file, serta cara memuat kode secara dinamis (Clause 16 pada ECMA-262).

## Mengapa Mempelajari Ini?
Di era aplikasi web besar, kita tidak bisa lagi menulis semua kode di satu file. Memahami sistem modul bukan sekadar tahu cara pakai `import` dan `export`, tapi memahami bagaimana *Engine* mengisolasi scope, menangani dependensi melingkar (*Circular Dependencies*), dan bagaimana ia mengoptimalkan pemuatan kode untuk performa maksimal.

## Daftar Bab

1. **[Bab 01: Script vs Module Semantics (Surat vs Paket)](./01_script_vs_module_semantics/)**
2. **[Bab 02: ESM Mechanics (Sistem Pipa Air)](./02_esm_mechanics/)**
3. **[Bab 03: Dynamic Imports (Kurir Instan)](./03_dynamic_imports/)**

## Prasyarat Pembaca
- **[RAK-01-core / SR-04_ExecutableCodeAndContexts / Buku 01: Execution Contexts](../../SR-04_ExecutableCodeAndContexts/01_execution_contexts/)**: Memahami bagaimana konteks eksekusi global berbeda antara Script dan Module.
- **[RAK-01-core / SR-08_StatementsAndDeclarations / Bab 01: Block & Variable Statements](../../SR-08_StatementsAndDeclarations/01_control_flow/01_block_and_variable_statements/)**: Memahami scope variabel.
