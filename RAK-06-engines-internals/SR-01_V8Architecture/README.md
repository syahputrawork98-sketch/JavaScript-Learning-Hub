# SR-01: V8 Architecture (The Execution Pipeline)

Sub-rak ini membedah jalur pipa (pipeline) yang dilalui kode JavaScript di dalam V8 Engine.

## 🏗️ The Internal Pipeline
Setiap baris kode Anda akan melewati tahapan berikut sebelum dieksekusi oleh processor:

1. **Scanner & Parser**: Mengubah teks mentah menjadi AST.
2. **Ignition**: Mengubah AST menjadi Bytecode yang efisien.
3. **TurboFan**: Mengoptimasi bytecode menjadi Machine Code tingkat tinggi.

## 📖 Buku
- **[BK-01: The Pipeline](./BK-01_ThePipeline/README.md)**: Panduan langkah demi langkah proses internal V8.

---
*Status: 🟢 **Gold Standard***
