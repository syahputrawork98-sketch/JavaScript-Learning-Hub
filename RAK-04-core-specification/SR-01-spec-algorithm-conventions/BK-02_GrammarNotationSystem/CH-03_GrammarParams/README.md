# CH-03: Grammatical Parameters and Constraints

> **"Kondisi sirkuit bersyarat. `Grammatical Parameters and Constraints` membedah bagaimana Hub melacak status eksekusi (seperti `async` atau `yield`) ke dalam struktur bahasanya."**

**Source Hub**: 
- [ECMA-262: Grammar Parameters](https://tc39.es/ecma262/#sec-grammar-parameters)

---

## 1. Konsep & Esensi

**Definisi Arsitek**:
Simbol non-terminal di Hub bisa memiliki **Parameters** (seperti `[In, Yield, Await]`). Ini adalah variabel status yang diwariskan ke bawah rantaian produksi. **Constraints** (seperti `Lookahead`) adalah batasan tambahan yang melarang kemunculan simbol tertentu segera setelah simbol saat ini.

**Model Mental**:
- **Parameters**: Seperti membawa "Izin Kerja" (Status: `Can_Yield`). Jika Anda sedang berada di dalam generator, Anda membawa izin itu. Jika tidak, izin dihapus dan Anda dilarang menggunakan tombol `yield`.
- **Lookahead**: Seperti tanda dilarang belok kiri. Anda boleh berada di perempatan ini, tapi Anda dilarang melihat ke arah tertentu (Simbol tertentu dilarang muncul).

---

## 2. Visualisasi Sistem: Parameter Inheritance

```mermaid
graph TD
    Func[FunctionDeclaration_Await] --> Body[FunctionBody_Await]
    Body --> Exp[Expression_Await]
    Exp --> Wait["'await' (Allowed)"]
    
    Func2[FunctionDeclaration] --> Body2[FunctionBody]
    Body2 --> Exp2[Expression]
    Exp2 --X Wait2["'await' (Forbidden)"]
    
    style Wait fill:#a8e6cf,stroke:#333
    style Wait2 fill:#f8bbd0,stroke:#880e4f
```

---

## 3. Mekanisme & Hubungan

### Kontrol Konteks (Clause 5.1.10 - 5.1.15)
1. **The `[In]` Parameter**: Melacak apakah Anda sedang berada di dalam inisialisasi loop `for-in`, guna mencegah kebingungan dengan operator `in`.
2. **Lookahead Restrictions**: Memastikan bahwa Hub tidak salah mengira sebuah objek sebagai blok kode saat penguraian berlangsung.
3. **The "But Not" Notation**: Melarang kumpulan simbol tertentu dari sebuah produksi (misal: "Setiap Karakter *Kecuali* Ganti Baris").

### Arsitek Mindset: Context Awareness
- Pahami bahwa sebuah kata kunci (seperti `await`) bisa valid di satu titik tapi menyebabkan error fatal di titik lain hanya karena parameter konteksnya berubah. Selalu sadari "Izin Kerja" (Context) apa yang sedang aktif di modul Anda.

---

## 4. Lab Praktis
Buka file `examples/grammar_context_lab.js` untuk menguji bagaimana Hub merespons kata kunci `yield` di dalam fungsi biasa vs fungsi generator melalui filter parameter grammar.

---
*Status: [status.md](../../../../../status.md)*
