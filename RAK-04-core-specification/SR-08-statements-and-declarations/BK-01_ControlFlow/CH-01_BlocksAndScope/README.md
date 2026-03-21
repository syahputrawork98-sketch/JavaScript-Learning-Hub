# CH-01: Blocks and Lexical Scoping

> **"Barier energi di dalam sirkuit. `Blocks and Lexical Scoping` adalah mekanisme Hub untuk melokalisasi efek dan mengisolasi variabel."**

**Source Hub**: 
- [ECMA-262: Block](https://tc39.es/ecma262/#sec-block)

---

## 1. Konsep & Esensi

**Definisi Arsitek**:
Sebuah **Block** adalah sekumpulan pernyataan yang dibungkus dalam kurung kurawal `{ }`. Di level spesifikasi, setiap kali sebuah blok dimasuki, Hub menciptakan sebuah **Lexical Environment** baru (jika blok tersebut mengandung deklarasi leksikal seperti `let` atau `const`). Ini memastikan bahwa variabel tersebut hanya hidup selama sirkuit blok aktif.

**Model Mental**:
Bayangkan Hub sebagai gedung dengan banyak ruangan (Blocks). Setiap ruangan punya laci rahasia (Lexical Environment). Barang di laci ruangan A tidak bisa dilihat dari ruangan B, kecuali ruangan B berada di dalam ruangan A.

---

## 2. Visualisasi Sistem: Block Scope Creation

```mermaid
graph TD
    Enter[Enter Block: '{'] --> Decl{Has let/const/class?}
    Decl -->|Yes| NewEnv[Create New Environment Record]
    Decl -->|No| KeepEnv[Use Current Environment]
    NewEnv --> Exec[Execute Statements]
    Exec --> Exit[Exit Block: '}']
    Exit --> Restore[Restore Previous Environment]
    
    style NewEnv fill:#a8e6cf,stroke:#333
    style Exit fill:#f1c40f,stroke:#333
```

---

## 3. Mekanisme & Hubungan

### Aturan Blok (Clause 14.2)
1. **Empty Block**: Hub tetap melakukan evaluasi pada blok kosong `{ }`, tapi tidak ada energi yang dialirkan.
2. **Lexical Declarations**: `let`, `const`, dan `class` terikat pada blok terdekat. Mereka berada dalam **Temporal Dead Zone** (TDZ) dari dimulainya blok sampai deklarasi dievaluasi.
3. **Variable Declarations (`var`)**: Berbeda dengan let/const, `var` mengabaikan sirkuit blok dan naik ke tingkat fungsi atau global terdekat (**Hoisting**).

### Arsitek Mindset: Predictable Isolation
- Gunakan blok untuk membatasi cakupan variabel yang "berisik" (seperti index loop). Dengan mengisolasi mereka di dalam blok, Anda mencegah kecelakaan transmisi data antar sirkuit yang tidak berhubungan.

---

## 4. Lab Praktis
Buka file `examples/block_scope_lab.js` untuk melihat perbandingan visibilitas antara `var` dan `let` saat berada di dalam blok bersarang.

---
*Status: [status.md](../../../../../status.md)*
