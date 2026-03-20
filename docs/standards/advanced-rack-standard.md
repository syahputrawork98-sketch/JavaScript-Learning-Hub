# Advanced-Rack Standard (RAK 11-14)

> **"The Heart of the Knowledge Universe: Professional-Grade Deconstruction."**

Dokumen ini mendefinisikan standar "True Gold Standard" untuk Rak-Rak Lanjut (**RAK 11: Evolution**, **RAK 12: Core Spec**, **RAK 13: Runtimes**, dan **RAK 14: Engines**). Rak-rak ini bukan sekadar panduan pengguna, melainkan dekonstruksi arsitektur mesin JavaScript.

---

## 📐 Mandatory Checklist (7 Poin Wajib)

Setiap bab dalam RAK 11-14 **WAJIB** mengikuti struktur berikut agar lulus audit Sentinel:

### 1. Source-Anchor (Jangkar Sumber)
Wajib mencantumkan link aktif ke sumber primer yang menjadi dasar materi.
- **Rak 11-12**: [tc39.es/ecma262](https://tc39.es/ecma262/) (Clause specific).
- **Rak 13**: [nodejs.org/api](https://nodejs.org/api/) atau dokumentasi resmi Bun/Deno.
- **Rak 14**: V8 Project Design Docs atau Paper teknis terkait.

### 2. Dual Definition (Definisi Ganda)
Setiap konsep harus memiliki dua perspektif:
- **Logic-Pure**: Definisi formal dari kacamata spesifikasi/arsitektur mesin.
- **Analogy-Model**: Model mental dunia nyata untuk mempermudah visualisasi awal.

### 3. Internal Mechanics (Algoritma)
Penjabaran langkah-demi-langkah proses internal. 
- Untuk Spek: Gunakan algoritma *Abstract Operations*.
- Untuk Runtime: Gunakan alur *Event Loop Phase* atau *I/O Binding*.
- Untuk Engine: Gunakan alur *JIT Compilation* atau *Optimization Guards*.

### 4. State & Architecture Mapping
Visualisasi struktur data internal dalam bentuk tabel.
- **Slot Internal**: Notasi `[[SlotName]]`.
- **Memory Layout**: Pemetaan heap/stack.
- **Environment**: Variabel dan konteks eksekusi.

### 5. Deep-Visual (Mermaid)
Minimal satu diagram Mermaid yang menunjukkan pergerakan atau perubahan status (*state movement*). Bukan sekadar diagram statis hirarki.

### 6. Experimental Lab (examples/)
Folder `examples/` wajib berisi file `.js` yang bisa dijalankan untuk membuktikan teori di README. Kasus-kasus unik (*Edge Cases*) sangat dianjurkan.

### 7. Cross-Rack Linking
Wajib menyertakan minimal satu referensi ke Rak lain yang menunjukkan keterkaitan sistem (misal: RAK-12 ke RAK-14).

---

## 📝 Contoh Template README.md

```markdown
# CH-XX: [Judul Materi]

*Source: [Clause XX.X](link)*

## 1. Konsep Dasar
- **Logic-Pure**: [Definisi Teknis]
- **Analogy-Model**: [Analogi Dunia Nyata]

## 2. Mekanisme Internal
[Langkah-langkah algoritma / alur data]

## 3. Struktur Data & State
| Slot/Property | Deskripsi | Invariant |
| :--- | :--- | :--- |
| [[Name]] | ... | Tidak boleh null |

## 4. Visualisasi (Mermaid)
[Diagram]

## 5. Lab Praktis
Lihat pembuktian di [examples/](./examples/).

## 6. Hubungan Sistem
Ini mendasari bagaimana [Konsep X] di [Rak Y] bekerja.
```

---

## 🤖 AI & Contributor Rule
Jangan pernah mengurangi presisi demi kesederhanaan di Rak 11-14. Jika materi terasa terlalu rumit, tambahkan lebih banyak diagram atau perjelas analogi, tetapi **jangan hapus langkah algoritma spesifikasinya.**
