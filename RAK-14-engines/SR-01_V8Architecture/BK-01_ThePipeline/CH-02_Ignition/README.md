# CH-02: Ignition (The Bytecode Interpreter)

Setelah AST terbentuk, V8 tidak langsung mengubahnya menjadi Machine Code, melainkan ke arah **Bytecode**.

## 🔥 Mengapa Ignition?
Sebelum ada Ignition, V8 langsung melakukan kompilasi ke Machine Code (Full-codegen), yang memakan banyak memori. Ignition diperkenalkan untuk:
1. **Mengurangi Penggunaan Memori**: Bytecode jauh lebih kecil dibanding Machine Code.
2. **Mempercepat Startup**: Kompilasi ke Bytecode sangat cepat.

## ⚙️ Peran Ignition
Ignition bertugas sebagai interpreter yang menjalankan bytecode. Sambil berjalan, Ignition juga mengumpulkan **Profiling Data** (misal: "Apakah fungsi ini sering dipanggil?", "Data jenis apa yang lewat?") yang nantinya akan digunakan oleh TurboFan.

---
*Kembali ke [BK-01](../README.md)*
