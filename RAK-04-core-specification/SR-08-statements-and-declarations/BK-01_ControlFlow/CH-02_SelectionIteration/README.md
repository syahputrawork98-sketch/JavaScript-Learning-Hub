# CH-02: Selection and Iteration Units

> **"Percabangan dan Perulangan dinamis. `Selection and Iteration Units` adalah instruksi yang menentukan berapa kali sebuah sirkuit harus beroperasi atau jalur mana yang harus diambil."**

**Source Hub**: 
- [ECMA-262: If Statement](https://tc39.es/ecma262/#sec-if-statement)
- [ECMA-262: Iteration Statements](https://tc39.es/ecma262/#sec-iteration-statements)

---

## 1. Konsep & Esensi

**Definisi Arsitek**:
**Selection** (`if-else`) mengalihkan aliran energi berdasarkan hasil evaluasi boolean. **Iteration** (`for`, `while`, `do-while`) menjalankan ulang sebuah blok instruksi selama kondisi tertentu terpenuhi. Di level spesifikasi, iterasi seringkali melibatkan pembuatan environment record baru di setiap putaran loop untuk menjaga integritas variabel leksikal.

**Model Mental**:
- **Selection**: Saklar otomatis (Relay). "Jika arus di kabel A Aktif, hubungkan ke kabel B; jika tidak hubungkan ke kabel C".
- **Iteration**: Sabuk konveyor di pabrik Hub. Barang yang sama (Pernyataan) diproses berulang kali sampai sensor (Kondisi) mendeteksi bahwa pekerjaan sudah selesai.

---

## 2. Visualisasi Sistem: Iteration Lifecycle (for...of)

```mermaid
graph TD
    Start[Get Iterator from Object] --> Next[Call iterator.next()]
    Next --> Done{Is Done?}
    Done -->|No| Exec[Execute Loop Body]
    Exec --> Next
    Done -->|Yes| End[Exit Loop]
    
    style Done fill:#f1c40f,stroke:#333
    style Exec fill:#a8e6cf,stroke:#333
```

---

## 3. Mekanisme & Hubungan

### Unit Kontrol Utama
1. **if...else (Clause 14.6)**: Algoritma sederhana yang mengevaluasi ekspresi kondisional melalui `ToBoolean`.
2. **Iteration (Clause 14.7)**:
   - **while/do-while**: Perulangan murni berbasis kondisi.
   - **for...in**: Iterasi pada properti objek (menghindari properti non-enumerable).
   - **for...of**: Iterasi berbasis nilai menggunakan protokol iterator (lebih modern dan aman).
3. **Switch (Clause 14.12)**: Multi-selection yang menggunakan algoritma `Strict Equality` (===) untuk mencocokkan kasus (*Case*).

### Arsitek Mindset: Efficiency in Loops
- Hindari deklarasi fungsi di dalam loop iterasi yang padat. Setiap putaran loop bisa menciptakan overhead alokasi memori di Hub jika tidak dikelola dengan bijak. Gunakan `for...of` sebagai standar default untuk keterbacaan dan keamanan tipe data.

---

## 4. Lab Praktis
Buka file `examples/iteration_protocol_lab.js` untuk melihat bagaimana Hub berinteraksi dengan objek melalui metode `[Symbol.iterator]` di dalam loop `for...of`.

---
*Status: [status.md](../../../../../status.md)*
