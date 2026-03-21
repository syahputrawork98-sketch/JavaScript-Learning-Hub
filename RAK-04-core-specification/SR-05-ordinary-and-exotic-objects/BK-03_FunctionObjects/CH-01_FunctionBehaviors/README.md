# CH-01: Ordinary and Specialized Functions

> **"Reaktor energi Hub. `Ordinary and Specialized Functions` adalah unit pemroses yang mengubah input menjadi output melalui algoritma yang terdefinisi."**

**Source Hub**: 
- [ECMA-262: Ordinary Function Objects](https://tc39.es/ecma262/#sec-ordinary-function-objects)

---

## 1. Konsep & Esensi

**Definisi Arsitek**:
Fungsi adalah objek yang memiliki internal method **`[[Call]]`**. Sebagian besar fungsi juga memiliki **`[[Construct]]`** (bisa dipanggil dengan `new`). Fungsi bisa berupa fungsi biasa (*Ordinary*), *Arrow Functions* (tanpa `this` sendiri), *Generators* (bisa dijeda), atau *Async Functions* (mengelola janji/Promise).

**Model Mental**:
Bayangkan sebuah mesin di pabrik Hub.
- **Ordinary**: Mesin standar. Begitu dinyalakan, ia bekerja sampai selesai.
- **Generator**: Mesin yang punya tombol "Pause/Resume".
- **Async**: Mesin yang punya alarm; ia akan memberitahu Anda lewat radio (Promise) kalau pekerjaannya sudah selesai.

---

## 2. Visualisasi Sistem: Function Call Algorithm

```mermaid
graph TD
    Call[Call: functionName()] --> Prepare[Create Function Exec Context]
    Prepare --> Bind[Bind 'this' and Arguments]
    Bind --> Run[Execute Function Body]
    Run --> Result[Return Satisfaction/Completion]
    
    style Prepare fill:#e1f5fe,stroke:#01579b
    style Run fill:#a8e6cf,stroke:#333
```

---

## 3. Mekanisme & Hubungan

### Perilaku Khusus (Clause 10.2)
1. **[[Call]] (thisArgument, argumentsList)**: Menjalankan body fungsi. Di sinilah tumpukan stack eksekusi bertambah.
2. **[[Construct]] (argumentsList, newTarget)**: Menciptakan objek baru, mengikat `this` ke objek tersebut, lalu menjalankan body fungsi.
3. **Arrow Functions**: Objek eksotis yang tidak memiliki `[[Construct]]` dan tidak memiliki slot internal untuk `this` sendiri (mengambil dari liingkungan luar).

### Generator dan Async (Clause 27)
- Fungsi-fungsi ini memiliki slot internal tambahan untuk menyimpan seluruh status tumpukan eksekusi mereka (`[[GeneratorState]]`) agar bisa dilanjutkan kembali di titik yang sama nanti.

### Arsitek Mindset: Creation Overhead
- Setiap kali Anda mendefinisikan fungsi di dalam loop, Hub harus membuat objek fungsi baru dengan semua slot internalnya. Untuk sirkuit performa tinggi, definisikan fungsi satu kali di luar loop agar Hub bisa menggunakan unit pemroses yang sama berulang kali.

---

## 4. Lab Praktis
Buka file `examples/function_internals_lab.js` untuk membedah perbedaan properti `prototype` pada fungsi biasa vs arrow functions menggunakan Hub console.

---
*Status: [status.md](../../../../../status.md)*
