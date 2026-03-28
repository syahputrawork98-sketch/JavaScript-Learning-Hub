# CH-03: Memory Tools (Diagnostic Guide)

Memahami teori manajemen memori tidaklah cukup tanpa kemampuan untuk mendiagnosa masalah nyata seperti **Memory Leaks**.

## 🛠️ Essential Tools
V8 menyediakan kait (hooks) bagi developer untuk melihat isi heap secara real-time.

1. **Chrome DevTools (Memory Tab)**: Standar industri untuk profiling.
2. **Node --inspect**: Menghubungkan script Node.js ke debugger Chrome.
3. **Heap Snapshots**: Mengambil potret memori di satu titik waktu.
4. **Allocation Instrumentation**: Melihat objek mana yang baru dialokasikan secara terus-menerus.

## 🔎 Hunting for Leaks
Langkah sistematis untuk menemukan kebocoran memori:

```mermaid
graph TD
    Start[Mulai Diagnosa] --> Base[Ambil Snapshot Awal]
    Base --> Run[Lakukan Aktivitas/Beban Kerja]
    Run --> End[Ambil Snapshot Akhir]
    End --> Compare[Gunakan Mode Comparison]
    Compare --> Find[Cari Objek dengan Delta Positif]
    Find --> Fix[Cek Retainers / Jalur Referensi]
    
    style Find fill:#f1c40f,stroke:#333
    style Fix fill:#2ecc71,stroke:#333
```

## 🚩 Red Flags (Kapan Harus Khawatir?)
- **Sawtooth Pattern**: Grafik memori naik lalu turun tajam (Normal, GC sedang bekerja).
- **Staircase Pattern**: Grafik memori terus naik tanpa pernah turun (Indikasi kuat **Memory Leak**).
- **RSS vs Heap**: Jika RSS membusung jauh lebih besar dari Heap, kemungkinan ada kebocoran di level C++ (Node.js internal).

> [!TIP]
> **Pro-Tip**: Gunakan flag `--trace-gc` untuk melihat frekuensi dan durasi pembersihan memori. Jika GC berjalan setiap detik dan memakan waktu >100ms, aplikasi Anda sedang dalam tekanan memori tinggi.

---
*Lihat Lab: [Simulasi Kebocoran](./examples/leak_simulation.js)*  
*Kembali ke [BK-01](../README.md)*
