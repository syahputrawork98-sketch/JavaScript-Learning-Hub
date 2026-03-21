# CH-02: Completion Records and Errors

> **"Protokol Propagasi Status. `Completion Records and Errors` membedah bagaimana Hub melacak aliran kontrol, pengembalian nilai, dan kegagalan sirkuit secara formal."**

**Source Hub**: 
- [ECMA-262: Completion Record Specification Type](https://tc39.es/ecma262/#sec-completion-record-specification-type)

---

## 1. Konsep & Esensi

**Definisi Arsitek**:
Setiap langkah algoritma di Hub mengembalikan sebuah **Completion Record** (sebuah Record internal). Ia memiliki tiga field: **[[Type]]** (Normal, Break, Continue, Return, atau Throw), **[[Value]]** (data hasil), dan **[[Target]]** (label tujuan). Jika [[Type]] bukan "Normal", ia disebut **Abrupt Completion**.

**Model Mental**:
- **Normal Completion**: Lampu hijau. Arus energi mengalir lancar ke langkah berikutnya.
- **Abrupt Completion**: Lampu merah atau kuning. Arus energi interupsi dan harus segera melompat ke penangan (seperti blok catch atau akhir fungsi).

---

## 2. Visualisasi Sistem: Abrupt Propagation (Clause 6.2.4.4)

```mermaid
graph TD
    Step[Run Algorithm Step] --> Res{Completion Record}
    Res -->|[[Type]]: Normal| Next[Proceed to Next Step]
    Res -->|[[Type]]: Throw| Abrupt[Bubble Up to Caller]
    Res -->|[[Type]]: Return| Abrupt
    
    Abrupt --> Catch{Caught in Try-Catch?}
    Catch -->|Yes| Recovery[Resume with Normal Completion]
    Catch -->|No| Exit[Propagate further up]
    
    style Res fill:#f1c40f,stroke:#333
    style Abrupt fill:#f8bbd0,stroke:#880e4f
```

---

## 3. Mekanisme & Hubungan

### Notasi Ringkas (Shorthands)
1. **The `?` Prefix (ReturnIfAbrupt)**: 
   - `let result = ? Operation()`. Singkatan dari: "Jalankan operasi, jika hasilnya Abrupt, kembalikan ke atas segera. Jika Normal, ambil nilainya saja."
2. **The `!` Prefix (No-Failure)**: 
   - `let val = ! Operation()`. Pernyataan tegas Hub bahwa operasi ini DIJAMIN berhasil (Normal) dan tidak akan pernah melempar error.
3. **Abrupt Types**:
   - `Return`: Menandakan selesainya eksekusi fungsi.
   - `Throw`: Menandakan kegagalan fatal yang butuh penanganan (Error).

### Arsitek Mindset: Reliable Control Flow
- Pahami bahwa `try-catch` bukan "magic". Di level spesifikasi, itu hanyalah sebuah blok yang menangkap **Completion Record** bertipe `Throw` dan mengubahnya kembali menjadi `Normal` untuk melanjutkan sirkuit. Selalu desain sirkuit Anda agar siap menangani interupsi aliran energi secara anggun.

---

## 4. Lab Praktis
Buka file `examples/completion_record_deep_audit.js` untuk melihat simulasi aliran data saat sebuah fungsi melempar error dan bagaimana ia dirambatkan melalui tumpukan pemanggilan (Call Stack).

---
*Status: [status.md](../../../../../status.md)*
